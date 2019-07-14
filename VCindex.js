function findTheWinner() {

  var box = document.querySelector("textarea");
  var peopleList = box.value;
  var people = peopleList.split('\n');

  var peopleListWithoutDuplication = [...new Set(people)];

  console.log(peopleListWithoutDuplication);

  var numberOfPeople = people.length;

  var randomNumber = Math.random();
  indexOfWinner = Math.floor(randomNumber * numberOfPeople);

  var winner = people[indexOfWinner];

  // console.log(winner);
  alert("The winner is " + winner);

}
