import React from 'react';
import './BitcoinRate.css';
import TextField from '@material-ui/core/TextField';

class BitcoinRate extends React.Component {
  constructor(props){
    super(props);
  }
  displayBitcoinRate(){
    if(this.props.currency !== ''){
      return '1 Bitcoin = '.concat(this.props.rate, ' ', this.props.currency);
    }
    else {
      return 'Please select currency.';
    }

  }

  render(){
    return(
      <div id="display-div">
      <TextField
        id="standard-read-only-input"
        label="Exchange Rate"
        variant="outlined"
        value={this.displayBitcoinRate()}
        InputProps={{
          readOnly: true,
        }}
      />
      </div>
    );
  }
}

export default BitcoinRate;
