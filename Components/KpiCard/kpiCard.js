export function kpiCard(allApiData) {

    const emp = allApiData.empData[0].employees || "-";
    const weekSale = allApiData.salesData[0].weeklySales;
    const countEmp = emp.length;
    const attendance = emp.filter(e =>e.attendanceStatus === "Present").length;
    const attendacePercent = attendance / countEmp * 100;
    const todaySales = weekSale.map((sal) => sal.sales).reduce((acc,cur) => acc + cur);
    const laborCostPercent = todaySales / 1000000 * 100;
    
    return `
        <div class="kpi-grid">
        <div class="kpi-card">
                <div class="cardIcon">
                    <img src="./assets/icons/people-side.svg" alt=''>
                </div>
                <p class="kpi-title">Total Employees</p>
               <p class="kpi-label">${countEmp}</p>
                <p class="kpi-label2">Active staff</p>
            </div>

            <div class="kpi-card">
                <div class="cardIcon">
                    <img src="./assets/icons/person-check.svg" alt=''>
                </div>
                <p class="kpi-title">Present Today</p>
                <p class="kpi-label">${attendance}</p>
                <p class="kpi-label2">+${attendacePercent}% attendance</p>
            </div>

            <div class="kpi-card">
                <div class="cardIcon">
                    <img src="./assets/icons/Sales.svg" alt=''>
                </div>
                <p class="kpi-title">Today's Sales</p>
                <p class="kpi-label">$${todaySales.toLocaleString()}</p>
                <p class="kpi-label2">+8.3% vs yesterday</p>
            </div>

            <div class="kpi-card">
                <div class="cardIcon">
                    <img src="./assets/icons/percent.svg" alt=''>
                </div>
                <p class="kpi-title">Labor Cost %</p>
                <p class="kpi-label">${laborCostPercent.toFixed(1)}%</p>
                <p class="kpi-label2">Of total revenue</p>
            </div>
        </div>
    `;
}