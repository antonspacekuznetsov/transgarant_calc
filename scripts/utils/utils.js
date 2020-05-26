define(["jquery", "bootstrap.alert"], function($){
    var utils = {
        smoothScroll: (function () {
            var timer, start, factor;
          
            return function (target, duration) {
              var offset = window.pageYOffset,
                  delta  = target - window.pageYOffset; // Y-offset difference
              duration = duration || 1000;              // default 1 sec animation
              start = Date.now();                       // get start time
              factor = 0;
          
              if( timer ) {
                clearInterval(timer); // stop any running animation
              }
          
              function step() {
                var y;
                factor = (Date.now() - start) / duration; // get interpolation factor
                if( factor >= 1 ) {
                  clearInterval(timer); // stop animation
                  factor = 1;           // clip to max 1.0
                } 
                y = factor * delta + offset;
                window.scrollBy(0, y - window.pageYOffset);
              }
          
              timer = setInterval(step, 10);
              return timer; // return the interval timer, so you can clear it elsewhere
            };
          }()),
      counter:0,
      showAlert: function(title, msg, cls, id, timeout = 4000){
        if(this.counter > 5)
        {
          return;
        }
        this.counter++;
        var html = '<div id="' + id +'" class="alert ' + cls +' fade in" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>' + title + '</strong>' + msg +'</div>';
        $('.container-alerts').html(html + $('.container-alerts').html());
        setTimeout(this.hideAlert, timeout, id, this);
      },

      hideAlert: function(id, self){
          self.counter--;
          $( "#" + id ).fadeTo( "slow" , 0.1, function() {
              $("#" + id ).alert("close");
              $( "#" + id ).remove();
            });
      },

      randId: function()
      {
          return Math.random().toString(36).substr(2, 9);
      }
    };

    return utils;
})