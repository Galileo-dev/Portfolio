import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Card } from "./Card";
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { Item } from "framer-motion/types/components/Reorder/Item";
import { useScroll } from "@use-gesture/react";
// https://konstantinlebedev.com/horizontal-scroll-animation/

export let ScrollContainer = styled.div`
  display: flex;
  height: 15rem;
  color: ${(props) => props.theme.palette.secondary.contrastText};
  background-color: ${(props) => props.theme.palette.secondary.main};
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: inset 0 0 10px;
  overflow-x: scroll;
  width: 100%;
  padding: 20px 0;
`;

// const scrollRef: React.MutableRefObject<any> = useRef(null);
// const ghostRef = useRef(null);
// const [scrollRange, setScrollRange] = useState(0);
// const [pageWidth, setPageWidth] = useState(0);

// const resizePageWidth = useCallback((entries) => {
//   for (let entry of entries) {
//     setPageWidth(entry.contentRect.width);
//   }
// }, []);

// useLayoutEffect(() => {
//   const resizeObserver = new ResizeObserver((entries) =>
//     resizePageWidth(entries)
//   );
//   scrollRef && resizeObserver.observe(scrollRef.current);
//   return () => resizeObserver.disconnect();
// }, [scrollRef, resizePageWidth]);

// useLayoutEffect(() => {
//   console.log(scrollRef);
//   scrollRef && setScrollRange(scrollRef.current.scrollWidth);
// }, [scrollRef]);

// const { scrollXProgress } = useViewportScroll();
// const transform = useTransform(scrollXProgress, [0, 1], [0, -scrollRange]);
// const physics = { damping: 15, mass: 0.27, stiffness: 55 };
// const spring = useSpring(transform, physics);

//   return (
//     <>
//       {/* <ScrollContainer as={motion.div} ref={scrollRef} style={{ x: spring }}>
//         {children}
//       </ScrollContainer>
//       <div style={{ width: "1000px", overflow: "scroll" }} /> */}
//     </>
//   );
// };

export const ScrollMain = (props: any) => {
  return <ScrollContainer {...props.bind()}>{props.children}</ScrollContainer>;
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
    <Card
      as={motion.div}
      variants={variants}
      initial="from"
      animate="to"
      transition={spring}
    >
      <h2>{props.repo.name}</h2>
      <p>{props.repo.description}</p>
    </Card>
  );
};
