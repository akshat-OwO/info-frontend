import { useState } from 'react';
import LoginForm from './components/LoginForm';
import Projects from './components/Projects';
import RegisterForm from './components/RegisterForm';

function App() {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [dob, setDob] = useState('');
    const [password, setPassword] = useState('');

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [projects, setProjects] = useState([]);

    const handleRegister = async (e) => {
        e.preventDefault();

        const info = { username, name, email, phone, city, dob, password };

        const response = await fetch('http://localhost:3000/authentication', {
            method: 'POST',
            body: JSON.stringify(info),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        setUsername('');
        setName('');
        setEmail('');
        setPhone('');
        setCity('');
        setDob('');
        setPassword('');
        setIsAuthenticated(true);

        const json = await response.json();
        console.log(json.projects);
        setProjects(json.projects);
    };

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
        setUsername('');
        setPassword('');
        setIsAuthenticated(true);

        const json = await response.json();
        setProjects(json.projects);
    };

    const handleChange = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return (
        <div className="App">
            <h1>Project Info</h1>
            {!isAuthenticated ? (
                !isLoggedIn ? (
                    <RegisterForm
                        username={username}
                        setUsername={setUsername}
                        name={name}
                        setName={setName}
                        email={email}
                        setEmail={setEmail}
                        phone={phone}
                        setPhone={setPhone}
                        city={city}
                        setCity={setCity}
                        dob={dob}
                        setDob={setDob}
                        password={password}
                        setPassword={setPassword}
                        handleRegister={handleRegister}
                        handleChange={handleChange}
                    />
                ) : (
                    <LoginForm
                        handleLogin={handleLogin}
                        username={username}
                        password={password}
                        handleChange={handleChange}
                        setUsername={setUsername}
                        setPassword={setPassword}
                    />
                )
            ) : (
                <Projects projects={projects} />
            )}
        </div>
    );
}

export default App;
