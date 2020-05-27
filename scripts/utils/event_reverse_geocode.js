define(["ymaps", "jquery"], function(ymaps, $){
    
function init(coords) {
    var self = this;
    var myPlacemark,
        myMap = new ymaps.Map('map', {
            center: coords,
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        });

    // Слушаем клик на карте.
    myMap.events.add('click', function (e) {
        var coords = e.get('coords');

        // Если метка уже создана – просто передвигаем ее.
        if (myPlacemark) {
            myPlacemark.geometry.setCoordinates(coords);
        }
        // Если нет – создаем.
        else {
            myPlacemark = createPlacemark(coords);
            myMap.geoObjects.add(myPlacemark);
            // Слушаем событие окончания перетаскивания на метке.
            myPlacemark.events.add('dragend', function () {
                getAddress(myPlacemark.geometry.getCoordinates());
            });
        }
        getAddress(coords);
    });

    $(".close_map").click(function(){
        if (myPlacemark && self.coords().length === 0) {
            myMap.geoObjects.remove(myPlacemark);
            myPlacemark = null;
            myMap.setCenter([55.753994, 37.622093], 9)
        }

    });

    $("#mapOn").click(function(){
        if(self.coords().length > 0)
        {
            if (myPlacemark) {
                myPlacemark.geometry.setCoordinates(self.coords());
                myMap.setCenter(self.coords(), 15)
            }
            else 
            {
                myPlacemark = createPlacemark(self.coords());
                myMap.geoObjects.add(myPlacemark);
                myMap.setCenter(self.coords(), 15)
                

            }
            getAddress(myPlacemark.geometry.getCoordinates());
        }

        if (myPlacemark && self.coords().length === 0) {
            myMap.geoObjects.remove(myPlacemark);
            myPlacemark = null;
            myMap.setCenter([55.753994, 37.622093], 9)
        }
    });

    $("#selectCoords").click(function(){
        self.dataGotFromMapOrDadata = true;
        self.address(myPlacemark.properties._data.balloonContent);
        self.coords(myPlacemark.geometry._coordinates);
    });

    // Создание метки.
    function createPlacemark(coords, iconCaption = 'поиск...') {
        return new ymaps.Placemark(coords, {
            iconCaption: iconCaption
        }, {
            preset: 'islands#violetDotIconWithCaption',
            draggable: true
        });
    }

    // Определяем адрес по координатам (обратное геокодирование).
    function getAddress(coords) {
        myPlacemark.properties.set('iconCaption', 'поиск...');
        ymaps.geocode(coords).then(function (res) {
            var firstGeoObject = res.geoObjects.get(0);
            myPlacemark.properties
                .set({
                    // Формируем строку с данными об объекте.
                    iconCaption: [
                        // Название населенного пункта или вышестоящее административно-территориальное образование.
                        firstGeoObject.getLocalities().length ? firstGeoObject.getLocalities() : firstGeoObject.getAdministrativeAreas(),
                        // Получаем путь до топонима, если метод вернул null, запрашиваем наименование здания.
                        firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
                    ].filter(Boolean).join(', '),
                    // В качестве контента балуна задаем строку с адресом объекта.
                    balloonContent: firstGeoObject.getAddressLine()
                });
                self.preSelectedaddressFromMap(myPlacemark.properties._data.balloonContent);
        });

    }
}
    return init;
});