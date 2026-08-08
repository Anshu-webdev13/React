import { Bookmark } from "lucide-react";
const Card = (job) => {
  return (
    <div className="card">
      <div className="top">
        <img src={job.companyBrandLogo} />
        <button>
          Save
          <Bookmark size={14} />
        </button>
      </div>

      <div className="center">
        <h3>
          {job.companyName}
          <span> {job.days}</span>
        </h3>
        <h2>{job.workingDeveloperName}</h2>
        <div className="tag">
          <h4>{job.tag1}</h4>
          <h4>{job.tag2}</h4>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h2>{job.pay}</h2>
          <p>{job.countryName}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};
export default Card;
