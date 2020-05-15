define(["ko", 'text!/templates/fio_block.html', 'inputMask'], function(ko, template){
    var viewModel = function(params){
        this.elements = [
            {alt:"ФИО", name: 'fullname', mask:'Aa{1,20} Aa{1,20} Aa{1,20}', error:'Ведено не коректное имя', type:'input'},
            {alt:"Мобильный телефон", name:'tel', mask:'+7 (999) 999-9999', error:'Ведено не коректное имя', type:'input'},
            {alt:"Ваша почта", name:'email', mask:'*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]', error:'Ведено не коректное имя', type:'input'},
            {alt:"Оформить", mask:'', error:'Ведено не коректное имя', type:'button'},
        ]
    };
    ko.components.register('fio_block', {
        viewModel: viewModel,
        template: template
    });

    ko.bindingHandlers.mask = {
        init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            $(element).inputmask(valueAccessor());
        }
    };
});