import { h, render, Component } from 'preact'
import axios from 'axios'

interface ValidatorProps {
}

interface ValidatorState {
  code: string
  feedback: string
}

class Validator extends Component<ValidatorProps, ValidatorState> {
  constructor(props) {
    super(props)
  }

  setFeedback(feedback) {
    this.setState({
      feedback: feedback
    })
  }
  
  validate = async function(code) {
    try {
      let res = await axios.post('http://localhost:8080/validate', {code: code})
      this.setFeedback(res.data)
    } catch(e) {
      this.setFeedback(e.message)
    }
  }
  
  onCodeChange = (e) => {
    this.setState({ code: e.target.value })
  }

  onValidateClick = (e) => {
    this.validate(this.state.code)
  }

  render() {
    return (
      <div class="validator">
        <h1>Validator</h1>
        <p>Enter your code here:</p>
        <textarea onInput={this.onCodeChange}></textarea>
        <button onClick={this.onValidateClick}>Validate</button>
        <p>Get feedback here:</p>
        <div class="feedback">{this.state.feedback}</div>
      </div>
    )
  }
}

render(<Validator />, document.querySelector('body'))
