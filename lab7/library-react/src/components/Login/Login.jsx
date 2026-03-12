import { useNavigate } from "react-router-dom"
import './Login.css'
export default function Login({ username, password, setUsername, setPassword, setIsAdmin }) {


    const navigate=useNavigate();
    function handleLogin(){
        if(username==='a' && password==='b'){
            setIsAdmin(true)
            navigate('/home');
        }
        else if(username==='c' && password==='d'){
            setIsAdmin(false)
            navigate('/home');
        }
        else {
            setIsAdmin(false)
            setUsername('Invalid Credentials')
            setTimeout(()=>{
                setUsername('')
            },500)
            setPassword('')
        }
    }
    return (
        <>
            <table>
                <tbody>

                    <tr>
                        <td>
                            <p>Username : </p>
                        </td>
                        <td>
                            <input type="text"
                                onChange={(event) => setUsername(event.target.value)}
                                value={username}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Password:  </p>
                        </td>
                        <td>
                            <input type="password"
                                onChange={(event) => setPassword(event.target.value)}
                                value={password}
                            />
                        </td>
                    </tr>
                    <tr >
                        <td colSpan="2" className="submit-button-row">
                            <button 
                                style={{marginLeft: '40%' }}
                                onClick={handleLogin}
                                >Submit</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
} 