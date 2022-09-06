const router = require("express").Router;
const {
  getUsers,
  gethUser,
  updateUser,
  createUser,
  deleteUser,
} = require("../controllers/user.controller");
const { pathMiddleware } = require("../middlewares/pathMiddleware")

const userRouter = router();

userRouter.route("/").get(pathMiddleware, getUsers).post(createUser);
userRouter.route("/:userId")
.get(gethUser)
.patch(updateUser)
.delete(deleteUser);

module.exports = userRouter;
