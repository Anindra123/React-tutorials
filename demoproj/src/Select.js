import React from 'react';

export default class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progLang: 'JS',
    };
    this.handleSelectionChanged = this.handleSelectionChanged.bind(this);
  }

  handleSelectionChanged(event) {
    this.setState({ progLang: event.target.value });
  }

  render() {
    const val = this.state;
    return (
      <div>
        <p>
          Your favourite language is :
          <b>{` ${val.progLang}`}</b>
        </p>
        <form>
          <label htmlFor="progLang">
            Select your favourite programming language :

            <br />
            <select id="progLang" value={val.progLang} onChange={this.handleSelectionChanged}>
              <option value="JS">JS</option>
              <option value="PHP">PHP</option>
              <option value="C#">C#</option>
              <option value="C++">C++</option>
              <option value="Python">Python</option>
            </select>
          </label>

        </form>
      </div>
    );
  }
}
