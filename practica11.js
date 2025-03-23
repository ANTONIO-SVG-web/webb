// Cargar la librería de Google Charts
google.charts.load('current', {'packages':['corechart']});

// Función para dibujar el gráfico
function drawChart() {
    // Definir los datos del gráfico
    const data = google.visualization.arrayToDataTable([
        ['Categoría', 'Valor'],
        ['Col1', 20],
        ['Col2', 15],
        ['Col3', 10],
        ['Col4', 5]
    ]);

    // Opciones del gráfico
    const options = {
        title: 'Datos Estadísticos',
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
        },
        hAxis: {
            title: 'Categorías',
            titleTextStyle: {
                color: '#fff'
            },
            textStyle: {
                color: '#fff'
            }
        },
        vAxis: {
            title: 'Valores',
            titleTextStyle: {
                color: '#fff'
            },
            textStyle: {
                color: '#fff'
            }
        }
    };

    // Dibujar el gráfico en el div con id "barchart"
    const chart = new google.visualization.BarChart(document.getElementById('barchart'));
    chart.draw(data, options);
}

// Llamar a la función drawChart cuando se cargue la librería
google.charts.setOnLoadCallback(drawChart);