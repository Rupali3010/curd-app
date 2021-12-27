import React from "react";
// import useFetch from "./HOOKS/useFetch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import CreatePosts from "./Components/CreatePosts";
import EditPost from "./Components/EditPost";
import DeletePosts from "./Components/DeletePosts";

const App = () => {
  // let covidApi = useFetch(
  //   "https://corona.lmao.ninja/v2/continents?yesterday=true&sort"
  // );
  // console.log(covidApi);
  // let githubApi = useFetch("https://api.github.com/users");
  // console.log(githubApi);
  return (
    <Router>
      <section>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePosts />} />
            <Route path="/edit-post/:id" element={<EditPost />} />
            <Route path="/delete-post/:id" element={<DeletePosts />} />
          </Routes>
        </main>
        <footer></footer>
        <article></article>
      </section>
    </Router>
  );
};

export default App;
