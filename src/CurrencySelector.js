import React from 'react';
import './CurrencySelector.css'
// import ReactDOM from 'react-dom';

// import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

class CurrencySelector extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currency: ''
    };
  }

  render(){
    return (
    <div id="selector-div">
      <FormControl variant="outlined">
        <InputLabel id="select-outlined-label">Currency</InputLabel>

        <Select
          labelId="select-outlined-label"
          id="currency-select"
          value={this.state.currency}
          onChange={(event) => {
              this.setState({ currency: event.target.value });
              this.props.getCurrency(event.target.value);
            }
          }
        >
          <MenuItem value={'USD'}>United States Dollar</MenuItem>
          <MenuItem value={'GBP'}>British Pound Sterling</MenuItem>
          <MenuItem value={'EUR'}>Euro</MenuItem>
        </Select>
        {/*<FormHelperText>Please select currency</FormHelperText>*/}
      </FormControl>
    </div>
    );
  }
}

export default CurrencySelector;
