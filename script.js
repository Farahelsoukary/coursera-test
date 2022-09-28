(function () {

  var name = ["Yaakov", "John", "Jen", "Ziad", "Paul", "Frank", "Larry", "jake", "Laura", "Samuel"];

  for (var i = 0; i < name.length; i++) {

    var firstLetter = name[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      byeSpeaker.speak(name[i]);
    }
    else {
      helloSpeaker.speak(name[i]);
    }
  }

})();