import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
//import {neural_word} from '../../../scripts/neural';
import axios from 'axios';
import Button from '@material-ui/core/Button';

class IndexWord extends Component {

    state = {       
        words: '',
        result: '',
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };

    flagShow = () => { 
        //this.setState({result: neural_word(this.state.words)})
        axios.post('http://localhost:3012/api/neural_word', {text: this.state.words})
        .then( (response) => { 
            this.setState({result: response.data})                                    
        })       
    }

    render() {
        return(
            <div>
                <Paper 
                    style={{height: '250px', marginLeft: '15%', width: '70%', marginTop: '5%', display: 'flex', justifyContent: 'center'}}
                >
                    <Grid container spacing={24} style={{marginLeft: '5%', width: '85%'}}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Введите фразу"
                                margin="normal"
                                onChange={this.handleChange('words')}
                                value={this.state.words}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Результат"
                                margin="normal"
                                value={this.state.result}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" onClick={() => {this.flagShow()}}>
                                показать
                            </Button>
                        </Grid>
                        
                    </Grid>
                </Paper>
               
            </div>
        )
    }
}


export default IndexWord