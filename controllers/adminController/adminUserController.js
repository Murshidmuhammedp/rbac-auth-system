import User from "../../models/userModel.js";

export const ViewallUser = async (req, res, next) => {

    try {
        const user = await User.find();

        if (!user || user.length == 0) {
            return res.status(404).json({ message: "User's not Found" })
        };

        return res.status(200).json({ message: "successfully fetched user's data", data: user });

    } catch (error) {
        next(error)
    }
};

export const BlockandUnblock = async (req, res, next) => {

    try {
        const id = req.params.id;

        const user = await User.findById(id);

        if (user.isDeleted == false) {
            (user.isDeleted = true);
            await user.save();
            return res.status(200).json({ message: "Blocked!!" })
        } else {
            (user.isDeleted = false)
            await user.save();
            return res.status(200).json({ message: "Unblocked!!" })
        }

    } catch (error) {
        next(error)
    }
};