import React from 'react'

export class LoginComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleChange(event) {
        this.setState({ [event.target.name]:event.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        var lprops = this.props
        const data = { username:this.state.username, password:this.state.password }
        fetch('http://localhost:2020/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{ 
                'Content-Type': 'application/json' } ,
        }).then(function (response) {
                return response.json()
        }).then(function (response) {
            if(response.role === "ROLE_ADMIN"){
                lprops.history.push('/admin')
            }else if(response.role === "ROLE_POC"){
                lprops.history.push('/poc')
            }else if(response.role === "ROLE_PMO"){
                lprops.history.push('/pmo')
            }else{
                alert("Invalid credentials");
            }
        });
    }

    render() {
        return (
            <div className="addcontainer">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <h4>Add new task here:</h4>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="wrapper">
                        <label for="username"><b>Username</b></label>
                        <input type="text" value={this.state.username} onChange={e => this.setState({ username: e.target.value })} placeholder="Enter Username" name="username" required />
                        <label for="password"><b>password</b></label>
                        <input type="text" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} placeholder="Enter Email" name="password" required />
                       <button className="login" type="submit">Add task</button>
                    </div>
                </form>
            </div>
        )
    }
}
