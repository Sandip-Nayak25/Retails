export const settingsStore = () => {
  return `
  <section class="settings-wrapper">

    <div class="settings-card">

      <div class="settings-header">
        <div class="settings-icon">
         <img src = "/assets/icons/store.svg">
        </div>
        <h2>Store Settings</h2>
      </div>

      <div class="settings-body">

        <div class="settings-group">
          <label>Store Name</label>
          <input type="text" value="Downtown Store" class = "field" />
        </div>

        <div class="settings-group">
          <label>Store Location</label>
          <input type="text" value="123 Main Street, City" class = "field" />
        </div>

      </div>

    </div>

  </section>
  `;
};