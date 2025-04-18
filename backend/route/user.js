import express from "express";
import multer from "multer";
import { body, validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

import User from "../model/user.js";

const router = express.Router();


router.get("/", (req, res) => {
    res.send("user route is working!");
});




router.post(
    '/add-user',
    [
        body('first_name').notEmpty().withMessage('First Name is required').isLength({ min: 3 }),
        body('last_name').notEmpty().withMessage('Last Name is required').isLength({ min: 3 }),
        body('email').isEmail().withMessage('Email is invalid'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });

        try {
            const { first_name, last_name, email, password } = req.body;

            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'Email already registered' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = await User.create({
                first_name,
                last_name,
                email,
                password: hashedPassword,
            });

            res.status(200).json({
                message: 'User created successfully',
                user: {
                    first_name: newUser.first_name,
                    last_name: newUser.last_name,
                    email: newUser.email,
                },
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Something went wrong while creating user' });
        }
    }
);

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key'; // Store securely in .env

router.post(
    '/login',
    [
        body('email').isEmail().withMessage('Email is invalid'),
        body('password').notEmpty().withMessage('Password is required'),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }

            // ✅ Generate JWT token
            const token = jwt.sign(
                {
                    business_id:user.business_id,
                    id: user._id,
                    email: user.email,
                },
                JWT_SECRET,
                { expiresIn: '1d' } // Token validity
            );

            res.status(200).json({
                message: 'Login successful',
                token,
                user: {
                    id: user._id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                },
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server error during login' });
        }
    }
);


export default router;
