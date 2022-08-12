
module.exports = 
function check(str, bracketsConfig) {
  let copyBC = [].concat(bracketsConfig);
  let strBracket = '';
  let findBracket = false; 
  for (let index = 0; index < copyBC.length; index++) {
    const element = copyBC[index];
    strBracket = element[0] + element[1];
      while (str.indexOf(strBracket) != -1) {
        str = str.replace(strBracket,'');
        findBracket = true;
      }
      if (findBracket) {          
        index = -1;
        findBracket = false;
      };
  }
  return str.length === 0;
}

