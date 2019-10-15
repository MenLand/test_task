import React from 'react';
import Modal from './Modal.jsx'

class Authorization extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isShow: true,
            password: '',
            username: '',
            users: [
                {
                    username: 'Misha',
                    password: 'Drik',
                    cards: {

                    }
                }
            ],
            changeUserData: this.changeUserData.bind(this)
        }

    }

    handleSignUpUser = () => {
        const { username, password } = this.state;
        console.log(username)
        const users = [...this.state.users];
        users.push({ username, password })
        this.setState({ users })
    }

    handleSignInUser = () => {
        const { username, password } = this.state
        const isUserExist = this.state.users.find(user => {
            return user.username === username && user.password === password;
        })

        if (isUserExist) this.setState({ isShow: false })
        else this.setState({ isError: true })
    }

    changeUserData = ({ target: { value, name } }) => {
        this.setState({ [name]: value });
    }

    render() {
        const { isShow } = this.state
        return (
            <>
                {isShow && <Modal {...this.state} signIn={this.handleSignInUser} signUp={this.handleSignUpUser} />}
            </>
        )
    }
}

export default Authorization;