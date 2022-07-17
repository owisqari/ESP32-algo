const texbox = document.getElementById('textbox')
const startBtn= document.getElementById('start-btn');
startBtn.addEventListener('click', function () {
    var speech = true
    window.SpeechRecognition = window.webkitSpeechRecognition
    const Rec = new SpeechRecognition()
    Rec.interimResults = true
    Rec.addEventListener('result', e=>{
        const script = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.script)

        texbox.innerHTML = script
    })
    
    if(speech == true){
        Rec.start()
    }
})