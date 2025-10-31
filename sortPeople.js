var sortPeople = function(names, heights) {
 
  let people = names.map((name, index) => [name, heights[index]]);

  people.sort((a, b) => b[1] - a[1]);

  return people.map(person => person[0]);
};

console.log(sortPeople(["Mary","John","Emma"],[180,165,170]));
