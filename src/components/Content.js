import React, {Component} from 'react';
import '../css/App.css';
import Row from '../components/Row.js';
import TeamService from '../service/TeamService';
import * as Actions from "../actions/Actions";
import {Flex} from 'react-flex';
import 'react-flex/index.css';
import '../css/bootstrap/css/bootstrap.css';


class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "",
            teams: []
        };
        Actions.fetchData();

    }

    componentWillMount() {
        TeamService.on("fetched", () => {
            this.setState({teams: TeamService.getAll()});

        });

        TeamService.on("filtered", () => {
            this.setState({teams: TeamService.getAll()});
        })
    }

    componentWillUnmount() {
        TeamService.removeListener();
    }

    handleInputChange(e) {
        this.setState({value: e.target.value});
        Actions.search(e.target.value);

    }


    fetchData() {
        Actions.fetchData();
    }


    render() {
        this.RowComponents = null;

        if (this.state.teams.length > 0) {
            console.log(this.state.teams);
            this.RowComponents =
                <Flex row justifyContent="space-around" alignItems="center">
                    {this.state.teams.map((data, i) =>
                        <Row key={i} data={data} index={i}/>)}</Flex>;

        } else {
            this.RowComponents = null;
        }
        return (
            <div className="App">
                <p className="App-intro">
                    <div className="col-lg-6">
                        <div className="input-group">
                            <input value={this.state.value} onChange={this.handleInputChange.bind(this)} type="text"
                                   className="form-control" placeholder="Search for..."/>
                            <span className="input-group-btn">
                                <button className="btn btn-default">search</button>
                              </span>
                        </div>
                    </div>
                    <button className="btn btn-default" onClick={this.fetchData.bind(this)}/>
                </p>
                {this.RowComponents}
            </div>
        );
    }
}


export default Content;