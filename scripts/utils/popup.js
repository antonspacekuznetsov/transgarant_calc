define(["ko", 'text!/templates/popup_template.html'], function(ko, template){
    var viewModel = function(){
        this.showPopup = function(data, event, index){
            var target = event.target;
            var coords = target.getBoundingClientRect();
            var tooltipElem = document.getElementById('category_info' + index);

            var left = coords.left +20;
            if (left < 0) left = 0; // не вылезать за левую границу окна
      
            var top = coords.top - tooltipElem.offsetHeight + 30;
            if (top < 0) { // не вылезать за верхнюю границу окна
              top = coords.top + target.offsetHeight + 5;
            }

            tooltipElem.style.left = left + 'px';
            tooltipElem.style.top = top + 'px';

           
        };

        this.hidePopup = function(){

        }
    }

    ko.components.register('popup', {
        viewModel: viewModel,
        template: template
    });
    
});