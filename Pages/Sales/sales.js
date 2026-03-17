

import { monthlySalesTrend } from "../../Components/MonthlySalesTrend/MonthlySalesTrend.js";
import { salesCard } from "../../Components/SalesCard/salesCard.js";

import { salesPro } from "../../Components/SalesProduct/salesPro.js";

export const sales = (allApiData) => {
   
    return `
     <div class="dashboard-container">
            
           ${salesCard(allApiData)}
           ${monthlySalesTrend()}
           ${salesPro(allApiData)}
        </div>
    `;
}