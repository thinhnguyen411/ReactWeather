var axios =require('axios');

const OPEN_WEATHER_MAP_URL ='http://api.openweathermap.org/data/2.5/weather?appid=e5faf81eacfc80a6845ac3602755e00f&units=metric';
//e5faf81eacfc80a6845ac3602755e00f
module.exports = {
  getTemp:function (location) {
    var encodedLocation = encodeURIComponent(location);//cu phap ma hoa de browser hieu duoc khi nguoi dung nhap vao
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;//long mot bien vao mot bien duoc goi la query string

    return axios.get(requestUrl).then(function (res) {

      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);

      }else {
        return res.data.main.temp;
      }
    },function (res) {
      throw new Error(res.data.message);
    })
  }
}
