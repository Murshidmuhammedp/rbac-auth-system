import bcrypt from 'bcrypt'
import Jwt from 'jsonwebtoken';
import Admin from '../models/adminModel.js';

export const adminSignUp = async (req, res) => {
    try {

        const { adminName, email, password } = req.body;

        // Check if user already exists
        const existingUser = await Admin.findOne({ email });

        if (existingUser) {
            return res.status(200).json({ message: "E-mail already registered" });
        };
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Create a new user
        const newAdmin = new Admin({
            adminName,
            email,
            password: hashedPassword
        });

        // Save the user
        await newAdmin.save();

        return res.status(201).json({ message: "Registered successfully", data: newAdmin });

    } catch (error) {
        console.error(error);
    }
}

export const adminSignIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const validUser = await Admin.findOne({ email });

        if (!validUser) {
            return res.status(401).json({ message: "User not found" });
        };

        // Compare passwords
        const validpassword = bcrypt.compareSync(password, validUser.password);
        // Check the password valid or not
        if (!validpassword) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        //  Check the user block or not
        if (validUser.isDeleted == true) {
            return res.status(400).json({ message: "Your account is suspended" });
        };

        // Generate JWT
        const token = Jwt.sign({ id: validUser._id }, process.env.ADMIN_JWT_SECRET_KEY);
        const { password: hashedPassword, ...rest } = validUser._doc;
        const expiryDate = new Date(Date.now() + 60 * 1000);
        // cookie setting 
        res.cookie('access_token', token, { httpOnly: true, expires: expiryDate });
        res.status(200).json({ message: "successfully login", token, data: rest });
    } catch (error) {
        console.error(error);
    }
};