/* Control placement of <h1> inside <section> tag --
 * in <header> section above <figure> in portrait mode,
 * in <article> section adjacent to <figure> in landscape.
 */

var portraitWidth = 1060;	// maximum width of portrait mode, as defined in @media in CSS
var oldWidth = portraitWidth;

function moveHeader() {
  var newWidth = $(window).width();
  if((newWidth <= portraitWidth && oldWidth <= portraitWidth)
    || (newWidth > portraitWidth && oldWidth > portraitWidth)) {
    // no change in ratio
    return;
  }
  
  if(newWidth > portraitWidth) {
    // changed from portrait to landscape
    $('#control-widget header h1').prependTo($('#control-widget article'));
  } else {
    // changed from landscape to portrait --
    // not currently working; needs to be debugged.
    $('#control-widget article h1').appendTo($('#control-widget header'));
  }
}

$(document).ready(function() {
  moveHeader();
});

$(window).resize(function() {
    moveHeader();
});