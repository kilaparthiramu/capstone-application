import React from 'react'
//import styles from './Login.css';
import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.min.css';

export class LoginComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        var lprops = this.props
        const data = { username: this.state.username, password: this.state.password }
        fetch('http://localhost:2020/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(function (response) {
            return response.json()
        }).then(function (response) {
            console.log(response);
            if (response.role === "ROLE_ADMIN") {
                lprops.history.push('/admin')
            } else if (response.role === "ROLE_POC") {
                lprops.history.push('/poc')
            } else if (response.role === "ROLE_PMO") {
                lprops.history.push('/pmo')
            } else {
                alert("Invalid credentials");
            }
        });
    }

    render() {
        return (
            <div class="container">
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <label for="UserName">UserName</label>
                        <input type="username" class="form-control" value={this.state.username} onChange={e => this.setState({ username: e.target.value })}/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" 
                        value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
