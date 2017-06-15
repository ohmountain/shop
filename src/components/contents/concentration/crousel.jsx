import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

// general styles
import '../../../styles/main.min.css';
import '../../../styles/carousel.min.css';

class Crousel extends Component {
    render() {
        return (
            <Carousel showArrows={false} showIndicator={false} showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false}>
              { this.props.data.map(data => {return (<Link to={ data.link } key={ data.id }><div><img src={ data.src } alt={ data.legend }/></div></Link>);}) }
            </Carousel>
        );
    }
};

export default Crousel;
