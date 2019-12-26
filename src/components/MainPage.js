import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import Header from "../components/Header";
import ErrorBoundary from "../components/ErrorBoundary";

import '../styles/MainPage.css'

class MainPage extends Component{

    componentDidMount() {
        this.props.onRequestRobots();
    }

    filteredRobots = () => {
        return this.props.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
        })
    }

    render() {
        const { onSearchChange, robots, isPending } = this.props;
        return isPending ?
            <h1>Loading</h1> :
            <div className="tc">
                <Header/>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={ this.filteredRobots }/>
                    </ErrorBoundary>
                </Scroll>
            </div>;
    }
}

export default MainPage;