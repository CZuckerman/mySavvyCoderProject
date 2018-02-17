function stringPrinter( starterString ){
  $('#output').text( starterString )
}


function funnySentence( noun, adjective, verb, adverb ){
  var sentence = "The " + adjective + " " + noun + " " + verb + " " + adverb + ".";
  stringPrinter(sentence);
};


var noun = [John, table, book, library, computer, egg, cereal, bacon, car, chocolate, building, grapefruit, charger, water, Chattanooga, day, New York, puppy, horse, pom-pom, Warren];

var adjective = [happy, grumpy, grouchy, hard, sad, voracious, red, brown, white, clear, cloudy, frosty, cold, hot, bearded, blonde, smart, silly, striped, funny, fruity, sneaky, slick];

var verb = [run, jump, sleep, eat, eating, working, talking, whispering, hide, drop, type, walk, crawl, dreaming, sleeping, apologize, sneak, climb, see, look at, bake, cook];

var adverb = [fast, slowly, quickly, randomly, swift, hungrily, sweetly, softly, properly, absentmindedly, scarcely, yearly, monthly, smartly, tenderly, coolly, madly, recently];
