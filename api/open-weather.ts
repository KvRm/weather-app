export const owApi = {
  searchCity(appid: string, name: string, limit = 10) {
    return $fetch<OwApiSearchCityReponse>('http://api.openweathermap.org/geo/1.0/direct', {
      query: { q: name, limit, appid },
    })
  },

  getCityDetail(appid: string, lat: string, lon: string, lang = 'ru', units = 'metric') {
    return $fetch<OwApiGetCityResponse>('https://api.openweathermap.org/data/2.5/weather', {
      query: { appid, lat, lon, lang, units },
    })
  },
}
