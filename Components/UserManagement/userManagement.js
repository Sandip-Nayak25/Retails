export const userManagement = () => {
  return `
   <section class="settings-wrapper">

    <div class="userManagement-card">

      <div class="userManagement-header">
        <div class="userManagement-icon">
         <img src = "/assets/icons/people.svg">
        </div>
        <h2>User Management</h2>
      </div>

      <div class="userManagement-body">

        <div class ="userManagement-list">
                <p class ="userManagement-text">Active Users</p>
                <p class ="userManagement-text shift">13</p>
            </div>
        <div class ="userManagement-list">
                <p class ="userManagement-text">Admin Accounts</p>
                <p class ="userManagement-text shift">8</p>
            </div>

      </div>

    </div>

  </section>
  `;
};