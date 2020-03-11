import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin ,faGitlab} from "@fortawesome/free-brands-svg-icons";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.landingData = props.landingData;
  }
  render() {
    return (
      <section className="p-3 p-lg-5  d-flex align-items-center" id="about">
        <div className="w-100 mt-5">
          <h1 className="mb-0 mt-5">{this.landingData.firstName}
            <span className="text-primary">{this.landingData.lastName}</span>
          </h1>
          <div className="subheading mb-10">{this.landingData.email}
          </div>
          <p className="lead mb-5">{this.landingData.bio}</p>
          <div className="social-icons">
            <a href={this.landingData.linkedin} target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={this.landingData.github} target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
			<a href={this.landingData.gitlab} target="_blank">
              <FontAwesomeIcon icon={faGitlab} />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Landing;
