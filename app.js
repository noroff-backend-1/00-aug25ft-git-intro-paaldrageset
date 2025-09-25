let isDark = false
$(document).ready(function(){

})


$("#btn-dark-mode").on("click", changeMode)

function changeMode() {
    if (isDark === false) {
        console.log(true);
        $("body").css("background-color", "blue").css("color", "#212")
        $(".header").css("color", "pink");
        $(this).text("🌑");
    }
    else {
        console.log(false);
         $("body").css("color", "red").css("background color", "#90")
         $(".header").css("color", "green");
          $(this).text("🌕")
    }
    
}