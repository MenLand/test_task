import React, { Component } from 'react';
import Authorization from './Authorization.jsx';
import users from '../mapControl/usersMaps.json'
import map from '../mapControl/map';
import Map from './Map.jsx'
import '../sass/main.scss';

let MapControll;
map.then(map => MapControll = map)

class App extends Component {
    state = {
        currentUser : '',
        users,
        cards: [],
        coord: '55.76, 37.64',
    }

    userSignIn = ({cards, username}) => {
        this.setState({ cards, username })
    }

    componentDidMount() {
        setTimeout(() => this.setState({users}), 3000);
    }

    componentDidUpdate() {
        const { coord } = this.state;
        MapControll.setCenter(coord.split(','), 18);
    }

    showPlace(index) {
        const { cards } = this.state;
        const coord = cards[index].coords;
        this.setState({ coord })
    }


    render() {
        const { users, cards, coord } = this.state;
        return (
            <>
                <Authorization users={users} userSignIn={this.userSignIn} />
                <main>
                    <div className="row">
                        <div className="col-8">
                            <Map coord={coord} />
                        </div>
                        <div className="col-4">
                            <div className="cadrs">
                                {cards.map((card, index) => (
                                    <div
                                        className="card"
                                        key={index}
                                        onClick={() => { this.showPlace(index) }}
                                    >
                                        <h2>{card.name}</h2>
                                        <h4>{card.coords}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </>
        )
    }
}

export default App;