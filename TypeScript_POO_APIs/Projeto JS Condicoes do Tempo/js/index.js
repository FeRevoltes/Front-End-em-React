"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const form = document.querySelector("#search-form > form");
const input = document.querySelector("#input-location");
const myKey = 0;
const weatherInfos = document.querySelector("#weather-info");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    if (!input || !weatherInfos)
        return;
    const location = input === null || input === void 0 ? void 0 : input.value;
    if (location.length < 3) {
        alert("Precisa ter pelo menos 3 letras");
        return;
    }
    try {
        const response = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${myKey}&lang=pt_br&units=metric`);
        const data = yield response.json();
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
    }
    catch (err) {
        console.log("Deu um erro: ", err);
    }
    input.value = "";
}));
