import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../../frontend/src/components/layout/Header';
import RegisterUser from '../../../frontend/src/components/register-user/RegisterUser';

function App() {
    return (
        <div>
            <Header />
            <RegisterUser />
        </div>
    )
}


export default App;

ReactDOM.render(<App />, document.querySelector('#app'))