import { useState,useEffect } from "react";
import Confetti from "./Confetti.jsx";
import "../styles/YesPage.css";

function YesPage() {
    const [showConfetti, setShowConfetti] =useState(false);
    const [secondsCount, setSeconsCount]= useState (0);

    useEffect (() => {
        const timer = setTimeout (() =>{
            setShowConfetti (true);
        }, 500) //tiempo en milisegundos :)
        return () => clearTimeout (timer); //Pasa el parametro del tiempo que lleva en segundo y lo resetea
    }, [])

    useEffect (() => {
        if(secondsCount > 0){
            console.log("Han pasado ", secondsCount, " segundos");
        }
    }, [secondsCount])


    return (
        <div className="yes-page">
            {showConfetti && <Confetti />}
            <div className="yes-content">
                <h1 className="yes-title"> JEJE SABIA QUE DIRIAS QUE SI </h1>
            <div className="gif-container">
                <img 
                    src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWwxZ3V6eWNhaW4wYmhreWVvbDJzY2wxejFsOXJreTdzdms1bnZ0eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VPo7gdnsl4W9q9aOgP/giphy.gif" 
                    alt="Celebración gatitoooo"
                />
            </div>
            </div>
        </div>



    );
}

export default YesPage;