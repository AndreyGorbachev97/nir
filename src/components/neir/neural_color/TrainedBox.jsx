import React, { Component } from 'react';
import PropTypes from 'prop-types';
import brain from 'brain.js';
import Color from 'color';
import CircularColor from 'react-circular-color';
import Grid from '@material-ui/core/Grid';

import styles from './ColorBox.css';

class TrainedBox extends Component {

    static propTypes = {
        trainData: PropTypes.array
      }
    
      constructor(props) {
        super(props);
    
        const network = new brain.NeuralNetwork();
        network.train(props.trainData);
    
        const backgroundColor = this.randomColor();
        const fontColor = network.run(backgroundColor);
    
        this.network = network.toFunction();
    
        this.state = {
          backgroundColor: Color(backgroundColor).rgb().toString(),
          fontColor: this.getDominantColor(fontColor)
        }
      }

      getDominantColor = (blackAndWhite) => {
        return blackAndWhite.white > blackAndWhite.black ? 'white' : 'black';
      }
    
      randomColor() {
        return {
          r: Math.round(Math.random() * 255),
          g: Math.round(Math.random() * 255),
          b: Math.round(Math.random() * 255)
        };
      }
    
      handleColorChange = (color) => {
        const backgroundColor = Color(color).rgb().object();
        const fontColor = this.network(backgroundColor);
    
        this.setState({
          backgroundColor: Color(backgroundColor).rgb().toString(),
          fontColor: this.getDominantColor(fontColor)
        });
      }

    render() {
        const { backgroundColor, fontColor } = this.state;
        return(
            <div>
                <Grid container spacing={24}>
                  <Grid item xs={6}>
                    <CircularColor size={250}   lineWidth={50} onChange={this.handleColorChange} />
                  </Grid>
                  <Grid item xs={6}>
                    <div style={{ backgroundColor, color: fontColor }} className='box'>Отлично видно</div>
                  </Grid>
                </Grid>
                
                
            </div>
        )
    }
}


export default TrainedBox