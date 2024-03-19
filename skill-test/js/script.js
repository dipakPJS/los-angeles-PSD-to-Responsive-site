 $(document).ready(function() {

    $(".active-nav-2").addClass("activate-nav-link");

    $(".active-nav-1").click(function() {
 
        $(".active-nav-1").addClass("activate-nav-link");
        $(".active-nav-2").removeClass("activate-nav-link");

        $(".main-container-3 .team-1").css("display", "block");
        $(".main-container-3 .team-2").css("display", "none");

    });

    $(".active-nav-2").click(function() {
        $(".active-nav-2").addClass("activate-nav-link");
        $(".active-nav-1").removeClass("activate-nav-link");

        $(".main-container-3 .team-2").css("display", "block");
        $(".main-container-3 .team-1").css("display", "none");

    })

 });