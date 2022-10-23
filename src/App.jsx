import { useState } from 'react';
import Login from './components/Login';
import Profile from './components/Profile';
import Register from './components/Register';

function App() {
    const [userDetails, setUserDetails] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [iAmIn, setIAmIn] = useState(false);

    return (
        <div className="App">
            {!iAmIn ? (isLoggedIn ? (
                <Login
                    userDetails={userDetails}
                    setUserDetails={setUserDetails}
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                    iAmIn={iAmIn}
                    setIAmIn={setIAmIn}
                />
            ) : (
                <Register
                    userDetails={userDetails}
                    setUserDetails={setUserDetails}
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                    iAmIn={iAmIn}
                    setIAmIn={setIAmIn}
                />
            )): <Profile userDetails={userDetails} />}
        </div>
    );
}

export default App;
