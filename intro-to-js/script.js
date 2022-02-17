function askMyName() {
  const name = prompt("Enter your name");
 
  if (name != null) {
    document.getElementsById("name").innerHTML = "My name is " + name;
  }
}

function helloWorld() {
  const h1message = document.getElementById('name').innerHTML;
     alert('ขับเร็วว่าแดกม้า ขับช้าว่าหมาไม่แดก')
  }