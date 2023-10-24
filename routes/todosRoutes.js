import { Router } from "express";
const router = Router();

router.get("/", async (req, res) => {
    try {
        res.json({ todos: [], message: "Working Fine!!!" });
    } catch (error) {
        console.log(error);
    }
});

router.post("/", async (req, res) => {
    try {
        res.json({ todos: {} });
    } catch (error) {
        console.log(error);
    }
});

router.get("/:id", async (req, res) => {
    try {
        res.json({ todo: {} });
    } catch (error) {
        console.log(error);
    }
});

router.put("/:id", async (req, res) => {
    try {
        res.json({ todo: {} });
    } catch (error) {
        console.log(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        res.json({ todo: {} });
    } catch (error) {
        console.log(error);
    }
});

export default router;
