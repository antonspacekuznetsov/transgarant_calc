define(["ko"],function(ko){
    var viewModel = (function(){
        var context = [];
        return function(){

            this.set_context = function(contextObj){
                context.push(contextObj);
            },
            this.get_context = function(){
                return context;
            }

        }
    })();
    var _viewModel = new viewModel();

    return _viewModel;
});