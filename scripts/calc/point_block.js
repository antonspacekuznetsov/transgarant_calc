define(["ko", 'text!/templates/point_block.html', "utils/event_reverse_geocode", "ymaps", 'moment', 'utils/utils', 'calc/data',  "utils/customHandlers", "suggestions", 'inputMask', 'datetimepicker'], function(ko, template, init, ymaps, moment, utils, data){
    moment.locale('ru');
    
    
    var viewModel = function(){
        this.moment = moment,
        this.editMode = {turned:ko.observable(false), pointNumber:null},
        this.dateOrder = ko.observable(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDay(), 0, 0)),
        this.coords = ko.observable([]),
        this.preSelectedaddressFromMap = ko.observable(null),
        this.address = ko.observable(''),
        this.commentToAddress = ko.observable(''),
        this.fio = ko.observable(''),
        this.toDo = ko.observable(''),
        this.company = ko.observable(''),
        this.tel = ko.observable(''),
        this.file = ko.observable(false),
        this.fileName = '',
        this.dataGotFromMapOrDadata = false,

        this.workTimeFrom = ko.observable(new Date(2020, 0, 1, 9, 0)),
        this.workTimeTill = ko.observable(new Date(2020, 0, 1, 18, 0)),

        this.isBreak = ko.observable(false),

        this.breakTimeFrom = ko.observable(new Date(2020, 0, 1, 9, 0)),
        this.breakTimeTill = ko.observable(new Date(2020, 0, 1, 18, 0)),

        this.points = ko.observableArray([]),

        this.isAllFilled = ko.observable(true),

        this.removedList = ko.observableArray([]),
        this.addPoint = function(){
            if(this.address() === '' || this.fio() === '' || this.tel() === '' || this.company() === ''){
                this.isAllFilled(false);
                var msg = 'Заполните следующие поля:<br>' + (this.address() === '' ? 'Адрес;<br>' : '') + (this.fio() === '' ? 'Ф.И.О.;<br>' : '') + (this.tel() === '' ? 'Телефон;<br>' : '') + (this.company() === '' ? 'В какую компанию по адресу;' : '');
                utils.showAlert('Ошибка: ', msg, 'alert-danger', '_' + utils.randId(), 7000);
                return;
            }
            else
            {
                this.isAllFilled(true);
            }

            if(this.removedList().length > 0)
            {
                var obj = this.points()[this.removedList()[0]];
                this.points.replace(obj,
                    {
                        coords: this.coords(), address: this.address(), commentToAddress: this.commentToAddress(), fio: this.fio(), toDo: this.toDo(), 
                        company: this.company(), tel: this.tel(), file: this.file(), fileName: this.fileName, workTimeFrom: this.workTimeFrom(), workTimeTill: this.workTimeTill(),
                        isBreak: this.isBreak(), breakTimeFrom: this.breakTimeFrom(), breakTimeTill: this.breakTimeTill(), removed:ko.observable(false)
                    }
                    );
                this.removedList.shift();    
            }
            else{
            this.points.push({
                coords: this.coords(), address: this.address(), commentToAddress: this.commentToAddress(), fio: this.fio(), toDo: this.toDo(), 
                company: this.company(), tel: this.tel(), file: this.file(), fileName: this.fileName, workTimeFrom: this.workTimeFrom(), workTimeTill: this.workTimeTill(),
                isBreak: this.isBreak(), breakTimeFrom: this.breakTimeFrom(), breakTimeTill: this.breakTimeTill(), removed:ko.observable(false)
            });
            }

            this.clear();
        },

        this.clear = function(){
            $(".adress>input").each(function(){$(this).val('');});
            this.coords([]);
            this.preSelectedaddressFromMap(null);
            this.address('');
            this.commentToAddress('');
            this.fio('');
            this.toDo('');
            this.company('');
            this.tel('');
            this.file(false);
            this.fileName = '';
    
            this.workTimeFrom(new Date(2020, 0, 1, 9, 0));
            this.workTimeTill(new Date(2020, 0, 1, 18, 0));
    
            this.isBreak(false);
    
            this.breakTimeFrom(new Date(2020, 0, 1, 9, 0));
            this.breakTimeTill(new Date(2020, 0, 1, 18, 0));

            this.editMode.turned(false);
            this.editMode.pointNumber = null;
        },

        this.remove = function(index){
            var obj = this.points()[index];
            obj.removed(true);
            this.points.replace(this.points()[index], obj);
            this.removedList.push(index);
            this.removedList.sort();
            this.clear();
        },

        this.edit = function(index){
            this.editMode.pointNumber = index;
            this.editMode.turned(false);
            this.editMode.turned(true);
            var item = this.points()[index];
            this.coords(item.coords); 
            this.address(item.address);
            this.commentToAddress(item.commentToAddress);
            this.fio(item.fio);
            this.toDo(item.toDo); 
            this.company(item.company);
            this.tel(item.tel);
            this.file(item.file);
            this.fileName = item.fileName;
            this.workTimeFrom(item.workTimeFrom);
            this.workTimeTill(item.workTimeTill),
            this.isBreak(item.isBreak);
            this.breakTimeFrom(item.breakTimeFrom);
            this.breakTimeTill(item.breakTimeTill);
        },

        this.save = function(){
            var obj = this.points()[this.editMode.pointNumber];

            this.points.replace(obj,
                {
                    coords: this.coords(), address: this.address(), commentToAddress: this.commentToAddress(), fio: this.fio(), toDo: this.toDo(), 
                    company: this.company(), tel: this.tel(), file: this.file(), fileName: this.fileName, workTimeFrom: this.workTimeFrom(), workTimeTill: this.workTimeTill(),
                    isBreak: this.isBreak(), breakTimeFrom: this.breakTimeFrom(), breakTimeTill: this.breakTimeTill(), removed:ko.observable(false)
                }
                );
            this.clear();
        },
        this.c = function(){
            return data.get_context()[0].bodytype;
        },
        this.validate = function(){
            if(this.c().bodytypes.selected() === null)
            {
                utils.showAlert('Ошибка: ', 'Заполните раздел "Тип кузова"', 'alert-danger', '_' + utils.randId());
                return;
            }
        },
        this.checkinSVG = '<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">\
        <rect x="0.5" y="5.5" width="18" height="17" rx="4.5" fill="white" stroke="#C5C5C5"/>\
        <path d="M3.23077 10.7692C3.07692 10.6154 3 10.3846 3 10.2308C3 10.0769 3.07692 9.84614 3.23077 9.69229L4.30769 8.61537C4.61538 8.30768 5.07692 8.30768 5.38462 8.61537L5.46154 8.69229L9.69231 13.2308C9.84615 13.3846 10.0769 13.3846 10.2308 13.2308L20.5385 2.53845H20.6154C20.9231 2.23076 21.3846 2.23076 21.6923 2.53845L22.7692 3.61537C23.0769 3.92306 23.0769 4.3846 22.7692 4.69229L10.4615 17.4615C10.3077 17.6154 10.1538 17.6923 9.92308 17.6923C9.69231 17.6923 9.53846 17.6154 9.38462 17.4615L3.38462 11L3.23077 10.7692Z" fill="#FFB700"/>\
        </svg>',
        this.checkoutSVG = '<svg width="23" height="23" viewBox="0 -5 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">\
        <rect x="0.5" y="0.5" width="18" height="17" rx="4.5" fill="white" stroke="#C5C5C5"/>\
        </svg>',


        (function(self){
            var fn = function(){
                if(!this.dataGotFromMapOrDadata && this.address() !== '')
                {
                    utils.showAlert('Ошибка: ', 'Выберете адрес из подсказок или на карте', 'alert-danger', '_' + utils.randId());
                    this.coords([]);
                    this.address('');
                   // $("#address_input").focus();
                    //$("address_input").val('');
                }
                this.dataGotFromMapOrDadata = false;
            };
            $("#address_input").blur(fn.bind(self));
        })(this),
        (function(self){data.set_context({point:self});})(this),
        (function(self){ ymaps.ready(init.bind(self));})(this)
    }
    
    ko.components.register('point_block', {
        viewModel: viewModel,
        template: template
    });    
});