import { useState } from 'react';

const Login = ({ userDetails, setUserDetails, isLoggedIn, setIsLoggedIn, iAmIn, setIAmIn }) => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        const info = { username, password };

        const response = await fetch(
            'http://localhost:3000/authentication/login',
            {
                method: 'POST',
                body: JSON.stringify(info),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        const json = await response.json();
        setUserDetails(json);
        setIAmIn(true);
    };

    const goToRegister = () => {
        setIsLoggedIn(false);
    };

    return (
        <div className="container">
            <h1>Project Info</h1>

            <form onSubmit={handleLogin}>
                <div className="input-wrapper">
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="username"
                        className="form-input"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                </div>
                <div className="input-wrapper">
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="password"
                        className="form-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                </div>
                <button className="btn">Login</button>
            </form>
            <p>Or</p>
            <button className="btn" onClick={goToRegister}>
                Register
            </button>
        </div>
    );
};

export default Login;
