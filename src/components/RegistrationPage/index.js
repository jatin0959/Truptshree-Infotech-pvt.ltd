import "./index.css";

const RegistrationPage = () => (
  <div className="registration-bg">
    <div class="registration-container">
      <div class="form-wrapper">
        <img
          src="https://i.im.ge/2024/07/28/VJhrTS.WhatsApp-Image-2024-07-28-at-08-10-20-e9f79883.jpeg"
          alt="Logo"
          class="logo"
        />
        <h2>Application Form</h2>
        <form id="applicationForm">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div class="form-group">
            <label for="email">Email ID</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div class="form-group">
            <label for="domain">Domain of Interest</label>
            <input type="text" id="domain" name="domain" required />
          </div>
          <div class="form-group">
            <label for="graduation">Graduation Year</label>
            <input type="number" id="graduation" name="graduation" required />
          </div>
          <div class="form-group">
            <label for="status">Current Status</label>
            <input type="text" id="status" name="status" required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
);

export default RegistrationPage;
