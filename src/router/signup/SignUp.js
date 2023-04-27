// Import React and other necessary modules
import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";

const Signup = () => {
    // Set initial state for the form data
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        username: ""
    });

    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token") !== null);
    // Function to handle form input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Fetch POST request to the API endpoint for user registration
        fetch("https://avtobazar-backend.onrender.com/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Data:", data);
                // Check for token in response
                if (data.token) {
                    // Save token in localStorage
                    localStorage.setItem("token", data.token);
                    // Set isLoggedIn to true
                    setIsLoggedIn(true);
                }
                // Reset the form after successful submission
                setFormData({ email: "", password: "", username: "" });
            })
            .catch((error) => console.error("Error:", error));
    };


    return (
        <div>
            <div style={{ display: "none" }}>
            <Navbar
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
            />
            </div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
