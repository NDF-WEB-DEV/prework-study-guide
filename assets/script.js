//declaring the varaible to hold the list of values
var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

//Decalring the value to generate the random selection by using the Math function
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

//iteration of the list using a for loop
function listTopics() {
    for (var x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}

//Depending on random results of line 5 - selecting the random topic value
function selectTopic(){
    if (randomTopic === 'HTML') {
    console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
    console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
    console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
    console.log("Let's study JavaScript!");
    } else {
    console.log('Please try again!');
    }
   }
/* THIS IS THE PART THAT PRINTS */   
//Explaining the list of topics learned
console.log('Here are the topics we learned thrugh Prework');

//Listing the list of topics from the function on line 8   
listTopics();

//Adding question for better UX
console.log('Which topic should we study first?');

//Printing the results of the random selection function
selectTopic();
