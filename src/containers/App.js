import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import '../styles/App.css'

import { connect } from 'react-redux';
import { setSearchField } from "../actions/SetSearchFieldAction";


const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
};

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            robots: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
    }

    render() {
        const { robots } = this.state,
            { searchField, onSearchChange } = this.props,
            filteredRobots = robots.filter(robot => {
                return robot.name.toLowerCase().includes(searchField.toLowerCase())
            });

        return !robots.length ?
            <h1>Loading</h1> :
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);