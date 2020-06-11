define(["ymaps", "jquery", 'calc/data', 'utils/utils'], function(ymaps, $, data, utils){
    /*function init () {

    var multiRoute, myMap;
    $('#char_btn').click(function(){
        if(!validate())
        {
            return;
        }

        var points = []
        var p = data.get_context()[1].point.points();

        for(var i = 0; i < p.length; i++)
        {
            points.push([p[i].coords[0], p[i].coords[1]]);
        }

        if(multiRoute && myMap)
        {
            myMap.geoObjects.remove(multiRoute);
            multiRoute = createRoute(points);
            myMap.geoObjects.add(multiRoute);
        }
        else{
            multiRoute = createRoute(points);
            myMap = new ymaps.Map('map_second', {
                center: [55.750625, 37.626],
                zoom: 7
            });
            myMap.geoObjects.add(multiRoute);
            myMap.behaviors.disable(['scrollZoom', "drag", "dblClickZoom", "multiTouch"]);
            myMap.controls.remove("fullscreenControl").remove("zoomControl");
        }


    });

    var createRoute = function(path)
    {
        return new ymaps.multiRouter.MultiRoute({
            // Описание опорных точек мультимаршрута.
            referencePoints: path,
            params: {
                results: 1
            }
    
        }, {
            boundsAutoApply: true,
            activeRouteAutoSelection: true
        });
    }

}

    return init;*/

});