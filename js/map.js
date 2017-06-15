function initMap() {
  var locations = [

    ["Trinité <br> <img src='img/logo.jpg' class='resize' style='padding: 25px 0' alt=''><br> <a href='la-trinite.html' type='button' class='btn btn-lg'>Accéder à sa page</a>", -20.8948895, 55.46516180000003],

    ["Champ Fleuri <br> <img src='img/logo.jpg' class='resize' style='padding: 25px 0' alt=''> <br> <a href='champ-fleuri.html' type='button' class='btn btn-lg'>Accéder à sa page</a>‎‎", -20.8857654, 55.46626689999994],

    ["La Montagne <br> <img src='img/logo.jpg' class='resize' style='padding: 25px 0' alt=''><br> <a href='la-montagne.html' type='button' class='btn btn-lg'>Accéder à sa page</a>‎", -20.9012914, 55.4084034],

    ["Bois de Nèfles <br> <img src='img/logo.jpg' class='resize' style='padding: 25px 0' alt=''><br> <a href='bois-de-nefles.html' type='button' class='btn btn-lg'>Accéder à sa page</a>‎", -20.9340583, 55.47208610000007],

    ["Les Camélias <br> <img src='img/logo.jpg' class='resize' style='padding: 25px 0' alt=''><br> <a href='les-camelias.html' type='button' class='btn btn-lg'>Accéder à sa page</a>‎", -20.8947435, 55.461699899999985],

    ["Montgaillard‎ <br> <img src='img/logo.jpg' class='resize' style='padding: 25px 0' alt=''><br> <a href='montgaillard.html' type='button' class='btn btn-lg'>Accéder à sa page</a>", -20.9058911, 55.46793149999996],

    ["La Providence <br> <img src='img/logo.jpg' class='resize' style='padding: 25px 0' alt=''><br> <a href='la-providence.html' type='button' class='btn btn-lg'>Accéder à sa page</a>", -20.9043277, 55.45546880000006],

    ["Quartier Saint-Jacques <br> <img src='img/logo.jpg' class='resize' style='padding: 25px 0' alt=''> <br> <a href='saint-jacques.html' type='button' class='btn btn-lg'>Accéder à sa page</a>‎", -20.8768526, 55.44847200000004],

    ["Ruisseau des Noirs <br> <img src='img/logo.jpg' class='resize' style='padding: 25px 0' alt=''> <br> <a href='ruisseau-des-noirs' type='button' class='btn btn-lg''>Accéder à sa page</a>", -20.8873627, 55.453785100000005],

    ["Saint François <br> <img src='img/logo.jpg' class='resize' style='padding: 25px 0' alt=''> <br> <a href='saint-francois.html' type='button' class='btn btn-lg''>Accéder à sa page</a>", -20.9250592, 55.45546880000006],

    ["Sainte-Clotilde‎ <br> <img src='img/logo.jpg' class='resize' style='padding: 25px 0' alt=''> <br> <a href='sainte-clotilde.html' type='button' class='btn btn-lg'>Accéder à sa page</a>", -20.9190923, 55.48593630000005],

    ["La Source‎ <br> <img src='img/logo.jpg' class='resize' style='padding: 25px 0' alt=''> <br> <a href='la-source.html' type='button' class='btn btn-lg'>Accéder à sa page</a>", -20.8908983, 55.4481131],

    ["Bas de la Rivière‎ <br> <img src='img/logo.jpg' class='resize' style='padding: 25px 0' alt=''> <br> <a href='la-riviere.html' type='button' class='btn btn-lg'>Accéder à sa page</a>", -20.8844545, 55.44508450000001],

    ["Le Brûlé‎ <br> <img src='img/logo.jpg' class='resize' style='padding: 25px 0' alt=''> <br> <a href='le-brule.html' type='button' class='btn btn-lg'>Accéder à sa page</a>", -20.9212428, 55.43885460000001],

    ["Bellepierre <br> <img src='img/logo.jpg' class='resize' style='padding: 25px 0' alt=''> <br> <a href='bellepierre.html' type='button' class='btn btn-lg'>Accéder à sa page</a>", -20.895689, 55.44700599999999],

    ["Barachois <br> <img src='img/logo.jpg' class='resize' style='padding: 25px 0' alt=''> <a href='barachois.html' type='button' class='btn btn-lg'>Accéder à sa page</a>", -20.8726961, 55.448891900000035],

    ["Centre ville <br> <img src='img/logo.jpg' style='padding: 25px 0' class='resize' alt=''> <br> <a href='centre-ville.html' type='button' class='btn btn-lg'>Accéder à sa page</a>'", -20.8906596,  55.45505359999993],

  ];

  var stdenis = {
    lat: -20.8906596,
    lng: 55.45505359999993
  };
  var infowindow = new google.maps.InfoWindow();
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: stdenis,
    styles: [
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#4395D5'}]
            },
          ]
  });

  function placeMarker(loc) {
    var latLng = new google.maps.LatLng(loc[1], loc[2]);
    var marker = new google.maps.Marker({
      position: latLng,
      map: map,
    });

    google.maps.event.addListener(marker, 'click', function () {
      infowindow.close(); // Close previously opened infowindow
      infowindow.setContent("<div id='infowindow'>" + loc[0] + "</div>");
      infowindow.open(map, marker);
    });

  }

  for (var i = 0; i < locations.length; i++) {
    placeMarker(locations[i]);
  }
}