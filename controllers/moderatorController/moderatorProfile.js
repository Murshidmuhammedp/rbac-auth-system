import Moderator from '../../models/moderatorModel.js';

export const moderatorProfile = async (req, res, next) => {
    try {
        const Id = req.params.id;
        const user = await Moderator.findById(Id)
        if (!user) {
            return res.status(404).json({ message: "Moderator not Found" });
        }
        return res.status(200).json({ message: "Moderator found successfully", data: user });
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

        const { moderatorName, email, password } = req.body;

        const updatedField = {};
        if (moderatorName) updatedField.moderatorName = moderatorName
        if (email) updatedField.email = email
        if (password) updatedField.password = password

        const updatedProfile = await Moderator.findByIdAndUpdate(
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