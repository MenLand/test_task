import React from 'react';

const Authorization = () => {

    return (
        <div className="modal" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Авторизация</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="input-group flex-nowrap">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="addon-wrapping">🖐</span>
                            </div>
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                        </div>
                        <div className="input-group flex-nowrap">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="addon-wrapping">&#128273;</span>
                            </div>
                            <input type="text" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping" />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Регистрация</button>
                        <button type="button" className="btn btn-primary">Вход</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Authorization;