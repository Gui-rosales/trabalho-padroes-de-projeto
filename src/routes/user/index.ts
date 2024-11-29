import { Router } from "express";
import { UserController } from "../../controllers/user";

const router = Router();

router.post("/", UserController.createUser);

export default router;
