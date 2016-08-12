var autoclose = 0,
  autoclosetime = 15 * 60000;

function autoClose() {
  window.clearTimeout(autoclose);
  $("#left-win,#right-win").fadeOut();
  $("#breathelight").fadeIn();
}
$(function() {
  function init() {
    if (swiperParent) return;
    var swiperParent = new Swiper('.swiper-parent', {
      mode: 'vertical',
      paginationClickable: true,
      slidesPerView: 1,
      onSlideChangeStart: function(swiper) {
        $("#navBtn li:eq(" + swiper.activeIndex + ")").addClass('active').siblings().removeClass('active')
      }
    })
    var swiperNested1 = new Swiper('.swiper-nested-1', {
      paginationClickable: true,
      slidesPerView: 1,
      noSwiping : true
    })
    // var swiperNested2 = new Swiper('.swiper-nested-2', {
    //   pagination: '.pagination-nested-2',
    //   paginationClickable: true,
    //   slidesPerView: 1
    // })
    var swiperNested3 = new Swiper('.swiper-nested-3', {
      paginationClickable: true,
      slidesPerView: 1,
      onSlideChangeStart: function(swiper) {
        $(".zsrj-title").removeClass("mid")
        switch(swiper.activeIndex){
          case 0:
            $(".zsrj-title").text("Thermal Controls散热控制允许您通过在Active Thermals 主动散热 和 Active Venting 主动通风 中更改可用的设置，来控制计算机的散热和通风行为。")
            break;
          case 1:
            $(".zsrj-title").addClass("mid")
            $(".zsrj-title").text("AlienFx 能够让您控制计算机以及与计算机相连的 AlienFX 兼容设备的发光行为。")
            break;
          case 2:
            $(".zsrj-title").text("AlienFusion 提供对计算机上的电源管理控件的访问，并使您可以更改、创建和自定义电源计划以帮助提高能效。")
            break;
          case 3:
            $(".zsrj-title").addClass("mid")
            $(".zsrj-title").text("AlienAdrenaline 使您可以用预定义的系统环境和操作来启动游戏。")
            break;
          case 4:
            $(".zsrj-title").addClass("mid")
            $(".zsrj-title").text("OC Contrls使您可以通过图形化界面，控制Area-51至尊处理器超频功能。")
            break;
          default:
            break;
        }
      }
    })
    var swiperNested4 = new Swiper('.swiper-nested-4', {
      pagination: '.pagination-nested-4',
      paginationClickable: true,
      slidesPerView: 1,
      prevButton:'.sbp-4',
      nextButton:'.sbn-4'
    })
    var swiperNested5 = new Swiper('.swiper-nested-5', {
      pagination: '.pagination-nested-5',
      paginationClickable: true,
      slidesPerView: 1,
      prevButton:'.sbp-5',
      nextButton:'.sbn-5'
    })
    $("#navBtn li").on("mouseup touchend", function() {
      $(this).addClass('active').siblings().removeClass('active');
      swiperParent.swipeTo(parseInt($(this).index()))
    })
    $(".computerbar .computer").on("mouseup touchend", function() {
      $(".computerbar .computer").removeClass("turn")
      $(".computerbar .computer").removeClass("turn2")
      $(this).addClass('active').siblings().removeClass('active');
      if($(this).hasClass("alienware04")){
        $(this).siblings().addClass("turn")
      }
      if($(this).hasClass("alienware03")){
        $(this).siblings().addClass("turn2")
      }
      swiperNested1.swipeTo(parseInt($(this).index()))
    })
    $(".coverBtnBar .coverBtn").on("mouseup touchend", function() {
      $(this).addClass('active').siblings().removeClass('active');
      swiperNested3.swipeTo(parseInt($(this).index()))
    })
  }
  $("#breathelight img").on("click", function(e) {
    $("#breathelight").hide()
    $("#left-win,#right-win").show()
    window.clearTimeout(autoclose);
    autoclose = setTimeout(autoClose, autoclosetime);
    init()
  })
  $("body").on("click",function(){
    window.clearTimeout(autoclose);
    autoclose = setTimeout(autoClose, autoclosetime);
  })
})
