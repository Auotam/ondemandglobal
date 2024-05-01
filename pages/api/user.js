import DBconnection from "@/utils/DBConnection"; // Import database connection function
import User from "@/model/User"; // Import the User model
import React, {useState} from "react";
import jwt from 'jsonwebtoken'; // Import the JWT library

export default async function handler(req, res) {
    await DBconnection();

    try {
        // Check if the request method is GET
        if (req.method === 'GET') {
            // Get the authorization header from the request
            const authHeader = req.headers.authorization;

            // Check if the authorization header is present
            if (!authHeader || !authHeader.startsWith('Bearer ')) {
                return res.status(401).json({ success: false, message: 'Unauthorized' });
            }

            // Extract the token from the header
            const token = authHeader.split(' ')[1];

            // Verify the token using the secret key
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Fetch the user data from the database based on the user ID in the token
            const user = await User.findById(decoded.id);

            // Check if the user was found
            if (!user) {
                return res.status(404).json({ success: false, message: 'User not found' });
            }

            // Return the user's data in the response, including the role
            return res.status(200).json({
                success: true,
                user: {
                    name: user.name,
                    email: user.email,
                    id: user._id,
                    role: "user" // Include the user's role in the response
                    // Add any other data you want to return
                },
            });
        } else {
            // If the request method is not GET, return a 405 Method Not Allowed response
            return res.status(405).json({ success: false, message: 'Method Not Allowed' });
        }
    } catch (error) {
        // Handle any errors that occurred during the request
        console.error('Error fetching user data:', error);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}
