// poem
var words=[
    '小琦最厉害',
    '小琦是最棒的',
    '别说我写的尬！',
    '以后一定是音乐高手',
    '吉他太好听了吧',
    '美美美',
    '多说点话',
    '多吃点好吃的',
    '催更催更催更',
    '要天天开心',
    '希望你周围都是很好的朋友',
    '我一直在哦',
    '你在干嘛',
    '哈哈哈',
    '一闪一闪亮晶晶',
    '努力成为你想成为的人',
    '加油',
    '记住了',
    '给我弹岁月神偷',
    '希望你永远无忧无虑',
    '相信自己',
    '你是最棒的',
    '不知道写什么了开始发癫',
    '你是最闪耀的',
    '你也太棒了吧',
    '遇到你真好',
    '好好做自己',
    '明月几时有',
    '把酒问青天',
    '不知天上宫阙',
    '今夕是何年',
    '我欲乘风归去',
    '又恐琼楼玉宇',
    '高处不胜寒',
    '起舞弄清影',
    '何似在人间',
    '转朱阁',
    '低绮户',
    '照无眠',
    '不应有恨',
    '何事长向别时圆？',
    '人有悲欢离合',
    '月有阴晴圆缺',
    '此事古难全',
    '但愿人长久',
    '千里共婵娟',
    '希望你学业有成',
    '希望你万事顺遂',
    '希望你顺风顺水',
    '希望你可以得到自己想要的',
    '希望我一直在',
    '飘动的你能看见每一句吧',
    '估计你看不到',
    '能不能偷偷骂你两句',
    '哈哈哈还是算了',
    '希望你天黑有灯',
    '希望你下雨有伞',
    '望你心中所想',
    '皆能如愿',
    '愿你三冬暖',
    '愿你春不寒',
    '岁月是一场有去无回的旅行',
    '好的坏的都是风景',
    '不要悲伤',
    '不要emo',
    '你是最好的',
    '真的'
];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let texttwo = document.querySelector('.texttwo').querySelector('h1');
      let textthree = document.querySelector('.textthree').querySelector('h1');

      setTimeout(function(){
        textone.innerHTML = '今晚，整片星空将为你一人闪烁';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体'
          texttwo.style.color = '#E8F9FD';
          texttwo.style.fontFamily = '楷体'
          textthree.style.color = '#E8F9FD';
          textthree.style.fontFamily = '楷体'
          texttwo.innerHTML = '';
      },28000)
      setTimeout(function(){
        textone.innerHTML = '东风夜放花千树';
        texttwo.innerHTML = '更吹落';
        textthree.innerHTML = '星如雨';
      },112500)


 
