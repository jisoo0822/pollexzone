/* scroll시 이미지 나타나기 */
function view(){
  /* index(main) */
	const img = document.querySelectorAll('.cont_big>a');
	const img2 = document.querySelectorAll('.cont_small a');
  /* intro */
  const sec1 = document.querySelectorAll('.pollex_title>h3');
  const box1 = document.querySelectorAll('.pollex_txt>div');

  const icon1 = document.querySelectorAll('.about_img_box>div');

  const CIsec = document.querySelectorAll('.CIintro');
  const CIcolor = document.querySelectorAll('.color_box');

  const winTop = document.documentElement.scrollTop;
  
  img.forEach((i) => {
  	const imgTop = i.offsetTop-800;
    
    if( imgTop <= winTop )
    	i.classList.add('on')
  });

  img2.forEach((i) => {
    const imgTop2 = i.offsetTop+800;
    if( imgTop2 <= winTop )
        i.classList.add('on')
  });

  sec1.forEach((i) => {
    const secTop1 = i.offsetTop+1600;
    if( secTop1 <= winTop )
        i.classList.add('on')
  });

  box1.forEach((i) => {
    const boxTop1 = i.offsetTop+500;
    if( boxTop1 <= winTop )
        i.classList.add('on')
  });

  icon1.forEach((i) => {
    const iconTop1 = i.offsetTop+900;
    if( iconTop1 <= winTop )
        i.classList.add('on')
  });

  CIsec.forEach((i) => {
    const CIsecTop1 = i.offsetTop-200;
    if( CIsecTop1 <= winTop )
        i.classList.add('on')
  });
  CIcolor.forEach((i) => {
    const CIcolorTop1 = i.offsetTop-200;
    if( CIcolorTop1 <= winTop )
        i.classList.add('on')
  });

}

window.addEventListener('scroll', () => {
	view()
})


/* hover시 on 클래스 추가 */
$(".icon_txt").hover(function(){
    var num = $(".icon_txt").index(this);
    $(".icon_txt").removeClass("on");
    $(this).addClass("on");
    $(".cen_img").removeClass("on");
    $(".cen_img").eq(num).addClass("on");
    $(".cen_txt_item").removeClass("on");
    $(".cen_txt_item").eq(num).addClass("on");
});


// hover시 하위메뉴 

$('.top_m > li').mouseenter(function(){
  let menu_i = $(this).index();
  
  if(menu_i < 5) { //하단 바(빨간색) 이동으로 인해 index는 4 이하로 한정시킴

      $('.navList').css({ //모두 display:none 시킨 후 
          display:'none'
      }).eq($(this).index()).css({ // 해당 인덱스 넘버만 보여질 수 있도록 한다.
          display:'block'
      })
      $(this).addClass('on');
  }
});
$('.top_m > li').mouseleave(function(){
  let menu_i = $(this).index();

  if(menu_i < 5) {

      $('.navList').eq($(this).index()).css({
          display:'none'
      })
      $(this).removeClass('on');
  }
})

//menu_sub_pan : 100% 부분

$('.navList').mouseenter(function(){
  $('.navList').$(this).index().css({
      display:'block'
  })
})
$('.navList').mouseleave(function(){
  $('.navList').eq($(this).index()).css({
      display:'none'

  })
})