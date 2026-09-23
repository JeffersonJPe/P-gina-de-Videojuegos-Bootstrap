$(function () {
    // Animación suave de las tarjetas.
    $(".game").hide().fadeIn(500);

    // Cierra el menú lateral al seleccionar una opción.
    $(".side-menu__link").on("click", function () {
        $("#menu").prop("checked", false);
    });

    // Búsqueda sencilla por nombre o género.
    $("#searchForm").on("submit", function (event) {
        event.preventDefault();

        const texto = $("#searchInput").val().trim().toLowerCase();
        let encontrados = 0;

        $(".game-list > article").each(function () {
            const contenido = $(this).text().toLowerCase();
            const coincide = texto === "" || contenido.includes(texto);

            $(this).stop(true, true).fadeToggle(200, coincide);

            if (coincide) {
                encontrados++;
            }
        });

        if (texto === "") {
            $("#searchFeedback").text("Mostrando todos los juegos.");
        } else if (encontrados > 0) {
            $("#searchFeedback").text("Se encontraron " + encontrados + " resultado(s).");
        } else {
            $("#searchFeedback").text("No se encontraron juegos con esa búsqueda.");
        }
    });
});
