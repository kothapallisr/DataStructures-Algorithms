function likes(names){
  switch(names.length) {
    case 0:
      return `No one likes this`;
      break;
    case 1:
      return `${names[0]} likes this`;
      break; 
    case 2:
      return `${names[0]} and ${names[1]} like this`;
      break;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
      break;
  }
  if(names.length > 3) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others this`;
  }
}

console.log(likes([]));
console.log(likes(["Sai"]));
console.log(likes(["Sai", "Sarath"]));
console.log(likes(["Sai", "Sarath", "Suhas"]));
console.log(likes(["Sai", "Sarath", "Deiter", "Walsh"]));
console.log(likes(["Sai", "Sarath", "Frank", "Reuben", "Gerard", "Suhas"]));