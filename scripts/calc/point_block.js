define(["ko", 'text!/templates/point_block.html', "utils/popup"], function(ko, template){
    var viewModel = function(){}

    ko.components.register('point_block', {
        viewModel: viewModel,
        template: template
    });
});