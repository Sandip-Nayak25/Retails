export function forecastCard(allApiData) {
        const sale = allApiData.salesData[0].weeklySales || "-";
         const todaySales = sale.map((sal) => sal.sales).reduce((acc,cur) => acc + cur);
         const trans = sale.map((sal) => sal.sales).length;
         const avg = todaySales / trans;
         console.log(avg);
         
    return `
        <div class="forecast-header">
        <h2>Demand Forecast</h2>
        <p class = "forecast-label">Predictive analytics and trends</p>
        </div>
        <div class="forecast-grid">
        <div class="forecast-card">
                <div class="cardIcon">
                    <img src="./assets/icons/analytics.svg" alt=''>
                </div>
                <p class="forecast-title">Next Week Est.</p>
                 <p class="forecast-label">$${todaySales.toLocaleString()}</p>
            </div>

            <div class="forecast-card">
                <div class="cardIcon">
                    <img src="./assets/icons/calendar.svg" alt=''>
                </div>
                <p class="forecast-title">Peak Day</p>
                <p class="forecast-label">Saturday</p>
            </div>

            <div class="forecast-card">
                <div class="cardIcon">
                    <img src="./assets/icons/target.svg" alt=''>
                </div>
                <p class="forecast-title">Accuracy</p>
                <div class="forecast-label">${trans}</div>
            </div>

            <div class="forecast-card">
                <div class="cardIcon">
                    <img src="./assets/icons/activity-graph.svg" alt=''>
                </div>
                <p class="forecast-title">Traffic Est.</p>
                <div class="forecast-label">$${avg.toLocaleString()}</div>
            </div>
        </div>
    `;
}