document.addEventListener("DOMContentLoaded", function() {
    var encuestasData = [
        [
            {
             "Centro": "Humanes",
             "Grado": "DAM",
             "Sexo": "M",
             "Edad": 22,
             "Pregunta_1": 4,
             "Pregunta_2": 5,
             "Pregunta_3": 3,
             "Pregunta_4": 2,
             "Pregunta_5": 1
            },
            {
             "Centro": "Getafe",
             "Grado": "DAW",
             "Sexo": "F",
             "Edad": 20,
             "Pregunta_1": 3,
             "Pregunta_2": 4,
             "Pregunta_3": 4,
             "Pregunta_4": 3,
             "Pregunta_5": 2
            },
            {
             "Centro": "Humanes",
             "Grado": "ASIR",
             "Sexo": "M",
             "Edad": 23,
             "Pregunta_1": 5,
             "Pregunta_2": 5,
             "Pregunta_3": 5,
             "Pregunta_4": 4,
             "Pregunta_5": 5
            },
            {
             "Centro": "Getafe",
             "Grado": "SMR",
             "Sexo": "F",
             "Edad": 21,
             "Pregunta_1": 2,
             "Pregunta_2": 3,
             "Pregunta_3": 4,
             "Pregunta_4": 4,
             "Pregunta_5": 3
            },
            {
             "Centro": "Humanes",
             "Grado": "DAM",
             "Sexo": "M",
             "Edad": 24,
             "Pregunta_1": 4,
             "Pregunta_2": 4,
             "Pregunta_3": 3,
             "Pregunta_4": 3,
             "Pregunta_5": 4
            },
            {
             "Centro": "Getafe",
             "Grado": "DAW",
             "Sexo": "F",
             "Edad": 22,
             "Pregunta_1": 5,
             "Pregunta_2": 4,
             "Pregunta_3": 5,
             "Pregunta_4": 3,
             "Pregunta_5": 3
            },
            {
             "Centro": "Humanes",
             "Grado": "ASIR",
             "Sexo": "M",
             "Edad": 20,
             "Pregunta_1": 3,
             "Pregunta_2": 3,
             "Pregunta_3": 2,
             "Pregunta_4": 4,
             "Pregunta_5": 4
            },
            {
             "Centro": "Getafe",
             "Grado": "SMR",
             "Sexo": "F",
             "Edad": 25,
             "Pregunta_1": 4,
             "Pregunta_2": 5,
             "Pregunta_3": 5,
             "Pregunta_4": 5,
             "Pregunta_5": 5
            },
            {
             "Centro": "Humanes",
             "Grado": "DAM",
             "Sexo": "M",
             "Edad": 21,
             "Pregunta_1": 4,
             "Pregunta_2": 3,
             "Pregunta_3": 4,
             "Pregunta_4": 4,
             "Pregunta_5": 4
            },
            {
             "Centro": "Getafe",
             "Grado": "DAW",
             "Sexo": "F",
             "Edad": 23,
             "Pregunta_1": 5,
             "Pregunta_2": 4,
             "Pregunta_3": 3,
             "Pregunta_4": 2,
             "Pregunta_5": 1
            },
            {
             "Centro": "Humanes",
             "Grado": "ASIR",
             "Sexo": "M",
             "Edad": 22,
             "Pregunta_1": 3,
             "Pregunta_2": 5,
             "Pregunta_3": 4,
             "Pregunta_4": 4,
             "Pregunta_5": 3
            },
            {
             "Centro": "Getafe",
             "Grado": "SMR",
             "Sexo": "F",
             "Edad": 20,
             "Pregunta_1": 4,
             "Pregunta_2": 4,
             "Pregunta_3": 5,
             "Pregunta_4": 3,
             "Pregunta_5": 2
            },
            {
             "Centro": "Humanes",
             "Grado": "DAM",
             "Sexo": "M",
             "Edad": 24,
             "Pregunta_1": 5,
             "Pregunta_2": 5,
             "Pregunta_3": 4,
             "Pregunta_4": 4,
             "Pregunta_5": 5
            },
            {
             "Centro": "Getafe",
             "Grado": "DAW",
             "Sexo": "F",
             "Edad": 21,
             "Pregunta_1": 3,
             "Pregunta_2": 3,
             "Pregunta_3": 4,
             "Pregunta_4": 5,
             "Pregunta_5": 4
            },
            {
             "Centro": "Humanes",
             "Grado": "ASIR",
             "Sexo": "M",
             "Edad": 25,
             "Pregunta_1": 4,
             "Pregunta_2": 4,
             "Pregunta_3": 3,
             "Pregunta_4": 3,
             "Pregunta_5": 4
            },
            {
             "Centro": "Getafe",
             "Grado": "SMR",
             "Sexo": "F",
             "Edad": 22,
             "Pregunta_1": 5,
             "Pregunta_2": 4,
             "Pregunta_3": 5,
             "Pregunta_4": 3,
             "Pregunta_5": 3
            },
            {
             "Centro": "Humanes",
             "Grado": "DAM",
             "Sexo": "M",
             "Edad": 20,
             "Pregunta_1": 3,
             "Pregunta_2": 5,
             "Pregunta_3": 4,
             "Pregunta_4": 4,
             "Pregunta_5": 3
            },
            {
             "Centro": "Getafe",
             "Grado": "DAW",
             "Sexo": "F",
             "Edad": 24,
             "Pregunta_1": 4,
             "Pregunta_2": 4,
             "Pregunta_3": 3,
             "Pregunta_4": 3,
             "Pregunta_5": 4
            },
            {
             "Centro": "Humanes",
             "Grado": "ASIR",
             "Sexo": "M",
             "Edad": 21,
             "Pregunta_1": 5,
             "Pregunta_2": 4,
             "Pregunta_3": 5,
             "Pregunta_4": 3,
             "Pregunta_5": 3
            },
            {
             "Centro": "Getafe",
             "Grado": "SMR",
             "Sexo": "F",
             "Edad": 23,
             "Pregunta_1": 3,
             "Pregunta_2": 3,
             "Pregunta_3": 2,
             "Pregunta_4": 4,
             "Pregunta_5": 4
            },
            {
             "Centro": "Humanes",
             "Grado": "DAM",
             "Sexo": "M",
             "Edad": 22,
             "Pregunta_1": 4,
             "Pregunta_2": 5,
             "Pregunta_3": 3,
             "Pregunta_4": 2,
             "Pregunta_5": 1
            },
            {
             "Centro": "Getafe",
             "Grado": "DAW",
             "Sexo": "F",
             "Edad": 20,
             "Pregunta_1": 3,
             "Pregunta_2": 4,
             "Pregunta_3": 4,
             "Pregunta_4": 3,
             "Pregunta_5": 2
            },
            {
             "Centro": "Humanes",
             "Grado": "ASIR",
             "Sexo": "M",
             "Edad": 23,
             "Pregunta_1": 5,
             "Pregunta_2": 5,
             "Pregunta_3": 5,
             "Pregunta_4": 4,
             "Pregunta_5": 5
            },
            {
             "Centro": "Getafe",
             "Grado": "SMR",
             "Sexo": "F",
             "Edad": 21,
             "Pregunta_1": 2,
             "Pregunta_2": 3,
             "Pregunta_3": 4,
             "Pregunta_4": 4,
             "Pregunta_5": 3
            },
            {
             "Centro": "Humanes",
             "Grado": "DAM",
             "Sexo": "M",
             "Edad": 24,
             "Pregunta_1": 4,
             "Pregunta_2": 4,
             "Pregunta_3": 3,
             "Pregunta_4": 3,
             "Pregunta_5": 4
            },
            {
             "Centro": "Getafe",
             "Grado": "DAW",
             "Sexo": "M",
             "Edad": 22,
             "Pregunta_1": 4,
             "Pregunta_2": 5,
             "Pregunta_3": 3,
             "Pregunta_4": 2,
             "Pregunta_5": 1
            },
            {
             "Centro": "Humanes",
             "Grado": "ASIR",
             "Sexo": "F",
             "Edad": 20,
             "Pregunta_1": 3,
             "Pregunta_2": 4,
             "Pregunta_3": 4,
             "Pregunta_4": 3,
             "Pregunta_5": 2
            },
            {
             "Centro": "Getafe",
             "Grado": "SMR",
             "Sexo": "M",
             "Edad": 23,
             "Pregunta_1": 5,
             "Pregunta_2": 5,
             "Pregunta_3": 5,
             "Pregunta_4": 4,
             "Pregunta_5": 5
            },
            {
             "Centro": "Humanes",
             "Grado": "DAM",
             "Sexo": "F",
             "Edad": 21,
             "Pregunta_1": 2,
             "Pregunta_2": 3,
             "Pregunta_3": 4,
             "Pregunta_4": 4,
             "Pregunta_5": 3
            },
            {
             "Centro": "Getafe",
             "Grado": "DAW",
             "Sexo": "M",
             "Edad": 24,
             "Pregunta_1": 4,
             "Pregunta_2": 4,
             "Pregunta_3": 3,
             "Pregunta_4": 3,
             "Pregunta_5": 4
            },
            {
             "Centro": "Humanes",
             "Grado": "ASIR",
             "Sexo": "F",
             "Edad": 22,
             "Pregunta_1": 5,
             "Pregunta_2": 4,
             "Pregunta_3": 5,
             "Pregunta_4": 3,
             "Pregunta_5": 3
            },
            {
             "Centro": "Getafe",
             "Grado": "SMR",
             "Sexo": "M",
             "Edad": 20,
             "Pregunta_1": 3,
             "Pregunta_2": 3,
             "Pregunta_3": 2,
             "Pregunta_4": 4,
             "Pregunta_5": 4
            },
            {
             "Centro": "Humanes",
             "Grado": "DAM",
             "Sexo": "F",
             "Edad": 25,
             "Pregunta_1": 4,
             "Pregunta_2": 5,
             "Pregunta_3": 5,
             "Pregunta_4": 5,
             "Pregunta_5": 5
            },
            {
             "Centro": "Getafe",
             "Grado": "DAW",
             "Sexo": "M",
             "Edad": 21,
             "Pregunta_1": 4,
             "Pregunta_2": 3,
             "Pregunta_3": 4,
             "Pregunta_4": 4,
             "Pregunta_5": 4
            },
            {
             "Centro": "Humanes",
             "Grado": "ASIR",
             "Sexo": "F",
             "Edad": 23,
             "Pregunta_1": 5,
             "Pregunta_2": 4,
             "Pregunta_3": 3,
             "Pregunta_4": 2,
             "Pregunta_5": 1
            },
            {
             "Centro": "Getafe",
             "Grado": "SMR",
             "Sexo": "M",
             "Edad": 22,
             "Pregunta_1": 3,
             "Pregunta_2": 5,
             "Pregunta_3": 4,
             "Pregunta_4": 4,
             "Pregunta_5": 3
            },
            {
             "Centro": "Humanes",
             "Grado": "DAM",
             "Sexo": "F",
             "Edad": 20,
             "Pregunta_1": 4,
             "Pregunta_2": 4,
             "Pregunta_3": 3,
             "Pregunta_4": 2,
             "Pregunta_5": 1
            },
            {
             "Centro": "Getafe",
             "Grado": "DAW",
             "Sexo": "M",
             "Edad": 24,
             "Pregunta_1": 5,
             "Pregunta_2": 5,
             "Pregunta_3": 4,
             "Pregunta_4": 4,
             "Pregunta_5": 5
            },
            {
             "Centro": "Humanes",
             "Grado": "ASIR",
             "Sexo": "F",
             "Edad": 21,
             "Pregunta_1": 3,
             "Pregunta_2": 3,
             "Pregunta_3": 4,
             "Pregunta_4": 4,
             "Pregunta_5": 3
            },
            {
             "Centro": "Getafe",
             "Grado": "SMR",
             "Sexo": "M",
             "Edad": 25,
             "Pregunta_1": 4,
             "Pregunta_2": 4,
             "Pregunta_3": 3,
             "Pregunta_4": 2,
             "Pregunta_5": 1
            },
            {
             "Centro": "Humanes",
             "Grado": "DAM",
             "Sexo": "F",
             "Edad": 22,
             "Pregunta_1": 5,
             "Pregunta_2": 4,
             "Pregunta_3": 5,
             "Pregunta_4": 3,
             "Pregunta_5": 3
            },
            {
             "Centro": "Getafe",
             "Grado": "DAW",
             "Sexo": "M",
             "Edad": 20,
             "Pregunta_1": 2,
             "Pregunta_2": 3,
             "Pregunta_3": 4,
             "Pregunta_4": 4,
             "Pregunta_5": 3
            },
            {
             "Centro": "Humanes",
             "Grado": "ASIR",
             "Sexo": "F",
             "Edad": 23,
             "Pregunta_1": 3,
             "Pregunta_2": 4,
             "Pregunta_3": 5,
             "Pregunta_4": 3,
             "Pregunta_5": 2
            },
            {
             "Centro": "Getafe",
             "Grado": "SMR",
             "Sexo": "M",
             "Edad": 21,
             "Pregunta_1": 4,
             "Pregunta_2": 5,
             "Pregunta_3": 4,
             "Pregunta_4": 2,
             "Pregunta_5": 1
            },
            {
             "Centro": "Humanes",
             "Grado": "DAM",
             "Sexo": "F",
             "Edad": 24,
             "Pregunta_1": 5,
             "Pregunta_2": 4,
             "Pregunta_3": 3,
             "Pregunta_4": 4,
             "Pregunta_5": 3
            },
            {
             "Centro": "Getafe",
             "Grado": "DAW",
             "Sexo": "M",
             "Edad": 22,
             "Pregunta_1": 3,
             "Pregunta_2": 3,
             "Pregunta_3": 2,
             "Pregunta_4": 5,
             "Pregunta_5": 4
            },
            {
             "Centro": "Humanes",
             "Grado": "ASIR",
             "Sexo": "F",
             "Edad": 20,
             "Pregunta_1": 4,
             "Pregunta_2": 4,
             "Pregunta_3": 5,
             "Pregunta_4": 4,
             "Pregunta_5": 3
            },
            {
             "Centro": "Getafe",
             "Grado": "SMR",
             "Sexo": "M",
             "Edad": 23,
             "Pregunta_1": 5,
             "Pregunta_2": 4,
             "Pregunta_3": 5,
             "Pregunta_4": 3,
             "Pregunta_5": 2
            },
            {
             "Centro": "Humanes",
             "Grado": "DAM",
             "Sexo": "F",
             "Edad": 25,
             "Pregunta_1": 3,
             "Pregunta_2": 4,
             "Pregunta_3": 3,
             "Pregunta_4": 4,
             "Pregunta_5": 5
            },
            {
             "Centro": "Getafe",
             "Grado": "DAW",
             "Sexo": "M",
             "Edad": 21,
             "Pregunta_1": 4,
             "Pregunta_2": 5,
             "Pregunta_3": 4,
             "Pregunta_4": 3,
             "Pregunta_5": 2
            }
           ]
    ];

    function mostrarEncuestas(data) {
        var encuestasContainer = document.getElementById("encuestas-container");
        data.forEach(function(encuestas) {
            encuestas.forEach(function(encuesta) {
                var encuestaDiv = document.createElement("div");
                encuestaDiv.classList.add("encuesta");
                encuestaDiv.innerHTML = `
                    <h2>${encuesta.Centro} - ${encuesta.Grado}</h2>
                    <p><strong>Sexo:</strong> ${encuesta.Sexo}</p>
                    <p><strong>Edad:</strong> ${encuesta.Edad}</p>
                    <p><strong>Pregunta 1:</strong> ${encuesta.Pregunta_1}</p>
                    <p><strong>Pregunta 2:</strong> ${encuesta.Pregunta_2}</p>
                    <p><strong>Pregunta 3:</strong> ${encuesta.Pregunta_3}</p>
                    <p><strong>Pregunta 4:</strong> ${encuesta.Pregunta_4}</p>
                    <p><strong>Pregunta 5:</strong> ${encuesta.Pregunta_5}</p>
                `;
                encuestasContainer.appendChild(encuestaDiv);
            });
        });
    }
    
 
    mostrarEncuestas(encuestasData);
});
