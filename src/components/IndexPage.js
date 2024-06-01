import React from "react";
import { withRouter } from "react-router-dom";
import doctorImage from "../images/doctor.jpg";
import dentalImage from "../images/dental.png";
import mriImage from "../images/mri.jpg";
import nurseImage from "../images/nurse.jpg";
import pharmacyImage from "../images/pharmacy.jpg";
import pt from "../images/pt.png";

import Card from "./Card";

class IndexPage extends React.PureComponent {
  render() {
    return (
      <div className="Cards">
        <h2>Schedule a hospital appointment</h2>
        <div className="Card-Flex-Box">
          <div className="CardGroup">
            <Card
              title="Talk to a doctor"
              text="Click to schedule appointment"
              image={doctorImage}
            />
            <Card
              title="Talk to a dentist"
              text="Click to schedule appointment"
              image={dentalImage}
            />
            <Card
              title="Schedule MRI Appointment"
              text="Click to schedule appointment"
              image={mriImage}
            />
            <Card
              title="Talk to a nurse"
              text="Click to schedule appointment"
              image={nurseImage}
            />
            <Card
              title="Talk to a pharmacist"
              text="Schedule an appointment"
              image={pharmacyImage}
            />
            <Card
              title="Talk to a therapist"
              text="Schedule an appointment"
              image={pt}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(IndexPage);
