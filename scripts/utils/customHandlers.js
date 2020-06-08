define(["ko", 'jquery', 'utils/utils', 'inputMask'], function(ko, $, utils){
    Inputmask.extendAliases({
        'decimal': {
          rightAlign: false,
          integerDigits: 9,
          
       
          groupSeparator: " ",

        }
      });
    ko.bindingHandlers.address = {
        init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            var func = (function(){
                var context = viewModel;
                return function(){
                    this.token =  "83f773b56f1b02b1e161353ab650a6b7f6a5c9db",
                    this.type = "ADDRESS",
                    this.onSelect = function(suggestion){
                        console.log(suggestion);
                        context.dataGotFromMapOrDadata = true;
                        context.address(suggestion.value);
                        context.coords([parseFloat(suggestion.data.geo_lat), parseFloat(suggestion.data.geo_lon)]);
                    }
                }
            })();

            $(element).suggestions(new func());
        }
    };
    
    ko.bindingHandlers.mask = {
        init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            $(element).inputmask(valueAccessor());
        }
    };

    ko.bindingHandlers.scroll = {
        init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            $(element).click(function(){
                utils.smoothScroll($(valueAccessor()).offset().top, 500);
            });
        }
    };

    ko.bindingHandlers.hide = {
        init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            var value = valueAccessor();
            if(ko.unwrap(value))
            {
                $(element).hide().slideDown();
            }
            else
            {
                $(element).show().slideUp();
            }
        },
        update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            var value = valueAccessor();
            if(ko.unwrap(value))
            {
                $(element).hide().slideDown();
            }
            else
            {
                $(element).show().slideUp();
            }
        }
    },

    ko.bindingHandlers.dateTimePicker = {
        init: function (element, valueAccessor, allBindingsAccessor) {
            //initialize datepicker with some optional options
            var options = allBindingsAccessor().dateTimePickerOptions || {};
            $(element).datetimepicker(options);
    
            //when a user changes the date, update the view model
            ko.utils.registerEventHandler(element, "dp.change", function (event) {
                var value = valueAccessor();
                if (ko.isObservable(value)) {
                    if (event.date != null && !(event.date instanceof Date)) {
                        value(event.date.toDate());
                    } else {
                        value(event.date);
                    }
                }
            });
    
            ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
                var picker = $(element).data("DateTimePicker");
                if (picker) {
                    picker.destroy();
                }
            });
        },
        update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
    
            var picker = $(element).data("DateTimePicker");
            //when the view model is updated, update the widget
            if (picker) {
                var koDate = ko.utils.unwrapObservable(valueAccessor());
    
                //in case return from server datetime i am get in this form for example /Date(93989393)/ then fomat this
                koDate = (typeof (koDate) !== 'object') ? new Date(parseFloat(koDate.replace(/[^0-9]/g, ''))) : koDate;
    
                picker.date(koDate);
            }
        }
    };
    
});