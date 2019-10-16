import React from 'react';
import Modal from './Modal.jsx';


class Authorization extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isShow: true,
            password: '',
            username: '',
            changeUserData: this.changeUserData.bind(this),
            handleSignInUser: this.handleSignInUser.bind(this),
        }

    }

    handleSignInUser = () => {
        const { username, password } = this.state
        const user = this.props.users.find(user => {
            return user.username === username && user.password === password;
        })        

        if (user) {
            this.props.userSignIn(user);
            this.setState({ isShow: false });
        }
        else this.setState({ isError: true });
    }

    changeUserData = ({ target: { value, name } }) => {
        this.setState({ [name]: value });
    }

    render() {
        const { isShow } = this.state
        return (
            <>
                {isShow && <Modal {...this.state} />}
            </>
        )
    }
}

export default Authorization;