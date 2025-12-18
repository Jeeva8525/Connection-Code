import { useState } from 'react'
import './App.css'
import { DisplayBox } from './components/DisplayBox'
import { InputSection } from './components/InputSection'
import { shuffleArray } from './utils/shuffleArray'
function App() {

	const [displayItems,setDisplayItems]=useState(shuffleArray([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31]));
	const [currentDisplayItemNo, setCurrentDisplayItemNo] = useState(0);
	const [isInfoTabOn,setIsInfoTabOn] = useState(true);
	const [bday,setBday] = useState(0);

	return (
		<>
			<DisplayBox 
				displayItems={displayItems}
				bday={bday}
				currentDisplayItemNo={currentDisplayItemNo}
				isInfoTabOn={isInfoTabOn}
				setIsInfoTabOn={setIsInfoTabOn}
			/>
			<InputSection 
				setDisplayItems={setDisplayItems} 
				bday={bday} 
				setBday={setBday}
				currentDisplayItemNo={currentDisplayItemNo}
				setCurrentDisplayItemNo={setCurrentDisplayItemNo}
				setIsInfoTabOn={setIsInfoTabOn}
			/>
		</>
	)
}

export default App
