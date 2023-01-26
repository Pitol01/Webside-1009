$(function(){
    let fondoOscuro = true;
    $("#btnBlancoNegro").click(function(){
        if(fondoOscuro === true){ //if(fondoOscuro)
        $("#nosotros").css("background-color","#EEEEEE")
                    .css("color","#333333");
            fondoOscuro = false;
        }
        else{
            $("#nosotros").css("background-color","#333333")
                    .css("color","#EEEEEE");
            fondoOscuro = true;
        }
    })

    $("#valores article").click(function(){
        //this haces referencia al objeto que recibio el evento
        console.log($(this).css("background-color"));
        if($(this).css("background-color") === "rgba(0, 0, 0, 0)"){
            $(this).css("background-color","rgba(0,0,0,0.1)");
        }
        else{
            $(this).css("background-color","rgba(0, 0, 0, 0)");
        }
    })

    $("#valores h2 span").click(function(){
        $("#valores article").css("background-color","rgba(0, 0, 0, 0)");
    })

    $("section").each(function(){
        //each es una es una estructura de repetición que examina uno a uno el conjunto de elementos seleccionados
        let titulo = $(this).find("h2").text();
        //console.log(titulo);
        //this hace referencia al objeto que se esta examinando con each en cada repeticion
        let idSeccion = $(this).attr("id");
        console.log(idSeccion);

        $("#menu-main").append('<li class="nav-item">' +
        '<a class="nav-link" href="#' + idSeccion + '">' + titulo + '</a>' +
        '</li>');
        //append indica agregar al final (dentro) del objeto seleccionado
    })

    $("#galeria figure").append("<figcaption>");
    /* $("#galeria figure figcaption").append("<div>"); */

    $("#galeria figure").mouseenter(function(){
        $(this).find("figcaption").stop().slideDown("fast");
        //slideDown show fadeIn
    })
    $("#galeria figure").mouseleave(function(){
        $(this).find("figcaption").stop().slideUp("fast");
        //slideUp hide fadeOut
    })

    $("#galeria figure").each(function(){
        let titulo = $(this).find("img").attr("title");
        let ruta = $(this).find("img").attr("src");
        console.log(titulo);
        $(this).find("figcaption").html("<div><i class='bi bi-zoom-in'></i>" + titulo + "</div>");

        $(this).find("figcaption div i").click(function(){
            $("body").append("<div id='fondo-oscuro'></div>");
            $("#fondo-oscuro").append("<img src='" + ruta + "'>");
            $("#fondo-oscuro").append("<h3>" + titulo + "</h3>");
            $("#fondo-oscuro").click(function(){
                $(this).remove();
            })
        })
    })
})    
