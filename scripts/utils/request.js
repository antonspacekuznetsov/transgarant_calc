define(["jquery"], function($){      
    var request = {
        loadFile: function(fileName, file){
            var fd = new FormData();
            fd.append('name', fileName);
            fd.append('data', file);

            $.ajax({
            type: 'POST',
            url: '/ajax?r=order-files',
            headers: {
                'Authorization': 'Bearer 2ea1d8d4-d8b7-49ff-96f4-7fe4b3d91cbd',
            },
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
        }
    };

    return request;
});