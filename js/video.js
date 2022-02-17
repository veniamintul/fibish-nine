let player;
const playerContainer =$('.player');

let eventsInit=function(){      //обработчики
  $(".player__start").click(function(event){
    event.preventDefault();

    const btn =$(event.currentTarget);

    if(playerContainer.hasClass('paused')){
      playerContainer.removeClass("paused");
      player.playVideo();
    }else{
      playerContainer.addClass("paused");
      player.playVideo();
    }

    
  })

}




function onYouTubeIframeAPIReady() {
  player = new YT.Player('yt-player', {
    height: '400',
    width: '660',
    videoId: 'qDY-VmgTI4k',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    },
    playerVars: {
      controls: 0,
      disablekb: 0,//управление клавиатурой
      showinfo: 0,
      rel: 0,  //рекомендации
      autoplay: 0,
      modestbranding: 0
    }
  });
}

eventsInit();


