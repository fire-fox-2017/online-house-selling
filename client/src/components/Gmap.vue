<template lang="html">
  <div id="map"></div>
</template>
<!--<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBRJ4Ze0JdMfVe-eMSYFxFKgewmSQCLB2Y&callback=initMap"
async defer></script>-->
<script>
var map;
export default {
  created(){
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }
}
</script>

<style lang="css">
</style>
