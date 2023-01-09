import React from 'react';
import './App.css';
import SignUpForm from './Form';
import Select from './Select';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fnameVal: '',
    };
    this.SubmitfName = this.SubmitfName.bind(this);
  }

  SubmitfName(textVal) {
    this.setState({ fnameVal: textVal });
  }

  render() {
    const val = this.state;
    return (
      <div>
        <p>
          <b>Hello,</b>
          <i>{val.fnameVal}</i>
        </p>
        <SignUpForm SubmitfName={this.SubmitfName} />
        <Select />
      </div>
    );
  }
}

export default App;
