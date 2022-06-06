import React, { JSXElementConstructor, useState } from "react";
import styled from "styled-components";
import { Card } from "./Card";
import { motion } from "framer-motion";
import { NeumorphismInset } from "./Neumorphism";
import { useScroll } from "@use-gesture/react";
// https://konstantinlebedev.com/horizontal-scroll-animation/

const ScrollContainer = styled(NeumorphismInset)`
  display: flex;
  height: 15rem;
  overflow-x: scroll;
  width: 100%;
  padding: 20px 0;

  &::-webkit-scrollbar {
    height: 10px;
    width: 10px;
    background: gray;
  }
  &::-webkit-scrollbar-thumb:horizontal {
    background: ${(props) => props.theme.palette.primary.contrastText};
    border-radius: 10px;
  }
`;

export const GitHubScrollList = (props: any) => {
  const [style, set] = useState(0);

  const bind = useScroll((event) => {
    set(event.scrolling ? clamp(event.delta[0]) : 0);
  });

  const Items = props.data.map((repo: any) => (
    <ScrollItem repo={repo} key={repo.id} style={style} />
  ));

  return <ScrollContainer {...bind()}>{Items}</ScrollContainer>;
};

const clamp = (value: number, clampAt: number = 10) => {
  if (value > 0) {
    return value > clampAt ? clampAt : value;
  } else {
    return value < -clampAt ? -clampAt : value;
  }
};

export const ScrollItem = (props: any) => {
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };

  const variants = {
    from: { rotateY: 0, transformPerspective: "500px" },
    to: { rotateY: props.style, transformPerspective: "500px" },
  };

  return (
    <motion.div
      variants={variants}
      whileHover={{ scale: 1.05 }}
      initial="from"
      animate="to"
      transition={spring}
      onClick={() => window.open(props.repo.html_url, "_blank")}
    >
      <Card
        mainText={props.repo.name}
        descriptionText={props.repo.description}
      />
    </motion.div>
  );
};
