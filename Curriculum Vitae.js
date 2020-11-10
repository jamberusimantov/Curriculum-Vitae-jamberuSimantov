let date = new Date();
function twoDigitsTime(num) {
  if (num < 10) {
    num = `0${num}`;
  }
  return num;
}
function myTime(date) {
  let mytime = `${twoDigitsTime(date.getDate())}/${twoDigitsTime(date.getMonth() + 1)}/${date.getUTCFullYear()}`;
  return mytime;
}
function myDate(date) {
  let mydate = `${twoDigitsTime(date.getHours())}:${twoDigitsTime(date.getMinutes())}:${twoDigitsTime(date.getSeconds())}`;
  return mydate;
}
function OpenWindow() {
  document.getElementById("dropdown_content");
}
function CloseWindow() {
  document.getElementById("dropdown_content");
}
  // setInterval(myTime(date), 1000);

