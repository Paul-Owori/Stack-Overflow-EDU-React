import React, { Component } from 'react'
// Stylesheets
import './../stylesheets/modules/input-text-area.css'

/* This component should be fed props of: 
onSubmit, 
yellowBtnTitle, 
grayBtnTitle, 
placeHolder, 
rows,
cols
*/

class InputTextArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: ""
        }
    }

    // Handles storing any text input into the state
    handleInputText = ({ target }) => {
        this.setState({ inputText: target.value })

    }

    // Handles submitting the inputText
    handleSubmit = (e) => {
        e.preventDefault()

        this.props.onSubmit ? this.props.onSubmit(this.state.inputText) : console.error("Error submitting input: onSubmit prop not provided")
    }

    render() {
        return (

            <form className="form-wrapper" onSubmit={this.handleSubmit}>

                {/* Text area */}
                <textarea className="text-area" name="question" id="question" cols={this.props.cols ? this.props.cols : 10} rows={this.props.rows ? this.props.rows : 15} placeholder={this.props.placeHolder ? this.props.placeHolder : ""} value={this.state.inputText} onChange={this.handleInputText} />

                {/* Buttons */}
                <span className="button-container">
                    <button type="reset" value="reset" className="ask-btn reset-btn">{this.props.grayBtnTitle ? this.props.grayBtnTitle : ""}</button>
                    <button type="submit" value="submit" className="ask-btn">{this.props.yellowBtnTitle ? this.props.yellowBtnTitle : ""}</button>
                </span>

            </form>

        );
    }
}

export default InputTextArea;
