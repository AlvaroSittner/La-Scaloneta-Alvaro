//Cerrar Sesión
function cerrarSesion() {
    localStorage.removeItem("logged");
    window.location.href = "/";
  }

//mapa
let center = [25.2841478, 51.4419568];

let map = L.map("map").setView(center, 12);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(map);


// ícono rojo
let messiIcon = L.icon({
    iconUrl: "img/marker.png",
    iconSize: [30, 30],
    iconAnchor: [22, 44],
    popupAnchor: [-6, -41],
    });

    // Ponemos el ícono en el mapa.
    let marker = L.marker(center, { icon: messiIcon }).addTo(map);

    // Agregamos el pop up.
    marker.bindPopup("<b>Qatar 2022</b><br>World Cup").openPopup();
  

/* Locaciones*/
const objetoMapa = [
    {
    jugador: "Qatar 2022",
    coordenada: [25.2841478, 51.4419568],
    ciudad: "World Cup",
    },
    {
    jugador: "Messi",
    coordenada: [-32.9520457, -60.766679],
    ciudad: "Rosario",
    },
    {
    jugador: "Di María",
    coordenada: [-32.9520457, -60.766679],
    ciudad: "Rosario",
    },
    {
    jugador: "Otamendi",
    coordenada: [-34.4718607, -58.6715832],
    ciudad: "El Talar",
    },
    {
    jugador: "Julián Álvarez",
    coordenada: [-31.6679028, -63.2032357],
    ciudad: "Calchín",
    },
    {
    jugador: "Dibu Martínez",
    coordenada: [-38.0174106, -57.6705734],
    ciudad: "Mar del Plata",
    },
    { 
    jugador: "Franco Armani",
    coordenada: [-33.044166666667, -61.168055555556],
    ciudad: "Casilda",
    },
    { 
    jugador: "Gerónimo Rulli",
    coordenada: [-38.0174106, -57.6705734],
    ciudad: "Mar del Plata",
    },
    { 
    jugador: "Juan Foyth",
    coordenada: [-38.0174106, -57.6705734],
    ciudad: "Mar del Plata",
    },
    { 
    jugador: "Nicolás Tagliafico",
    coordenada: [-34.783333333333, -58.366666666667],
    ciudad: "Rafael Calzada",
    },
    { 
    jugador: "Gonzalo Montiel",
    coordenada: [-34.8447, -58.6517],
    ciudad: "Virrey del Pino",
    },
    { 
    jugador: "Germán Pezzella",
    coordenada: [-38.716666666667, -62.266666666667],
    ciudad: "Bahía Blanca",
    },
    { 
    jugador: "Cristian Romero",
    coordenada: [-31.416666666667, -64.183333333333],
    ciudad: "Córdoba",
    },
    { 
    jugador: "Lisandro Martínez",
    coordenada: [-33.15, -59.31666667],
    ciudad: "Gualeguay",
    },
    { 
    jugador: "Nahuel Molina",
    coordenada: [-32.183333333333, -64.416666666667],
    ciudad: "Embalse",
    },
    { 
    jugador: "Leandro Paredes",
    coordenada: [-34.683333333333, -58.55],
    ciudad: "San Justo",
    },
    { 
    jugador: "Rodrigo de Paul",
    coordenada: [-34.683333333333, -58.333333333333],
    ciudad: "Sarandí",
    },
    { 
    jugador: "Marcos Acuña",
    coordenada: [-38.902777777778, -70.065],
    ciudad: "Zapala",
    },
    { 
    jugador: "Exequiel Palacios",
    coordenada: [-27.05, -65.4],
    ciudad: "Famaillá",
    },
    { 
    jugador: "Thiago Almada",
    coordenada: [-34.633333333333, -58.533333333333],
    ciudad: "Ciudadela",
    },
    { 
    jugador: "Alejandro Gómez",
    coordenada: [-34.599722222222, -58.381944444444],
    ciudad: "Buenos Aires",
    },
    { 
    jugador: "Guido Rodríguez",
    coordenada: [-34.6, -58.516666666667],
    ciudad: "Sáenz Peña",
    },
    { 
    jugador: "Alexis Mac Allister",
    coordenada: [-36.620277777778, -64.290555555556],
    ciudad: "Santa Rosa",
    },
    { 
    jugador: "Enzo Fernández",
    coordenada: [-34.566666666667, -58.533333333333],
    ciudad: "San Martín",
    },
    { 
    jugador: "Ángel Correa",
    coordenada: [-32.9520457, -60.766679],
    ciudad: "Rosario",
    },
    { 
    jugador: "Paulo Dybala",
    coordenada: [-31.776388888889, -63.801111111111],
    ciudad: "Laguna Larga",
    },
    { 
    jugador: "Lautaro Martínez",
    coordenada: [-38.716666666667, -62.266666666667],
    ciudad: "Bahía Blanca",
    },
    ];

    let select = document.querySelector("select");

    let opciones = objetoMapa.map( x => {
        return `<option>${x.jugador}</option>`;    
    })
    select.innerHTML = opciones.join().replaceAll(","," ");
    function changeMap() {
    const objeto = objetoMapa.find((item) => item.jugador === select.value);
    map.setView(new L.LatLng(...objeto.coordenada), 11);
    marker = L.marker(objeto.coordenada, { icon:messiIcon }).addTo(map);
    marker.bindPopup(`<b>${objeto.jugador}</b><br>${objeto.ciudad}`).openPopup();
}




