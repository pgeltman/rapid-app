//API V1
class apiConnect {
  constructor(app) {
    this.app = app;
    this.api = '/api/';
  }

  connect() {
    //endpoints
    this.app.get(this.api + 'foo', async (req, res) => {
      console.log('➡️ get request: foo');
      res.send('bar');
    });

    console.log('✅ api connected');
    return;
  }
}
export default apiConnect;
