import React, { Component } from 'react';
import Authorization from './Authorization.jsx';
import Map from './Map.jsx'
import '../sass/main.scss';

class App extends Component {

    render() {
        return (
            <>
                <Authorization />
                <main>
                    <div className="row">
                        <div className="col-8">
                            <Map />
                        </div>
                        <div className="col-4">
                            <h1>Misha Drik</h1>
                        </div>
                    </div>
                </main>
            </>
        )
    }
}

export default App;