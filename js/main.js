//Variables
const btn = document.querySelector("button");

//Event Listeners
btn.addEventListener("click", apiRequest);

//Function
async function apiRequest() {
  const breadName = document.querySelector("input").value;

  try {
    const response = await fetch(
      `https://bread-recipes-api.herokuapp.com/api/${breadName}`
    );

    const data = await response.json();
    console.log(data);
    document.querySelector("h2").innerText = data.breadName;
  } catch (error) {
    console.log(error);
  }
}
