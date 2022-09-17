//Variables
const btn = document.querySelector("button");

//Event Listeners
btn.addEventListener("click", apiRequest);

//Function
async function apiRequest() {
  const breadName = document.querySelector("input").value;
  const h2 = document.querySelector("h2");
  const p = document.querySelector("p");

  try {
    const response = await fetch(
      `https://bread-recipes-api.herokuapp.com/api/${breadName}`
    );

    const data = await response.json();
    console.log(data);
    h2.innerText = data.breadName;
    p.innerText = data.ingredients;
  } catch (error) {
    console.log(error);
  }
}
