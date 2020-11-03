import React, {useState} from 'react';

export default function Login () {
    //data exchange -> state. state gabole di dalam function. harus diluar.
    const[username, setUsername] = useState(''); //state: 'variabel global' 
    const[password, setPassword] = useState('');
                                    //useState is the nilai awal.

    const onChangeUsername = (event) => { //for textbox, parameter pertamanya is event.
        setUsername(event.target.value);
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const onLogin = () => {
        if (username == 'admin' && password == 'admin') {
            alert('Access granted');
        } else {
            alert('denied')
        }
    }
    
    return (
        <div>
            Username: <input type = "text" placeholder = "Username" onChange = {onChangeUsername}/>
            Password: <input type = "password" placeholder = "Password" onChange = {onChangePassword}/>
            <input type = "button" value = "Login" onClick = {onLogin}/>
        </div>
    );
};

