function ballCollector(detritus) {
  let sack = {
  weight: 0}
  for (i = 0; i < detritus.length; i++){
    if (detritus[i] === 58){
    sack.weight += 58} 
  }
  return sack
}