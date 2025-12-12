import axios from "axios";
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers:  {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDY1Y2JjNzA1ODg3NDk2MzI3Yzc1M2Q5Y2JjZjJiOCIsIm5iZiI6MTc2NTI5NDYxNC4wMjMsInN1YiI6IjY5Mzg0MjE2YmM3Mjc0YTk1NGFmMDBkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cS_Oe3cLQwFs7gbWCWs3cQZOZSS8jd5Nr33q3Yd8Ul4'
  }
});

export default instance;