import { useState,useEffect, use } from "react";
import "../styles/questionPage.css";    


function QuestionPage({onYesClick}) {
    const mensajes =[
        "seguraaaa que no???",
        "estas segurisimaa???",
        "Andaaaaaaaa",
        "No me la hagas jochis",
        "Y el infiel segun soy yo",
        "HDLV ya di que si ",
        "Yo creo que es pq me odias",
        "aceptalo :(",
        "andale di que si <3" ,
    ];

    //Estado para cambiar mensjae del texto de no a la lista de mensajes
    const [noMessage, setNoMessage]=useState("no");

    //Estado para manejar el indice de los mensajes 
    const [messageIndex, setMessageIndex]= useState(0);

    //Estado para cambiar el tamñao de la leta del boton si
    const [yesBtnSize, setYesBtnSize]= useState(2);

    useEffect (()=> {
        console.log("Tamaño de la letra del boton si es de: ", yesBtnSize);

    },[yesBtnSize]);

    //Funcnion para manejar el click en el boton de no 
    const handleNoClick = () => {
        setNoMessage (mensajes[messageIndex])
        setMessageIndex (messageIndex + 1);
        setYesBtnSize ((tamañoActual) => tamañoActual *1.5);

    }

    return (

        <div className="question-container">
            <h1 className="question-title">¿Mañana vamos por un mathca amor?</h1>
            <div className="buttons-container">
                <button 
                    className= "yes-button"
                    onClick={onYesClick}
                    style = {{fontSize: `${yesBtnSize}rem`}}>
                    Si
                </button>
                <button 
                    className="no-button"
                    onClick={handleNoClick}>
                    {noMessage}
                </button>
            </div>
            <div className="image-container">
                <img
                    src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3N6Y2xsN3RuZ28xZHRnNzdjdjZnOXN1ZDBqdTZueXV1OXBpNnR4diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4umTDLyx8TrNxytzqg/giphy.gif" 
                            alt="Gatito enamorado"
                />
            </div>
        </div>
    );

}

export default QuestionPage;