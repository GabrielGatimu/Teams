import React from "react";
import { useState } from "react";

const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {
  function groupTeamMembers() {
    var teams = [];

    var teamAmembers = employees.filter(
      (employee) => employee.teamName === "teamA"
    );
    var teamA = {};
    teams.push();

    var teamBmembers = employees.filter(
      (employee) => employee.teamName === "teamB"
    );
    teams.push(teamBmembers);

    var teamCmembers = employees.filter(
      (employee) => employee.teamName === "teamC"
    );
    teams.push(teamCmembers);

    var teamDmembers = employees.filter(
      (employee) => employee.teamName === "teamD"
    );
    teams.push(teamDmembers);
  }

  const [groupedMembers, setGroupedData] = useState(groupTeamMembers());

  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-4">
        {/* <h1 className="mt-4 p5 bg-primary text-white rounded"> Team </h1> */}
        <p>Grouped Teams</p>
      </div>
    </main>
  );
};

export default GroupedTeamMembers;
