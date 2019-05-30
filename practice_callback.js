var print = console.log;
print('foo')

function foo(){
  print('foo')
}
function foo(){
  print('foo')
}
function foo(){
  print('bar')
}

var foo = function(){
  print('foo')
}