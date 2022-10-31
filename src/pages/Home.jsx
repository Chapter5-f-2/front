import { useState } from "react";
import Posts from "../components/homepage/Posts";
import Start from "../components/homepage/Start";

function Home() {
  const [exist] = useState(false);
  return <>{exist ? <Start /> : <Posts />}</>;
}

export default Home;

// <Posts />
