export const laborEfficiency = (allApiData)=>{

    return `
             <section class="labor-efficiency-card">
                    <div class="labor-header">
                        <h3>Labor Efficiency</h3>
                        <p class="labor-label">Current status</p>
                    </div>
                    
                    <div class="labor-container">
                        <div class = "labor-border-wrapper">
                        <img src="./assets/icons/up.png" >
                        </div>
                        </div>
                        <div class= "labor-button">
                        <div class="button">Efficient</div>
                        </div>
                    <div class="labor-footer">
                         <div class = "labor-line">
                             <p>Sales per Employee</p>
                             <p class = "labor-no dollar">$296</p>
                         </div>
                        <div class = "labor-line">
                             <p>Hours Worked</p>
                             <p class = "labor-no hour">336h</p>
                        </div>
                        <div class = "labor-line">
                             <p>Productivity Index</p>
                             <p class = "labor-no percent">8.7/10</p>
                        </div>
                         <div>
                         <p class ="labor-bar-contain">Overall Efficiency</p>
                             <div class="labor-wrapper">
                         <div class="labor-bar">
                            <div class="labor-fill" style= "width:${70}%; background:#00BF55"></div>
                            </div>
                            </div>
                            <div class = "labor-bar-count">20%</div>
                        </div>
                 
                </section>
    
    `
}