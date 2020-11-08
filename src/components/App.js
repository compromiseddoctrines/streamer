import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//importing the router package
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';

//42905327854-2hfv96pfthfom3ipdf3ot5sp3o4kotpu.apps.googleusercontent.com


const App = () => {
    return(
        <div className="ui container">
            <BrowserRouter>
                <div>
                    <Header />
                   <Route path="/" exact component={StreamList} />
                   <Route path="/streams/new" exact component={StreamCreate} />
                   <Route path="/streams/edit" exact component={StreamEdit} />
                   <Route path="/streams/delete" exact component={StreamDelete} />
                   <Route path="/streams/show" exact component={StreamShow} />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;