import DBconnection from "@/utils/DBConnection";
import User from "@/model/User";
import jwt from 'jsonwebtoken';

export default async (req, res) => {
    await DBconnection();
    const { token } = req.query;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { email } = decoded;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ success: false, message: "Invalid token or user not found" });
        }

        user.isVerified = true;
        await user.save();

        res.status(200).json({ success: true, message: "Account verified successfully" });
    } catch (error) {
        console.error("Error in email verification: ", error);
        res.status(500).json({ success: false, message: "Invalid token or token expired" });
    }
}
