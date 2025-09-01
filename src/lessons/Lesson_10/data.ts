import axios from 'axios';

const getUniversities = async (country: string) => {
  const response = await axios.get(`http://universities.hipolabs.com/search?country=${country}`);
  return response.data;
};

export default getUniversities;