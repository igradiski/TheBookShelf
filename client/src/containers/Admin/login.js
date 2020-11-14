import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loginUser } from '../../actions';

class Login extends Component {

    state = {
        email: '',
        password: '',
        error: '',
        success: false,
        user: null
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.user !== prevState.user) {
            return { user: nextProps.user }
        }
        return null
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.user !== this.state.user) {  
            if(this.state.user.login.isAuth){
                this.props.history.push('/user')
            }   
        }
    }


    submitForm = (e) => {
        e.preventDefault();
        this.props.dispatch(loginUser(this.state))
    }

    getEmail = (event) => {
        console.log(event.target.value)
        this.setState({ email: event.target.value })

    }
    getPass = (event) => {

        console.log(event.target.value)
        this.setState({ password: event.target.value })

    }
    render() {
        return (
            <div className="rl_container">
                <form onSubmit={this.submitForm}>
                    <h2>Log in here</h2>
                    <div className="form_element">
                        <input
                            type="email" placeholder="Enter your e-mail adress"
                            value={this.state.email}
                            onChange={this.getEmail}
                        />
                    </div>
                    <div className="form_element">
                        <input
                            type="password" placeholder="Enter your password"
                            value={this.state.password}
                            onChange={this.getPass}
                        />
                    </div>
                    <button type="submint">Log in</button>{
                        this.state.user.login ?
                        <div className="error">
                            {this.state.user.login.message}
                        </div>
                        :null
                    }
                </form>
            </div>
        )
    }
}


export default connect(function mapStateToProps(state) {
    return {
        user: state.user
    }
})(Login)