import axios from 'axios';

class ContractsService {
  async getContracts (searchConfig) {
    const { data } = await axios({
      method: 'POST',
      url: `${process.env.REACT_APP_BACKEND_API_URL}/contracts/search`,
      responseType: 'json',
      data: searchConfig
    });

    return data;
  }
}

export const contractsService = new ContractsService();