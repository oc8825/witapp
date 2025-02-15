"use client";

import {useState, useEffect} from "react";

// handles the calculations and styling of the countdown to voting time
export default function Countdown() {
    
    // set arbitrary target date to March 7th at noon
    const targetDate = new Date("March 7, 2025 12:00:00").getTime();

    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // if have reached voting time, display all 0's (don't go to negatvies)
        if (distance < 0) {
            return {days: 0, hours: 0, minutes: 0, seconds: 0};
        }

        // split distance into days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        return {days, hours, minutes, seconds};
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    // update timer every second
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{
            textAlign: "center",
            padding: "20px",
            border: "2px solid #000",
            borderRadius: "10px",
            maxWidth: "300px",
            margin: "20px auto",
            fontSize: "1.5rem",
            fontWeight: "bold",
        }}>
            <h3>VOTING BEGINS IN: </h3>
      <p>{timeLeft.days}D {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}</p>
    </div>
    );
}