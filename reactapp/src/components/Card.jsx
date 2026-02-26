import { useState } from 'react';
import './Card.css'
export function Card({elt}){
    const [isSelected, setIsSelected] = useState(false);
    function handleClick(){
        setIsSelected(true);
    }
    return (
        <>
            <div className="single-card"
                onClick={handleClick}
                >
                {isSelected && elt}
            </div>
        </>
    );
}