import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

// general styles
import '../../../styles/main.min.css';
import '../../../styles/carousel.min.css';

class Crousel extends Component {
    render() {
        return (
            <Carousel showArrows={false} showIndicator={false} showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false}>
              { this.props.data.map(data => {return (<div key={ data.id }><img src={ data.src }/><p className="legend">{ data.legend }</p></div>);}) }
            </Carousel>
        );
    }
};

export default Crousel;
