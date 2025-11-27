window.onload = () => {
    let peliABuscar = "";
    const apiKey = "1a3dcaad";
    let paginaActual = 1;
    let cargando = false;

    function peticionAjax(reset = false) {
        peliABuscar = document.getElementById("buscador").value.trim();

        if (reset) {
            document.getElementById("lista").innerHTML = "";
            paginaActual = 1;
        }

        if (peliABuscar === "") {
            document.getElementById("numeroResultados").innerHTML = "Introduce una película para buscar.";
            return;
        }

        //para evitar varias llamadas
        if (cargando) return;
        cargando = true;
        
        //fetch: 
        //s= para una busqueda para un titulo
        //encodeURIComponent: evita problemas con caracteres especiales 
        //page para la paginacion
        fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(peliABuscar)}&page=${paginaActual}`)
            .then(response => response.json())
            .then(datosRecibidos => {

                //fin de la peticion
                cargando = false;

                if (datosRecibidos.Response === "False") {
                    if (reset) {
                        document.getElementById("numeroResultados").innerHTML = "No se encontraron resultados.";
                    }
                    return;
                }

                if (reset) {
                    document.getElementById("numeroResultados").innerHTML =
                        `Se han encontrado ${datosRecibidos.totalResults} películas.`;
                }

                let miLista = document.getElementById("lista");

                for (let pelicula of datosRecibidos.Search) {
                    let li = document.createElement("li");
                    li.innerHTML = `${pelicula.Title} - ${pelicula.Year}`;
                    
                    let img = document.createElement("img");
                    img.src = pelicula.Poster !== "N/A" ? pelicula.Poster : "placeholder.jpg";
                    img.alt = pelicula.Title;
                    img.style.cursor = "pointer";
                
                    img.addEventListener("click", () => detalle(pelicula.imdbID));
                
                    li.appendChild(img);
                    miLista.appendChild(li);
                }

                paginaActual++;
            })
            .catch(error => {
                cargando = false; 
                console.error("Error al hacer la petición:", error);
                document.getElementById("numeroResultados").innerHTML = "Error al cargar. Inténtalo de nuevo.";
            });
    }

    function detalle(idPelicula) {
        //?i=${idPelicula} para pedir detalles
        fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${idPelicula}`)
            .then(response => response.json())
            .then(datosRecibidos => {
                if (datosRecibidos.Response === "True") {
                    document.getElementById("modal-titulo").innerText = datosRecibidos.Title || "Sin título";
                    document.getElementById("modal-poster").src = datosRecibidos.Poster !== "N/A" ? datosRecibidos.Poster : "placeholder.png";
                    document.getElementById("modal-sinopsis").innerText = datosRecibidos.Plot || "Sin descripción.";
                    document.getElementById("modal-genero").innerText = datosRecibidos.Genre || "Desconocido";
                    document.getElementById("modal-director").innerText = datosRecibidos.Director || "Desconocido";
                    document.getElementById("modal-año").innerText = datosRecibidos.Year || "Desconocido";
                    document.getElementById("modal-pais").innerText = datosRecibidos.Country || "Desconocido";
                    document.getElementById("modal-idioma").innerText = datosRecibidos.Language || "Desconocido";
                    document.getElementById("modal-duracion").innerText = datosRecibidos.Runtime || "Desconocido";
                    document.getElementById("modal-rating").innerText = datosRecibidos.imdbRating || "Desconocido";
                    document.getElementById("modal").style.display = "flex";
                } else {
                    console.error("No se encontraron detalles para la película.");
                }
            })
            .catch(error => {
                console.error("Error al obtener los detalles de la película:", error);
            });
    }

    document.getElementById("closeModal").addEventListener("click", () => {
        document.getElementById("modal").style.display = "none";
        document.getElementById("closeModal").style.cursor = "pointer";
        document.getElementById("modal").addEventListener("click", (event) => {
            if (event.target === document.getElementById("modal")) {
                document.getElementById("modal").style.display = "none";
            }
        });
        
    });

    document.getElementById("buscarBtn").addEventListener("click", () => peticionAjax(true));
    document.getElementById("resetBtn").addEventListener("click", () => {
        document.getElementById("lista").innerHTML = "";
        document.getElementById("numeroResultados").innerHTML = "";
        document.getElementById("buscador").value = "";
        paginaActual = 1;
        cargando = false;
    });

    window.addEventListener("scroll", () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !cargando) {
            peticionAjax(false);
        }
    });
};
