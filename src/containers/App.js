import React, { Component, Fragment } from "react";
import { nbaPlayers } from "../nbaPlayers";
import NavBar from "../components/nav-bar/NavBar";
import CardList from "../components/card-list/CardList";
import Scroll from "../components/scroll/Scroll"

class App extends Component {
    constructor() {
        super();
        this.state = {
            nbaPlayers: [],
            searchfield: "",
        };
    }

    componentDidMount() {
        // this.setState({});
        this.setState({ nbaPlayers: nbaPlayers })
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    };

    render() {
        const { nbaPlayers, searchfield } = this.state;

        const filteredNBAPlayers = nbaPlayers.filter(nbaPlayer => {
            return nbaPlayer.name
                .toLowerCase()
                .includes(searchfield.toLowerCase());
        });
        if (!nbaPlayers.length) {
            return (
                <>
                    <NavBar searchChange={this.onSearchChange} />
                    <h1>Loading Content</h1>
                </>
            );
        } else {
            return (
                <>
                    <NavBar searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList nbaPlayers={filteredNBAPlayers} />
                    </Scroll>
                </>
            );
        }
    }
}

export default App;
