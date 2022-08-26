<template>
  <MyErrorModal v-if="geoError" :message="geoErrorMsg" @close="closeGeoError">
    <h2>Error: </h2>
  </MyErrorModal>
  <MyMapFeatures :coords="coords" :fetchCoords="fetchCoords" @getGeolocation="getGeolocation"></MyMapFeatures>
  <div id="map"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import leaflet from "leaflet";
import MyButton from "../atoms/MyButton.vue";
import MyErrorModal from "../molecules/MyModal.vue";
import MyMapFeatures from "./MyMapFeatures.vue";

export default {
    name: "MyMap",
    components: { MyErrorModal, MyMapFeatures },
    data() {
        return {
            center: [50.7162412, 4.6084086],
            map: null,
            coords: null,
            fetchCoords: null,
            geoMarker: null,
            geoError: false,
            geoErrorMsg: null,
        };
    },
    methods: {
        setupLeafletMap: function(){
            this.map = leaflet.map("map").setView(this.center, 9);
            leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                maxZoom: 19,
                attribution: "© OpenStreetMap",
            }).addTo(this.map);
        },

        getGeolocation() {
          if(this.coords){
            this.coords = null;
            sessionStorage.removeItem('coords');
            this.map.removeLayer(this.geoMarker);
            return;
          }
          if(sessionStorage.getItem('coords')){
            this.coords = JSON.parse(sessionStorage.getItem('coords'));
            this.plotGeolocation(this.coords);
            return;
          }

          this.fetchCoords = true;
          navigator.geolocation.getCurrentPosition(this.setCoords, this.getLocError);
        },

        setCoords(position){
          this.fetchCoords = false; 
          //leaflet.marker([position.coords.latitude, position.coords.longitude]).addTo(this.map);
          const setSessionCoords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }
          this.coords = setSessionCoords;
          sessionStorage.setItem("coords", JSON.stringify(setSessionCoords));

          this.plotGeolocation(this.coords);
        },

        plotGeolocation(coords){
          const customMarker = leaflet.icon({
            iconUrl: './src/assets/map-marker-blue.png',
            iconSize: [22,35],
          });

          this.geoMarker = leaflet
            .marker([coords.lat, coords.lng])
            .addTo(this.map);
          
          this.map.setView([coords.lat, coords.lng], 10);
        },

        getLocError(error){
          this.fetchCoords = null;
          this.geoError = true;
          this.geoErrorMsg = error.message;
        },

        closeGeoError(){
          this.geoError = null;
          this.geoErrorMsg = null; 
        },
        

    },
    mounted: function() {
        this.setupLeafletMap();
        this.getGeolocation();
    },
};
</script>

<style scoped>
#map {
  width: auto;
  height: 98vh;
}
</style>
