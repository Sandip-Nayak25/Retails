import { employeeTable } from "../../Components/EmployeeAttendanceTable/employeeTable.js";
import { kpiCard } from "../../Components/KpiCard/kpiCard.js";
import { laborEfficiency } from "../../Components/LaborEfficiency/laborEfficiency.js";
import { salesChart } from "../../Components/SalesChart/salesChart.js";

export const dashboard = () => {


    return `
        <div class="dashboard-container">
            
            ${kpiCard(allApiData)}
        
        <div class= "table-graph">
            ${employeeTable(allApiData)}
        <div>
            ${salesChart(allApiData)}
            ${laborEfficiency(allApiData)}
                </div>
                </div>
        </div>
    `;
};