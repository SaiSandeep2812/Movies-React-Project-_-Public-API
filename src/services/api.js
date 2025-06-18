const API_KEY = 'a6dba94b027bb3b7c8270f931e5f4d6c';
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMoives = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results
};

export const SearchMoives = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json()
    return data.results
};