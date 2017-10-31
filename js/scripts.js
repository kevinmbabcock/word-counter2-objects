$(document).ready(function() {
  $("form#inputItem").submit(function(event) {
    event.preventDefault();
    var userSentence = $("#sentence").val();
    var words = userSentence.split(" ");

    var countedWords = words.reduce(function (allWords, word) {
      if (word in allWords) {
        console.log(allWords);
        allWords[word]++;
      }
      else {
        allWords[word] = 1;
      }
      //console.log(allWords);
      return allWords;
    },
    {});

      var keyWords = Object.keys(countedWords);
      var valueNumbers = Object.values(countedWords);
      for (index=0; index < keyWords.length; index++) {
        $("#list").append("<li>" + keyWords[index] + ", " + valueNumbers[index] + "</li>");
      }

    $(".wordsList").show();
  });
});
