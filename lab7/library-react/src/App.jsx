import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
function App() {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
	const [isAdmin, setIsAdmin ] = useState(false);


	const [books,setBooks] = useState(
		[
			{
				id:1,
				name : 'Sun of the sky',
				isIssued : false,
				isAvailable : true
			},
			{
				id:2,
				name : 'Legends never die',
				isIssued : false,
				isAvailable : true
			},
			{
				id:3,
				name : 'The jumping mario',
				isIssued : false,
				isAvailable : true
			}
		]
	)

  return (
    <>
      <BrowserRouter>
	  	<Routes>
			<Route path='/' element={
				<Login 
					username={username}				
					password={password}				
					setUsername={setUsername}				
					setPassword={setPassword}
					setIsAdmin={setIsAdmin}				
				/>
			} />
			<Route path='/home' element={
				<Home 
					books={books}
					setBooks={setBooks}	
					isAdmin={isAdmin}			
				/>
			} />
		</Routes>
	  </BrowserRouter>
    </>
  )
}

export default App
