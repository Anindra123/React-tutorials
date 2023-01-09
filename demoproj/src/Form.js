import PropTypes from 'prop-types';
import React from 'react';

export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fname: 'a', lname: 'a' };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleTextSubmit = this.handleTextSubmit.bind(this);
  }

  handleTextChange(event) {
    const { target } = event;
    const { value } = target;
    const { name } = target;
    this.setState({ [name]: value, [name]: value });
  }

  handleTextSubmit(event) {
    const id = this.props;
    const textVal = this.state;
    id.SubmitfName(`${textVal.fname} ${textVal.lname}`);
    event.preventDefault();
  }

  render() {
    const textVal = this.state;
    return (
      <div>
        <form onSubmit={this.handleTextSubmit}>
          <label htmlFor="fname">
            First Name :
            <br />
            <input type="text" id="fname" name="fname" onChange={this.handleTextChange} />
          </label>
          <br />
          <span>{textVal.fname.trim() ? '' : 'Text cannot be empty'}</span>
          <br />
          <label htmlFor="lname">
            Last Name :
            <br />
            <input type="text" id="lname" name="lname" onChange={this.handleTextChange} />
          </label>
          <br />
          <span>{textVal.lname.trim() ? '' : 'Text cannot be empty'}</span>
          <br />
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    );
  }
}

SignUpForm.propTypes = {
  SubmitfName: PropTypes.func.isRequired,
};
