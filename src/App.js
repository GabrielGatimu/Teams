import React from "react";
//import logo from './logo.svg'
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import useFetchData from "./useFetchData";

import './App.css';
import Header from './components/Header'
import Employees from './components/Employees';
import Footer from './components/Footer';
import GroupedTeamMembers from "./components/GroupedMembers";
import Nav from "./components/Nav";
import NotFound from "./components/errors/NotFound";

//import Users from "./Users";

function App() {

  const localTeam = JSON.parse(localStorage.getItem('selectedTeam'))
  const [selectedTeam, setTeam] = useState(localTeam || "TeamB")


  const localList = JSON.parse(localStorage.getItem('employeeList'))
  const [employees, setEmployees] = useState(localList ||

    [
      {
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA",
      },
      {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB",
      },
      {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC",
      },
      {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD",
      },
    ]
  );


  function handleTeamSelectionChange(event) {
    //console.log(event.target.value);
    event.preventDefault();
    setTeam(event.target.value);
  }

  function handleEmployeeClick(event) {
    const transformedEmployees = employees.map((employee) =>
      employee.id === parseInt(event.currentTarget.id)
        ? employee.teamName === selectedTeam
          ? { ...employee, teamName: "" }
          : { ...employee, teamName: selectedTeam }
        : employee
    );

    setEmployees(transformedEmployees);
  }


  //const [count, setCount] = useState();

  // useEffect(() => {
  //   setCount(employees.filter((employee) => employee.teamName === selectedTeam).length)
  //   localStorage.setItem('memcount', count);
  // }, [count, selectedTeam, employees]);

  useEffect(() => {
    localStorage.setItem("employeeList", JSON.stringify(employees))
  }, [employees])

  useEffect(() => {
    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam))
  }, [selectedTeam])

  return (
    <Router>
      <Nav />
      <Header
        selectedTeam={selectedTeam}
        teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length}
      />

      <Routes>

        {/*Home Route */}
        <Route path="/"
          element={
            <Employees
              employees={employees}
              selectedTeam={selectedTeam}
              handleEmployeeClick={handleEmployeeClick}
              handleTeamSelectionChange={handleTeamSelectionChange}
            />
          }>
        </Route>

        {/*Teams Route */}
        <Route path="/GroupedTeamMembers"
          element={<GroupedTeamMembers
            employees={employees}
            selectedTeam={selectedTeam}
            setTeam={setTeam}
          />}>
        </Route>

        {/*Invalid URL Route */}
        <Route path="*" element={<NotFound />}>
        </Route>


      </Routes>

      {/* <Users /> */}

      <Footer />
    </Router >

  )
}

export default App;
