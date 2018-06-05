import { h, Component } from 'preact'
import axios from 'axios'

interface ValidatorProps {
  validator: string
}

interface ValidatorState {
  code: string
  feedback: string
}

export default class Validator extends Component<ValidatorProps, ValidatorState> {
  constructor(props) {
    super(props)
  }

  setFeedback(feedback) {
    this.setState({
      feedback: feedback
    })
  }
  
  validate = async function(code) {
    console.log(this.props.validator)
    try {
      let res = await axios.post('http://localhost:8080/validate', {code: code, validator: this.props.validator})
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
        <p>Enter your code here:</p>
        <textarea onInput={this.onCodeChange}></textarea>
        <button onClick={this.onValidateClick}>Validate</button>
        <p>Feedback and eventual errors are shown here:</p>
        <div class="feedback">{this.state.feedback}</div>
      </div>
    )
  }
}
