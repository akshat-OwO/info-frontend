import { useState } from "react";

const Register = ({userDetails, setUserDetails, isLoggedIn, setIsLoggedIn, iAmIn, setIAmIn }) => {

    const [username, setUserName] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [dob, setDob] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        const info = {username, name, email, phone, city, dob, password};

        const response = await fetch('http://localhost:3000/authentication', {
            method: 'POST',
            body: JSON.stringify(info),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const json = await response.json();
        setUserDetails(json);
        setIAmIn(true);
    }

    const goToLogin = () => {
        setIsLoggedIn(true);
    }

    return (
        <div className="container">
            <h1>Project Info</h1>
            <form onSubmit={handleRegister}>
                <div className="input-wrapper">
                    <input className="form-input" type="text" name="username" id="username" placeholder="username"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)} 
                    />
                    <label className="form-label" htmlFor="username">Username</label>
                </div>
                <div className="input-wrapper">
                    <input className="form-input" type="text" name="name" id="name" placeholder="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}  
                    />
                    <label className="form-label" htmlFor="name">Name</label>
                </div>
                <div className="input-wrapper">
                    <input className="form-input" type="email" name="email" id="email" placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}  
                    />
                    <label className="form-label" htmlFor="email">Email</label>
                </div>
                <div className="input-wrapper">
                    <input className="form-input" type="number" name="phone" id="phone" placeholder="phone" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)} 
                    />
                    <label className="form-label" htmlFor="phone">Phone</label>
                </div>
                <div className="input-wrapper">
                    <input className="form-input" type="text" name="city" id="city" placeholder="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)} 
                    />
                    <label className="form-label" htmlFor="city">City</label>
                </div>
                <div className="input-wrapper">
                    <input className="form-input" type="date" name="dob" id="dob" placeholder="date of birth"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}  
                    />
                    <label className="form-label" htmlFor="dob">Dob</label>
                </div>
                <div className="input-wrapper">
                    <input className="form-input" type="password" name="password" id="password" placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}  
                    />
                    <label className="form-label" htmlFor="password">Password</label>
                </div>
                <button className="btn">Register</button>
            </form>
            <p>Or</p>
            <button className="btn" onClick={goToLogin}>Login</button>
        </div>
    );
}
 
export default Register;