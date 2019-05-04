import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ColorBox extends Component {

    static propTypes = {
        backgroundColor: PropTypes.string,
        fontColor: PropTypes.oneOf(['black', 'white']),
        onSelect: PropTypes.func
      }
    
    static defaultProps = {
        fontColor: 'black'
    }

    handleClick = () => {
        const { backgroundColor, fontColor, onSelect } = this.props;

        if(typeof onSelect === 'function') {
            onSelect(backgroundColor, fontColor);
        }
    }


    render() {
        const { backgroundColor, fontColor } = this.props;
        return(
            <div onClick={this.handleClick}
             style={{ backgroundColor,
                 color: fontColor,        
                    textAlign: 'center',
                    margin: '5%' 
                 }} 
             className='box'>Так лучше</div>
        )
    }
}


export default ColorBox