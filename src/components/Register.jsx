import { useState } from "react";

const Register = ({userDetails, setUserDetails, isLoggedIn, setIsLoggedIn}) => {

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
    }

    const goToLogin = () => {
        setIsLoggedIn(true);
    }

    return (
        <div className="container">
            <h1>Project Info</h1>
            <form onSubmit={handleRegister}>
                <div className="input-wrapper">
                    <input className="form-input" type="text" name="username" id="username" placeholder="username" />
                    <label className="form-label" htmlFor="username">Username</label>
                </div>
                <div className="input-wrapper">
                    <input className="form-input" type="text" name="name" id="name" placeholder="name" />
                    <label className="form-label" htmlFor="name">Name</label>
                </div>
                <div className="input-wrapper">
                    <input className="form-input" type="email" name="email" id="email" placeholder="email" />
                    <label className="form-label" htmlFor="email">Email</label>
                </div>
                <div className="input-wrapper">
                    <input className="form-input" type="number" name="phone" id="phone" placeholder="phone" />
                    <label className="form-label" htmlFor="phone">Phone</label>
                </div>
                <div className="input-wrapper">
                    <input className="form-input" type="text" name="city" id="city" placeholder="city" />
                    <label className="form-label" htmlFor="city">City</label>
                </div>
                <div className="input-wrapper">
                    <input className="form-input" type="date" name="dob" id="dob" placeholder="date of birth" />
                    <label className="form-label" htmlFor="dob">Dob</label>
                </div>
                <div className="input-wrapper">
                    <input className="form-input" type="password" name="password" id="password" placeholder="password" />
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