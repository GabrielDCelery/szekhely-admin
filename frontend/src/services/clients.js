import axios from 'axios';

class Clients {
  async getQuickClientList (_state) {
    const _config = {
      method: 'GET',
      url: `${process.env.REACT_APP_BACKEND_API_URL}/clients/quicksearch`,
      responseType: 'json'
    };
    const _result = await axios(_config);

    return _result['data'];
  }
}

export default new Clients();