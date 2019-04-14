//API V1
import routes from './routes.json';

class apiConnect {
  constructor(app) {
    this.app = app;
    this.routes = routes;
  }
  route1(req, res) {
    let route = '🚗 🚗 🚗 ROUTE 1';
    console.log(route);
    res.send(route);
  }
  route2(req, res) {
    let route = '🚙 🚙 🚙 ROUTE 2';
    console.log(route);
    res.send(route);
  }
}
export default apiConnect;

//ROUTES

//Set API
//let api = '/api/v1/';

//COMPONENTS Endpoint
//Component: getIssues
//app.get('components/getIssues', async (req, res) => {
//  issues = await jira.getIssues('');
//  res.send(issues);
//});
