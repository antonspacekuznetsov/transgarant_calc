requirejs.config({
    waitSeconds: 60,
    appDir: "../",
    baseUrl: 'scripts/',
    paths: {
        'ko': 'libs/knockout-3.5.1',
        'jquery': ['//ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min'],
        'underscore' : 'libs/underscore-min',
        'inputMask': 'libs/jquery.inputmask',
        'bootstrap': ['//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min', 'libs/bootstrap.min'],
        'ymaps' : '//api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=12f44bf1-c336-4317-bbae-a3822321f106',
        'suggestions': '//cdn.jsdelivr.net/npm/suggestions-jquery@20.3.0/dist/js/jquery.suggestions.min',
        'moment': 'libs/moment-with-locales',
        'datetimepicker': '//cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.47/js/bootstrap-datetimepicker.min'
    },
    shim: {
        'jquery':{
            exports: ['$', 'jQuery']
        },
        'underscore': {
            exports: ['_']
        },
        'inputMask': {
            deps: ['jquery'],
            exports: ['$', 'jQuery']
        },
        'suggestions': {
            deps: ['jquery'],
            exports: ['$', 'jQuery']
        },
        'bootstrap': {
            deps: ['jquery'],
        },
        'datetimepicker': {
            deps: ['bootstrap', 'jquery', 'moment'],
        },
        'ymaps': {
            exports: 'ymaps'
        },

    }
});

var blocks = ['utils/templateloader', 'bootstrap', 'calc/category_block', 'calc/bodytype_block', 'calc/point_block', 'calc/characteristics_block',  'calc/fio_block', 'calc/rate_block'];

require(blocks, function(init){
    init(['header_template','footer_template']);
});