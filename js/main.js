$(function(){

  // beutifull

  addNavLinks();

  addFooter();

  bindBtns();

  centerContactPage();

  //addTooltips();

  function addFooter() {
    $(".footer .rights").load("footer.html");
  }

  function bindBtns() {

    $("#menu_icon").click(toggleMenu);

  }

  function toggleMenu(e) {
    e.preventDefault(); // this is so the # doesn't show up in the address bar
    $("header nav ul").toggleClass("show_menu");
    $("#menu_icon").toggleClass("close_menu");
  }

  function centerContactPage() {
    var hw = $('header').width() + 50;
    var mw = $('#map').width();
    var wh = $(window).height();
    var ww = $(window).width();

    $('#map').css({
      "max-width" : mw,
      "height" : wh
    });

    if(ww>1100){
      $('#map').css({
        "margin-left" : hw
      });
    }
  }

  function addTooltips() {
    $("a").mouseover(onMouseOverTooltip);
    $("a").mouseover(onMouseOutTooltip);

  }

  function onMouseOverTooltip() {
    var attr_title = $(this).attr("data-title");

    if( attr_title == undefined || attr_title == "") return false;

    $(this).after('<span class="tooltip"></span>');

    var tooltip = $(".tooltip");
    tooltip.append($(this).data('title'));


    var tipwidth = tooltip.outerWidth();
    var a_width = $(this).width();
    var a_hegiht = $(this).height() + 3 + 4;

    //if the tooltip width is smaller than the a/link/parent width
    if(tipwidth < a_width){
      tipwidth = a_width;
      $('.tooltip').outerWidth(tipwidth);
    }

    var tipwidth = '-' + (tipwidth - a_width)/2;
    $('.tooltip').css({
      'left' : tipwidth + 'px',
      'bottom' : a_hegiht + 'px'
    }).stop().animate({
      opacity : 1
    }, 200);
  }

  function onMouseOutTooltip() {
    var tooltip = $(".tooltip");
    tooltip.remove();
  }

  function addNavLinks() {

    // If the nav btns are not found, skip this function
    if ( $('.work_nav a.previous').length === 0)  return;

    var myPages = [
      '/showreel.html',
      '/opengl.html',
      '/cosmic_cadence.html',
      '/vine_venture.html',
      '/mindfork.html',
      '/jelly_journey.html',
      '/flocking_ai.html',
      '/hexfall.html',
      '/all_systems_go.html',
      '/about_me.html',
      '/dissertation.html'
    ];

    var currPage = location.pathname;

    var currIndex = myPages.indexOf(currPage);

    var prev = currIndex - 1;
    if (prev === -1 ) prev = myPages.length-1;
    var next = currIndex + 1;
    if (next === myPages.length ) next = 0;

    // You can later add the modulos thing so it loops itself
    $('.work_nav a.previous').attr('href', myPages[prev] );
    $('.work_nav a.next').attr('href', myPages[next] );

  }


});
