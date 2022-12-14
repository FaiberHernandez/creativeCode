//chart creation
function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}

var programing = {
    labels: [
        'Html',
        'CSS',
        'JavaScript',
        'C++',
        'C',
        'Python',
        'Java'
    ],
    datasets: [{
        label: 'Habilidad',
        data: [10, 8, 8, 6, 4, 6, 7],
        fill: true,
        backgroundColor: ' rgba(15, 236, 41, 0.221)',
        borderColor: '#0fec2a',
        pointBackgroundColor: 'rgba(15, 236, 41, 0.221)',
        pointBorderColor: '#132d46',
        pointHoverBackgroundColor: '#0fec2a',
        pointHoverBorderColor: '#132d46'
    }]
};

//chart creation
var design = {
    labels: [
        'Diseño',
        'Frameworks',
        'Trabajo en equipo',
        'Responsive'
    ],
    datasets: [{
        label: 'Habilidad',
        data: [9, 4, 10, 8],
        fill: true,
        backgroundColor: ' rgba(15, 236, 41, 0.221)',
        borderColor: '#0fec2a',
        pointBackgroundColor: 'rgba(15, 236, 41, 0.221)',
        pointBorderColor: '#132d46',
        pointHoverBackgroundColor: '#0fec2a',
        pointHoverBorderColor: '#132d46'
    }]
};

var config1 = {
    type: 'radar',
    data: programing,
    options: {
        plugins: {
            legend: {
                labels: {
                    color: 'white',
                },
            }
        },
        elements: {
            line: {
                borderWidth: 3
            }
        },
        scales: {
            r: {
                beginAtZero: true,
                angleLines: {
                    color: 'white'
                },
                grid: {
                    color: 'white'
                },
                pointLabels: {
                    color: 'white'
                },
                ticks: {
                    color: 'white',
                    backdropColor: 'transparent'
                }
            },
        }
    }
};

var config2 = {
    type: 'radar',
    data: design,
    options: {
        plugins: {
            legend: {
                labels: {
                    color: 'white',
                },
            }
        },
        elements: {
            line: {
                borderWidth: 3
            }
        },
        scales: {
            r: {
                beginAtZero: true,
                angleLines: {
                    color: 'white'
                },
                grid: {
                    color: 'white'
                },
                pointLabels: {
                    color: 'white'
                },
                ticks: {
                    color: 'white',
                    backdropColor: 'transparent'
                }
            },
        }
    }
};

var myChart = new Chart(
    $("#myChart"),
    config1
);

$(function () {

    $("#programing").click(function (e) {
        e.preventDefault();
        $(".chart").empty();
        $(".chart").append('<canvas id="myChart"  alt = "Gráfica de habilidades"></canvas>');
        myChart = new Chart(
            $("#myChart"),
            config1
        );
    });

    $("#design").click(function (e) {
        e.preventDefault();
        $(".chart").empty();
        $(".chart").append('<canvas id="myChart" alt = "Gráfica de habilidades"></canvas>');
        myChart = new Chart(
            $("#myChart"),
            config2
        );
    });
});
//End chart Creation

//Tabs ini
$(document).ready(function () {
    $("#interprete").css("border-bottom", "0");
    $("#expec").css("border-bottom", "0");
    $("#papelPlot a").css("padding", "5px 10px");
    changePortafolioContent(1);
});
//End tabs ini

//portafolio content data
var papelPlot = {
    "title": " PapelPlot.",
    "description": "PapelPlot es el primer proyecto grupal en el que trabaje a nivel académico en el curso de programación web, consiste en una página web para una papelería en la que se pueden realizar compras, comentarios y demás.<br>En este aprendí las bases de la programación web, la arquitectura MVC, los lenguajes Html, CSS, Javascript y PHP, en este proyecto me desenvolví como FULL STACK Developer aunque trabaje en su mayoría en el Front End.",
    "link": "https://proyectofaiberz.000webhostapp.com/papelplot/vista/inicio.html"
}

var interprete = {
    "title": " Intérprete en Pyhton.",
    "description": "Otro de los proyectos en los que he trabajado a nivel académico es el de un Intérprete escrito en Python desplegado en la web usando Django. <br> En este mi rol fue puramente en el Front End, orientándola a los desarrolladores y llevando lo retro a lo moderno con un diseño que puede recordar a los viejos compiladores y un monitor CRT de fosforo verde. Este incorpora multilenguaje y un TTS para el narrado por voz de algunos mensajes emergentes. <br> Al final resultó ser un proyecto enriquecedor en el que afiancé mis conocimientos y aprendí más, así mismo mejoré el uso Frameworks como Bootstrap, te invito a visitar la página web dando click en el botón de abajo. <br>",
    "link": "https://interprete-sencillo.herokuapp.com/"
}

