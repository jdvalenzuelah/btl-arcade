const gameConfig=loadConfig("scream",config);let permission=!1;const screens={start:"START",playing:"PLAYING",win:"WIN"};let gameScreen=screens.start;document.addEventListener("keyup",(e=>{switch(e.code){case"KeyS":gameScreen==screens.start&&(console.log("Pressed Start"),startListening(),showGameScreen(),setInterval(playGame,50));break;case"KeyR":gameScreen==screens.start?window.location="/":reset_game();break;case"KeyP":configurator()}}));let showGameScreen=function(){show("game_container"),hide("start_container"),hide("win_container")},playGame=function(){gameScreen=screens.playing,imageWidthPerc=Math.min(1,getThrPercReached()),console.log(`imageWidthPerc: ${imageWidthPerc}`),fillerImage=document.getElementById("filler"),imageWidth=gameConfig.visuals.fillerMaxWidth*imageWidthPerc,textIndicator=document.getElementById("filler_text"),textIndicator.textContent=`${Math.round(110*imageWidthPerc)}%`,fillerImage.style.width=`${imageWidth}px`,100*imageWidthPerc>=gameConfig.game.winThreshold&&win_game()},win_game=function(){gameScreen=screens.win,hide("start_container"),hide("game_container"),show("win_container"),setTimeout(reset_game,gameConfig.game.winTimeoutMs)},reset_game=function(){location.reload()},startListening=function(){permission||(console.log("Getting user media"),permission=!0,navigator.mediaDevices.getUserMedia({audio:!0}).then(listenAudio).catch(handleAudioNotAllowed),AudioContext=window.AudioContext||window.webkitAudioContext,audioContent=new AudioContext)};function hide(e){document.getElementById(e).setAttribute("style","display: none;")}function show(e){document.getElementById(e).setAttribute("style","")}
//# sourceMappingURL=index.d9dd46ef.js.map
