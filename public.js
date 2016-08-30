/**
 * Created by liu on 2016/6/14.
 */
$(function() {
    $('.banner').unslider({
        speed: 500,
        delay: 3000,
        fluid: true
    });
    //顶部导航
    $("#btn1").click(function(){
        $("body").animate({scrollTop:$('.profile').offset().top},300);
    });
    $("#btn2").click(function(){
        $("body").animate({scrollTop:$('.platform').offset().top - '100'},300);
    });
    $("#btn3").click(function(){
        $("body").animate({scrollTop:$('.shows').offset().top - '100'},300);
    });
    $("#btn4").click(function(){
        $("body").animate({scrollTop:$('.contact').offset().top - '100'},300);
    });
    $(window).scroll(function(){
        var s = $('body').scrollTop();
        if( s < $('.banner').offset().top){
            $('.fixed').css('display','none');
        }else if(s < $('.profile').offset().top){
            $('.fixed').css('display','block');
        }else if( s +100< $('.platform').offset().top){
            $('.fixed').css('display','block');
            $('#btn1').css('background-color','#686868')
            $('#btn2,#btn3,#btn4').css('background-color','#ff7f00')
        }else if(s+100< $('.shows').offset().top){
            $('.fixed').css('display','block');
            $('#btn2').css('background-color','#686868')
            $('#btn1,#btn3,#btn4').css('background-color','#ff7f00')
        }else if(s+100 < $('.contact').offset().top) {
            $('.fixed').css('display', 'block');
            $('#btn3').css('background-color', '#686868')
            $('#btn2,#btn1,#btn4').css('background-color','#ff7f00')
        }else {
            $('.fixed').css('display', 'block');
            $('#btn4').css('background-color', '#686868')
            $('#btn2,#btn3,#btn1').css('background-color','#ff7f00')
        }
    })


    //查看大图
    $('.shows-img .img-item').click(function(){
        var src = $(this).find('img').attr('data-src');
        $('.big-img-box').show().find('img').attr('src',src);
        setTimeout(function(){
            $('.big-img-box .big-img-inner').addClass('show');
        },0);
        $('body').animate({scrollTop: 2814},500);
    });
    //收起大图
    $('.big-img-box').click(function(){
        $('.big-img-box').hide();
        $('.big-img-box .big-img-inner').removeClass('show');
        return false;
    });
});