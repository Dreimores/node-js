export function hasCorrectEmail(str) {
  return /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,}$/.test(str);
}
export function hasUppercase(str){
  return /[A-Z]/.test(str);
}