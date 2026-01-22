import { useRef } from "react";

export function DisplaySection({bodyElement}) {
    const buttonRef = useRef(null);
    
    function changeColor() {
        const buttonElement = buttonRef.current;
        const red = Math.floor(Math.random()*255);
        const green = Math.floor(Math.random()*255);
        const blue = Math.floor(Math.random()*255);
        buttonElement.style.backgroundColor = `rgb(${red},${green},${blue})`;
    }
    return (
        <>
            <button
                ref={buttonRef}
                onClick={changeColor}
            >
            Change Color
            </button>
        </>
    );
}