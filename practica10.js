// Cargar la librería de Google Charts
google.charts.load('current', {'packages':['corechart']});

// Función para dibujar el gráfico
function drawChart() {
    // Definir los datos del gráfico
    const data = google.visualization.arrayToDataTable([
        ['Lenguaje', 'Popularidad'],
        ['JavaScript', 14.3],
        ['Python', 12.9],
        ['Java', 8.2],
        ['C#', 10.2],
        ['PHP', 7.5],
        ['Swift', 6.8],
        ['Ruby', 5.5],
        ['Go', 4.9],
        ['TypeScript', 4.5],
        ['Kotlin', 3.8]
    ]);

    // Opciones del gráfico
    const options = {
        title: 'Lenguajes de Programación Más Populares',
        is3D: true, // Hacer el gráfico en 3D
        backgroundColor: 'transparent',
        titleTextStyle: {
            color: '#fff',
            fontSize: 20
        },
        legend: {
            textStyle: {
                color: '#fff'
            }
        }
    };

    // Dibujar el gráfico en el div con id "piechart"
    const chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}

// Llamar a la función drawChart cuando se cargue la librería
google.charts.setOnLoadCallback(drawChart);