var map;
  require(["esri/map", "dojo/domReady!"], function(Map) { 
    map = new Map("map", {
      center: [-122.279468,47.551406],
      zoom: 14,
      basemap: "topo"
    });
  
var changeMap =  new BasemapToggle({
  	map:map,
  	basemap: "street"
  }, "BasemapToggle");
  changeMap.startup();


});



