// ! Employee Attendance //
export function employeeTable(allApiData) {
    

    const tableRows = allApiData.empData.flatMap(({ employees }) => 
        employees.map(emp => `
            <tr>
                <td><strong>${emp.name}</strong></td>
                <td>${emp.role}</td>
                <td>${emp.shift}</td>
                <td>
                    <div class="badge" style= " background: ${emp.attendanceStatus == 'Present' ? '#DBFCE7' : emp.attendanceStatus == 'Absent' ? '#FFE2E2' : '#FEF9C2'}; ">
                      <span style= " color: ${emp.attendanceStatus == 'Present' ? '#008236' : emp.attendanceStatus == 'Absent' ? '#C10007' : '#A65F00'};">
                      ${emp.attendanceStatus}
                      </span>
                    </div>
                </td>
                <td>
                    <div class="performance-wrapper">
                         <div class="performance-bar">
                            <div class="performance-fill" style="width: ${emp.performanceScore}%; background: ${emp.performanceScore > 90 ? '#22c55e' : emp.performanceScore > 80 ? '#2B7FFF' : '#f59e0b'};"></div>
                    </div>
                     <span class="performance-text">${emp.performanceScore}</span>
            </div>
                </td>
            </tr>
        `)
    ).join('');
    
    return `
            <section class="table">
    <div class="table-header">
        <h3>Employee Attendance</h3>
        <p>Today's workforce status</p>
    </div>
    
    <div class="table-responsive">
        <table id="employee-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Shift</th>
                    <th>Attendance Status</th>
                    <th>Performance Score</th>
                </tr>
            </thead>
            <tbody id="employee-tbody">
                ${tableRows}
            </tbody>
        </table>
    </div>
    </section>`
    }