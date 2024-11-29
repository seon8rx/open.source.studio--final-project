import axios from 'axios';

const API_URL = 'https://openapi.gg.go.kr/Poplitloanbook';
const API_KEY = 'dd902ab083f34197890d483c82e424cd';

export const fetchBooks = async (page = 1, perPage = 100) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        KEY: API_KEY,
        TYPE: 'json',
        pIndex: page,
        pSize: perPage,
      },
    });
    return response.data.Poplitloanbook[1].row || [];
  } catch (error) {
    console.error('API 요청 오류:', error);
    return [];
  }
};