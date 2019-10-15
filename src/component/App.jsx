import React, {Component} from 'react';
import Authorization from './Authorization.jsx';
import '../sass/main.scss';

class App extends Component {
    state = {
        isShowAuthorization : true
    }

    render() {
        return (
            <>
            <Authorization/>
            </>
        )
    }
}

export default App;