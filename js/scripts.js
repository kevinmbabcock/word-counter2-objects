$(document).ready(function() {
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


      var keyWords = Object.keys(countedWords);
      var valueNumbes = Object.values(countedWords);
      for (index=0; index < keyWords.length; index++) {
        $("#list").append("<li>" + keyWords[index] + ", " + valueNumbes[index] + "</li>");
      }



    $(".wordsList").show();
  });
});
