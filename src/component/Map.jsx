import React from 'react';
import map from '../mapControl/map';

function () {
    
}
map.then((f) => console.log(f));


const Map = () => {
    // setTimeout(() => map.setCenter([55.7, 37.6], 6), 3000);
    return (
        <div id="map"></div>
    )
}

export default Map;