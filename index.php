<html>
<head>
<title>domain1.com</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles/bootstrap.css">
<link rel="stylesheet" href="styles/style.css" >
<link href="https://cdn.jsdelivr.net/npm/suggestions-jquery@20.3.0/dist/css/suggestions.min.css" rel="stylesheet" />
<link href="https://cdn.rawgit.com/Eonasdan/bootstrap-datetimepicker/e8bddc60e73c1ec2475f827be36e1957af72e2ea/build/css/bootstrap-datetimepicker.css" rel="stylesheet">
<script src='scripts/libs/require.js'></script>
<script type="text/javascript">
    requirejs.config({
        urlArgs: 'v=<?php echo trim(exec('git log --pretty="%h" -n1 HEAD')); ?>',
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
            'datetimepicker': '//cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.47/js/bootstrap-datetimepicker.min',
            "bootstrap.alert": "libs/bootstrap-alert"
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
            "bootstrap.alert": {
                deps: ["jquery"],
                exports: "$.fn.alert"
            }
        }
    });

    var blocks = ['utils/templateloader', 'bootstrap', 'calc/category_block', 'calc/bodytype_block', 'calc/point_block', 'calc/characteristics_block',  'calc/fio_block', 'calc/rate_block'];

    require(blocks, function(init){
        init(['header_template','footer_template']);
    });
</script>
</head>
<body style="background: #ffffff url(images/background_fon.png) no-repeat; background-position: top;">
    <div class="container-alerts"></div>
    <div style="margin-bottom: 80px;" class="container" data-bind="template:{'if':isLoaded('header_template'), name: 'header_template' }"></div>
    <div style="background-color: #ffffff;opacity: 0.7;padding-bottom: 30px;margin-bottom: -30px;" class="container" data-bind='component: "category_block"'></div>
    <div class="container" data-bind='component: "bodytype_block"'></div>
    <div class="container" data-bind='component: "point_block"'></div>
    <div class="container" data-bind='component: "characteristics_block"'></div>
    <div class="container" data-bind='component: "rate_block"'></div>
    <div class="container" data-bind='component: "fio_block"'></div>
    <div class="container" data-bind="template:{'if':isLoaded('footer_template'), name: 'footer_template'}"></div>
</body>
</html>
