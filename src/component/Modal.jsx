import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.div = document.createElement('div');
    }

    componentDidMount() {
        document.body.appendChild(this.div);
    }

    componentWillUnmount() {
        this.div.remove();
    }

    render() {
        const { username, password, isShow, signIn, signUp, changeUserData } = this.props;
        return (
            <>
                {isShow && ReactDOM.createPortal(
                    <div className="modal open" tabIndex="-1" role="dialog">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Авторизация</h5>
                                </div>
                                <div className="modal-body">
                                    <div className="input-group flex-nowrap">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="addon-wrapping">🖐</span>
                                        </div>
                                        <input value={username} type="text" onChange={(e) => changeUserData(e)} className="form-control" placeholder="Username" name="username" aria-label="Username" aria-describedby="addon-wrapping" />
                                    </div>
                                    <div className="input-group flex-nowrap">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="addon-wrapping">&#128273;</span>
                                        </div>
                                        <input value={password} type="text" onChange={(e) => changeUserData(e)} className="form-control" placeholder="Password" name='password' aria-label="Username" aria-describedby="addon-wrapping" />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={signUp} data-dismiss="modal">Регистрация</button>
                                    <button type="button" className="btn btn-primary" onClick={signIn}>Вход</button>
                                </div>
                            </div>
                        </div>
                    </div>, this.div
                )
                }
            </>
        )
    }
}

export default Modal;