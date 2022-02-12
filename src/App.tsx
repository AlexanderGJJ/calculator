import React, { useState } from 'react';
import SignIn from './components/SignIn/SignIn';

const App = () => {
    const [status, setStatus] = useState(false);

    const changeStatus = (event: React.MouseEvent) => {
        event.preventDefault();
        setStatus(!status);
    }

    return (
        <div>
            <button onClick={changeStatus}>Sign In</button>
            {status && <SignIn/>}
        </div>
    );
};

export default App;