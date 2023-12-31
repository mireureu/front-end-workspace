import React, { useEffect } from "react"; 
import { useState } from "react";
const Converter = () => {
    const [number, setNumber] = useState("");
    const [bool, setBool] = useState(true);
    const [text, setText] = useState("Invert");

    const change = (event) => {
        console.log(event.target.value);
        setNumber(event.target.value);
    };
    const reset = () => {
        setNumber("");
    };
    const invert = () => {
        setBool(!bool);
        reset();
    };
    useEffect(() => {
       if(bool) setText("Invert");
       else setText("Turn Back");
    }, [bool]);


    return(
        <>
        <div>
        <h1>Time Converter</h1>
        <label>Minutes</label>
        <input type="number" placeholder="Minutes" onChange={change} value={bool ? number : Math.floor(number * 60)} disabled={!bool}/>
        </div>

        <div>
        <label>Hours</label>
        <input type="number" placeholder="Hours" disabled value={bool ? Math.floor(number/60) : number} onChange={change} />
        </div>
        <button style={{
            backgroundColor:"tomato",
            color:"white", 
            padding: "10px 20px", 
            border: "none",
            borderRadius:"10px"}}
            onClick={reset}
            >
        Reset</button>
        <Btn click={reset} btnText={text} backgroundColor="tomato"/>
        <Btn click={invert} btnText={text} backgroundColor="skyblue"/>

        
        </>
    );
};

const Btn = ({click, btnText, backgroundColor}) => {
    return(
    <button 
     style={{
        backgroundColor:"skyblue",
        color:"white", 
        padding: "10px 20px", 
        border: "none",
        borderRadius:"10px"
        }}
        onClick={click}
        >
    {btnText}</button>
    )
    
}

export default Converter;   