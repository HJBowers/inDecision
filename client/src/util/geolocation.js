// export function geoFindMe() {
//   if (!navigator.geolocation) {
//     alert("Geolocation is not supported by this browser. Use Chrome, silly")
//   }
//
//   function success(position) {
//     const latitude  = position.coords.latitude;
//     const longitude = position.coords.longitude;
//     const coordinates = {latitude, longitude}
//     console.log( "Coordinates: ", latitude, longitude )
//     return coordinates
//   }
//
//   function error() {
//     console.log( "Error!" )
//   }
//
//   navigator.geolocation.getCurrentPosition(success, error)
// }
