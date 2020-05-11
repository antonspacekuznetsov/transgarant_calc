define(["ko", 'text!/templates/category_block.html', "utils/popup"], function(ko, template){
 
    var viewModel = function(params){
        this.category = ko.observable(null),

        this.categories = [{
            "title": "Категория 1",
            "info": "от 0 кг до 500 кг от 1 м3 до 2.7 м3",
            selected:false,
            popup: [
                {title:"Тонаж", info: "от 0 до 500 кг"},
                {title:"Длина", info: "от 1 до 1.8"},
                {title:"Ширина", info: "от 1 до 1.3"},
                {title:"Высота", info: "от 1 до 1"},
                {title:"Объем", info: "от 1 до 2.7"},
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
            "info": "от 501 кг до 1000 кг от 3.2 м3 до 7 м3",
            selected:false,
            popup: [
                {title:"Тонаж", info: "от 501 до 1000"},
                {title:"Длина", info: "от 2 до 3"},
                {title:"Ширина", info: "от 1.3 до 1.8"},
                {title:"Высота", info: "от 1.4 до 1.7"},
                {title:"Объем", info: "от 3.2 до 7"},
                {title:"Площадь", info: "от 2.6 до 5.4"},
                {title:"Паштеты", info: "-"},
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
                {title:"Тонаж", info: "от 1001 до 1500 кг"},
                {title:"Длина", info: "от 2.8 до 3.2"},
                {title:"Ширина", info: "от от 1.6 до 2"},
                {title:"Высота", info: "от от 1.6 до 2"},
                {title:"Объем", info: "от 7.1 до 12.8"},
                {title:"Площадь", info: "от 4 до 6.4"},
                {title:"Паштеты", info: "-"},
                {title:"Пандус", info: "нет"},
                {title:"ГидроЛифт", info: "нет"},
                {title:"БОРТ", info: "да"},
                {title:"РЕФ", info: "да"},
                {title:"ПРОПУСК", info: "МКАД"}

            ]
        },
        {
            "title": "Категория 2+",
            "info": "от 1001 кг до 1500 кг от 9.5м3 до 16м3",
            selected:false,
            popup: [
                {title:"Тонаж", info: "от 0 до 500 кг"},
                {title:"Длина", info: "от 3.5 до 4.2"},
                {title:"Ширина", info: "от 1.7 до 2"},
                {title:"Высота", info: "от 1.6 до 2"},
                {title:"Объем", info: "от 9.5 до 16.8"},
                {title:"Площадь", info: "от 5.9 до 8.4"},
                {title:"Паштеты", info: "-"},
                {title:"Пандус", info: "нет"},
                {title:"ГидроЛифт", info: "нет"},
                {title:"БОРТ", info: "да"},
                {title:"РЕФ", info: "да"},
                {title:"ПРОПУСК", info: "МКАД"}

            ]
        },
        {
            "title": "Категория 3",
            "info": "от 1501 кг до 3000 кг от 12м3 до 20м3",
            selected:false,
            popup: [
                {title:"Тонаж", info: "от 1501 до 3000 кг"},
                {title:"Длина", info: "от 3.7 до 4.2"},
                {title:"Ширина", info: "от 1.7 до 2.2"},
                {title:"Высота", info: "от 1.9 до 2.2"},
                {title:"Объем", info: "от 11.9 до 20.3"},
                {title:"Площадь", info: "от 6.3 до 9.2"},
                {title:"Паштеты", info: "от	1 ДО 5"},
                {title:"Пандус", info: "нет"},
                {title:"ГидроЛифт", info: "нет"},
                {title:"БОРТ", info: "да"},
                {title:"РЕФ", info: "да"},
                {title:"ПРОПУСК", info: "МКАД"}

            ]
        },
        {
            "title": "Категория 4",
            "info": "от 3001 кг до 5000 кг от 14м3 до 32м3",
            selected:false,
            popup: [
                {title:"Тонаж", info: "от 3001 до 5000 кг"},
                {title:"Длина", info: "от 4.2 до 6.0"},
                {title:"Ширина", info: "от 2 до 2.3"},
                {title:"Высота", info: "от 1.7 до 2.3"},
                {title:"Объем", info: "от 14 до 31.7"},
                {title:"Площадь", info: "от 7.1 до 13.7"},
                {title:"Паштеты", info: "-"},
                {title:"Пандус", info: "нет"},
                {title:"ГидроЛифт", info: "нет"},
                {title:"БОРТ", info: "да"},
                {title:"РЕФ", info: "да"},
                {title:"ПРОПУСК", info: "МКАД"}

            ]
        },
        {
            "title": "Категория 5",
            "info": "от 5001 кг до 10000 кг от 26м3 до 35м3",
            selected:false,
            popup: [
                {title:"Тонаж", info: "от 5001 до 10000 кг"},
                {title:"Длина", info: "от 5.2 до 6.0"},
                {title:"Ширина", info: "от 2.3 до 2.45"},
                {title:"Высота", info: "от 2.2 до 2.45"},
                {title:"Объем", info: "от 26.3 до 34.5"},
                {title:"Площадь", info: "от 11.9 до 14"},
                {title:"Паштеты", info: "-"},
                {title:"Пандус", info: "нет"},
                {title:"ГидроЛифт", info: "нет"},
                {title:"БОРТ", info: "нет"},
                {title:"РЕФ", info: "нет"},
                {title:"ПРОПУСК", info: "-"}

            ]
        },
        {
            "title": "Категория 6",
            "info": "от 5001 кг до 10000 кг от З6 м3 до 45 м3",
            selected:false,
            popup: [
                {title:"Тонаж", info: "от 5001 до 10000 кг"},
                {title:"Длина", info: "от 6.2 до 7.5"},
                {title:"Ширина", info: "от 2.4 до 2.45"},
                {title:"Высота", info: "от 2.4 до 2.45"},
                {title:"Объем", info: "от 35.7 до 45"},
                {title:"Площадь", info: "от 14.8 до 18.3"},
                {title:"Паштеты", info: "-"},
                {title:"Пандус", info: "нет"},
                {title:"ГидроЛифт", info: "нет"},
                {title:"БОРТ", info: "нет"},
                {title:"РЕФ", info: "нет"},
                {title:"ПРОПУСК", info: "-"}

            ]
        },
        {
            "title": "Категория 7",
            "info": "от 10001 до 20000 кг от 43м3 до 82м3",
            selected:false,
            popup: [
                {title:"Тонаж", info: "от 10001 до 20000 кг"},
                {title:"Длина", info: "от 11 до 13.6"},
                {title:"Ширина", info: "от 2.4 до 2.45"},
                {title:"Высота", info: "от 2.45 до 2.50"},
                {title:"Объем", info: "от 48.5 до 82"},
                {title:"Площадь", info: "от 23 до 33"},
                {title:"Паштеты", info: "-"},
                {title:"Пандус", info: "нет"},
                {title:"ГидроЛифт", info: "нет"},
                {title:"БОРТ", info: "да"},
                {title:"РЕФ", info: "да"},
                {title:"ПРОПУСК", info: "-"}

            ]
        },
    ]
    };

    ko.components.register('category_block', {
        viewModel: viewModel,
        template: template
    });
     

})