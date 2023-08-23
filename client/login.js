document.getElementById("loginButton").addEventListener("click", function() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  console.log(username);
  console.log(password);

  // window.localStorage.setItem("my")

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:8082/users");
  xhr.setRequestHeader("Content-Type" , "application/json");
  xhr.setRequestHeader("Access-Control-Allow-Origin" , "*");

  xhr.onreadystatechange = () => {
    if(xhr.readyState == 4 && xhr.status == 200)
    {
      res=JSON.parse(xhr.responseText)
      console.log(res);
      for(let i=0;i<res.length;i++)
      {
          if (res[i].username==username && res[i].password==password) 
          {
              document.getElementById('messages').innerHTML="success";
              window.location.href="http://127.0.0.1:5500/spotify%20clone/index.html";
              
          }
          if(res[i].username!=username && res[i].password!=password)
          {
              document.getElementById('messages').innerHTML="incorrect";
              
          }
      }
    }
  }

  xhr.send();
})