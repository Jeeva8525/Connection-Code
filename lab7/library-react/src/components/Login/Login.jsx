import { useNavigate } from "react-router-dom"

export default function Login({ username, password, setUsername, setPassword }) {

    const navigate=useNavigate();
    function handleLogin(){
        if(username==='admin' && password==='admin123'){
            navigate('/home');
        }
        else if(username==='std' && password==='comein'){
            navigate('/');
        }
        else {
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
                        <td colSpan="2">
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