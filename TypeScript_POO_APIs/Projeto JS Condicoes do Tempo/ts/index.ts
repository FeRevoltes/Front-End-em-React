const form = document.querySelector("#search-form > form");
const input: HTMLInputElement | null =
  document.querySelector("#input-location");
const myKey = 0;

const weatherInfos = document.querySelector("#weather-info");

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!input || !weatherInfos) return;

  const location = input?.value;

  if (location.length < 3) {
    alert("Precisa ter pelo menos 3 letras");
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${myKey}&lang=pt_br&units=metric`
    );
    const data = await response.json();

    console.log(data);
    const infos = {
      temp: Math.round(data.main.temp),
      local: data.name,
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    };

    weatherInfos.innerHTML = `
    <div class="weather-data">
      <h2>${infos.local}</h2>
      <span>${infos.temp}°c</span>
    </div>
    <img src="${infos.icon}"/>`;
  } catch (err) {
    console.log("Deu um erro: ", err);
  }

  input.value = "";
});
