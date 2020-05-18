define(["ko", 'text!/templates/point_block.html', "utils/event_reverse_geocode", "ymaps", 'moment', "utils/customHandlers", "suggestions", 'inputMask', 'datetimepicker'], function(ko, template, init, ymaps, moment){
    moment.locale('ru');
    
    
    var viewModel = function(){
        this.dateOrder = ko.observable(new Date()),
        this.coords = {x: null, y: null},
        this.preSelectedaddressFromMap = ko.observable(null),
        this.address = ko.observable(null),
        this.commentToAddress = '',
        this.fio ='',
        this.toDo = '',
        this.company = '',
        this.tel ='',
        this.file = false,
        this.fileName = ''

        this.workTimeFrom = ko.observable(new Date(2020, 0, 1, 9, 0)),
        this.workTimeTill = ko.observable(new Date(2020, 0, 1, 18, 0)),

        this.isBreak = ko.observable(false),

        this.breakTimeFrom = ko.observable(new Date(2020, 0, 1, 9, 0)),
        this.breakTimeTill = ko.observable(new Date(2020, 0, 1, 18, 0)),

        this.points = [],

        this.checkinSVG = '<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">\
        <rect x="0.5" y="5.5" width="18" height="17" rx="4.5" fill="white" stroke="#C5C5C5"/>\
        <path d="M3.23077 10.7692C3.07692 10.6154 3 10.3846 3 10.2308C3 10.0769 3.07692 9.84614 3.23077 9.69229L4.30769 8.61537C4.61538 8.30768 5.07692 8.30768 5.38462 8.61537L5.46154 8.69229L9.69231 13.2308C9.84615 13.3846 10.0769 13.3846 10.2308 13.2308L20.5385 2.53845H20.6154C20.9231 2.23076 21.3846 2.23076 21.6923 2.53845L22.7692 3.61537C23.0769 3.92306 23.0769 4.3846 22.7692 4.69229L10.4615 17.4615C10.3077 17.6154 10.1538 17.6923 9.92308 17.6923C9.69231 17.6923 9.53846 17.6154 9.38462 17.4615L3.38462 11L3.23077 10.7692Z" fill="#FFB700"/>\
        </svg>',
        this.checkoutSVG = '<svg width="23" height="23" viewBox="0 -5 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">\
        <rect x="0.5" y="0.5" width="18" height="17" rx="4.5" fill="white" stroke="#C5C5C5"/>\
        </svg>',
        
        (function(self){ ymaps.ready(init.bind(self));})(this)
    }

    ko.components.register('point_block', {
        viewModel: viewModel,
        template: template
    });    
});