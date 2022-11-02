import Posts from "../components/homepage/Posts";
import Start from "../components/homepage/Start";
import UseUser from "../hooks/useUser";

function Home() {
  const user = UseUser();

  return <>{!user ? <Start /> : <Posts />}</>;
}

export default Home;

// <Posts />
