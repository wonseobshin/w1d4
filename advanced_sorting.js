var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 4, name: "alex",     age: 30 },
  { id: 3, name: "alex",     age: 22 },
];

function customComparator(stu){
  var byNames = [];
  var byAge = [];


  arr.sort()

  byNames = stu.sort(function(a,b){
    if(a.name <= b.name){
      if(a.name === b.name){
        return a.age - b.age;
      }
      return false;
    }
    if(b.name < a.name){
      return true;
    }
  })

  // .sort(function(a, b){
  //   return a.age -b.age;
  // })

  // byAge = stu.sort(function(a, b){
  //   return a.age - b.age;
  // })

  console.log(byNames);

  // students.forEach(function(element){

  // })


}

customComparator(students);