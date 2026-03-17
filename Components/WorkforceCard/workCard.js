export const workCard = (allApiData) => {

    const countEmp = allApiData?.empData[0].employees || "-";
    const label = countEmp.length;

    const performance = allApiData.empData[0].employees.filter(e =>e.performanceScore >= 90).length;
    
    return `
        <div class="work-header">
        <h2>Workforce Management</h2>
        <p class = "work-label">Manage your team and schedules</p>
        </div>
        <div class="work-grid">
        <div class="work-card">
                <div class="cardIcon">
                    <img src="./assets/icons/people.svg" alt=''>
                </div>
                <p class="work-title">Total Staff</p>
                 <p class="work-label">${label}</p>
            </div>

            <div class="work-card">
                <div class="cardIcon">
                    <img src="./assets/icons/person-plus.svg" alt=''>
                </div>
                <p class="work-title">New Hires</p>
                <p class="work-label">3</p>
            </div>

            <div class="work-card">
                <div class="cardIcon">
                    <img src="./assets/icons/clock.svg" alt=''>
                </div>
                <p class="work-title">Avg Hours/Week</p>
                <div class="work-label">38.5</div>
            </div>

            <div class="work-card">
                <div class="cardIcon">
                    <img src="./assets/icons/award.svg" alt=''>
                </div>
                <p class="work-title">Top Performers</p>
                <div class="work-label">${performance}</div>
            </div>
        </div>
    `;
}