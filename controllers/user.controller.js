const getUsers = (req, res) => {
    res.status(200).send("All users");
}

const updateUser = (req, res) => {
  res.status(200).send("Update users");
};
const createUser = (req, res) => {
  res.status(200).send("Create users");
};
const deleteUser = (req, res) => {
  res.status(200).send("Delete users");
};
const gethUser = (req, res) => {
  res.status(200).send("Get single users");
};

module.exports = {
    getUsers,
    gethUser,
    createUser,
    updateUser,
    deleteUser,
};