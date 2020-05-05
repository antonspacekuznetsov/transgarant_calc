define(["ko"], function(ko){

    function Base(viewModel)
    {
        ko.applyBindings(viewModel);
    }
    return Base;
});