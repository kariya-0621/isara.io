$(function(){
  /*クリックイベントを使います！boxを押すと以下の内容
  が適用されます。*/
   $('.sp-box').click(function() {
    /*この下の代入でクリックしたものに適応される
    これ無いと、押したら全部に適用される、thisは、クリック
    されたboxを表します。*/
    var $answer = $(this).find('.sp-box-text2');
    /*解説*/
    /*もし、クリックした箱のtextがopenクラスを持っていたら、
    クリックした箱のtextのopenを除去して、本来隠れている部分
    スライドさせて+に戻す*/
    if($answer.hasClass('open')) {
      　$answer.removeClass('open');
      　$answer.slideUp();
      　$(this).find('span').text('+');
     }　else {
     /*もし、クリックした箱のtextがopenクラスを持っていないのなら、
   　いったんすべての＋ーを＋に戻す。そしていったん全部
   　隠す、スライド上げる。んで、全部のopen取り除いて帳尻
   　合わせる。つまり、初期状態にもどす。
   　そして、クリックした箱のtextにopenクラスを与え、クリック
   　した箱の隠れている部分を表示させ、＋をーに変える。*/
        $('.sp-box').find('span').text('+');
        $('.sp-box-text2').slideUp();
        $('.sp-box-text2').removeClass('open');
      　$answer.addClass('open');
      　$answer.slideDown();
      　$(this).find('span').text('-');
     }
 /*ここで、勘違いしやすいのはhasClass,addclass,removeclass
 の扱い方！これ勘違いすると結構つまずく。今回でゆうところの、open
 に注意。openはただの指標ってことに注意。openがあるから、スライドされる、
 openがあるから、＋がーに変化するってわけじゃない。
 正しくは、openがあるからelse前の操作を実行する。
 openがないからelse後の操作を実行する、これが正しい。
 openがあるからーー、openがないからーーは、cssとの組み合わせの
 時の意味です。
 */

   });




/*19枚目のスライドについて、途中でhtmlにboxboxの
divを挟んだ。理由としては、変数代入の時text2がbox
の中に入っていないから、それを囲うboxboxで調整。*/
    $('.boxbox').click(function() {
    var $answers = $(this).find('.nineteen-isara-box-text2');

    if($answers.hasClass('open')) {
      　$answers.removeClass('open');
      　$answers.slideUp();
      　$(this).find('span').text('+');
     }　else {
      　$answers.addClass('open');
      　$answers.slideDown();
      　$(this).find('span').text('-');
     }
   });

/*最後に右下の□を作る。*/
$(window).scroll(function (){
// 最上部から現在位置までの距離を取得して、変数[now]に格納
var now = $( window ).scrollTop() ;

// 最上部から現在位置までの距離(now)が1500px以上だったら
if( now > 50 )
{
  // [#page-top]をゆっくりフェードインする
  $( '#page-top' ).fadeIn( "slow" ) ;
}

// 1500px以下だったら
else
{
  // [#page-top]をゆっくりフェードアウトする
  $( '#page-top' ).fadeOut( 'slow' ) ;
}
  });
 /*この下にスクロールの機能を追加していきます*/

  $('#page-top').click(function(){
    $('html, body').animate({
       'scrollTop': 0
    },800);

});

  /*headerからお問い合わせhomeに移動させます。*/
 /*ナビゲーションのクリック時スクロール*/
$('.header-right a').click(function(){            
   var id = $(this).attr('href');            
   var position = $(id).offset().top;            
   $('html, body').animate({            
     'scrollTop': position             
   }, 500);            
 });



  

});

