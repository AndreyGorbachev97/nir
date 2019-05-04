import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Color from 'color';
import Paper from '@material-ui/core/Paper';
import styles from './main.css';
import Button from '@material-ui/core/Button';
import ColorBox from './ColorBox';
import TrainedBox from './TrainedBox';



class IndexFon extends Component {

    colors = [
        { r: 255, g: 0, b: 0 },
        { r: 255, g: 0, b: 162 },
        { r: 191, g: 0, b: 255 },
        { r: 85, g: 0, b: 255 },
        { r: 0, g: 85, b: 255 },
        { r: 0, g: 157, b: 255 },
        { r: 0, g: 234, b: 255 },
        { r: 0, g: 255, b: 123 },
        { r: 0, g: 255, b: 30 },
        { r: 111, g: 255, b: 0 },
        { r: 255, g: 234, b: 0 },
        { r: 255, g: 42, b: 0 },
      ];
    
    state = {
        enough: false,
        trainingSet: []
    };
    
    randomColor = () => {
        const { trainingSet } = this.state;
        const idx = trainingSet.length;
    
        return this.colors[idx];
    }
    
    handleEnoughClick = (event) => {
        this.setState({ enough: true });
        event.preventDefault();
      }
    
    handleSelect = (input, output) => {
        this.setState((prevState) => ({
          ...prevState,
          trainingSet: prevState.trainingSet.concat([{ input: Color(input).object(), output: { [output]: 1 } }])
        }));
      }

      
    render() {

        const color = Color(this.randomColor());
        const { trainingSet, enough } = this.state;

        return(
            <div className={styles.main}>
              <Paper 
                style={{height: '250px', marginLeft: '15%', width: '70%', marginTop: '5%', display: 'flex', justifyContent: 'center'}}
              >
                {trainingSet.length < this.colors.length && 
                <div >
                  
                    <Grid container spacing={24}>
                      <Grid item xs={6}>
                        <ColorBox onSelect={this.handleSelect} backgroundColor={color.rgb().toString()} fontColor="white" />
                      </Grid>
                      <Grid item xs={6}>
                        <ColorBox onSelect={this.handleSelect} backgroundColor={color.rgb().toString()} className={styles.box} fontColor="black" />
                      </Grid>
                    </Grid>                                
                </div>}
                {trainingSet.length >= this.colors.length && !enough && <Button onClick={this.handleEnoughClick}>Достаточно</Button>}
                {enough && <div className={styles.box}><TrainedBox trainData={trainingSet} /></div>}
              </Paper>
            </div>
        )
    }
}


export default IndexFon