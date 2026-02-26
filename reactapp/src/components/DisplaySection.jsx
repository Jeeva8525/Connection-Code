import { useState } from "react";
import { Card } from "./Card";
import './DisplaySection.css'
export function DisplaySection({bodyElement}) {
    
    let arr=[{'ind':0,
        val:1
    },2,3,6,1,2,4,3,4];

    for (let x=1;x<=9;x++){
        
    }
    const [click,setClick]  = useState([false,false,false,false,false,false,false,false,false]);


    return (
        <div className='whole-container'>
            {
                arr.map((elt) => {
                    return (
                        <>
                            <Card elt={elt} ></Card>
                        </>
                    )
                })
            }
        </div>
    );
}