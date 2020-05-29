define(["ko", 'text!/templates/characteristics_block.html','calc/data', "utils/customHandlers"], function(ko, template, data){
    var viewModel = function(){
        this.charactsCargo = ko.observable(0);
        this.title = ko.observable('');
        this.price = ko.observable('');
        this.quantity = ko.observable(0);
        this.length = ko.observable(0);
        this.width = ko.observable(0);
        this.height = ko.observable(0);
        this.weight = ko.observable(0);

        this.volume = ko.computed(function(){return this.length * this.height * this.weight });

        (function(self){data.set_context({characteristics:self});})(this)
    };


    ko.components.register('characteristics_block', {
        viewModel: viewModel,
        template: template
    });

});