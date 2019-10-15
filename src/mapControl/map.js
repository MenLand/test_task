
export default new Promise((resolve) => {
    ymaps.ready(resolve);
})
    .then(() => {
        return new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 10
        });
    })
