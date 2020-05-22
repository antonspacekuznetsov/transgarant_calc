define(["ko", 'text!/templates/characteristics_block.html', "utils/customHandlers"], function(ko, template){
    var viewModel = function(params){
        this.charactsCargo = ko.observable(0);
        this.title = ko.observable('');
        this.price = ko.observable('');
        this.quantity = ko.observable(null);
        this.length = ko.observable(null);
        this.width = ko.observable(null);
        this.height = ko.observable(null);
        this.weight = ko.observable(null);
    };
    ko.components.register('characteristics_block', {
        viewModel: viewModel,
        template: template
    });

});