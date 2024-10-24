
import React, { useState, useEffect, useRef } from 'react';
import Header from "../Header";
import logo from  "../../assets/images/10 Minute Super Deep Meditation Music •  Relax Mind Body, Inner Peace, Relaxing Music.mp4"
import "./index.css";

const Meditation = () => {
    const [timerDuration, setTimerDuration] = useState(120); // Default to 2 minutes
    const [timeLeft, setTimeLeft] = useState(timerDuration);
    const [timerRunning, setTimerRunning] = useState(false);
    const videoRef = useRef(null); // Ref for video element
    const timerIntervalRef = useRef(null); // Ref for interval

    useEffect(() => {
        if (timerRunning && timerDuration > 0) {
            timerIntervalRef.current = setInterval(() => {
                setTimeLeft(prevTime => {
                    if (prevTime > 0) return prevTime - 1;
                    clearInterval(timerIntervalRef.current);
                    setTimerRunning(false);
                    if (videoRef.current) {
                        videoRef.current.pause(); // Pause video when timer ends
                    }
                    return 0;
                });
            }, 1000);
        }
        return () => clearInterval(timerIntervalRef.current);
    }, [timerRunning, timerDuration]);

    const playPauseVideo = () => {
        const video = videoRef.current;
        if (video.paused) {
            video.play();
            setTimerRunning(true);
        } else {
            video.pause();
            setTimerRunning(false);
        }
    };

    const handleTimerClick = (time) => {
        clearInterval(timerIntervalRef.current);
        setTimerDuration(time);
        setTimeLeft(time);
        if (videoRef.current) {
            videoRef.current.currentTime = 0; // Seek to the beginning
            videoRef.current.play(); // Play video
        }
        setTimerRunning(true);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `Timer: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <>
        <Header />
        <div className="container">
            <video ref={videoRef} className="video" controls>
                <source src={logo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="overlay">
                <h1>Relax and Meditate</h1>
                <div id="timerDisplay">{formatTime(timeLeft)}</div>
                <button id="playPauseBtn" onClick={playPauseVideo}>
                    {timerRunning ? 
                        <img className="icon" src="https://img.icons8.com/ios-filled/20/ffffff/pause.png" alt="Pause Icon" /> : 
                        <img className="icon" src="https://img.icons8.com/ios-filled/20/ffffff/play.png" alt="Play Icon" />}
                    {timerRunning ? 'Pause Music' : 'Play Music'}
                </button>
            </div>

            <div className="timer-container">
                <button className="timer-btn" onClick={() => handleTimerClick(120)}>2 Minutes</button>
                <button className="timer-btn" onClick={() => handleTimerClick(300)}>5 Minutes</button>
                <button className="timer-btn" onClick={() => handleTimerClick(600)}>10 Minutes</button>
            </div>
        </div>
        </>
    );
};

export default Meditation

