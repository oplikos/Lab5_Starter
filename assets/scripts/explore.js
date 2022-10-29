// explore.js

window.addEventListener('DOMContentLoaded', init);
//sources used to implement this
//https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/getVoices
//https://stackoverflow.com/questions/8674618/adding-options-to-select-with-javascript
//https://javascript.plainenglish.io/how-to-easily-implement-text-to-speech-functionality-in-your-next-javascript-project-16f0d14432f0
//https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/getVoices
function init() {
    const speechSynthesisElement = window.speechSynthesis;
    //we tried this apprach but it didnt work and it look like is common issue in this 
    //no solution (the speech startes a bit delayed https://stackoverflow.com/questions/65090215/javascript-text-to-speech-is-delayed)
    setTimeout(100);
    //start of assigment
    setTimeout(
      function(){
        const voices = window.speechSynthesis.getVoices();
        //populating the names and languges into the list 
        for (let i = 0; i < voices.length; i++){
            let option = document.createElement('option');
            option.textContent = `${voices[i].name} (${voices[i].lang})`;
            document.getElementById('voice-select').appendChild(option);
        }
        document.querySelector('button').addEventListener('click', function(){
            let textToVoice = new SpeechSynthesisUtterance(document.getElementById('text-to-speak').value);
            textToVoice.voice = voices[document.getElementById('voice-select').value];
            speechSynthesisElement.speak(textToVoice);
          //we did a bit extra make the emoji look like hes talking :)
          setInterval(function(){
            setInterval(function(){
                if (speechSynthesisElement.speaking){
                document.querySelector('img').src = 'assets/images/smiling-open.png';
            }},0.2)
              setInterval(function(){
                if (speechSynthesisElement.speaking){
                document.querySelector('img').src = 'assets/images/smiling.png';
            }},0.2)
          }, 0.2)
        })
        if (!speechSynthesisElement.speaking){
        document.querySelector('img').src = 'assets/images/smiling.png';
        }
      }, 200);
    
}
