define(["ko", 'text!/templates/category_block.html', "utils/popup"], function(ko, template){
 
    var viewModel = function(params){
        this.selected = ko.observable(null),

        this.categories = [{
            "title": "Категория 1",
            "info": "от 0 кг до 500 кг от 1 м3 до 2.7м3",
            selected:false,
            popup: [
                {title:"Тонаж", info: "от 0 до 500 кг"},
                {title:"Длина", info: "от 1 до 1.8"},
                {title:"Ширина", info: "от 1 до 1.3"},
                {title:"Высота", info: "от 1 до 1"},
                {title:"Объем", info: "от 1 Ддо 2.7"},
                {title:"Площадь", info: "от	1 до 2.3"},
                {title:"Паштеты", info: "от	1 до 5"},
                {title:"Пандус", info: "нет"},
                {title:"ГидроЛифт", info: "нет"},
                {title:"БОРТ", info: "нет"},
                {title:"РЕФ", info: "нет"},
                {title:"ПРОПУСК", info: "СК ТТК МКАД"}

            ]
        },
        {
            "title": "Категория 1+",
            "info": "от 501 кг до  1000 кг от 3.2м3 до 7м3",
            selected:false,
            popup: [
                {title:"Тонаж", info: "от 0 до 500 кг"},
                {title:"Длина", info: "от 1 до 1.8"},
                {title:"Ширина", info: "от 1 ДО 1.3"},
                {title:"Высота", info: "от 1 ДО 1"},
                {title:"Объем", info: "от 1 ДО 2.7"},
                {title:"Площадь", info: "от	1 ДО 2.3"},
                {title:"Паштеты", info: "от	1 ДО 5"},
                {title:"Пандус", info: "нет"},
                {title:"ГидроЛифт", info: "нет"},
                {title:"БОРТ", info: "нет"},
                {title:"РЕФ", info: "нет"},
                {title:"ПРОПУСК", info: "СК ТТК МКАД"}

            ]
        },
        {
            "title": "Категория 2",
            "info": "от 1001 кг до 1500 кг от 7.1 м3 до 12м3",
            selected:false,
            popup: [
                {title:"Тонаж", info: "от 0 до 500 кг"},
                {title:"Длина", info: "от 1 до 1.8"},
                {title:"Ширина", info: "от 1 ДО 1.3"},
                {title:"Высота", info: "от 1 ДО 1"},
                {title:"Объем", info: "от 1 ДО 2.7"},
                {title:"Площадь", info: "от	1 ДО 2.3"},
                {title:"Паштеты", info: "от	1 ДО 5"},
                {title:"Пандус", info: "нет"},
                {title:"ГидроЛифт", info: "нет"},
                {title:"БОРТ", info: "нет"},
                {title:"РЕФ", info: "нет"},
                {title:"ПРОПУСК", info: "СК ТТК МКАД"}

            ]
        },
        {
            "title": "Категория 2+",
            "info": "от 1001 кг до 1500 кг от 9.5м3 до 16м3",
            selected:false,
            popup: [
                {title:"Тонаж", info: "от 0 до 500 кг"},
                {title:"Длина", info: "от 1 до 1.8"},
                {title:"Ширина", info: "от 1 ДО 1.3"},
                {title:"Высота", info: "от 1 ДО 1"},
                {title:"Объем", info: "от 1 ДО 2.7"},
                {title:"Площадь", info: "от	1 ДО 2.3"},
                {title:"Паштеты", info: "от	1 ДО 5"},
                {title:"Пандус", info: "нет"},
                {title:"ГидроЛифт", info: "нет"},
                {title:"БОРТ", info: "нет"},
                {title:"РЕФ", info: "нет"},
                {title:"ПРОПУСК", info: "СК ТТК МКАД"}

            ]
        },
        {
            "title": "Категория 3",
            "info": "от 1501 кг до 3000 кг от 12м3 до 20м3",
            selected:false,
            popup: [
                {title:"Тонаж", info: "от 0 до 500 кг"},
                {title:"Длина", info: "от 1 до 1.8"},
                {title:"Ширина", info: "от 1 ДО 1.3"},
                {title:"Высота", info: "от 1 ДО 1"},
                {title:"Объем", info: "от 1 ДО 2.7"},
                {title:"Площадь", info: "от	1 ДО 2.3"},
                {title:"Паштеты", info: "от	1 ДО 5"},
                {title:"Пандус", info: "нет"},
                {title:"ГидроЛифт", info: "нет"},
                {title:"БОРТ", info: "нет"},
                {title:"РЕФ", info: "нет"},
                {title:"ПРОПУСК", info: "СК ТТК МКАД"}

            ]
        },
        {
            "title": "Категория 4",
            "info": "от 3001 кг до 5000 кг от 14м3 до 32м3",
            selected:false,
            popup: [
                {title:"Тонаж", info: "от 0 до 500 кг"},
                {title:"Длина", info: "от 1 до 1.8"},
                {title:"Ширина", info: "от 1 ДО 1.3"},
                {title:"Высота", info: "от 1 ДО 1"},
                {title:"Объем", info: "от 1 ДО 2.7"},
                {title:"Площадь", info: "от	1 ДО 2.3"},
                {title:"Паштеты", info: "от	1 ДО 5"},
                {title:"Пандус", info: "нет"},
                {title:"ГидроЛифт", info: "нет"},
                {title:"БОРТ", info: "нет"},
                {title:"РЕФ", info: "нет"},
                {title:"ПРОПУСК", info: "СК ТТК МКАД"}

            ]
        },
        {
            "title": "Категория 5",
            "info": "от 5001 кг до 10000 кг от 26м3 до 35м3",
            selected:false,
            popup: [
                {title:"Тонаж", info: "от 0 до 500 кг"},
                {title:"Длина", info: "от 1 до 1.8"},
                {title:"Ширина", info: "от 1 ДО 1.3"},
                {title:"Высота", info: "от 1 ДО 1"},
                {title:"Объем", info: "от 1 ДО 2.7"},
                {title:"Площадь", info: "от	1 ДО 2.3"},
                {title:"Паштеты", info: "от	1 ДО 5"},
                {title:"Пандус", info: "нет"},
                {title:"ГидроЛифт", info: "нет"},
                {title:"БОРТ", info: "нет"},
                {title:"РЕФ", info: "нет"},
                {title:"ПРОПУСК", info: "СК ТТК МКАД"}

            ]
        },
        {
            "title": "Категория 6",
            "info": "от 5001 кг до 10000 кг от З6 м3 до 45 м3",
            selected:false,
            popup: [
                {title:"Тонаж", info: "от 0 до 500 кг"},
                {title:"Длина", info: "от 1 до 1.8"},
                {title:"Ширина", info: "от 1 ДО 1.3"},
                {title:"Высота", info: "от 1 ДО 1"},
                {title:"Объем", info: "от 1 ДО 2.7"},
                {title:"Площадь", info: "от	1 ДО 2.3"},
                {title:"Паштеты", info: "от	1 ДО 5"},
                {title:"Пандус", info: "нет"},
                {title:"ГидроЛифт", info: "нет"},
                {title:"БОРТ", info: "нет"},
                {title:"РЕФ", info: "нет"},
                {title:"ПРОПУСК", info: "СК ТТК МКАД"}

            ]
        },
        {
            "title": "Категория 7",
            "info": "от 10001 кг до 20000 кг от 43м3 до 82м3",
            selected:false,
            popup: [
                {title:"Тонаж", info: "от 0 до 500 кг"},
                {title:"Длина", info: "от 1 до 1.8"},
                {title:"Ширина", info: "от 1 ДО 1.3"},
                {title:"Высота", info: "от 1 ДО 1"},
                {title:"Объем", info: "от 1 ДО 2.7"},
                {title:"Площадь", info: "от	1 ДО 2.3"},
                {title:"Паштеты", info: "от	1 ДО 5"},
                {title:"Пандус", info: "нет"},
                {title:"ГидроЛифт", info: "нет"},
                {title:"БОРТ", info: "нет"},
                {title:"РЕФ", info: "нет"},
                {title:"ПРОПУСК", info: "СК ТТК МКАД"}

            ]
        },
    ]
    };

    ko.components.register('category_block', {
        viewModel: viewModel,
        template: template
    });
     

})