define(["jquery"], function($){      
    var request = {
        loadFile: function(fileName, file){
            var fd = new FormData();
            fd.append('name', fileName);
            fd.append('data', file);

            $.ajax({
            type: 'POST',
            url: '/controllers/ajax?r=order-files',
            data: {name:fileName, data:file},
            processData: false,
            contentType: "application/json",
            dataType: "json",
            success: function(data) {
                console.log(data);
            },
            error: function(data) {
                console.log(data);
            }
            });
        },

        pack: function(data, fn){
            $.ajax({
                type: 'POST',
                url: '/controllers/ajax.php?r=pack',
                data: {'params': JSON.stringify(data)},
                processData: true,

                success: function(data) {
                    fn(data);
                },
                error: function(data) {
                    console.log(data);
                }
                });
        }
    };

    return request;
});