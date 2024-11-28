import User from "../../models/userModel.js";

export const getallUser = async (req, res, next) => {

    try {
        const users = await User.find().select('-password');

        if (!users || users.length == 0) {
            return res.status(404).json({ message: "User's not Found" })
        };

        return res.status(200).json({ message: "successfully fetched user's data", data: users });

    } catch (error) {
        next(error)
    }
};