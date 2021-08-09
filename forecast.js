class Forecast {
  constructor() {
    this.key = "6wtjjYb87jVahQ44eUAdJeD1wgHh74wB";
    this.weatherURI =
      "http://dataservice.accuweather.com/currentconditions/v1/";
    this.cityURI =
      "http://dataservice.accuweather.com/locations/v1/cities/search";
  }
  async UpdateWeather(cityname) {
    const citydetails = await this.getCityName(cityname);
    const weather = await this.getCityTemp(citydetails.Key);
    return { citydetails, weather };
  }
  async getCityName(city) {
    const apikey = `?apikey=${this.key}&q=${city}`;
    const response = await fetch(this.cityURI + apikey);
    const data = await response.json();
    return data[0];
  }
  async getCityTemp(citykey) {
    const query = `${citykey}?apikey=${this.key}`;
    const response = await fetch(this.weatherURI + query);
    const data = await response.json();
    return data[0];
  }
}
