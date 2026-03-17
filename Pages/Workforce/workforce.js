
import { schedule } from "../../Components/ScheduleOverview/schedule.js";
import { workCard } from "../../Components/WorkforceCard/workCard.js";


export const workforce = (allApiData) => {


    return `
        <div class="dashboard-container">
            
            ${workCard(allApiData)}
            ${schedule(allApiData)}
        
        </div>
    `;
};