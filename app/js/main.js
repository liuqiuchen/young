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
        this.style.display = 'none';
        page2.style.display = 'block';
    },false);
};
















