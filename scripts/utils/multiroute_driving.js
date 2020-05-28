define(["ymaps", "jquery"], function(ymaps, $){
    function init () {

    var multiRoute = new ymaps.multiRouter.MultiRoute({
        // Описание опорных точек мультимаршрута.
        referencePoints: [
            [55.734876, 37.59308],[55.86149555927734, 37.988761701171896]
        ],

    }, {
        // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
        boundsAutoApply: true
    });
    // Создаем карту с добавленными на нее кнопками.
    var myMap = new ymaps.Map('map_second', {
        center: [55.750625, 37.626],
        zoom: 7
    });

    // Добавляем мультимаршрут на карту.
    myMap.geoObjects.add(multiRoute);
}

    return init;

});