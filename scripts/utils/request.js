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

        pack: function(data){
            var fd = new FormData();
            fd.append('params', JSON.stringify(data));
            $.ajax({
                type: 'POST',
                url: '/controllers/ajax.php?r=pack',
                data: fd,
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
        }
    };

    return request;
});