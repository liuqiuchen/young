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

    //���ֵĲ�������ͣ
    music.addEventListener('click', function () {
        if(!audio.paused){//����״̬
            audio.pause();
            this.setAttribute('class', '');
        }else if(audio.paused){
            audio.play();
            this.setAttribute('class', 'active');
        }

    }, false);

    //��ҳЧ��
    page1.addEventListener('touchstart', function () {
        this.style.display = 'none';
        page2.style.display = 'block';
    },false);
};
















