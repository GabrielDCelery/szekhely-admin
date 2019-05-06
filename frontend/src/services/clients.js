import axios from 'axios';

class ClientsService {
  async getClients(_state) {
    const _config = {
      method: 'GET',
      url: `${process.env.REACT_APP_BACKEND_API_URL}/clients/quicksearch`,
      responseType: 'json'
    };
    const { data } = await axios(_config);

    return data;
  }
}

export const clientsService = new ClientsService();