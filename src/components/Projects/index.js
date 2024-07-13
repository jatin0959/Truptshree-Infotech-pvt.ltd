import "./index.css";

const Portfolios = () => {
  return (
    <div className="portfolios-section" id="sectionProjects">
      <h2 className="project-heading">PROJECTS</h2>
      <h1 className="project-main-heading">
        Our Recent Launched Projects will Available soon into Market
      </h1>
      <p className="project-description">
        Our Top-Notch Products & Ready to production Code! Look No further.
      </p>
      <div className="projects-container">
        <a
          className="project-link-item"
          href="https://www.bitboxpc.com/"
          target="_blank"
        >
          <img
            src="https://res.cloudinary.com/daxizvsge/image/upload/v1720874966/BitBox_logo1_s20ezj.png"
            alt="project-link-img"
            className="project-link-img"
          />
        </a>

        <a
          className="project-link-item"
          href="https://netfairsolutions.com/"
          target="_blank"
        >
          <img
            src="https://res.cloudinary.com/daxizvsge/image/upload/v1720874960/logo_aauxrc.png"
            alt="project-link-img"
            className="project-link-img"
          />
        </a>

        <a
          className="project-link-item special"
          href="https://www.alwaysliveyoga.com/"
          target="_blank"
        >
          <img
            src="https://res.cloudinary.com/daxizvsge/image/upload/v1720875073/Untitled_20design_edited_fv2c34.png"
            alt="project-link-img"
            className="project-link-img"
          />
        </a>

        <a
          className="project-link-item"
          href="https://www.brightlaundry.com.au/"
          target="_blank"
        >
          <img
            src="https://res.cloudinary.com/daxizvsge/image/upload/v1720875101/Bright_Laundry_logo_cyan-white_tkchv1.png"
            alt="project-link-img"
            className="project-link-img"
          />
        </a>
      </div>
    </div>
  );
};

export default Portfolios;
