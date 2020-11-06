import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
//importing the router package

const PageOne = () => {
    return (
        <div> Page One
            {/* Link Tag Equal to a href in html */}
            <Link to="/pageTwo">
                Navigate to Page Two
            </Link>
        </div>
    );
}

const PageTwo = () => {
    return (
        <div> Page Two
            <Link to="/">
                Go to Page One
            </Link>
        </div>
        
    );
}

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <div>
                    {/* exact path of the given value */}
                    <Route path="/" exact component={PageOne} />
                    <Route path="/pageTwo" component={PageTwo} />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;