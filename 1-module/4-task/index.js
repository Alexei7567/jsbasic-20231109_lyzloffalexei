function checkSpam(str) {
  str = str.toLowerCase()
  if(str.indexOf('1xbet') >= 0 || str.indexOf('xxxx') >= 0){
      return true
  }
  return false
}
