export function salesCard(allApiData) {
        const sale = allApiData.salesData[0].weeklySales || "-";
         const todaySales = sale.map((sal) => sal.sales).reduce((acc,cur) => acc + cur);
         const trans = sale.map((sal) => sal.sales).length;
         const avg = todaySales / trans;
         console.log(avg);
         
    return `
        <div class="sales-header">
        <h2>Sales Overview</h2>
        <p class = "sales-label">Track revenue and transactions</p>
        </div>
        <div class="sales-grid">
        <div class="sales-card">
                <div class="cardIcon">
                    <img src="./assets/icons/dollar.svg" alt=''>
                </div>
                <p class="sales-title">Today's Revenue</p>
                 <p class="sales-label">$${todaySales.toLocaleString()}</p>
            </div>

            <div class="sales-card">
                <div class="cardIcon">
                    <img src="./assets/icons/analytics.svg" alt=''>
                </div>
                <p class="sales-title">Growth</p>
                <p class="sales-label">+8.3%</p>
            </div>

            <div class="sales-card">
                <div class="cardIcon">
                    <img src="./assets/icons/cart.svg" alt=''>
                </div>
                <p class="sales-title">Transactions</p>
                <div class="sales-label">${trans}</div>
            </div>

            <div class="sales-card">
                <div class="cardIcon">
                    <img src="./assets/icons/card.svg" alt=''>
                </div>
                <p class="sales-title">Avg Transaction</p>
                <div class="sales-label">$${avg.toLocaleString()}</div>
            </div>
        </div>
    `;
}