mapboxgl.accessToken =
  "pk.eyJ1IjoiYmliaGFzaW5kaHUiLCJhIjoiY2twOTY5YWRoMGgwaTJ1bjFma2MxbW14diJ9.iKAhcg-u92dqTfo-D_UFjw";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([77.10898, 28.646519]);
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });

  map.addControl(directions, "top-left");
}
