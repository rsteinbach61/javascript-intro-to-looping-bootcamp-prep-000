function forLoop(arr){
  for (let i = 0; i < 25; i++){
      arr.push(`I am ${i} strange loops.`)
    }
    return arr
}

function whileLoop(x){
  while (x > 0){
    console.log(x--)
  }
  return 'done'
}
function doWhileLoop(arr){
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  do{
    arr.shift()
  }while (arr.length >0 && maybeTrue())
  return arr
}
