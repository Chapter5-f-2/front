import Posts from "../components/homepage/Posts";
import Start from "../components/homepage/Start";

function Home() {
  const exist = true;
  return <>{exist ? <Start /> : <Posts />}</>;
}

export default Home;

// <Posts />
