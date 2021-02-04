import { Component } from 'preact';

class BinaryInput extends Component {

    constructor() {
        super();
        this.state = {
            binaryInput: "",
            sequence: "***abcdefghijklmnopqrstuvwxyz***",
            pressed: [],
        };
    }

    onKeyDown = (e) => {
        if (this.state.pressed.includes(e.keyCode)) {
            return;
        }

        this.setState(({ pressed }) => ({
            pressed: [...pressed, e.keyCode],
        }), () => this.handleLogging());
    }

    onKeyUp = () => {
        // when all pushed keys are released,
        // we can evaluate
        const { pressed } = this.state;
        if (pressed.includes(97) && pressed.includes(98)) {
            console.log('send');
        } else if (pressed.includes(97)) {
            console.log('left');
        } else if (pressed.includes(98)) {
            console.log('right');
        }

        // clear array
        this.setState({ pressed: [] });
    }

    handleLogging = () => {
        console.log('pressed', this.state.pressed);
    }

    render() {
        return (
            <>
                <div style={{ fontSize: '40px' }}>{this.state.sequence}</div>
                <input
                    style={{ fontSize: '40px' }}
                    type="text"
                    name="BinaryInput"
                    value={this.state.binaryInput}
                    onKeyDown={this.onKeyDown}
                    onKeyUp={this.onKeyUp}
                />
            </>
        );
    }
}

function arraysAreIdentical(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (var i = 0, len = arr1.length; i < len; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

export default BinaryInput;