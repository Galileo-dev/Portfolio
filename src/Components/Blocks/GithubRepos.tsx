import React from "react";
import { ScrollContainer, ScrollItem, ScrollMain } from "../List";
import { useEffect, useState } from "react";
import { useSpring } from "framer-motion";
import { useScroll } from "@use-gesture/react";

export const GithubRepos = () => {
  const [githubData, setGithubData] = useState([]);
  const [githubUser, setGithubUser] = useState("Galileo-dev");

  const fetchData = () => {
    return fetch(`https://api.github.com/users/${githubUser}/repos`)
      .then((response) => response.json())
      .then((data) => setGithubData(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const clamp = (value: number, clampAt: number = 10) => {
    if (value > 0) {
      return value > clampAt ? clampAt : value;
    } else {
      return value < -clampAt ? -clampAt : value;
    }
  };

  const [style, set] = useState(0);
  const bind = useScroll((event) => {
    set(event.scrolling ? clamp(event.delta[0]) : 0);
  });

  const Items = githubData.map((repo: any) => (
    <ScrollItem repo={repo} key={repo.id} style={style} />
  ));

  console.log(githubData);
  return (
    <>
      <ScrollMain bind={bind}>{Items}</ScrollMain>
    </>
  );
};
