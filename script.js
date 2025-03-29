// Hello Module
var helloSpeaker = (function () {
    var speakWord = "Hello";
    
    function speak(name) {
        console.log(speakWord + " " + name);
    }

    return {
        speak: speak
    };
})();

// Goodbye Module
var goodbyeSpeaker = (function () {
    var speakWord = "Goodbye";

    function speak(name) {
        console.log(speakWord + " " + name);
    }

    return {
        speak: speak
    };
})();

// Main Execution
(function () {
    var names = ["John", "Paul", "Jen", "Mary", "Jason", "Frank", "Larry", "Jim", "Liam"];

    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();

        if (firstLetter === 'j') {
            goodbyeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
