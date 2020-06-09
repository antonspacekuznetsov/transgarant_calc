define(["ko", 'text!/templates/bodytype_block.html', 'utils/utils', 'calc/data', 'helpers/svgCollections', 'utils/dropdownlist', 'utils/request'], 
function(ko, template, utils, data, svg){
    var viewModel = function(){
        this.bodytypes = {
            selected: ko.observable(null), focused:ko.observable(false), id:Math.random().toString(36).substr(2, 9),
            list:[
                {img: "bodytype_close", title:"Кузов закрытый", style:'margin: 5px 50px 8px;', sublist:["Любой закрытый", "ТЕНТ", "ФУРГОН","ИЗОТЕРМ","Ц/М","РЕФ"],selected: ko.observable(0)},
                {img: "bodytype_open", title:"Кузов открытый", style:'', sublist:["БОРТ"],selected: ko.observable(0)}
        ]},
        this.availableOptions = [
            {title: "Любой закрытый", listIds:[3,5,11,12,13]},
            {title: "ТЕНТ", listIds:[0,1,2,3,5,11]},
            {title: "ФУРГОН", listIds:[3,5,11,12]},
            {title: "ИЗОТЕРМ", listIds:[3,5,11,12]},
            {title: "Ц/М", listIds:[8,11,12,14]},
            {title: "РЕФ", listIds:[3,4,5,6,7,11,12]},
            {title: "БОРТ", listIds:[5,9,10]},
            {title: "Открытый", listIds:[3,5]}
        ],
        this.options = [
            {_id:0, title: "РАСТЕНТОВКА-БОК", selected:ko.observable(false), sublist:[], enable:ko.observable(true), type:"text"},
            {_id:1, title: "РАСТЕНТОВКА-ВЕРХ", selected:ko.observable(false), sublist:[], enable:ko.observable(true), type:"text"},
            {_id:2, title: "РАСТЕНТОВКА-ПОЛНАЯ", selected:ko.observable(false), sublist:[], enable:ko.observable(true), type:"text"},
            {_id:3, title: ko.observable("ГИДРОБОР 4"), selected:ko.observable(false), sublist:["ГИДРОБОР 400", "ГИДРОБОР 500", "ГИДРОБОР 600", "ГИДРОБОР 700", "ГИДРОБОР 800", "ГИДРОБОР 900", "ГИДРОБОР 1000"], focused:ko.observable(false),id:Math.random().toString(36).substr(2, 9), enable:ko.observable(true), type:"text"},
            {_id:4, title: "ТЕРМОПИСЕЦ", selected:ko.observable(false), sublist:[], enable:ko.observable(true), type:"text"},
            {_id:5, title: ko.observable("ПАНДУС 90"), selected:ko.observable(false), sublist:["ПАНДУС 90","ПАНДУС 100", "ПАНДУС 110", "ПАНДУС 120"],focused:ko.observable(false), id:Math.random().toString(36).substr(2, 9), enable:ko.observable(true), type:"text"},
            {_id:6, title: "ТЕРМОПИСЕЦ-ОНЛАЙН", selected:ko.observable(false), sublist:[], enable:ko.observable(true), type:"text"},
            {_id:7, title: ko.observable("РЕФ"), selected:ko.observable(false), sublist:["РЕФ КЛАСС А<br><i>(от +12°C до 0°C)</i>", "РЕФ КЛАСС B<br><i>(от +12°C до -10°C)</i>", "РЕФ КЛАСС C<br><i>(от +12°C до -20°C)</i>"],focused:ko.observable(false), id:Math.random().toString(36).substr(2, 9), enable:ko.observable(true), type:"text"},

            {_id:8, title: "БОКОВАЯ ДВЕРЬ", selected:ko.observable(false), sublist:[], enable:ko.observable(true), type:"text"},
            {_id:9, title: "КОННИКИ", selected:ko.observable(false), sublist:[], enable:ko.observable(true), type:"text"},
            {_id:10, title: "РЕМНИ", selected:ko.observable(false), sublist:[], enable:ko.observable(true), type:"text"},
            {_id:11, title: "МЕДКНИЖКА", selected:ko.observable(false), sublist:[], enable:ko.observable(true), type:"text"},
            {_id:12, title: "АКТ О ОБРАБОТКИ", selected:ko.observable(false), sublist:[], enable:ko.observable(true), type:"text"},
            {_id:13, title: "СТАНДАРТ", selected:ko.observable(false), sublist:[], enable:ko.observable(true), type:"text"},
            {_id:14, title: "Высота", selected:ko.observable(false), sublist:[], enable:ko.observable(true), type:"input", value: null}
        ],
        this.servicies = {
            title:"Услуги к заявке", selected:false, focused:ko.observable(false), id:Math.random().toString(36).substr(2, 9),
            list:[
                {title: "ППР", selected:ko.observable(false)},
                {title: "ГРУЗЧИК", selected:ko.observable(false)},
                {title: "ГРУЗЧИКИ", selected:ko.observable(false)},
                {title: "ПРОПУСК СК", selected:ko.observable(false)},
                {title: "ПРОПУСК ТТК", selected:ko.observable(false)},
                {title: "ПРОПУСК МКАД", selected:ko.observable(false)},
                {title: "ЭКСПЕДИРОВАНИЕ", selected:ko.observable(false)},
                {title: "СТРАХОВКА ГРУЗА", selected:ko.observable(false)},
                {title: "ДОСТАВКА ДОКУМЕНТОВ", selected:ko.observable(false)}
        ]},
        
        this.svg = svg,

        this.validate = function(showAlert = true, index = null){
            if(this.bodytypes.selected() === null)
            {
                if(showAlert)
                utils.showAlert('Ошибка: ', 'Выберете тип кузова', 'alert-danger', '_' + utils.randId());
                return;
            }
        },

        this.setSelectedRules = function(index = 0){
            if(this.bodytypes.selected() === null)
            {
                ko.utils.arrayForEach(this.options,function(option){
                    option.enable(true);
                });
                return;
            }
            ko.utils.arrayForEach(this.options,function(option){
                option.enable(false);
            });
            var title = this.bodytypes.list[this.bodytypes.selected()].sublist[index];
            ko.utils.arrayForEach(this.availableOptions, function(item){
                if(item.title === title)
                {
                    ko.utils.arrayForEach(item.listIds, function(value){
                        ko.utils.arrayForEach(this.options, function(option){

                            if(option._id === value)
                            {
                                option.enable(true);
                                return;
                            }
                        });
                    }, this);

                    return;
                }
            }, this);
        },

        this.formListOptions = function(){
            var array = [], subArr1 = [], subArr2 = [];
            var count = 0, subCnt = 0;

            ko.utils.arrayForEach(this.options, function(option){
                if(option.enable())
                {
                    count++;
                }
            });

            ko.utils.arrayForEach(this.options, function(option){

                if(option.enable())
                {
                    if(subCnt < Math.ceil(count/2)){
                        subArr1.push(option);
                    }
                    else{
                        subArr2.push(option);
                    }
                    subCnt++;
                }

            });


            array.push(subArr1);
            array.push(subArr2);

            return array;

        };

        this.bodytypes.selected.subscribe(function(){
            this.resetOptions();
        }, this),

        this.resetOptions = function(){
            ko.utils.arrayForEach(this.options, function(item){
                item.selected(false);
                item.enable(true);
                if(typeof item.sublist !== "undefined" && item.sublist.length > 0)
                {
                    item.title(item.sublist[0]);
                }
            });

            ko.utils.arrayForEach(this.servicies.list, function(item){
                item.selected(false);
            });
        },
        
        this.showButton = function(self, event){
            for(var i = 0; i < self.options.length; i++)
            {
                if(self.options[i].sublist.length > 0)
                {
                    if(self.options[i].focused() && (event.target.id !== self.options[i].id && event.srcElement.parentElement.id !== self.options[i].id))
                    {
                        self.options[i].focused(false);
                    }
                }
            }
            if(self.bodytypes.focused() && (event.target.id !== self.bodytypes.id && event.srcElement.parentElement.id !== self.bodytypes.id))
            {
                self.bodytypes.focused(false);
            }

            if(self.servicies.focused() && (event.target.id !== self.servicies.id && event.srcElement.parentElement.id !== self.servicies.id))
            {
                var status = false;
                for(var i = 0; i < event.path.length; i++)
                {
                    if(event.path[i].id === "biglist")
                    {
                        status = true;
                        break;
                    }
                }
                self.servicies.focused(status);
            }

        },
       (function(self){data.set_context({bodytype:self});})(this),
       (function(self){document.addEventListener( "click" , function(event){self.showButton(self, event)});})(this)
 };

    ko.components.register('bodytype_block', {
        viewModel: viewModel,
        template: template
    });
});