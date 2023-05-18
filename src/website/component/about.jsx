import React, { useEffect } from 'react'
import img1 from '../../assets/about1.jpg'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const About = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx1 = gsap.context(() => {
      const boxes = gsap.utils.toArray('.leftSection');
  
      boxes.forEach((box, i) => {
        const anim = gsap.fromTo(box, { autoAlpha: 0, y: 50 }, { duration: 1, autoAlpha: 1, y: 0 });
        ScrollTrigger.create({
          trigger: box,
          start: "top 95%",
          // end: "top 2%",
          animation: anim,
          toggleActions: 'play reverse play reset',
          // once: true,
          markers:false,
        });
      });
    });
    return () => ctx1.revert();
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx2 = gsap.context(() => {
      const boxes = gsap.utils.toArray('.rightSection');

      boxes.forEach((box, i) => {
        const anim = gsap.fromTo(box, { autoAlpha: 0, y: 50 }, { duration: 1, autoAlpha: 1, y: 0 });
        ScrollTrigger.create({
          trigger: box,
          start: "top 90%",
          // end: 'top 0%',
          animation: anim,
          toggleActions: 'play reverse play reset',
          markers:false,
        });
      });
    })
    return () => ctx2.revert();
  },[])

  return (
    <React.Fragment >
      <div className="container">
        <div className="aboutInner">
          <div className="leftSection">
            <img src={img1} alt="" />
          </div>
          <div className="rightSection">
            <div className="rightInner">
              <h1>About</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur distinctio sint voluptatem obcaecati quis quo voluptates amet incidunt facilis alias, voluptatibus architecto. Velit consequatur ratione porro minus quos rem reiciendis?</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
