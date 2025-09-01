import axios from 'axios';

export const getUniversities = async (country: string) => {
  const response = await axios.get(`http://universities.hipolabs.com/search?country=${country}`);
  return response.data;
};
