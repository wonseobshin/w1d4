// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(element){
    if(element === "Waldo"){
      // console.log(element);
      // console.log(typeof(element));
      found();
    }
  })
}

function actionWhenFound() {
  console.log("Found him!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);