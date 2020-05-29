define(["ko", 'text!/templates/rate_block.html', 'utils/multiroute_driving', 'ymaps', 'calc/data'], function(ko, template, init, ymaps, data){
    var viewModel = function(){
        this.rate = ko.observable(0);
        this.pm = ko.observable(true);
        this.paymentType = ko.observable(0);

        (function(self){data.set_context({rate:self});})(this);
        (function(self){ ymaps.ready(init.bind(self));})(this);
    }

    ko.components.register('rate_block', {
        viewModel: viewModel,
        template: template
    });
});