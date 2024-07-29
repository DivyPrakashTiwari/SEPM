// Data for the bar chart
const barChartData = {
    labels: ["Organic", "Semi-Detached", "Embedded"],
    datasets: [{
        label: 'Months Needed',
        data: [5, 8, 12], // Replace with your data
        backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
    }]
};

// Create and render the bar chart
const ctx = document.getElementById('bar-chart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: barChartData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
