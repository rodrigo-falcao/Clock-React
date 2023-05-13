import { Component } from 'react';


export default class Clock extends Component {
    constructor() {
        super();
        this.state = {
            time: new Date().toString(),
        };
        this.interval = false;
        this.color = 'red';
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ ...this.state, time : new Date().toString()})
        }, 1000);
    }

    componentDidUpdate() {
        if(this.color === 'red')
            this.color = 'blue';
        else
            this.color = 'red';
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return <h3 style={
            {
                color: this.color
            }
        }>{this.state.time}</h3>;
    }
}