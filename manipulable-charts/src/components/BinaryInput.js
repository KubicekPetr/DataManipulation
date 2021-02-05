import { Component } from 'preact';

class BinaryInput extends Component {
    sequence = "   abcdefghijklmnopqrstuvwxyz   ";

    constructor() {
        super();
        this.state = {
            binaryInput: "",
            position: this.sequence.length / 2,
            step: this.sequence.length / 4,
            pressed: [],
        };
    }

    componentDidMount() {
        console.log('n')
    }

    onKeyDown = (e) => {
        if (this.state.pressed.includes(e.keyCode)) {
            return;
        }

        this.setState(({ pressed }) => ({
            pressed: [...pressed, e.keyCode],
        }));
    }

    onKeyUp = () => {
        // when all pushed keys are released,
        // we can evaluate
        const { pressed } = this.state;
        if (pressed.includes(97) && pressed.includes(98)) {
            this.setState(({ binaryInput, position }) => ({
                binaryInput: binaryInput + this.sequence[position],
                // reset position
                position: this.sequence.length / 2,
                step: this.sequence.length / 4,
            }));
        } else if (pressed.includes(97)) {
            this.setState(({ position, step }) => ({
                position: position - step,
                step: step / 2,
            }), () => this.handleLogging());
        } else if (pressed.includes(98)) {
            this.setState(({ position, step }) => ({
                position: position + step,
                step: step / 2,
            }), () => this.handleLogging());
        }

        // clear array
        this.setState({ pressed: [] });
    }

    handleLogging = () => {
        console.log('current', this.sequence[this.state.position]);
    }

    render() {
        return (
            <>
                <div style={{ fontSize: '30px' }}>&nbsp;&nbsp;12345678901234567890123456&nbsp;</div>
                <div style={{ fontSize: '30px' }}>&nbsp;{this.sequence}&nbsp;</div>
                &nbsp;&nbsp;
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