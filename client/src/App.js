import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

export class App extends Component {
  state = {
    name: '',
    receiptId: 0,
    price1: 0,
    price2: 0,
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  createAndDownloadPdf = () => {
    axios.post('/create-pdf', this.state);
  };

  render() {
    return (
      <div className='App'>
        <input
          type='text'
          placeholder='Name'
          name='name'
          onChang={this.handleChange}
        />
        <input
          type='number'
          placeholder='Receipt ID'
          name='receiptId'
          onChang={this.handleChange}
        />
        <input
          type='number'
          placeholder='Price 1'
          name='price1'
          onChang={this.handleChange}
        />
        <input
          type='number'
          placeholder='Price 2'
          name='price2'
          onChang={this.handleChange}
        />
        <button onClick={this.createAndDownloadPdf}>Download PDF</button>
      </div>
    );
  }
}

export default App;
