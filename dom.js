const cityname = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector(".time");
const iconimg = document.querySelector(".icon img");
const forecast = new Forecast();

const UpdateUI = (data) => {
  const { citydetails, weather } = data;
  details.innerHTML = `
  <h5 class="cityname">${citydetails.EnglishName}</h5>
        <div class="weathercondition">${weather.WeatherText}</div>
          <div class="temperature">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
          </div>`;

  let timesrc = weather.IsDayTime ? "img/day.svg" : "img/night.svg";
  time.setAttribute("src", timesrc);

  const icon = `img/icons/${weather.WeatherIcon}.svg`;
  iconimg.setAttribute("src", icon);

  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

cityname.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = cityname.city.value.trim();
  cityname.reset();

  forecast
    .UpdateWeather(city)
    .then((data) => UpdateUI(data))
    .catch((err) => console.log(err));
});
