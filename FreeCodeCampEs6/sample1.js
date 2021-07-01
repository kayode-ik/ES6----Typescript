function checkObj(obj, checkProp) {
    // Only change code below this line
    let result = " ";
    if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
    } else {
      return "Not Found"
    }
    return "Change Me!";
    // Only change code above this line
  }
  
  const show = checkObj({
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
  }, "gift");
  
  console.log(show);