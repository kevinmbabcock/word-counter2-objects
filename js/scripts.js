$(document).ready(function() {

  var words= [];

  $("form#inputItem").submit(function(event) {
    event.preventDefault();
    var userSentence = $("#sentence").val();
    var words = userSentence.split(" ");

    var countedWords = words.reduce(function (allWords, word) {
      if (word in allWords) {
        allWords[word]++;
      }
      else {
        allWords[word] = 1;
      }
      return allWords;
    }, {});

    // tutaj trzeba dodac metode na obiekcie ktora wyswietli elementy obiektu jako liste




  });
});
