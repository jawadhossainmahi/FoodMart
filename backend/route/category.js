import express from "express";
import Category from "../model/category.js";
import multer from "multer";


const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/tmp/my-uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const upload = multer({ storage: storage })

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

router.post("/add-new",upload.single("icon"), async (req, res) => {
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
