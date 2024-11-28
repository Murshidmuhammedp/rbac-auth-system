import User from '../../models/userModel.js';

export const userProfile = async (req, res, next) => {
    try {
        const Id = req.params.id;
        const user = await User.findById(Id)
        if (!user) {
            return res.status(404).json({ message: "User not Found" });
        }
        return res.status(200).json({ message: "User found successfully", data: user });
    } catch (error) {
        return next(error)
    }
}

export const updateProfile = async (req, res) => {
    try {
        const Id = req.params.id;
        if (!Id) {
            return res.status(404).json({ message: "Id not provided" });
        };

        const { userName, email, password } = req.body;

        const updatedField = {};
        if (userName) updatedField.userName = userName
        if (email) updatedField.email = email
        if (password) updatedField.password = password

        const updatedProfile = await User.findByIdAndUpdate(
            Id,
            { $set: updatedField },
            { new: true }
        );
        if (!updatedProfile) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        return res.status(200).json({ message: "Profile updated successfully", data: updatedProfile });
    } catch (error) {
        console.error("Error fetching blogs:", error);
    }
}