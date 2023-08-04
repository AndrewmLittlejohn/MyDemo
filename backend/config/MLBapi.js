const fetch = require('node-fetch');

// MLB API base URL
const baseURL = 'http://lookup-service-prod.mlb.com';

/* #region Function to fetch player data */
async function getPlayerData(name) {
  const endpoint = 'json/named.search_player_all.bam';
  const queryString = `sport_code='mlb'&active_sw='Y'&name_part='${encodeURIComponent(name)}%25'`;
  const url = `${baseURL}/${endpoint}?${queryString}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data && data.search_player_all && data.search_player_all.queryResults.totalSize > 0) {
      return data.search_player_all.queryResults.row;
    } else {
      throw new Error('Player not found.');
    }
  } catch (error) {
    console.error('Error fetching player data:', error.message);
    throw error;
  }
}
/* #endregion */

/* #region Function to fetch 40 man roster */
async function get40ManRoster(team_id) {
  const endpoint = `json/named.roster_40.bam?team_id=${team_id}`;
  // const queryString = 
  const url = `${baseURL}/${endpoint}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data && data.roster_40 && data.roster_40.queryResults.totalSize > 0) {
      return data.roster_40.queryResults.row;
    } else {
      throw new Error('Roster Not Found');
    }
  }  catch (error) {
    console.error('Error fetching team roster:', error.message);
    throw error;
}}
/* #endregion */

module.exports = {
  getPlayerData,
  get40ManRoster
};

