import { useState, useEffect, use } from "react";
import "../styles/questionPage.css";


function QuestionPage({ onYesClick }) {
    const mensajes = [
        "seguraaaa que no???",
        "estas segurisimaa???",
        "Andaaaaaaaa",
        "No me la hagas jochis",
        "Y el infiel segun soy yo",
        "HDLV ya di que si ",
        "Yo creo que es pq me odias",
        "aceptalo :(",
        "andale di que si <3",
    ];

    //Estado para cambiar mensjae del texto de no a la lista de mensajes
    const [noMessage, setNoMessage] = useState("no");

    //Estado para manejar el indice de los mensajes 
    const [messageIndex, setMessageIndex] = useState(0);

    //Estado para cambiar el tamñao de la leta del boton si
    const [yesBtnSize, setYesBtnSize] = useState(2);

    useEffect(() => {
        console.log("Tamaño de la letra del boton si es de: ", yesBtnSize);

    }, [yesBtnSize]);

    //Funcnion para manejar el click en el boton de no 
    const handleNoClick = () => {
        setNoMessage(mensajes[messageIndex])
        setMessageIndex(messageIndex + 1);
        setYesBtnSize((tamañoActual) => tamañoActual * 1.5);

    }

    return (

        <div className="question-container">
            <h1 className="question-title">felicidades vas mejorando muuuy rapido    TQM</h1>
            <div className="buttons-container">
            </div>
            <div className="image-container">
                <img
                    src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDczaWo2NTY2bjhiNjYwbHQybno3a2o2NWM3MGFmbThtYWE1dXd5NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TeymOuTOcUtyXFGSKf/giphy.gif"
                    alt="Gatito enamorado"
                />
            </div>
        </div>
    );

}

export default QuestionPage;