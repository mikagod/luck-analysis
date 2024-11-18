import axios from 'axios';

const API_URL = 'https://api.example.com/submitData';

export const postDataToApi = async (data, API_URL) => {
  try {
    const response = await axios.post(API_URL, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || '提交数据失败');
  }
};