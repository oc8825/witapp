"use client";

import styles from "../styles/countdownStyle.module.scss";

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
            return {days: "0", hours: "00", minutes: "00", seconds: "00"};
        }

        // split distance into days, hours, minutes, and seconds
        const d = Math.floor(distance / (1000 * 60 * 60 * 24));
        const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((distance % (1000 * 60)) / 1000);

        // pad hours, minutes, and seconds with leading 0's as needed
        return {days: d.toString(), hours: h.toString().padStart(2, "0"), 
            minutes: m.toString().padStart(2, "0"), seconds: s.toString().padStart(2, "0")};
    }

    const [timeLeft, setTimeLeft] = useState<null | ReturnType<typeof calculateTimeLeft>>(null);

    
    useEffect(() => {
        // only render timer on client as times will be different
        // if calculate on server as well
        setTimeLeft(calculateTimeLeft());

        // update timer every second
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);


    // when haven't loaded time yet, don't display anything
    if (!timeLeft) {
        return<p></p>;
    }

    // otherwise format and return time
    return (
        <div className={styles['countdown-container']}>
            <p>VOTING BEGINS IN: <b>{timeLeft.days}D {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}</b></p>
        </div>
    );
}