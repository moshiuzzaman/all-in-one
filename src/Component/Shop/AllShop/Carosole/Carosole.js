import React, { useState } from 'react';
import { render } from '@testing-library/react';
import { Carousel } from 'react-bootstrap';
import CarosoleItem from '../CarosolItem/CarosoleItem';

const Carosole = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <CarosoleItem></CarosoleItem>
      </Carousel>
    );
};
export default Carosole;