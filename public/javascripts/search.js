$(document).ready(function () {
    $('#searchForm').submit(function(event){
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
                $( "#errors" ).empty();
                $( ".card-deck" ).empty();

                if(result.length === 0)
                {
                    $( "#errors" ).append("<p class='alert alert-danger' role='alert'> No results</p>");
                }
                
                for(i=0; i<result.length;i++){


                    $('.card-deck').append('<div class="col-4">'+
                    '<div class="card" style="width: 20rem; border: 2px solid #ccc;">'+
                      "<a id='recipeId' href='/recipes/"+result[i].id+"'><img id='recipeImage' class='card-img-top' alt='...'"+
                          "height='180px' width='120px' src='"+result[i].image+"'></a>"+
                      '<div class="card-body">'+
                        '<h5 id="recipeTitle" class="card-title">'+result[i].title+'</h5>'+
                        '<p id="recipeDescription" class="card-text">'+result[i].description+'</p>'+
                        "<a id='btnId'"+"href='/recipes/edit/"+result[i].id+"'><button id='edit-btn' type='button' class='btn btn-primary ml-5'"+
                            '>Edit Recipe</button></a>'+
                     ' </div>'+
                      '<p id="recipeAuthor" class="ml-2">'+'By '+result[i].author+'</p>'+
                    '</div>'+
                  '</div>');
                    if(i%3 ===2)
                    {
                        $(".card-deck").append('<div class="w-100"></div><br>');
                    }
                }
            },
            error : function(e){
                console.log("ajax call failed : ", e);
            }

        });

    });



});