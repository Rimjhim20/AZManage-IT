import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import { db, dbRef } from "../../firebase";

const Contacts = () => {
  const [contactObjects, setContactObjects] = useState({});
  const [currentId, setCurrentId] = useState("");

  useEffect(() => {
    dbRef.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() != null) setContactObjects({ ...snapshot.val() });
      else setContactObjects({});
    });
  }, []);

  const addOrEdit = (obj) => {
    if (currentId === "")
      dbRef.child("contacts").push(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    else
      dbRef.child(`contacts/${currentId}`).set(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
  };

  const onDelete = (key) => {
    if (window.confirm("Are you sure to delete this record?")) {
      dbRef.child(`contacts/${key}`).remove((err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    }
  };

  return (
    <>
    <div className="bg-white">
      <h4 className="text-center  mb-4">Team Details</h4>
      <div className="row">
        <div className="col-md-5 m-auto ">
          <ContactForm {...({ addOrEdit, currentId, contactObjects })} />
        </div>
        <div className="">
          <table className="table table-borderless table-stripped ">
            <thead className="thead-light ">
              <tr >
                <th >Full Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(contactObjects).map((id) => {
                return (
                  <tr key={id}>
                    <td>{contactObjects[id].fullName}</td>
                    <td>{contactObjects[id].mobile}</td>
                    <td><a className="text-decoration-none" href="mailto:{contactObjects[id].email}">{contactObjects[id].email}</a></td>
                    <td>
                      <a
                        className="btn text-primary"
                        onClick={() => {
                          setCurrentId(id);
                        }}
                      >
                        <i className="fas fa-pencil-alt"></i>
                      </a>
                      <a
                        className="btn text-danger"
                        onClick={() => {
                          onDelete(id);
                        }}
                      >
                        <i className="far fa-trash-alt"></i>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </>
  );
};

export default Contacts;