var hope = {
    "title": " Expectativas.",
    "description": "Mis expectativas al conseguir un trabajo como Desarrollador Front End en el CIDs son las de mejorar como profesional al desenvolverme en un entorno real, nutriéndome de las experiencias con las que me encuentre en mi transcurso en el centro, así mismo brindar mi disposición, responsabilidad y compromiso con lo que se me asigne. <br> Aprendiendo continuamente de los compañeros y colaborando en equipo para lograr crear productos de alta calidad, buena experiencia de usuario y desempeño, contribuyendo así a la sociedad y comunidad universitaria.",
    "link": "https://www.youtube.com/watch?v=t3bJ1OWZpDg"
}
//End portafolio content data

//auto typing in hero section
var type = new Typed("#heroAutoTyping", {
    strings: ["Faiber Hernández", "Desarrollador web"],
    typeSpeed: 120,
    backSpeed: 120,
    loop: true
});
//End auto typing in hero section

//Portafolio tabs changes
$(function () {
    $("#papelPlot").click(function (e) {
        e.preventDefault();
        $("#papelPlot").css("border-bottom", "3px solid var(--primaryColor)");
        $("#papelPlot a").css("padding", "5px 10px");
        $("#interprete").css("border-bottom", "0");
        $("#interprete a").css("padding", "0");
        $("#expec").css("border-bottom", "0");
        $("#expec a").css("padding", "0");
        $("#portafolioContent").addClass("change");
        setTimeout(function () {
            $("#portafolioContent").removeClass("change");
            changePortafolioContent(1);
        }, 500);
    });

    $("#interprete").click(function (e) {
        e.preventDefault();
        $("#interprete").css("border-bottom", "3px solid var(--primaryColor)");
        $("#interprete a").css("padding", "5px 10px");
        $("#papelPlot").css("border-bottom", "0");
        $("#papelPlot a").css("padding", "0");
        $("#expec").css("border-bottom", "0");
        $("#expec a").css("padding", "0");
        $("#portafolioContent").addClass("change");
        setTimeout(function () {
            $("#portafolioContent").removeClass("change");
            changePortafolioContent(2);
        }, 500);
    });

    $("#expec").click(function (e) {
        e.preventDefault();
        $("#expec").css("border-bottom", "3px solid var(--primaryColor)");
        $("#expec a").css("padding", "5px 10px");
        $("#papelPlot").css("border-bottom", "0");
        $("#papelPlot").css("border-bottom", "0");
        $("#interprete").css("border-bottom", "0");
        $("#interprete a").css("padding", "0");
        $("#portafolioContent").addClass("change");
        setTimeout(function () {
            $("#portafolioContent").removeClass("change");
            changePortafolioContent(3);
        }, 500);
    });

});

//End portafolio tabs changes

//Portafolio data changer
function changePortafolioContent(tab) {
    let content;
    if (tab == 1) {
        content = papelPlot;
    } else if (tab == 2) {
        content = interprete;
    } else {
        content = hope;
    }

    $("#portafolioTitle").text(content.title);
    $("#portalofioDescription").html(content.description);
    $("#portafolioLink").attr("href", content.link);

}
//End portafolio data changer

//Form label animation
const inputs = document.querySelectorAll(".input");

function focusInput() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurInput() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
    if($(this).val().trim() == ""){
        $(this).val("");
    }
   
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusInput);
    input.addEventListener("blur", blurInput);
});

//End Form label animation

//validating form fields and show pop up

$(function () {
    $("#contactForm").submit(function (e) {
        e.preventDefault();
        let msg = $("#mensaje").val();
        console.log(msg);
        $("#msg").text(msg);
        showPopup();
        $("#asunto").val("");
        $("#correo").val("");
        $("#mensaje").val("");
    });

    $("#closepop").click(function(e){
        e.preventDefault();
        $('.pop-up').removeClass('show');
        $('.pop-up-wrap').removeClass('show');
    });
});

function showPopup() {
    $('.pop-up').addClass('show');
    $('.pop-up-wrap').addClass('show');
}

//End validating form fields

//Hamburger nav menu

const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

//End hamburger menu

//Scroll Reveal


ScrollReveal().reveal("#about", { delay: 250 });
ScrollReveal().reveal("#portafolio", { delay: 250 });
ScrollReveal().reveal("#skills", { delay: 250 });
ScrollReveal().reveal("#contact", { delay: 250 });

//End scroll reveal