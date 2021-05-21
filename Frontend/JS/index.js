const docHtml = document.getElementById("main");
fetch("http://localhost:3000/api/cameras")
.then(Response => Response.json())
.then(data => {
console.log(data);
    console.log(data[0]);
    console.log(data[0].name);
    let camera = document.createElement("h2")
    camera.textContent = data[0].name;
    docHtml.appendChild(camera);
})
