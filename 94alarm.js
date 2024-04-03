function play() {
    console.log("Audio played");
    var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
    audio.play()
}

function playWrapper() {
    setTimeout(() => {
        play();
    }, 2000);
}