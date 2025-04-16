import express from "express";
import Category from "../model/category.js";
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Category route is working!");
});

router.get("/all-category", async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (err) {
        console.error("Error fetching categories:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.post("/add-new", async (req, res) => {
    try {
        const { title, icon, parent_id } = req.body;

        const category = new Category({
            title,
            icon,
            parent_id
        });

        await category.save(); // <-- Don't forget to save it!

        res.status(200).json({ success: true, msg: "Added new data", data: category });
    } catch (err) {
        console.error("Error adding new category:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});


export default router;
