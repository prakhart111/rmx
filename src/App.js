import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import "./App.css";

import One from './components/One'
import Two from './components/Two'
import Three from './components/Three'
import Four from './components/Four'
import Five from './components/Five'

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const panels = useRef([]);
  const panelsContainer = useRef();

  const createPanelsRefs = (panel, index) => {
    panels.current[index-1] = panel;
  };

  useEffect(() => {
    const totalPanels = panels.current.length;

    gsap.to(panels.current, {
      xPercent: -100 * (totalPanels - 1),
      ease: "none",
      scrollTrigger: {
        trigger: panelsContainer.current,
        pin: true,
        scrub:true,
        snap: 1 / (totalPanels - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () => "+=" + panelsContainer.current.offsetWidth
      }
    });
  }, []);

  return (
      <div className="container" ref={panelsContainer}>
        <section className="panel black" ref={(e) => createPanelsRefs(e, 1)}>
          <One />
        </section>
        <section className="panel orange" ref={(e) => createPanelsRefs(e, 2)}>
          <Two />
        </section>
        <section className="panel black" ref={(e) => createPanelsRefs(e, 3)}>
          <Three />
        </section>
        <section className="panel green" ref={(e) => createPanelsRefs(e, 4)}>
          <Four />
        </section>
        <section className="panel gray" ref={(e) => createPanelsRefs(e, 5)}>
          <Five />
        </section>
      </div>
  );
}