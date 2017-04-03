import React from 'react';
import 'react-flex/index.css';
import '../css/bootstrap/css/bootstrap.css';

class Row extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            styles: {
                padding: 10,
                margin: 20,
            }
        };
    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    onClickHandle() {
        window.location.assign(this.props.data.url);
    }

    render() {
        return (
            <div className="card" style={this.state.styles}>
                <div>
                    <img className="card-img-top"
                         src={this.props.data.link} />
                </div>
                <div className="card-block">
                    <h4 className="card-title">{this.props.data.league}</h4>
                    <p className="card-text">{this.props.data.name}</p>
                    <button onClick={this.onClickHandle.bind(this)} className="btn btn-primary">View info !</button>
                </div>
            </div>
        );
    }
}

export default Row;