window.onload = () => {
    let peliABuscar = "";
    const apiKey = "1a3dcaad";
    let paginaActual = 1;
    let cargando = false;
    let lastQuery = "";

    const landingSection = document.getElementById("landing");         
    const resultadosSection = document.getElementById("resultados");   
    const reportSection = document.getElementById("report");           

    const buscadorLandingEl = document.getElementById("buscadorLanding");
    const iniciarDesdeLandingBtn = document.getElementById("iniciarDesdeLanding");
    
    function showSection(sectionEl) {
        if (landingSection) landingSection.classList.add("hidden");
        if (resultadosSection) resultadosSection.classList.add("hidden");
        if (reportSection) reportSection.classList.add("hidden");
        if (sectionEl) sectionEl.classList.remove("hidden");
    }

    function debounce(fn, wait = 300) {
        let t;
        return function(...args) {
            clearTimeout(t);
            t = setTimeout(() => fn.apply(this, args), wait);
        };
    }

    const buscadorInputPrincipal = document.getElementById("buscador");
    if (buscadorInputPrincipal) {
        const autoHandler = debounce(() => {
            const v = buscadorInputPrincipal.value.trim();
            if (v.length >= 3) peticionAjax(true);
        }, 400);
        buscadorInputPrincipal.addEventListener("input", autoHandler);
    }

    if (buscadorLandingEl) {
        const autoHandlerLanding = debounce(() => {
            const v = buscadorLandingEl.value.trim();
            if (v.length >= 3 && v !== lastQuery) {
                // sincronizamos valor al input principal si existe
                const mainInput = document.getElementById("buscador");
                if (mainInput) mainInput.value = v;
                lastQuery = v;
                peticionAjax(true);
            }
        }, 400);
        buscadorLandingEl.addEventListener("input", autoHandlerLanding);
    }

    if (iniciarDesdeLandingBtn) {
        iniciarDesdeLandingBtn.addEventListener("click", () => {
            const mainInput = document.getElementById("buscador");
            if (mainInput && buscadorLandingEl) mainInput.value = buscadorLandingEl.value;
            peticionAjax(true);
        });
    }

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
                    img.src = pelicula.Poster !== "N/A" ? pelicula.Poster : "placeholder.png";
                    /*
                    BUG: NO FUNCIONAN LAS PELICULAS NO CARGADAS, SE CAMBIA EL TITULO MUY ALEATORIAMENTE
                    img.onerror = () => { 
                        img.src = 'placeholder.jpg'; 
                    }*/
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
                    document.getElementById("modal-actores").innerText = datosRecibidos.Actors || "Desconocido";
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
    //clickar fuera para cerrar
    modal.addEventListener('click', (ev)=>{
    if(ev.target === modal){ modal.style.display='none'; modal.setAttribute('aria-hidden','true'); }
});
    document.getElementById("closeModal").addEventListener("click", () => {
        document.getElementById("modal").style.display = "none";
        document.getElementById("closeModal").style.cursor = "pointer";
        document.getElementById("modal").addEventListener("click", (event) => {
            if (event.target === document.getElementById("modal")) {
                document.getElementById("modal").style.display = "none";
            }
        });
        
    });
    /*
    function detalle(series) {
                fetch(`https://www.omdbapi.com/?apikey=${apiKey}&type=${series}`)
                    .then(response => response.json())
                    .then(datosRecibidos => {
                        if (datosRecibidos.Response === "True") {
                            document.getElementById("modal-titulo").innerText = datosRecibidos.Title || "Sin título";
                            document.getElementById("modal-poster").src = datosRecibidos.Poster !== "N/A" ? datosRecibidos.Poster : "placeholder.png";
                            document.getElementById("modal-sinopsis").innerText = datosRecibidos.Plot || "Sin descripción.";
                            document.getElementById("modal-genero").innerText = datosRecibidos.Genre || "Desconocido";
                            document.getElementById("modal-director").innerText = datosRecibidos.Director || "Desconocido";
                            document.getElementById("modal-año").innerText = datosRecibidos.Year || "Desconocido";
                            document.getElementById("modal-actores").innerText = datosRecibidos.Actors || "Desconocido";
                            document.getElementById("modal-pais").innerText = datosRecibidos.Country || "Desconocido";
                            document.getElementById("modal-idioma").innerText = datosRecibidos.Language || "Desconocido";
                            document.getElementById("modal-duracion").innerText = datosRecibidos.Runtime || "Desconocido";
                            document.getElementById("modal-rating").innerText = datosRecibidos.imdbRating || "Desconocido";
                            document.getElementById("modal").style.display = "flex";
                        } else {
                            console.error("No se encontraron detalles para la serie.");
                        }
                    })
                    .catch(error => {
                        console.error("Error al obtener los detalles de la serie:", error);
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
            
        });*/
        function fEnter(evento){
            if(evento.key === "Enter"){
                peticionAjax(true);
            }
        }
    document.getElementById("buscarBtn").addEventListener("click", () => peticionAjax(true));
    document.getElementById("buscarBtn").addEventListener("keypress", fEnter);
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
    if (landingSection) showSection(landingSection);
};
