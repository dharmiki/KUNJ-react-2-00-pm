import Component from "./Component"
import Display from "./Display"

const App = () => {
  const HigherOrderComponent = Component(
    Display,
    "https://api.themoviedb.org/3/trending/movie/day?api_key=a2d86755e5d6eac04182233d4c6dcb1e&page=1"
  );

  return (
    <>
      <HigherOrderComponent />
    </>
  );
};

export default App;
