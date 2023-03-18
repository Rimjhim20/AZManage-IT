import React, { useState, useEffect } from "react";
import { dbRef } from "../../firebase";

const initialFieldValues = {
  fullName: "",
  mobile: "",
  email: "",
  address: "",
};

const ContactForm = (props) => {
  var [values, setValues] = useState(initialFieldValues);

  useEffect(() => {
    if (props.currentId === "") setValues(initialFieldValues);
    else setValues(props.contactObjects[props.currentId]);
  }, [props.currentId, props.contactObjects]);

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (values.fullName && values.mobile && values.email && values.address) {
      dbRef.child("contacts").push(values, (err) => {
        if (err) console.log(err);
        else props.addOrEdit(null);
      });
    }
  };

  return (
    <form autoComplete="off" onSubmit={handleFormSubmit}>
      <div className="form-group input-group mb-2">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-user mt-2"></i>
          </div>
        </div>
        <input
          className="form-control"
          placeholder="Full Name"
          name="fullName"
          value={values.fullName}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-row">
        <div className="form-group input-group mb-2 col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-mobile-alt mt-2"></i>
            </div>
          </div>
          <input
            className="form-control"
            placeholder="Mobile"
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group mb-2 col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-envelope mt-2"></i>
            </div>
          </div>
          <input
            className="form-control"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-group mb-2">
        <textarea
          className="form-control "
          placeholder="Address"
          name="address"
          value={values.address}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="submit"
          value={props.currentId === "" ? "Save" : "Update"}
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

export default ContactForm;
