import { Component } from 'preact';

import Prompter from '../Prompter/Prompter';

import FeatureTogglers from './featureTogglers';

class BinaryInput extends Component {
    sequence = "---abcdefghijklmnopqrstuvwxyz---";

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

        this.handleEmptyInput();

        this.setState(({ pressed }) => ({
            pressed: [...pressed, e.keyCode],
        }));
    }

    handleEmptyInput = () => {
        if (!this.state.binaryInput) {
            // close deleting mode
            this.setState({ deleting: false });
        }
    }

    checkAgainstSteps = (step) => {
        if (step === 1) {
            this.dispatchCharacter();
            // clear array
            this.setState({ pressed: [] });
        }
    }

    dispatchCharacter = () => {
        this.setState(({ binaryInput, position }) => ({
            binaryInput: binaryInput + this.sequence[position],
            // reset position
            position: this.sequence.length / 2,
            step: this.sequence.length / 4,
        }), () => this.handleLogging(this.sequence[this.state.position]));
    }

    onKeyUp = () => {
        // when all pushed keys are released,
        // we can evaluate
        const { pressed } = this.state;
        if (pressed.includes(97) && pressed.includes(98) && !this.state.deleting) {
            this.dispatchCharacter();
            // open deleting mode
            this.setState({ deleting: FeatureTogglers.deleting ? true : false });
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
            this.checkAgainstSteps(this.state.step);
            // close deleting mode
            this.setState({ deleting: false });
        } else if (pressed.includes(98)) {
            this.setState(({ position, step }) => ({
                deleting: false,
                position: position + step,
                step: step / 2,
            }), () => this.handleLogging(this.sequence[this.state.position]));
            this.checkAgainstSteps(this.state.step);
            // close deleting mode
            this.setState({ deleting: false });
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
                <Prompter sequence={this.sequence} position={this.state.position} />
                <br />
                <input
                    style={{ fontSize: '55px' }}
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