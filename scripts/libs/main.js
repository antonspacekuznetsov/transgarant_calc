requirejs.config({
    waitSeconds: 60,
    appDir: "../",
    baseUrl: 'scripts/',
    paths: {
        // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension. This example
        // is using jQuery 1.9.0 located at
        // js/lib/jquery-1.9.0.js, relative to
        // the HTML page.
        'ko': 'libs/knockout-3.5.1',
        'jquery': ['//ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min'],
        'bootstrap': ['//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min', 'libs/bootstrap.min']
    },
    shim: {
        'jquery':{
            exports: 'jQuery'
        },
        'bootstrap': {
            deps: ['jquery'],
        }
    }
});

var blocks = ['utils/templateloader', 'bootstrap', 'calc/category_block', 'calc/bodytype_block'];

require(blocks, function(init){
    init(['header_template','footer_template']);
});