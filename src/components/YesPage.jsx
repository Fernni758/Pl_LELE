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
                <p className="yes-subtitle"> Entonces que dices ... ¿viernes a las 3 pm? </p>
            <div className="gif-container">
                <img 
                    src="https://media.giphy.com/media/VM1fcpu2bKs1e2Kdbj/giphy.gif" 
                    alt="Celebración gatitoooo"
                />
            </div>
            </div>
        </div>



    );
}

export default YesPage;