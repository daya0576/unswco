// search function
$('#suggestion').keyup(function(){
    var query;
    query = $(this).val();
//    $('#nav_content').html("<i class='fa fa-refresh fa-spin fa-fw'></i>");
    $.get('/rango/suggest_category/', {suggestion: query}, function(data){
        $('#nav_content').html(data);
    });
});

//search navbar css
$('.search_pointer').click(function(){
    $('#nav_search').hide();
    $("#nav_search_content").show();
    $("#suggestion").focus();
});

$("#suggestion").blur(function(){
    $('#nav_search').show();
    $("#nav_search_content").hide();
});



