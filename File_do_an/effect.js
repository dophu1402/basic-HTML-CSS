
$(document).ready(function() {
    if($('#member_map')) {
        $('#member_map area').each(function() {
            $("#phuarea").mouseover(function() {
                console.log("DTG");
                $("#phuImg").css("height" , "500px");
            });
            
            $("#phuarea").mouseover(function() {
                $("#phuImg").css({"height" : "200px", });
            });
        
        });
    }
});