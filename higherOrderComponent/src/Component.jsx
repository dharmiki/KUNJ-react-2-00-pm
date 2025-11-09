import axios from "axios"
import { useEffect, useState } from "react"

const Component = (Display, url) => {

  const MovieData = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
      axios.get(url)
        .then((res) => {
          setMovie(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

    return <Display value={movie} />;
  };

  return MovieData;
};

export default Component;
