$(document).ready(function() {
    $('.circlechart').each(function() {
        var percentage = $(this).data('percentage');
        $(this).circleProgress({
            value: percentage / 100,
            size: 200,
            thickness: 10,
            fill: {
                color: '#007ced'
            },
            emptyFill: '#333',
            animation: {
                duration: 1500
            }
        }).on('circle-animation-progress', function(event, progress, stepValue) {
            $(this).find('strong').text(Math.round(stepValue * 100) + '%');
        });
    });
});

