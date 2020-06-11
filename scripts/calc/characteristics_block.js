define(["ko", 'text!/templates/characteristics_block.html','calc/data', 'utils/utils', 'utils/request', "utils/customHandlers"], 
function(ko, template, data, utils, request){
    var viewModel = function(){
        this.charactsCargo = ko.observable(0);
        this.title = ko.observable('');
        this.price = ko.observable(null);
        this.quantity = ko.observable(0);
        this.length = ko.observable(0);
        this.width = ko.observable(0);
        this.height = ko.observable(0);
        this.weight = ko.observable(0);

        this.volume = ko.computed(function(){return this.length * this.height * this.weight });

        this.data = {
            cargo: {
              name: this.title(),
              price: this.price(),
              places: [],
            },
            body_option_id: null,
            body_option_characteristics: []
          },

        this.add = function(){
            if(!this.validate())
            {
                return;
            }

            switch(this.charactsCargo())
            {
                case 0:
                    this.data.cargo.places.push({
                        size: {
                            length: this.length(),
                            width: this.width(),
                            height: this.height(),
                            weight: this.weight()
                        }
                    });
                    
                    this.data.body_option_id = this.getBodyId();
                    this.data.body_option_characteristics = this.getBodyOptions();
                    request.pack(this.data);
                break;

                case 1:
                break;

                case 2:
                break;
            }
        },

        this.c = function(index){
            return data.get_context()[index];
        },

        this.getBodyId = function(){
            var selectedBody = this.c(0).bodytype.bodytypes.list[this.c(0).bodytype.bodytypes.selected()].selected();
            var title = this.c(0).bodytype.bodytypes.list[this.c(0).bodytype.bodytypes.selected()].sublist[selectedBody];
            switch(title)
            {
                case "Любой закрытый":
                    return "c50b92ab-52d3-11ea-a9c9-00155d8e4e03";
                case  "ТЕНТ": 
                    return "bca0024e-f0f9-11db-9d25-000cf16cef9c";
                case "ФУРГОН":
                    return "ae606bfa-1df7-11e4-9a8e-e41f13c2b943";
                case "ИЗОТЕРМ":
                    return "1ac6a15a-f0f7-11db-9d25-000cf16cef9c";
                case "Ц/М":
                    return "bca00250-f0f9-11db-9d25-000cf16cef9c";
                case "РЕФ":
                    return "bca0024d-f0f9-11db-9d25-000cf16cef9c";
                case "БОРТ":
                    return "1ac6a159-f0f7-11db-9d25-000cf16cef9c";
            }
        },

        this.getBodyOptions = function(){
            var array = [];
            ko.utils.arrayForEach(this.c(0).bodytype.options, function(option){
                if(option.selected())
                {
                    if(option.sublist.length === 0){
                        array.push({id:option.guid});
                    }
                    else {
                        array.push({id:option.guid, value:this.getBodyValue(option)});
                    }
                }
            }, this);

            return array;
        },

        this.getBodyValue = function(option){
            var title = option.title().substring(0, option.title().indexOf('<')).length === 0 ? option.title() : option.title().substring(0, option.title().indexOf('<'));
            
            switch(title)
            {
                case "ГИДРОБОР 400":
                    return "5f1226f1-38ef-11ea-a9be-00155d8e4e03";
                case "ГИДРОБОР 500":
                    return "";
                case "ГИДРОБОР 600":
                    return "5f1226f2-38ef-11ea-a9be-00155d8e4e03";
                case "ГИДРОБОР 700":
                    return "";
                case "ГИДРОБОР 800":
                    return "67219f4b-38ef-11ea-a9be-00155d8e4e03";
                case "ГИДРОБОР 900":
                    return "";
                case "ГИДРОБОР 1000":
                    return "67219f4c-38ef-11ea-a9be-00155d8e4e03";
                
                case "ПАНДУС 90":
                    return "33589164-40de-11ea-a9c6-00155d8e4e05";
                case "ПАНДУС 100":
                    return "33589165-40de-11ea-a9c6-00155d8e4e05";
                case "ПАНДУС 110":
                    return "33589166-40de-11ea-a9c6-00155d8e4e05";
                case "ПАНДУС 120":
                    return "3bc5aebf-40de-11ea-a9c6-00155d8e4e05";
                
                case "РЕФ КЛАСС А":
                    return "ede51a37-52d5-11ea-a9c9-00155d8e4e03";
                case "РЕФ КЛАСС B":
                    return "ede51a38-52d5-11ea-a9c9-00155d8e4e03";
                case "РЕФ КЛАСС C":
                    return "7bae4362-58a5-11ea-a9c9-00155d8e4e03";
            }
        }

        this.validate = function(){
            if(this.c(0).bodytype.bodytypes.selected() === null)
            {
                utils.showAlert('Ошибка: ', 'Заполните раздел "Тип кузова"', 'alert-danger', '_' + utils.randId());
                utils.smoothScroll($('.background_route').offset().top, 500);
                return false;
            }
            /*if(this.c(1).point.points().length < 2)
            {
                utils.showAlert('Ошибка: ', 'Заполните раздел "Маршрут", указав минимум две точки', 'alert-danger', '_' + utils.randId());
                utils.smoothScroll($('#point__block').offset().top, 500);
                return false;
            }*/

            return true;
        }
        //(function(self){data.set_context({characteristics:self});})(this)
    };


    ko.components.register('characteristics_block', {
        viewModel: viewModel,
        template: template
    });

});