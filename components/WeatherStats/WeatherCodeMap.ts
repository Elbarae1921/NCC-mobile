let map = new Map<string, NodeRequire>();

/* since the API i"m using provides very poor and ugly images, i chose to go with CSS styles instead of images,
* and in order to do that, i had to map the weather codes and set a corresponding class to each of them 
* (weather codes are basically indicative codes that tell you how the weather is).
* For example 113 is a sunny day, so i associated the sunny class with it, which return a picture of a sun,
* same for the other codes.
* you may notice some repitition, that"s because there"s a crap load of weather codes and only so much classes.
*/


map.set("113", require("../../assets/weather_icons/sunny.png"));
map.set("116", require("../../assets/weather_icons/partlycloudy.png"));
map.set("119", require("../../assets/weather_icons/cloudy.png"));
map.set("122", require("../../assets/weather_icons/fog.png"));
map.set("143", require("../../assets/weather_icons/mostlycloudy.png"));
map.set("176", require("../../assets/weather_icons/hazy.png"));
map.set("179", require("../../assets/weather_icons/chancerain.png"));
map.set("182", require("../../assets/weather_icons/chancesnow.png"));
map.set("185", require("../../assets/weather_icons/chancesleet.png"));
map.set("200", require("../../assets/weather_icons/chanceflurries.png"));
map.set("227", require("../../assets/weather_icons/tstorms.png"));
map.set("230", require("../../assets/weather_icons/snow.png"));
map.set("248", require("../../assets/weather_icons/sleet.png"));
map.set("260", require("../../assets/weather_icons/fog.png"));
map.set("263", require("../../assets/weather_icons/snow.png"));
map.set("266", require("../../assets/weather_icons/snow.png"));
map.set("281", require("../../assets/weather_icons/flurries.png"));
map.set("284", require("../../assets/weather_icons/flurries.png"));
map.set("293", require("../../assets/weather_icons/rain.png"));
map.set("296", require("../../assets/weather_icons/rain.png"));
map.set("299", require("../../assets/weather_icons/rain.png"));
map.set("302", require("../../assets/weather_icons/rain.png"));
map.set("305", require("../../assets/weather_icons/rain.png"));
map.set("308", require("../../assets/weather_icons/sleet.png"));
map.set("311", require("../../assets/weather_icons/rain.png"));
map.set("314", require("../../assets/weather_icons/rain.png"));
map.set("317", require("../../assets/weather_icons/chancesleet.png"));
map.set("320", require("../../assets/weather_icons/sleet.png"));
map.set("323", require("../../assets/weather_icons/snow.png"));
map.set("326", require("../../assets/weather_icons/snow.png"));
map.set("329", require("../../assets/weather_icons/snow.png"));
map.set("332", require("../../assets/weather_icons/snow.png"));
map.set("335", require("../../assets/weather_icons/snow.png"));
map.set("338", require("../../assets/weather_icons/flurries.png"));
map.set("350", require("../../assets/weather_icons/flurries.png"));
map.set("353", require("../../assets/weather_icons/rain.png"));
map.set("356", require("../../assets/weather_icons/rain.png"));
map.set("359", require("../../assets/weather_icons/rain.png"));
map.set("362", require("../../assets/weather_icons/sleet.png"));
map.set("365", require("../../assets/weather_icons/sleet.png"));
map.set("368", require("../../assets/weather_icons/snow.png"));
map.set("371", require("../../assets/weather_icons/snow.png"));
map.set("374", require("../../assets/weather_icons/flurries.png"));
map.set("377", require("../../assets/weather_icons/flurries.png"));
map.set("386", require("../../assets/weather_icons/tstorm.png"));
map.set("389", require("../../assets/weather_icons/tstorm.png"));
map.set("392", require("../../assets/weather_icons/tstorm.png"));
map.set("395", require("../../assets/weather_icons/tstorm.png"));

// export the map to be used in the Weather Card
export default map;