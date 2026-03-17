import { notifications } from "../../Components/Notifications/notifications.js";
import { security } from "../../Components/Security/security.js";
import { settingsStore } from "../../Components/SettingsStore/settingsStore.js";
import { userManagement } from "../../Components/UserManagement/UserManagement.js";

export const settings = (allApiData) => {
    

    return `
    <div class="dashboard-container">
    <section class = "settings-wrapper">
         <div class="setting-header">
        <h2>Settings</h2>
        <p class = "setting-label">Configure your dashboard preferences</p>
        </div>
        ${settingsStore(allApiData)}
        ${userManagement()}
        ${notifications()}
        ${security()}
    </div>
    </section>
    
    `;
}