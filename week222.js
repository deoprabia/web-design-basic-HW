document.addEventListener("click", function () {
    console.log("calisiyor")
})





$ (
    "#link6"
).on("click",
    function (){
        $('button').css("background-color", "black").css ("color","pink");

    });

    $(
        ".delete" , 
    ).on("click" ,function(){
        $(this).closest ("tr").remove();
    });