$(document).ready(function () {
    $('#recipeForm').submit(function(event){
        event.preventDefault();
        const formData = $(this).serializeArray();
        const formUrl = $(this).attr('action');
        const method = $(this).attr('method');

        $.ajax({
            url: formUrl,
            type: method,
            data: formData,
            success: function(result, textStatus, jqXHR){
                console.log("ajax call good");
            },
            error : function(e){
                console.log("ajax call failed : ", e);
            }

        });

    });



});