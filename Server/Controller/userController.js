import User from "../Models/userModel.js";

//create
export const getAllUser = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).send({ users: allUsers });
  } catch (err) {
    res.status(400).send({ success: false, error: err.message });
  }
};

//read
export const newUser = async (req, res) => {
  const { name, email, age } = req.body;

  try {
    const userAdded = await User.create({
      name: name,
      email: email,
      age: age,
    });

    res.status(201).send({
      success: true,
      message: "new user created successfully",
      data: userAdded,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
};

//read
export const getSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const singleUser = await User.findById({ _id: id });
    if (!singleUser) return res.status(404).send("No user with this ID");
    res.status(200).send({ users: singleUser });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, error: err.message });
  }
};

//delete
export const deleteSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const singleUser = await User.findByIdAndDelete({ _id: id });
    const allUser = await User.find();
    res.status(200).send({
      users: allUser,
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

//update
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  try {
    const singleUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    const allUser = await User.find();
    res.status(200).send({
      users: allUser,
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};
