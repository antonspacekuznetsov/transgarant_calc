define(["ko", 'text!/templates/bodytype_block.html'], function(ko, template){
    var viewModel = function(params){
        this.list = [
            {title: "РАСТЕНТОВКА-БОК", selected:ko.observable(true)},
            {title: "РАСТЕНТОВКА-ВЕРХ", selected:ko.observable(true)}

        ]
 };

    ko.components.register('bodytype_block', {
        viewModel: viewModel,
        template: template
    });
});