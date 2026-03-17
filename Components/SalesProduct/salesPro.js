export const salesPro = (allApiData) =>{
    const sale = allApiData.salesData[0].weeklySales || "-";
    const product = sale.map((sal) => sal.sales);
    console.log(product);
    
return `
    <section>
        <div class ="sale-container">
                <div class ="sale-header">
                <h3>Top Selling Products</h3>
            </div>
            <div class ="sale-list">
                <p class ="sale-text">Product A</p>
                <p class ="sale-text shift">$${product[0].toLocaleString()}</p>
            </div>
            <div class ="sale-list">
                <p class ="sale-text">Product B</p>
                <p class ="sale-text shift">$${product[1].toLocaleString()}</p>
            </div>
            <div class ="sale-list">
                <p class ="sale-text">Product C</p>
                <p class ="sale-text shift">$${product[2].toLocaleString()}</p>
            </div>
            <div class ="sale-list">
                <p class ="sale-text">Product D</p>
                <p class ="sale-text shift">$${product[3].toLocaleString()}</p>
            </div>
            <div class ="sale-list">
                <p class ="sale-text">Product E</p>
                <p class ="sale-text shift">$${product[4].toLocaleString()}</p>
            </div>
        </div>
    </section>
    
    `;
}