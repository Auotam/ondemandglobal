import { useState, useEffect } from 'react';
import axios from 'axios';

function useUserData() {
    const [userData, setUserData] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem("authToken");
            if (!token) {
                return;
            }
            
            try {
                const response = await axios.get("/api/user", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUserData(response.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        
        fetchData();
    }, []); // Empty dependency array to run only once when the component mounts
    
    return userData;
}

export default useUserData;
