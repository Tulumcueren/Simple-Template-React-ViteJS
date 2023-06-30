import "./Contact.css";
const Contact = () => {
  return (
    <div className="Contact">
      <div className="GetInTouch">Get in Touch With Us</div>
      <div className="mail">info@aaronn.com</div>
      <div className="rowBetween">
        <div className="Logo">
          <div className="Logo">
            AAR<div className="SpecialO">O</div>NN{" "}
            <div className="special">
              <div></div>
            </div>
          </div>
        </div>
        <div className="Address">
          Street Avenue 21, CA
          <br />
          0-8-00-888-000
        </div>
        <div className="ContactDetails">+9 0283353</div>
      </div>
      <div className="column">
        <div className="greyLine"></div>
        <div className="Credit">© 2023. Ideapeel. All rights reserved. </div>
      </div>
    </div>
  );
};

export default Contact;
