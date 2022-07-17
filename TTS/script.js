texbox.addEventListener('click', function () {
    var speech = true
    window.SpeechRecognition = window.webkitSpeechRecognition

    const Rec = new SpeechRecognition()

    Rec.interimResults = true

    if(speech == true){
        Rec.start()
    }
})