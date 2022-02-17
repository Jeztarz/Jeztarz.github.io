function askMyName() {
  const name = prompt("What is you name");// เรียกใช้คำสั่ง prompt เพื่อถามชื่อ https://www.w3schools.com/jsref/met_win_prompt.asp
  if (name != null) {
     document.getElementById("myName").innerHTML = "Hi ! " + name;
  }
}

function helloWorld() {
const h1message = document.getElementById("myName").innerHTML;// ใช้คำสั่ง document.getElementById เหมือนใน askMyName เพื่อเอาข้อความใน h1 มาใส่
  alert(h1message + " ขับเร็วว่าแดกม้า ขับช้าว่าหมาไม่แดก");
}