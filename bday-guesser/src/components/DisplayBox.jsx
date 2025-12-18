import './DisplayBox.css'
export function DisplayBox({ displayItems, bday, currentDisplayItemNo, isInfoTabOn, setIsInfoTabOn }) {

    function offInitialInfo(){
        setIsInfoTabOn(false);
    }


    return (
        <>
            {isInfoTabOn
                &&
                <div onClick={offInitialInfo} className="whole-screen">
                    <div className="initial-info">
                        <p>Choose a date ( 1 - 31 )</p>
                        <p>Let me guess the date</p>
                        <p>( You can also choose your birth date)</p>
                        <p>&lt; Click Anywhere to continue &gt;</p>
                    </div>
                </div>
            }

            <>

                {currentDisplayItemNo !== 5 &&
                    <>
                        <h1 className='heading'>Guess your Date?</h1>
                        <h3 className='sub-heading'>Is your date present ?</h3>
                    </>
                }
                {currentDisplayItemNo !== 5 &&
                    <div className="display-container">

                        {
                            displayItems.map((item) => {
                                return (
                                    <div
                                        key={crypto.randomUUID()}
                                        className="display-items"
                                    >
                                        {item}
                                    </div>
                                )
                            })
                        }
                    </div>
                }
                {currentDisplayItemNo === 5 &&
                    <div className="answer-box">
                        {
                            bday !== 0 ? `Your date is ${bday}` : "Invalid Options"
                        }
                    </div>
                }
            </>

        </>
    );
}