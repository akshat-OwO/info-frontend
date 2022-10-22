const LoginForm = (props) => {
    return (
        <>
            <form onSubmit={props.handleLogin}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    required
                    value={props.username}
                    onChange={(e) => props.setUsername(e.target.value)}
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
                <button type="submit">Login</button>
            </form>
            <button onClick={props.handleChange}>Register</button>
        </>
    );
};

export default LoginForm;
