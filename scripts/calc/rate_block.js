define(["ko", 'text!/templates/rate_block.html'], function(ko, template){
    var viewModel = function(){
        this.rate = ko.observable(0);
        this.pm = ko.observable(true);
        this.paymentType = ko.observable(0);
    }

    ko.components.register('rate_block', {
        viewModel: viewModel,
        template: template
    });
});