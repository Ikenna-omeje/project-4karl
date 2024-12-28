//const express = require("express");
import express from "express";
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(express.static("public"));

//in-memory storage
const availableDates = ["2024-01-15", "2024-01-20", "2024-02-10"];
const bookings = [];

// add route end-point
app.get("/", (_req, res) => {
    res.send("Welcome to the Backend Server!");
});

//end-point to fetch available dates
app.get("/api/available-dates", (_req, res) => {
    res.json({ dates: availableDates });
});

// end-point to handle bookings
app.post("/api/book-date", (req, res) => {
    const { date, name, email } = req.body;
    
//validate date
    if (!availableDates.includes(date)) {
        return res.status(400).json({ message: "Selected date is not available."});
    }

//store date
bookings.push({ date, name, email});

//remove date from availability
const index = availableDates.indexOf(date);
    if (index > -1) availableDates.splice(index, 1);

    res.json({message: "Booking confirmed!"});
});

//start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});