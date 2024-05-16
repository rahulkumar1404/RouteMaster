import React from 'react';

import busbannernewonee from '../assets/images/busbannernewonee.png';
/**
 * This component renders Carousel 
 */
function Corousal(props) {
    return (
            <div className="carousel-inner col-lg-17">
                <div className="carousel-item active">
                    <img src={busbannernewonee} width="100%" height="500" />
                </div>
            </div>
    );
}

export default Corousal;