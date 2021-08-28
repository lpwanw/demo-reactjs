import React from "react";
import "./App.css";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            a:0,
            b:0,
            mod:0,
            div: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeb = this.handleChangeb.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({a: event.target.value});
    }
    handleChangeb(event) {
        this.setState({b: event.target.value});
    }
    handleSubmit(event) {
        var a = this.state.a;
        var b = this.state.b;
        this.setState({mod:a%b,
        div: (a - a%b)/b})
    }

    render() {
        return (
            <div className="App">
                A:<input type="number"  onChange={this.handleChange}/><br/>
                B:<input type="number"  onChange={this.handleChangeb}/><br/>
                <input type="button" value="Create" onClick={this.handleSubmit}/><br/>
                <span>MOD (Dư): {this.state.mod}</span><br/>
                <span>DIV (Nguyên): {this.state.div}</span>
            </div>
        );
    }
}
