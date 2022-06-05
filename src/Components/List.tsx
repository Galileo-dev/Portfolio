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

// let NeumorphismInset = styled.div`
//   border-radius: ${(props) => props.theme.borderRadius};
//   background: #2d2d2d;
//   box-shadow: inset 20px 20px 24px #171717, inset -20px -20px 24px #434343;
// `;

let NeumorphismInset = styled.div`
  border-radius: ${(props) => props.theme.borderRadius};
  background: #2c2f33;
  box-shadow: inset -6.22302px -6.22302px 18.6691px #3b4451,
    inset 6.22302px 6.22302px 18.6691px #000000;
`;

export let ScrollContainer = styled(NeumorphismInset)`
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
    <motion.div
      variants={variants}
      initial="from"
      animate="to"
      transition={spring}
    >
      <Card
        mainText={props.repo.name}
        descriptionText={props.repo.description}
      />
    </motion.div>
  );
};
