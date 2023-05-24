import React from "react";
import femaleProfile from "../images/female-icon.jpg";
import maleProfile from "../images/male-icon.jpg";

const Employees = ({
  employees,
  selectedTeam,
  handleTeamSelectionChange,
  handleEmployeeClick,
}) => {
  return (
    <main className="container">
      <div className="col-6">
        <select
          className="form-select form-select-lg"
          value={selectedTeam}
          onChange={handleTeamSelectionChange}
        >
          <option value="TeamA">TeamA</option>
          <option value="TeamB">TeamB</option>
          <option value="TeamC">TeamC</option>
          <option value="TeamD">TeamD</option>
        </select>
      </div>

      <div className="row justify-content-center mt-3 mb3">
        <div className="col-B">
          <div className="card-collection">
            {employees.map((employee) => {
              return (
                <div
                  key={employee.id}
                  id={employee.id}
                  className={
                    employee.teamName === selectedTeam
                      ? "card m-2 standout"
                      : "card m-2"
                  }
                  style={{ cursor: "pointer" }}
                  onClick={handleEmployeeClick}
                >
                  {employee.gender === "male" ? (
                    <img src={maleProfile} alt="Not found" className="avatar" />
                  ) : (
                    <img
                      src={femaleProfile}
                      alt="Not found"
                      className="card-img-top"
                    />
                  )}

                  <div className="card-body">
                    <h5 className="card-title">
                      {" "}
                      Full Name: {employee.fullName}
                    </h5>
                    <p className="card-text">
                      {" "}
                      Designation: {employee.designation}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employees;
