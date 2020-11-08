import React from 'react';

class GoogleAuth extends React.Component{

    componentDidMount(){

        // initialize google Oauth via gapi
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '42905327854-2hfv96pfthfom3ipdf3ot5sp3o4kotpu.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }

    render(){
        return(
            <div> Google Auth</div>
        );
    }
}

export default GoogleAuth;