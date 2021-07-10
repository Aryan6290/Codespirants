import React from "react";
import "./ListComponent.css";

const ListComponent = ({ heading, data }) => {
  return (
    <div className="listContainer">
      <div className="listHeader">
        <h1>{heading}</h1>
        <div className="statusContainer">
          <p style={{ color: "#a3a3a3", fontWeight: "bold" }}>Sort By</p>
          <label htmlFor="status">Status - </label>

          <select name="status" id="status">
            <option value="approved">Approved</option>
            <option value="approved">Pending</option>
          </select>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr
                key={index}
                className={index % 2 === 0 ? "tr-light" : "tr-blue"}
              >
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListComponent;