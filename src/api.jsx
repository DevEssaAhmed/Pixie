import axios from "axios";


const seaarchImages = async (term) => {
  const response = axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 8O50V7bNzfKdVixwS9W9nZVdr0VnrCv9gmeimfdvp6Y",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};
export default searchImages;
