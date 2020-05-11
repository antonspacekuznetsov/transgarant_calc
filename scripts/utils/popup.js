define(["ko", 'text!/templates/popup_template.html'], function(ko, template){
    var viewModel = function(){
        this.showPopup = function(data, event, index){
            var target = event.target;
            var coords = target.getBoundingClientRect();
            var tooltipElem = document.getElementById('category_info' + index);

            var left = coords.left +20;
            if(document.body.offsetWidth - left < 500) left = coords.left - 500;
            if (left < 0) left = 20; // не вылезать за левую границу окна
      
            var top = coords.top - tooltipElem.offsetHeight + 30;
            if (top < 0) { // не вылезать за верхнюю границу окна
              top = coords.top + target.offsetHeight + 5;
            }

            tooltipElem.style.left = left + 'px';
            tooltipElem.style.top = top + 'px';
            tooltipElem.style.display = '';
            if(document.body.offsetWidth < 500) tooltipElem.style.display = 'block';
           
        };

        this.hidePopup = function(data, event, index){
            var tooltipElem = document.getElementById('category_info' + index);
            tooltipElem.style.display = 'none';
        }
    }

    ko.components.register('popup', {
        viewModel: viewModel,
        template: template
    });
    
});