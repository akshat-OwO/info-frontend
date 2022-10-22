const RegisterForm = (props) => {
    return (
        <>
            <form onSubmit={props.handleRegister}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    required
                    value={props.username}
                    onChange={(e) => props.setUsername(e.target.value)}
                />
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={props.name}
                    onChange={(e) => props.setName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={props.email}
                    onChange={(e) => props.setEmail(e.target.value)}
                />
                <label htmlFor="phone">Phone</label>
                <input
                    type="number"
                    name="phone"
                    id="phone"
                    required
                    value={props.phone}
                    onChange={(e) => props.setPhone(e.target.value)}
                />
                <label htmlFor="city">City</label>
                <input
                    type="text"
                    name="city"
                    id="city"
                    required
                    value={props.city}
                    onChange={(e) => props.setCity(e.target.value)}
                />
                <label htmlFor="dob">Dob</label>
                <input
                    type="date"
                    name="dob"
                    id="dob"
                    required
                    value={props.dob}
                    onChange={(e) => props.setDob(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    value={props.password}
                    onChange={(e) => props.setPassword(e.target.value)}
                />
                <button type="submit">Register</button>
            </form>
            <button onClick={props.handleChange}>Login</button>
        </>
    );
};

export default RegisterForm;
