//https://jsonplaceholder.typicode.com/posts
//adlistener click llama funcion que va consumir api 200 o 404
let btn = document.querySelector("#boton");
const getDatos = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  try {
    const response = await fetch(url);
    //console.log("Response: ", response);
    if (response.status !== 404) {
      const datos = await response.json();
      let resultado = document.querySelector("#post-data");
      resultado.innerHTML = "<ul>";
      for (let x of datos) {
        resultado.innerHTML += `<li><b>${x.title}</b>
      <p>${x.body}</p></li>`;
      }
      resultado.innerHTML += "</ul>";
    } else {
      throw new Error("404!!!");
    }
  } catch (err) {
    alert(err);
  }
};
//Recibimos clic del boton
btn.addEventListener("click", function (event) {
  event.preventDefault();
  getDatos();
});
