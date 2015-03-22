'use strict';

var getVoice = function filterVoice(q){
    q = q || "Veena"; // Indian Voice ;)
    return (speechSynthesis.getVoices()
            .filter(function(v) {
                    return v.name.toUpperCase() === q.toUpperCase() || 
                           v.lang.toUpperCase() === q.toUpperCase()
                    })
           )[0];
}

var talk = function (msg, voiceType){
    var person = new SpeechSynthesisUtterance(msg);
    person.voice = getVoice(voiceType);
    speechSynthesis.speak(person);
}


talk.names = speechSynthesis.getVoices()
             .map(function(s) {
                return s.name;
             });

talk.langs = speechSynthesis.getVoices()
             .map(function(s) {
                return s.lang;
             }).reduce(function(prev, cur) {
                return (prev.indexOf(cur) < 0) ? prev.concat([cur]) : prev;
             }, []);

module.exports = talk;