let gameListVisible=!0;function toggleGameList(){gameListVisible?(hide("list-container"),gameListVisible=!1):(show("list-container"),gameListVisible=!0)}function hide(e){document.getElementById(e).setAttribute("style","display: none;")}function show(e){document.getElementById(e).setAttribute("style","")}document.addEventListener("keyup",(e=>{switch(e.code){case"KeyE":document.location="./catch/index.html";break;case"KeyA":document.location="./kick/index.html";break;case"KeyB":document.location="./juggle/index.html";break;case"KeyC":document.location="./scream/index.html";break;case"KeyD":document.location="./trivia/index.html";break;case"KeyS":toggleGameList()}}));
//# sourceMappingURL=index.2f7c194b.js.map
