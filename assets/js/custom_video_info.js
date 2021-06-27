$('#reel-list a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
});

var guiltyGear = "Song name: \"Fight Fight Fight\"<br><br>This is a horizontal re-sequencing event. The radio sounding intro will loop indefinitely until a flag just before the \"Fight\" announcement and the song will start proper. It loops with randomized multi-instruments to give it a lot of variety, but the chorus remains the same. Once the fight is over, it will transition to the end to ring out a belting drop B power chord.";
var crimsonClover = "Song name: \"Danmaku\"<br><br>Shmups and bullet hells usually travel at a fixed rate through a level, so I composed this as a fast hard hitting linear metalcore event.";
var dusk = "Song name: \"Dusk to Dusk\"<br><br>This is another horizontal re-sequencing event using the state the player is currently in. The music will change depending on the state the player finds themselves in. This includes:<br>  • No enemies nearby, undetected<br>  • Enemies nearby, undetected<br>  • Some aggravated enemies nearby, detected<br>  • Lots of enemies nearby, detected<br>  • Enemies not nearby, detected";
var soulCalibur = "Song name: Swords & Souls<br><br>A horizontal resequencing event with some vertical layering. This song began as a metal cover of a public domain classic Chinese song Chun Jiang Hua Yue Ye, (春江花月夜, 琵琶曲) being played on a yueqin. Similarly to \"Fight Fight Fight\", there is a well-timed looping intro to take starting animation and skips into consideration. Uniquely, this song will fade in taiko drums if one player is one round away from winning and will subtly boost the volume 2dB if one player is one round away from a perfect victory.";
var outro = "Thank you for watching. Please feel free to <a href='/contact'>contact me</a> if you have any and all questions relating to my content, services, or if you want an argument over which is the best Resident Evil.<br><br>Oh, I can also compose chiptune and mix it with metal, if that tickles your boat.";

var active_player = $('a.nav-link.active').attr('href');
var player1 = videojs("jsPlayer1");
var player2 = videojs("jsPlayer2");

player1.on('timeupdate', function() {
    console.log("Player1 update");

    seconds = player1.currentTime();
    if(seconds > 10 && seconds < 30) {
        document.getElementById("more_info1").innerHTML = guiltyGear;  
    }
    if(seconds > 30 && seconds < 54) {
        document.getElementById("more_info1").innerHTML = crimsonClover;  
    }
    if(seconds > 55 && seconds < 79) {
        document.getElementById("more_info1").innerHTML = dusk;  
    }
    if(seconds > 79 && seconds < 103) {
        document.getElementById("more_info1").innerHTML = soulCalibur;  
    }
    if(seconds > 103) {
        document.getElementById("more_info1").innerHTML = outro;  
    }
});

player2.on('timeupdate', function() {
    console.log("Player2 update");

    seconds = player2.currentTime();
    if(seconds > 10 && seconds < 30) {
        document.getElementById("more_info2").innerHTML = guiltyGear;  
    }
    if(seconds > 30 && seconds < 54) {
        document.getElementById("more_info2").innerHTML = crimsonClover;  
    }
    if(seconds > 55 && seconds < 79) {
        document.getElementById("more_info2").innerHTML = dusk;  
    }
    if(seconds > 79 && seconds < 103) {
        document.getElementById("more_info2").innerHTML = soulCalibur;  
    }
    if(seconds > 103) {
        document.getElementById("more_info2").innerHTML = outro;  
    }
});

 //document.getElementById("more_info").style.height = document.getElementById("jsPlayer").scrollHeight;

 $(".vjs-big-play-button").on("mouseover", function() {
    $(this).animate({height: '+=20px'},500);
});
$(".vjs-big-play-button").on("mouseout", function() {
    $(".vjs-big-play-button").stop();
    $(this).animate({height: '-=20px'},500);
});