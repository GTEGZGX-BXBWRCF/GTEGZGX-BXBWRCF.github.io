$(function(e)
{
    $("body").fadeIn(2000);
    var flag = true;
    $("#btn").click(function(e)
    {
        if (flag === true)
        {
            $('#message').text("一个拥护党国的先进宿舍");
            $('#btn').text("算了,保命要紧");
            $('#head').css('background-image',"url('guoqi.jpeg')");
            flag = !flag;
        }
        else
            {
            $('#message').text("一个拥护党的进步宿舍");
            $('#btn').text("呵呵");
            $('#head').css('background-image',"linear-gradient(to left, #16628f, #168e63)")
            flag = !flag;
        }
    });
});
