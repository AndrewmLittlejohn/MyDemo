import React from 'react';
import { Dropdown, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/primary.css';

const teams = [
  'Arizona Diamondbacks', 
  'Atlanta Braves', 
  'Baltimore Orioles', 
  'Boston Red Sox', 
  'Chicago White Sox', 
  'Chicago Cubs', 
  'Cincinnati Reds', 
  'Cleveland Guardians', 
  'Colorado Rockies', 
  'Detroit Tigers', 
  'Houston Astros', 
  'Kansas City Royals', 
  'Los Angeles Angels', 
  'Los Angeles Dodgers', 
  'Miami Marlins', 
  'Milwaukee Brewers', 
  'Minnesota Twins', 
  'New York Yankees', 
  'New York Mets', 
  'Oakland Athletics', 
  'Philadelphia Phillies', 
  'Pittsburgh Pirates', 
  'San Diego Padres', 
  'San Francisco Giants', 
  'Seattle Mariners', 
  'St. Louis Cardinals', 
  'Tampa Bay Rays', 
  'Texas Rangers', 
  'Toronto Blue Jays', 
  'Washington Nationals'
];


function Schedule (){
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          MLB Teams
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {teams.map((team, index) => (
            <Dropdown.Item key={index}>{team}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Number</th>
            <th>Bats</th>
            <th>Throws</th>
            <th>Professional Debut</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Babe Ruth</td>
            <td>Pitcher</td>
            <td>3</td>
            <td>L</td>
            <td>L</td>
            <td>1914</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>

    </div>
  )

}


export default Schedule