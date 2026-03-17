export function salesChart(allApiData) {
    
    const sales = allApiData.salesData[0].weeklySales || "-";
    // console.log(sales);
    
    const maxSales = Math.max(...sales.map(s => Number(s.sales)));

    const bars = sales.map(item => {
        const salesVal = Number(item.sales);
        const heightPercent = (salesVal / maxSales) * 100;
        const statusClass = heightPercent > 90 ? 'high-perform' :  'normal-perform';

        return `
            <div class="bar-group">
                <div class="bar-wrapper">
                    <div class="bar ${statusClass}" style="height: ${heightPercent}%;">
                        <span class="tooltip">$${salesVal.toLocaleString()}</span>
                    </div>
                </div>
                <span class="day-label">${item.day || "-"}</span>
            </div>
        `;
    }).join('');

    
    const totalSales = sales.reduce((sum, s) => sum + (Number(s.sales)), 0);
    const avgSales = Math.round(totalSales / sales.length);

    return `
        <section class="sales-chart-card">
            <div class="chart-header">
                <h3>Sales Analytics</h3>
                <p>Weekly performance</p>
            </div>

            <div class="bar-container">
                ${bars}
            </div>

            <div class="avg-footer">
                <div class="avg-info">
                    <p class="avg-label">Weekly Average</p>
                    <p class="avg-value">$${avgSales.toLocaleString()}</p>
                </div>
            </div>
        </section>
    `;
}