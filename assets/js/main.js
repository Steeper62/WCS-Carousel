$(function () {
    let i=0;
    $('#right').click(function () {
        i=i+1;
        if (i>3){
            i=0;
        }
        $.getJSON(
            'carousel.php',
            {img : i},
            function(data){
                $('#carimg').fadeOut(250,function(){ $('#carimg').attr('src', data.image).fadeIn(250)})
            }
        )
    });
    $('#left').click(function () {
        i=i-1;
        if (i<0){
            i=3;
        }
        $.getJSON(
            'carousel.php',
            {img : i},
            function(data){
                $('#carimg').fadeOut(250,function(){ $('#carimg').attr('src', data.image).fadeIn(250)})
            }
        )
    });

    function slideright(){
        i=i+1;
        if (i>3){
            i=0;
        }
        $.getJSON(
            'carousel.php',
            {img : i},
            function(data){
                $('#carimg').fadeOut(250,function(){ $('#carimg').attr('src', data.image).fadeIn(250)})
            }
        )
    }
    
    $(function () {
        setInterval(slideright,3000);
    })
});