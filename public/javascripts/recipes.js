$(document).ready(function () {
    function deleteRecipe(recipeId) {
        
        $.ajax({
            url: "/recipes/" + recipeId,
            type: "DELETE",
            success: function (result, textStatus, jqXHR) {
                console.log("ajax call good");
                
            },
            error: function (e) {
                console.log("ajax call failed 1 : ", e);
            }
        });
    }
});

function deleteRecipe(recipeId) {
    //var recipeId =document.getElementById('btn-del').getAttribute("href");

    $.ajax({
        url: "/recipes/" + recipeId,
        type: "DELETE",
        success: function (result, textStatus, jqXHR) {
            console.log("ajax call good");
            console.log(result);
            alert("Recipe have been deleted");
            window.location.href = "/";
        },
        error: function (e) {
            console.log("ajax call failed2 : ", e);
        }
    });
}


