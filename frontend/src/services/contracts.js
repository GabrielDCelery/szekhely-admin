import axios from 'axios';

class Contracts {
  async getContracts (_searchConfig) {
    const _config = {
      method: 'POST',
      url: `${process.env.REACT_APP_BACKEND_API_URL}/contracts/search`,
      responseType: 'json',
      data: _searchConfig
    };
    const _result = await axios(_config);

    return _result['data'];
  }
}

export default new Contracts();