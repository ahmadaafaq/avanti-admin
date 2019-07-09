import React, { Component } from 'react'
import { bindClassMethodsToThis } from '../../Services/Utils/Utility'
import { submitData } from '../../Services/Api/Api'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
        bindClassMethodsToThis(Login.prototype, this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }


    login() {
        if (this.state.username && this.state.password) {
            const payload = {
                username: this.state.username,
                password: this.state.password
            }
            submitData('login-user', 'POST', payload)
                .then(response => {
                    if (response) {
                        console.log('LOGGED IN');
                        sessionStorage.setItem('loggedIn', true);
                        sessionStorage.setItem('username', this.state.username);
                        this.props.switchScreen('dashboard');
                    } else {
                        alert('Username and password do no match.');
                    }
                });
        } else {
            alert('Username and password are required.')
        }
    }

    render() {
        return (
            <div>
                <div className="login-container">
                    <div>
                        <h2>AVANTI</h2>
                    </div>
                    <form>
                        <input
                            name="username"
                            type="text"
                            placeholder="username"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                        />
                        <input
                            name="password"
                            type="password"
                            placeholder="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                        />
                        <input
                            className="login-button"
                            type="button"
                            value="Login"
                            onClick={this.login}
                        />
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;
