import React, { Component } from 'react';
import IndexFon from './neir/neural_color/IndexFon';
import IndexWord from './neir/neural_word/IndexWord';
import IndexDrawing from './neir/neural_drawing/IndexDrawing';

class Body extends Component {
    render() {
        return(
            <div>
                <IndexFon/>
                <IndexWord/>
                <IndexDrawing/>
            </div>
        )
    }
}


export default Body