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
        //������Ļ��ʱ�򣬵�һҳ����
        this.style.display = 'none';
        //�ڶ�ҳ��ʾ
        page2.style.display = 'block';
        //����ҳ��ʾ������������-100%��λ�ã�������
        page3.style.display = 'block';

        //5���ִ�У��ڶ�ҳfadeOut���ı����ҳ��λ��(�ӵ���������)������ҳ��ʾ
        setTimeout(function () {
            page2.setAttribute('class', 'page fadeOut');
            page3.style.top = '0';
        }, 5000);
        

    },false);
};
















