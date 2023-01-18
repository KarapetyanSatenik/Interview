function parameterScope(a, cb = ()=>a){
   var a = 12
  return cb()
}


console.log(parameterScope(13)) 