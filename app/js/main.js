/**
 * Created by Administrator on 2016/3/24.
 */
var $ = function (Id) {
    return document.getElementById(Id);
};
window.onload = function() {

    var music = $('music');
    var audio = $('audio');
    var page1 = $('page1');
    var page2 = $('page2');
    var page3 = $('page3');

    //音乐的播放与暂停
    music.addEventListener('click', function () {
        if(!audio.paused){//播放状态
            audio.pause();
            this.setAttribute('class', '');
        }else if(audio.paused){
            audio.play();
            this.setAttribute('class', 'active');
        }

    }, false);

    //翻页效果
    page1.addEventListener('touchstart', function () {
        //触摸屏幕的时候，第一页隐藏
        this.style.display = 'none';
        //第二页显示
        page2.style.display = 'block';
        //第三页显示，但是坐标在-100%的位置，看不到
        page3.style.display = 'block';

        //5秒后执行：第二页fadeOut，改变第三页的位置(从底往上上来)，第三页显示
        setTimeout(function () {
            page2.setAttribute('class', 'page fadeOut');
            page3.style.top = '0';
        }, 5000);
        

    },false);
};
















