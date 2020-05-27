define(["ko", 'text!/templates/bodytype_block.html', 'utils/utils', 'calc/data', 'utils/dropdownlist'], function(ko, template, utils, data){
    var viewModel = function(params){
        this.bodytypes = { selected: ko.observable(null), focused:ko.observable(false), id:Math.random().toString(36).substr(2, 9),
        list:[
            {img: "bodytype_close", title:"Кузов закрытый", style:'margin: 5px 50px 8px;', sublist:["Любой закрытый","ФУРГОН","ЦМ","ИЗОТ","РЕФ"],selected: ko.observable(0)},
            {img: "bodytype_open", title:"Кузов откытый", style:'', sublist:["Любой открытый","Вариант 1","Вариант 2"],selected: ko.observable(0)}
        ]},
        this.options = [
            {title: "РАСТЕНТОВКА-БОК", selected:ko.observable(false), sublist:[]},
            {title: "РАСТЕНТОВКА-ВЕРХ", selected:ko.observable(false), sublist:[]},
            {title: ko.observable("ГИДРОБОР 4"), selected:ko.observable(false), sublist:["ГИДРОБОР 4","ЕЩЕ ПУНКТ", "ВТОРОЙ", "ТРЕТИЙ"], focused:ko.observable(false),id:Math.random().toString(36).substr(2, 9)},
            {title: "МЕДКНИЖКА", selected:ko.observable(false), sublist:[]},
            {title: "РАСТЕНОВКА-ПОЛНАЯ", selected:ko.observable(false), sublist:[]},
            {title: ko.observable("ПАНДУС 90"), selected:ko.observable(false), sublist:["ПАНДУС 90","ЕЩЕ ПУНКТ", "ВТОРОЙ", "ТРЕТИЙ"],focused:ko.observable(false), id:Math.random().toString(36).substr(2, 9)},
            {title: "СТАНДАРТ", selected:ko.observable(false), sublist:[]}
        ],
        this.servicies = {title:"Услуги к заявке", selected:false, focused:ko.observable(false), id:Math.random().toString(36).substr(2, 9),
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
        this.checkinSVG = '<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">\
        <rect x="0.5" y="5.5" width="18" height="17" rx="4.5" fill="white" stroke="#C5C5C5"/>\
        <path d="M3.23077 10.7692C3.07692 10.6154 3 10.3846 3 10.2308C3 10.0769 3.07692 9.84614 3.23077 9.69229L4.30769 8.61537C4.61538 8.30768 5.07692 8.30768 5.38462 8.61537L5.46154 8.69229L9.69231 13.2308C9.84615 13.3846 10.0769 13.3846 10.2308 13.2308L20.5385 2.53845H20.6154C20.9231 2.23076 21.3846 2.23076 21.6923 2.53845L22.7692 3.61537C23.0769 3.92306 23.0769 4.3846 22.7692 4.69229L10.4615 17.4615C10.3077 17.6154 10.1538 17.6923 9.92308 17.6923C9.69231 17.6923 9.53846 17.6154 9.38462 17.4615L3.38462 11L3.23077 10.7692Z" fill="#FFB700"/>\
        </svg>',
        this.checkoutSVG = '<svg width="23" height="23" viewBox="0 -5 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">\
        <rect x="0.5" y="0.5" width="18" height="17" rx="4.5" fill="white" stroke="#C5C5C5"/>\
        </svg>',

        this.validate = function(showAlert = true){
            if(this.bodytypes.selected() === null)
            {
                if(showAlert)
                utils.showAlert('Ошибка: ', 'Выберете тип кузова', 'alert-danger', '_' + utils.randId());
                return;
            }


            ko.utils.arrayForEach(this.bodytypes.list, function(item){
                if(item.sublist[item.selected()] === "РЕФ")
                {
                    if(showAlert)
                    utils.showAlert('Инфо: ', 'Для рефрижератора нельзя убрать эту опцию', 'alert-info', '_' + utils.randId());
                    ko.utils.arrayForEach(this.options, function(item){
                        item.selected(true);
                    });
                }
            }, this);
        },

        this.bodytypes.selected.subscribe(function(){
            this.resetOptions();
            
            ko.utils.arrayForEach(this.servicies.list, function(item){
                item.selected(false);
            });

        }, this),

        this.resetOptions = function(){
            ko.utils.arrayForEach(this.options, function(item){
                item.selected(false);
                if(typeof item.sublist !== "undefined" && item.sublist.length > 0)
                {
                    item.title(item.sublist[0])
                }
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

    //
});