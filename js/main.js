
function main() {

(function () {
   'use strict';
   var videoPlayer = $("#video1-player");
   var currentTime = videoPlayer.currentTime;
   var guiltyGear = "Song name: \"Fight Fight Fight\"<br><br>This is a horizontal re-sequencing event. The radio sounding intro will loop indefinitely until a flag just before the \"Fight\" announcement and the song will start proper. It loops with randomized multi-instruments to give it a lot of variety, but the chorus remains the same. Once the fight is over, it will transition to the end to ring out a belting drop B power chord.";
   var crimsonClover = "Song name: \"Danmaku\"<br><br>Shmups and bullet hells usually travel at a fixed rate through a level, so I composed this as a fast hard hitting linear metalcore event.";
   var dusk = "Song name: \"Dusk to Dusk\"<br><br>This is another horizontal re-sequencing event using the state the player is currently in. The music will change depending on the state the player finds themselves in. This includes:<br>  • No enemies nearby, undetected<br>  • Enemies nearby, undetected<br>  • Some aggravated enemies nearby, detected<br>  • Lots of enemies nearby, detected<br>  • Enemies not nearby, detected";
   var soulCalibur = "Song name: Swords & Souls<br><br>A horizontal resequencing event with some vertical layering. This song began as a metal cover of a public domain classic Chinese song Chun Jiang Hua Yue Ye, (春江花月夜, 琵琶曲) being played on a yueqin. Similarly to \"Fight Fight Fight\", there is a well-timed looping intro to take starting animation and skips into consideration. Uniquely, this song will fade in taiko drums if one player is one round away from winning and will subtly boost the volume 2dB if one player is one round away from a perfect victory.";
   var outro = "Thank you for watching. Please feel free to <a href='/contact'>contact me</a> if you have any and all questions relating to my content, services, or if you want an argument over which is the best Resident Evil.<br><br>Oh, I can also compose chiptune and mix it with metal, if that tickles your boat.";

   $("a[data-toggle='tab']").on("shown.bs.tab", function (e) {
    var target = $(e.target).attr("href"); // activated tab
    if (target === "#video2") {
      $("#video1-player")[0].pause();
      currentTime = $("#video1-player")[0].currentTime;
      $("#video2-player")[0].currentTime = currentTime;
      $("#video2-player")[0].play();
      videoPlayer = $("#video2-player");
    } else {
      $("#video2-player")[0].pause();
      currentTime = $("#video2-player")[0].currentTime;
      $("#video1-player")[0].currentTime = currentTime;
      $("#video1-player")[0].play();
      videoPlayer = $("#video1-player");
    }
  });

  videoPlayer.on('timeupdate', function() {
    currentTime = videoPlayer[0].currentTime;
    console.log("[VIDEO PLAYER]: " + currentTime);

    if(currentTime > 10 && currentTime < 30) {
      document.getElementById("more_info").innerHTML = guiltyGear;  
    }
    if(currentTime > 30 && currentTime < 54) {
        document.getElementById("more_info").innerHTML = crimsonClover;  
    }
    if(currentTime > 55 && currentTime < 79) {
        document.getElementById("more_info").innerHTML = dusk;  
    }
    if(currentTime > 79 && currentTime < 103) {
        document.getElementById("more_info").innerHTML = soulCalibur;  
    }
    if(currentTime > 103) {
        document.getElementById("more_info").innerHTML = outro;  
    }
  });
   
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

	// affix the navbar after scroll below header
$('#nav').affix({
      offset: {
        top: $('header').height()
      }
});	

	
  	// Portfolio isotope filter
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
	

    // Nivo Lightbox 
    $('.portfolio-item a').nivoLightbox({
            effect: 'slideDown',  
            keyboardNav: true,                            
        });
 

}());


}
main();