export function ForecastStaff(allApiData){

    const employee = allApiData.empData[0].employees || "-";
    const morning = employee.filter(emp =>emp.shift === "Morning").length;
    const evening = employee.filter(emp =>emp.shift === "Evening").length;
    const night = employee.filter(emp =>emp.shift === "Full Day").length;

    
    return `
        <section>
        <div class ="staff-container">
        <div class ="staff-header">
        <h3>Recommended Staffing</h3>
        </div>
        <div class="staff-list-contain">
        <div class ="staff-list">
        <p class ="staff-text">Monday - Wednesday</p>
        <p class ="staff-text shift">${morning} employees</p>
        </div>
        <div class ="staff-list">
        <p class ="staff-text">Thursday - Friday</p>
        <p class ="staff-text shift">${evening} employees</p>
        </div>
        <div class ="staff-list">
        <p class ="staff-text">Saturday - Sunday</p>
        <p class ="staff-text shift">${night} employees</p>
        </div>
        </div>
        </div>
        </section>
    `
}