import { forecastCard } from "../../Components/ForecastCard/ForecastCard.js"
import { ForecastStaff } from "../../Components/ForecastStaff/ForecastStaff.js";
import { salesForecast } from "../../Components/SalesForecast/salesForecast.js";



export const forecast = (allApiData) => {
    

    return `
    <div class="dashboard-container">
           
        ${forecastCard(allApiData)}
        ${salesForecast()}
        ${ForecastStaff(allApiData)}
    </div>
    
    
    `;
}