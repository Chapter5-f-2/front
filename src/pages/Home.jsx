import Posts from "../components/homepage/Posts";
import Start from "../components/homepage/Start";

function Home() {
  const exist = false;
  return <>{exist ? <Start /> : <Posts />}</>;
}

export default Home;

// <Posts />
