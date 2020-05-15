define(["ko", 'text!/templates/characteristics_block.html', 'inputMask'], function(ko, template){
    var viewModel = function(params){
        this.selectedType=ko.observable(0);
        this.types = [
            {title: 'Машино место', fields:[
                {title:'Наименование груза', value:ko.observable()},
                {title:'Ценность груза', value:ko.observable()},
                {title:'Длина', value:ko.observable()},
                {title:'Ширина', value:ko.observable()},
                {title:'Высота', value:ko.observable()},
                {title:'Вес груза', value:ko.observable()}
            ]},
            {title: 'На палетах', fields:[
                {title:'Наименование груза', value:ko.observable(), sublist:['ЕВРО', 'ВАРИАНТ 1', 'ВАриант 2']},
                {title:'Наименование груза', value:ko.observable()},
                {title:'Ценность груза', value:ko.observable()},
                {title:'Длина', value:ko.observable()},
                {title:'Ширина', value:ko.observable()},
                {title:'Высота', value:ko.observable()},
                {title:'Вес груза', value:ko.observable()}
            ]},
            {title: 'Машино место', fields:[
                {title:'Наименование груза', value:ko.observable()},
                {title:'Ценность груза', value:ko.observable()},
                {title:'Длина', value:ko.observable()},
                {title:'Ширина', value:ko.observable()},
                {title:'Высота', value:ko.observable()},
                {title:'Вес груза', value:ko.observable()}
            ]},
        ]
    };
    ko.components.register('characteristics_block', {
        viewModel: viewModel,
        template: template
    });

});