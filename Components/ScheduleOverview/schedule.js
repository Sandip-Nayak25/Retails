export function schedule(allApiData){

    const employee = allApiData.empData[0].employees || "-";
    const morning = employee.filter(emp =>emp.shift === "Morning").length;
    const evening = employee.filter(emp =>emp.shift === "Evening").length;
    const night = employee.filter(emp =>emp.shift === "Full Day").length;

    
    return `
        <section>
        <div class ="schedule-container">
        <div class ="schedule-header">
        <h3>Schedule Overview</h3>
        </div>
        <div class ="schedule-list">
        <p class ="schedule-text">Morning Shift: 6:00 AM - 2:00 PM</p>
        <p class ="schedule-text shift">${morning} employees</p>
        </div>
        <div class ="schedule-list">
        <p class ="schedule-text">Afternoon Shift: 2:00 PM - 10:00 PM</p>
        <p class ="schedule-text shift">${evening} employees</p>
        </div>
        <div class ="schedule-list">
        <p class ="schedule-text">Night Shift: 10:00 PM - 6:00 AM</p>
        <p class ="schedule-text shift">${night} employees</p>
        </div>
        </div>
        </section>
    `
}