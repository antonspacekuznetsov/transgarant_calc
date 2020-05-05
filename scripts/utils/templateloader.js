define(['jquery', 'ko'], function($, ko){
    var loadTemplateCollection = function(file, success) {
        $.get('/templates/' + file + '.html', function(templates) {
            $('body').append('<div style="display:none">' + templates + '<\/div>');
            success(file);
        });
    };

    
    var viewModel = function(){
        this.isLoadedArray = ko.observableArray();
        this.isLoaded = function(templateName){

            for(var i = 0 ; i < this.isLoadedArray().length; i++)
            {
                if(this.isLoadedArray()[i].name === templateName){
                    return this.isLoadedArray()[i].isLoaded;
                }
            }

            return false;
        };
        this.func = function(templateName) {
            for(var i=0 ; i < this.isLoadedArray().length; i++)
            {
                if(this.isLoadedArray()[i].name === templateName){
                    this.isLoadedArray()[i].isLoaded(true);
                }
                        
            }
            document.getElementById(templateName).parentElement.remove();
        }
        this.load = function(templateNames){  

            for(var i = 0 ; i < this.isLoadedArray().length; i++)
            {
                if(!this.isLoadedArray()[i].isLoaded()){
                    var templateName = this.isLoadedArray()[i].name;
                    loadTemplateCollection(templateName, this.func.bind(this));
                }     
            }

          
        }
    }

    function init(templateNames)
    {
        var _vM = new viewModel();
        for(var i = 0; i < templateNames.length; i++)
        {
            _vM.isLoadedArray.push({name: templateNames[i], isLoaded: ko.observable(false)});
        }
        
        ko.applyBindings(_vM);
        _vM.load(templateNames);
    }

    
 return init;
});