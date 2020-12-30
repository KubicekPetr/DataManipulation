import { Component, render } from 'preact';

class TerciaryInput extends Component {

    constructor() {
        super();
        this.state = { 
            terciaryInput: "",
            sequence: "abcdefghijklmnopqrstuvwxyz0123456789",
        };
        this.onHandleStep = this.onHandleStep.bind(this);
    }

    onHandleStep = e => {
        const value = e.target.value;
        const newLetter = value[value.length - 1];
        let sequence = this.state.sequence;
        if (newLetter === "i") {
            sequence = sequence.slice(0, sequence.length / 3);
            console.log(sequence)
        } else if (newLetter === "o") {
            sequence = sequence.slice(sequence.length / 3, 2 * sequence.length / 3);
            console.log(sequence)
        } else if (newLetter === "p") {
            sequence = sequence.slice(2 * sequence.length / 3);
            console.log(sequence)
        }
        this.setState({sequence});
        if (sequence.length <= 1) {
            this.setState(prev => ({ 
                [e.target.name]: prev[e.target.name] + sequence,
                sequence: "abcdefghijklmnopqrstuvwxyz0123456789",
            }));
        } else {
            this.setState(prev => ({ 
                [e.target.name]: prev[e.target.name] + "",
            }));
        }
    }

    render() {
        return(
            <>
                <div>{this.state.sequence}</div>
                <input
                    type="text"
                    name="terciaryInput"
                    value={this.state.terciaryInput}
                    onInput={this.onHandleStep}
                />
            </>
        );
    }
}

export default TerciaryInput;