import { useState } from 'react';

function App() {
    const [username, setUsername] = useState('');
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
          "Content-Type": "application/json"
        }
      });
    }

    return (
        <div className="App">
            <h1>Project Info</h1>
            <form onSubmit={handleRegister}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="phone">Phone</label>
                <input
                    type="number"
                    name="phone"
                    id="phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <label htmlFor="city">City</label>
                <input
                    type="text"
                    name="city"
                    id="city"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <label htmlFor="dob">Dob</label>
                <input
                    type="date"
                    name="dob"
                    id="dob"
                    required
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default App;
