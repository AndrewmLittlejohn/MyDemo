const express = require('express');
const MlbApi = require ('./config/MLBapi');

const app = express();

app.get('/roster/fortyman/:symbol'), async (req, res) => {
  const {team} = req.params;
  const roster = await MlbApi.get40ManRoster(team);
  res.json(roster);
}

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});