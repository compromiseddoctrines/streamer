import React from 'react';

class GoogleAuth extends React.Component{

    state = { isSignedIn: null }

    componentDidMount(){

        // initialize google Oauth via gapi
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '42905327854-2hfv96pfthfom3ipdf3ot5sp3o4kotpu.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() })
                this.auth.isSignedIn.listen(this.onAuthChange);
                //returns TRUE or FALSE boolean if signed IN
            });
        });
    };

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
    };

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return null;
        } else if (this.state.isSignedIn){
            return(
                <div>
                    <button 
                        className="ui red google button"
                        onClick={this.onSignOutClick}
                    >
                        <i className="google icon" />
                        Sign Out
                    </button>
                </div>
            );
        } else {
            return(
                <div>
                    <button 
                        className="ui blue google button"
                        onClick={this.onSignInClick}>
                        <i className="google icon" />
                        Sign In with Google
                    </button>
                </div>
            );
        }
    }

    render(){
        return(
            <div>{this.renderAuthButton()}</div>
        );
    }
}

export default GoogleAuth;