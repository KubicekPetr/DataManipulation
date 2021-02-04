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
        // 97,98
        if (this.state.released.includes(e.keyCode)) {
            this.setState(prevState => ({
                released: [...prevState.pressed.filter(x => x !== e.keyCode)],
            }));
        }

        this.setState(prevState => ({
            pressed: [...prevState.pressed, e.keyCode],
        }));

        this.setState({},console.log('onPress', 'pressed', this.state.pressed, 'released', this.state.released))
    }

    onKeyUp = (e) => {
        // 97,98
        if (this.state.pressed.includes(e.keyCode)) {
            this.setState(prevState => ({
                pressed: [...prevState.pressed.filter(x => x !== e.keyCode)],
            }));
        }

        this.setState(prevState => ({
            released: [...prevState.released, e.keyCode],
        }));

        this.setState({},console.log('onRelease', 'pressed', this.state.pressed, 'released', this.state.released))
    }

    handleStep = () => {

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
                    onInput={({target: {value}}) => {return;}}
                    onKeyDown={this.onKeyDown}
                    onKeyUp={this.onKeyUp}
                />
            </>
        );
    }
}

export default BinaryInput;