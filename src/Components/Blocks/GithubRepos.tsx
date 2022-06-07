import React from "react";
import { useEffect, useState } from "react";
import { GitHubScrollList } from "../ScrollList";

export const GithubRepos = () => {
  const [githubData, setGithubData] = useState([]);
  const [githubUser, setGithubUser] = useState("Galileo-dev");

  const fetchData = () => {
    return fetch(`https://api.github.com/users/${githubUser}/repos`)
      .then((response) => response.json())
      .then((data) => data.filter((repo: any) => !repo.fork))
      .then((data_filtered) => setGithubData(data_filtered));
  };

  useEffect(() => {
    fetchData().then(() => console.log(githubData));
  }, []);

  useEffect(() => {
    // this is just for logging.
    console.log(githubData);
  }, [githubData]);

  // const clamp = (value: number, clampAt: number = 10) => {
  //   if (value > 0) {
  //     return value > clampAt ? clampAt : value;
  //   } else {
  //     return value < -clampAt ? -clampAt : value;
  //   }
  // };

  // const [style, set] = useState(0);
  // const bind = useScroll((event) => {
  //   set(event.scrolling ? clamp(event.delta[0]) : 0);
  // });

  // const Items = githubData.map((repo: any) => (
  //   <ScrollItem repo={repo} key={repo.id} style={style} />
  // ));
  return (
    <>
      <GitHubScrollList data={githubData} />
    </>
  );
};
