import Express from "express";
import { createArticulo, deleteArticulo, getAllArticulos, getArticulo, updateArticulo } from "../controllers/BlogController.js";
const router = Express.Router()

router.get('/', getAllArticulos)
router.get('/:id', getArticulo)
router.post('/', createArticulo)
router.put('/:id', updateArticulo)
router.delete('/:id', deleteArticulo)

export default router