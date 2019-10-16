
export default new Promise((resolve) => {
    ymaps.ready(resolve);
}).then(() => {
    let map = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 11
    });
    map.controls.remove('zoomControl');
    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.controls.remove('fullscreenControl');
    map.behaviors.disable(['drag'])

    return map;
})
