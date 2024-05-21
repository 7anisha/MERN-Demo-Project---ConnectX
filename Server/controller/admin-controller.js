const User = require("../models/auth-model")
const Contact = require("../models/contact-model")

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, { password: 0 });
        console.log(users);
        if (!users || users.length === 0) {
            return res.status(404).json({ message: " no users Found" });
        }
        return res.status(200).json(users)
    } catch (error) {
        next(error);
    }
}
//contact logic
const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        console.log(contacts);
        if (!contacts || contacts.length === 0) {
            return res.status(404).json({ message: "No contacts Found" });
        }
        return res.status(200).json(contacts)
    } catch (error) {
        next(error)
    }
}

//user delete logic
const deleteUserById = async (req, res) => {
    try {
        const id = req.params.id;// same as methioned in route --:id
        await User.deleteOne({ _id: id })
        return res.status(200).json({ message: "User deleted Successfully" })
    } catch (error) {
        next(error)
    }
}

//user get logic
const getUserById = async (req, res) => {
    try {
        const id = req.params.id;// same as methioned in route --:id
        const data = await User.findOne({ _id: id }, { password: 0 })
        return res.status(200).json(data)
    } catch (error) {
        next(error)
    }
}

//user update logic
const updateUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const userdata = req.body;//fetch from client
        const updateddata = await User.updateOne({ _id: id }, { $set: userdata })
        return res.status(200).json(updateddata)
    } catch (error) {
        next(error)
    }
}

//contact delete logic
const deleteContactById = async (req, res) => {
    try {
        const id = req.params.id;// same as methioned in route --:id
        await Contact.deleteOne({ _id: id })
        return res.status(200).json({ message: "Contact deleted Successfully" })
    } catch (error) {
        next(error)
    }
}
module.exports = { getAllUsers, getAllContacts, deleteUserById, getUserById, updateUserById,deleteContactById };