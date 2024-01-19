let myName = prompt("Adınzı Giriniz!");

if (myName.length > 0 && myName[0] != " ") {
  document.querySelector("#myName").innerHTML = myName;
} else {
  alert("İsim Alanı Boş Olamaz!");
}

let myClock = document.querySelector("#myClock");

function showTime() {
  let now = new Date();
  let hour = now.getHours().toString();
  let minute = now.getMinutes().toString();
  let second = now.getSeconds().toString();

  myClock.innerHTML = `${hour}:${minute}:${second}`;
}

setInterval(showTime, 1000);
