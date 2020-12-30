import { Component, render } from 'preact';

class TerciaryInput extends Component {

    constructor() {
        super();
        this.state = { terciaryInput: "" };
        this.onHandleStep = this.onHandleStep.bind(this);
    }

    onHandleStep = e => {
        let value = e.target.value;
        this.setState({ [e.target.name]: value });
    }

    render() {
        return(
            <>
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