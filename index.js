const displayDate = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((values) => showAllData(values));
};

const showAllData = (values) => {
  const countriesContainer = document.getElementById("all-countries");
  values.forEach((value) => {
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("country");
    countryDiv.innerHTML = `
    <h3> Name:${value.name.common}</h3>
    <p> Capital: ${value.capital ? value.capital[0] : "No capital"}</p>
    <button onclick="displayCountryDetail('${value.cca2}')"> Details </button>
    `;
    countriesContainer.appendChild(countryDiv);
  });
};

const displayCountryDetail = (code) => {
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  fetch(url)
    .then((res) => res.json())
    .then((info) => displayFlag(info[0]));
};

const displayFlag = (values) => {
  const imagePart = document.getElementById("image-part");
  imagePart .innerHTML = `
  <h1> Country Name:${values.name.common} </h1>
  <img src="${values.flags.png}" alt="" class="mb-5">

`;
imagePart.append(imagePart);

};

displayDate();
