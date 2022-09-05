const router = require("express").Router;
const {
  getUsers,
  gethUser,
  updateUser,
  createUser,
  deleteUser,
} = require("../controllers/user.controller");

const userRouter = router();

userRouter.route("/").get(getUsers).post(createUser);
userRouter.route("/:userId")
.get(gethUser)
.patch(updateUser)
.delete(deleteUser);

module.exports = userRouter;
