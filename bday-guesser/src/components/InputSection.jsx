import './InputSection.css'
import { shuffleArray } from '../utils/shuffleArray';

export function InputSection({ setDisplayItems, bday, setBday, currentDisplayItemNo, setCurrentDisplayItemNo, setIsInfoTabOn }) {

    

    const allItems = [
        [2, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22, 23, 26, 27, 30, 31],
        [4, 5, 6, 7, 12, 13, 14, 15, 20, 21, 22, 23, 28, 29, 30, 31],
        [8, 9, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29, 30, 31],
        [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    ]

    function moveNextDisplayItems() {
        setCurrentDisplayItemNo(currentDisplayItemNo + 1);
        setDisplayItems(shuffleArray(allItems[currentDisplayItemNo])) //because currentDisplayItemNo updates after the functions ends
    }

    function respondToYes() {
        const val = bday + Math.pow(2, currentDisplayItemNo)
        setBday(val)
    }

    return (
        <>
            {currentDisplayItemNo !== 5 &&
                <>
                    <div className="button-container">
                        <button
                            onClick={() => {
                                if (currentDisplayItemNo === 5) return;
                                respondToYes();
                                moveNextDisplayItems();
                            }}>
                            Yes
                        </button>
                        <button
                            onClick={() => {
                                if (currentDisplayItemNo === 5) return;
                                moveNextDisplayItems();
                            }}>
                            No
                        </button>
                    </div>
                    <div className="info-icon">
                        <button onClick={() => setIsInfoTabOn(true)}>i</button>
                    </div>
                </>
            }
            {currentDisplayItemNo === 5 &&
                <div className="button-container">
                    <button
                        onClick={() => {
                            setCurrentDisplayItemNo(0);
                            setBday(0);
                            setDisplayItems([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31]);
                        }}>
                        Again
                    </button>
                </div>
            }
        </>
    );
}