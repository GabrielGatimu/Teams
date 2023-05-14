import React from "react";
const Header = ({ selectedTeam, teamMemberCount }) => {
  // let message =
  //   teamMemberCount === 0
  //     ? `${selectedTeam} has no members`
  //     : teamMemberCount === 1
  //     ? `${selectedTeam} has ${teamMemberCount} member`
  //     : `${selectedTeam} has ${teamMemberCount} members`;

  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <h1 className="mt-4 p5 bg-primary text-white rounded"> Teams </h1>
        <p>
          {selectedTeam} has {teamMemberCount}{" "}
          {teamMemberCount === 1 ? "member" : "members"}
        </p>
      </div>
    </header>
  );
};

export default Header;
