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
            deleting: false,
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
        if (pressed.includes(97) && pressed.includes(98) && !this.state.deleting) {
            this.setState(({ binaryInput, position }) => ({
                binaryInput: binaryInput + this.sequence[position],
                // reset position
                deleting: true,
                position: this.sequence.length / 2,
                step: this.sequence.length / 4,
            }), () => this.handleLogging(this.sequence[this.state.position]));
        } else if (pressed.includes(97) && pressed.includes(98) && this.state.deleting) {
            this.setState(({ binaryInput }) => ({
                binaryInput: binaryInput.slice(0, -1),
            }));
        } else if (pressed.includes(97)) {
            this.setState(({ position, step }) => ({
                deleting: false,
                position: position - step,
                step: step / 2,
            }), () => this.handleLogging(this.sequence[this.state.position]));
        } else if (pressed.includes(98)) {
            this.setState(({ position, step }) => ({
                deleting: false,
                position: position + step,
                step: step / 2,
            }), () => this.handleLogging(this.sequence[this.state.position]));
        }

        // clear array
        this.setState({ pressed: [] });
    }

    handleLogging = (paramToLog = undefined) => {
        console.log(this.state);
        if (paramToLog) {
            console.log(paramToLog);
        }
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