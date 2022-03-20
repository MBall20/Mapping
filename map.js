// base map options: https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#basemap


require([
    "esri/Map",
    "esri/views/MapView",
    "esri/Graphic",
    "esri/layers/GraphicsLayer",
    "esri/layers/FeatureLayer",
    "esri/widgets/Locate",
    "esri/widgets/Search",
    "esri/widgets/Legend"
  ], function(Map, MapView, Graphic, GraphicsLayer, FeatureLayer, Locate, Search, Legend) {

        // Create a basemap for the map view
        var myMap = new Map({
            basemap: "streets-navigation-vector"
        });
        // Create a map view for the HTML using the basemap
        // previously created.
        var myView = new MapView({
            container: "viewDiv",  // HTML ID 
            map: myMap,        // BaseMap Created
            center: [-111.925042,43.649903], // Center starting map on the shop
            zoom: 7, // Zoom in enough to se area serviced
        });
        

        // Create a Graphics Layer which can be used to draw graphics
        // on the map
        var graphicsLayer = new GraphicsLayer();
        myMap.add(graphicsLayer);

        // Co-op
        var point = { //Create a point
          type: "point",
          longitude: -112.003673,
          latitude: 43.720956
        };
        var simpleMarkerSymbol = {
          type: "simple-marker",
          color: [0, 0, 255]  // Red
        };
        var popUp = {
          "title": "Valley Wide Co-op",
          "content": "Fuel up and start the day here."
        };

        var pointGraphic = new Graphic({
          geometry: point,
          symbol: simpleMarkerSymbol,
          popupTemplate: popUp
        });
  
        graphicsLayer.add(pointGraphic);

        // Shop
        var point = { //Create a point
          type: "point",
          longitude: -111.925042,
          latitude: 43.649903
        };
        var simpleMarkerSymbol = {
          type: "simple-marker",
          color: [0, 0, 255]  // Red
        };
        var popUp = {
          "title": "MVP Rentals Shop",
          "content": "Home base. Start and finish the day here."
        };

        var pointGraphic = new Graphic({
          geometry: point,
          symbol: simpleMarkerSymbol,
          popupTemplate: popUp
        });
  
        graphicsLayer.add(pointGraphic);
  
        // Location 1
        var point = { //Create a point
          type: "point",
          longitude: -112.022823,
          latitude: 43.673047
        };
        var simpleMarkerSymbol = {
          type: "simple-marker",
          color: [255, 0, 0]  // Red
        };

        var popUp = {
          "title": "Stop 1",
          "content": "1 Unit"
        };

        var pointGraphic = new Graphic({
          geometry: point,
          symbol: simpleMarkerSymbol,
          popupTemplate: popUp
        });
  
        graphicsLayer.add(pointGraphic);

        // Location 2
        var point = { //Create a point
          type: "point",
          longitude:  -111.997566,
          latitude: 43.669138
        };
        var simpleMarkerSymbol = {
          type: "simple-marker",
          color: [255, 0, 0] // Red
        };
        var popUp = {
          "title": "Stop 2",
          "content": "ONLY SERVICE MARCH 3. 1 Unit(his)"
        };

        var pointGraphic = new Graphic({
          geometry: point,
          symbol: simpleMarkerSymbol,
          popupTemplate: popUp
        });
  
        graphicsLayer.add(pointGraphic);

        // Location 3
        var point = { //Create a point
          type: "point",
          longitude:  -111.984348,
          latitude: 43.658187
        };
        var simpleMarkerSymbol = {
          type: "simple-marker",
          color: [255, 0, 0] // Red
        };

        var popUp = {
          "title": "Stop 3",
          "content": "1 Unit"
        };

        var pointGraphic = new Graphic({
          geometry: point,
          symbol: simpleMarkerSymbol,
          popupTemplate: popUp
        });
  
        graphicsLayer.add(pointGraphic);

        // Location 4
        var point = { //Create a point
          type: "point",
          longitude:  -111.963234,
          latitude: 43.672558
        };
        var simpleMarkerSymbol = {
          type: "simple-marker",
          color: [255, 0, 0] // Red
        };

        var popUp = {
          "title": "Stop 4",
          "content": "Only Service March 10 & 24: 1 Unit"
        };

        var pointGraphic = new Graphic({
          geometry: point,
          symbol: simpleMarkerSymbol,
          popupTemplate: popUp
        });
  
        graphicsLayer.add(pointGraphic);

        // Location 5
        var point = { //Create a point
          type: "point",
          longitude:  -111.959840,
          latitude: 43.675913
        };
        var simpleMarkerSymbol = {
          type: "simple-marker",
          color: [255, 0, 0] // Red
        };

        var popUp = {
          "title": "Stop 5",
          "content": "Only Service March 3 & 17: 1 Unit"
        };

        var pointGraphic = new Graphic({
          geometry: point,
          symbol: simpleMarkerSymbol,
          popupTemplate: popUp
        });
  
        graphicsLayer.add(pointGraphic);

        // Location 6
        var point = { //Create a point
          type: "point",
          longitude:  -111.940207,
          latitude: 43.687681
        };
        var simpleMarkerSymbol = {
          type: "simple-marker",
          color: [255, 0, 0] // Red
        };

        var popUp = {
          "title": "Stop 6",
          "content": "3819 E 420 N Rigby 1 unit (in Stoneybrooke on west end)"
        };

        var pointGraphic = new Graphic({
          geometry: point,
          symbol: simpleMarkerSymbol,
          popupTemplate: popUp
        });
  
        graphicsLayer.add(pointGraphic);

        // Location 7
        var point = { //Create a point
          type: "point",
          longitude:  -111.953209,
          latitude: 43.706778
        };
        var simpleMarkerSymbol = {
          type: "simple-marker",
          color: [255, 0, 0] // Red
        };

        var popUp = {
          "title": "Stop 7",
          "content": "Only Service March 3 & 17: Staker Animal Cremations 553 N 3750 E 1 unit"
        };

        var pointGraphic = new Graphic({
          geometry: point,
          symbol: simpleMarkerSymbol,
          popupTemplate: popUp
        });
  
        graphicsLayer.add(pointGraphic);

        // Location 8
        var point = { //Create a point
          type: "point",
          longitude:  -111.908888,
          latitude: 43.704032
        };
        var simpleMarkerSymbol = {
          type: "simple-marker",
          color: [255, 0, 0] // Red
        };

        var popUp = {
          "title": "Stop 8",
          "content": "Avance Homes 3976 E 535 N Rigby 1 unit"
        };

        var pointGraphic = new Graphic({
          geometry: point,
          symbol: simpleMarkerSymbol,
          popupTemplate: popUp
        });
  
        graphicsLayer.add(pointGraphic);

        // Location 9
        var point = { //Create a point
          type: "point",
          longitude:  -111.899463,
          latitude: 43.705928
        };
        var simpleMarkerSymbol = {
          type: "simple-marker",
          color: [255, 0, 0] // Red
        };

        var popUp = {
          "title": "Stop 9",
          "content": "Toomer Construction 4019 E 545 N Rigby 1 unit"
        };

        var pointGraphic = new Graphic({
          geometry: point,
          symbol: simpleMarkerSymbol,
          popupTemplate: popUp
        });
  
        graphicsLayer.add(pointGraphic);

        // Location 10
        var point = { //Create a point
          type: "point",
          longitude:  -111.902792,
          latitude: 43.697176
        };
        var simpleMarkerSymbol = {
          type: "simple-marker",
          color: [255, 0, 0] // Red
        };

        var popUp = {
          "title": "Stop 10",
          "content": "Michelle Lytle 486 N 4000 E Rigby 1 unit"
        };

        var pointGraphic = new Graphic({
          geometry: point,
          symbol: simpleMarkerSymbol,
          popupTemplate: popUp
        });
  
        graphicsLayer.add(pointGraphic);

        // Location 11
        var point = { //Create a point
          type: "point",
          longitude:  -111.904050,
          latitude: 43.697148
        };
        var simpleMarkerSymbol = {
          type: "simple-marker",
          color: [255, 0, 0] // Red
        };

        var popUp = {
          "title": "Stop 11",
          "content": "Jefferson Cty Parks & Rec Rigby Lake Entrance (by the check-in booth) 1 unit - Unit is locked, get key from person in booth - Issues call Mickey: 208-252-0224"
        };

        var pointGraphic = new Graphic({
          geometry: point,
          symbol: simpleMarkerSymbol,
          popupTemplate: popUp
        });
  
        graphicsLayer.add(pointGraphic);

        // Location 12
        var point = { //Create a point
          type: "point",
          longitude:  -111.909574,
          latitude: 43.675193
        };
        var simpleMarkerSymbol = {
          type: "simple-marker",
          color: [255, 0, 0] // Red
        };

        var popUp = {
          "title": "Stop 12",
          "content": "Odila Frausto Food Truck 247 Farnsworth Way Rigby 1 unit + pump barrels"
        };

        var pointGraphic = new Graphic({
          geometry: point,
          symbol: simpleMarkerSymbol,
          popupTemplate: popUp
        });
  
        graphicsLayer.add(pointGraphic);
  
        // Location 13
        var point = { //Create a point
          type: "point",
          longitude:  -111.915682,
          latitude: 43.683433
        };
        var simpleMarkerSymbol = {
          type: "simple-marker",
          color: [255, 0, 0] // Red
        };

        var popUp = {
          "title": "Stop 13",
          "content": "Nelson Electric 380 N 3950 E 1 unit"
        };

        var pointGraphic = new Graphic({
          geometry: point,
          symbol: simpleMarkerSymbol,
          popupTemplate: popUp
        });
  
        graphicsLayer.add(pointGraphic);
  
        // Location 14
        var point = { //Create a point
          type: "point",
          longitude:  -111.921308,
          latitude: 43.682670
        };
        var simpleMarkerSymbol = {
          type: "simple-marker",
          color: [255, 0, 0] // Red
        };

        var popUp = {
          "title": "Stop 14",
          "content": "Marty Duffin 335 Summerwood (5th N) Rigby 1 unit"
        };

        var pointGraphic = new Graphic({
          geometry: point,
          symbol: simpleMarkerSymbol,
          popupTemplate: popUp
        });
  
        graphicsLayer.add(pointGraphic);

        // Location 15
        var point = { //Create a point
          type: "point",
          longitude:  -111.923932,
          latitude: 43.666804
        };
        var simpleMarkerSymbol = {
          type: "simple-marker",
          color: [0, 255, 0] // Green
        };

        var popUp = {
          "title": "Stop 15",
          "content": "Northern States Development 280 S 3rd W Rigby 2 units"
        };

        var pointGraphic = new Graphic({
          geometry: point,
          symbol: simpleMarkerSymbol,
          popupTemplate: popUp
        });
  
        graphicsLayer.add(pointGraphic);

        // Location 16
        var point = { //Create a point
          type: "point",
          longitude:  -111.929311,
          latitude: 43.670309
        };
        var simpleMarkerSymbol = {
          type: "simple-marker",
          color: [0, 255, 0] // Green
        };

        var popUp = {
          "title": "Stop 16",
          "content": "BEA Bus Stop at 5th W 1st S Rigby 2 units "
        };

        var pointGraphic = new Graphic({
          geometry: point,
          symbol: simpleMarkerSymbol,
          popupTemplate: popUp
        });
  
        graphicsLayer.add(pointGraphic);

        // Location 17
        var point = { //Create a point
          type: "point",
          longitude:  -111.929345,
          latitude: 43.648404
        };
        var simpleMarkerSymbol = {
          type: "simple-marker",
          color: [255, 0, 0] // Red
        };

        var popUp = {
          "title": "Stop 17",
          "content": "Stowell Outlaw Services 153 N 3850 E 1 unit "
        };

        var pointGraphic = new Graphic({
          geometry: point,
          symbol: simpleMarkerSymbol,
          popupTemplate: popUp
        });
  
        graphicsLayer.add(pointGraphic);

        // Location 18
        var point = { //Create a point
          type: "point",
          longitude:  -111.969820,
          latitude: 43.639950
        };
        var simpleMarkerSymbol = {
          type: "simple-marker",
          color: [255, 0, 0] // Red
        };

        var popUp = {
          "title": "Stop 18",
          "content": "Michael Cardwell 3670 E 100 N Rigby (take access road at J2RJ+93G Garfield, Idaho)"
        };

        var pointGraphic = new Graphic({
          geometry: point,
          symbol: simpleMarkerSymbol,
          popupTemplate: popUp
        });
  
        graphicsLayer.add(pointGraphic);

        // Location 19
        var point = { //Create a point
          type: "point",
          longitude:  -112.002601,
          latitude: 43.638137
        };
        var simpleMarkerSymbol = {
          type: "simple-marker",
          color: [255, 0, 0] // Red
        };

        var popUp = {
          "title": "Stop 19",
          "content": "Alan Gneiting 76 N 3500 E Rigby 1 unit"
        };

        var pointGraphic = new Graphic({
          geometry: point,
          symbol: simpleMarkerSymbol,
          popupTemplate: popUp
        });
  
        graphicsLayer.add(pointGraphic);

        // Location 20
        var point = { //Create a point
          type: "point",
          longitude:  -111.970359,
          latitude: 43.628837
        };
        var simpleMarkerSymbol = {
          type: "simple-marker",
          color: [255, 0, 0] // Red
        };

        var popUp = {
          "title": "Stop 20",
          "content": "Wade Peterson 3665 E 13 N Rigby 1 unit"
        };

        var pointGraphic = new Graphic({
          geometry: point,
          symbol: simpleMarkerSymbol,
          popupTemplate: popUp
        });
  
        graphicsLayer.add(pointGraphic);

        // Location 21
        var point = { //Create a point
          type: "point",
          longitude:  -111.968188,
          latitude: 43.627000
        };
        var simpleMarkerSymbol = {
          type: "simple-marker",
          color: [255, 0, 0] // Red
        };

        var popUp = {
          "title": "Stop 21",
          "content": "Castle Rock 3678 E 7 N Rigby 1 unit"
        };

        var pointGraphic = new Graphic({
          geometry: point,
          symbol: simpleMarkerSymbol,
          popupTemplate: popUp
        });
  
        graphicsLayer.add(pointGraphic);

        // Location 22
        var point = { //Create a point
          type: "point",
          longitude:  -111.972480,
          latitude: 43.629500
        };
        var simpleMarkerSymbol = {
          type: "simple-marker",
          color: [255, 0, 0] // Red
        };

        var popUp = {
          "title": "Stop 22",
          "content": "Floyd Jorgensen 3659 E 20 N Rigby 1 unit"
        };

        var pointGraphic = new Graphic({
          geometry: point,
          symbol: simpleMarkerSymbol,
          popupTemplate: popUp
        });
  
        graphicsLayer.add(pointGraphic);

        // Location 23
        var point = { //Create a point
          type: "point",
          longitude:  -111.969105,
          latitude: 43.629219
        };
        var simpleMarkerSymbol = {
          type: "simple-marker",
          color: [255, 0, 0] // Red
        };

        var popUp = {
          "title": "Stop 23",
          "content": "Avance Homes 3672 E 20 N Rigby 1 unit"
        };

        var pointGraphic = new Graphic({
          geometry: point,
          symbol: simpleMarkerSymbol,
          popupTemplate: popUp
        });
  
        graphicsLayer.add(pointGraphic);

        // Location 24
        var point = { //Create a point
          type: "point",
          longitude:  -111.965453,
          latitude: 43.627054
        };
        var simpleMarkerSymbol = {
          type: "simple-marker",
          color: [255, 0, 0] // Red
        };

        var popUp = {
          "title": "Stop 24",
          "content": "Castle Rock 18 N 3667 E Rigby 1 unit "
        };

        var pointGraphic = new Graphic({
          geometry: point,
          symbol: simpleMarkerSymbol,
          popupTemplate: popUp
        });
  
        graphicsLayer.add(pointGraphic);

        // Location 25
        var point = { //Create a point
          type: "point",
          longitude:  -111.969285,
          latitude: 43.627008
        };
        var simpleMarkerSymbol = {
          type: "simple-marker",
          color: [255, 0, 0] // Red
        };

        var popUp = {
          "title": "Stop 25",
          "content": "Castle Rock 3674 E 7 N Rigby 1 unit"
        };

        var pointGraphic = new Graphic({
          geometry: point,
          symbol: simpleMarkerSymbol,
          popupTemplate: popUp
        });
  
        graphicsLayer.add(pointGraphic);

       // Create a polygon geometry
       const polygon = {
          type: "polygon",
          rings: [
              [-112.378506, 42.788160], //Longitude, latitude
              [-110.786722, 43.477196], //Longitude, latitude
              [-111.337055, 44.589837], //Longitude, latitude
              [-113.644554, 43.923284],   //Longitude, latitude
              [-112.980935, 43.183756]  //Longitude, latitude
          ]
       };
      
       const simpleFillSymbol = {
          type: "simple-fill",
          color: [227, 139, 79, 0.3],  // Orange, opacity 80%
          outline: {
              color: [255, 255, 255],
              width: 1
          }
       };
      
       const polygonGraphic = new Graphic({
          geometry: polygon,
          symbol: simpleFillSymbol,
      
       });
       graphicsLayer.add(polygonGraphic);
});