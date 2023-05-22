import express from "express"
import path from "path"
import {fileURLToPath} from "url"

const router = express.Router()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

router.get("/registration", (req, res) => {
    try {
        const filePath = path.join(__dirname, "../index.html")
        res.sendFile(filePath)
    } catch (e) {
        res.status(500).json({
            msg: e.message
        })
    }
})

export default router