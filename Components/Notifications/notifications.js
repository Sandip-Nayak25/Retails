export const notifications = () => {
  return `
  <section class="settings-wrapper">

    <div class="notification-contain">

      <div class="notification-header">
        <div class="notification-icon">
         <img src = "/assets/icons/notification-bell.svg">
        </div>
        <h2>Notifications</h2>
      </div>

      <div class="notification-body">

      <div class="notification-card">
      <div class="notification-text">
        Email Alerts
      </div>

      <label class="switch">
        <input type="checkbox" checked>
        <span class="slider"></span>
      </label>

    </div>
      </div>

      <div class="notification-card">
      <div class="notification-text">
        SMS Notifications
      </div>

      <label class="switch">
        <input type="checkbox" checked>
        <span class="slider"></span>
      </label>
    </div>

    <div class="notification-card">
      <div class="notification-text">
       Push Notifications
      </div>

      <label class="switch">
        <input type="checkbox" checked>
        <span class="slider"></span>
      </label>

    </div>
      
      
      

    </div>

  </section>
  `;
};