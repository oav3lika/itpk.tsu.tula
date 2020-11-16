$( function() {
    $('#getForecast').click( function() {
        var data = { city: "Москва", date: "20201116" };
        $('#forecast').load( "getForecast.html", data );
    });
});

$(window).on('load', function () {
    $('body').addClass('loaded_hiding');
    window.setTimeout(function () {
        $('body').addClass('loaded');
        $('body').removeClass('loaded_hiding');
    }, 500);
})

