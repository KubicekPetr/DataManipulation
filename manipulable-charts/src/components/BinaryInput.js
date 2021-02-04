import { Component } from 'preact';

class BinaryInput extends Component {

    constructor() {
        super();
        this.state = {
            binaryInput: "",
            sequence: "***abcdefghijklmnopqrstuvwxyz***",
            pressed: [],
            released: [],
        };
    }

    onKeyDown = (e) => {
        if (this.state.pressed.includes(e.keyCode)) {
            return;
        }
        // 97,98

        this.setState(({pressed}) => ({
            pressed: [...pressed, e.keyCode],
        }), () => this.handleLogging());
    }

    onKeyUp = (e) => {
        // 97,98

        this.setState(({released}) => ({
            released: [...released, e.keyCode],
        }), () => this.handleLogging());
    }

    handleLogging = () => {
        console.log('pressed', this.state.pressed);
        console.log('released', this.state.released);
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

export default BinaryInput;