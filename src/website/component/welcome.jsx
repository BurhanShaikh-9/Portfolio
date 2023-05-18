import React, { useEffect } from 'react'
import picture from '../../assets/burhan.png'
import Ba from '../../assets/ba.png'
import ha from '../../assets/ha.png'
import noon from '../../assets/noon.png'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const Welcome = () => {
  useEffect(() => {

  })
  useEffect(() => {
    const delay = 500;
    const timer = setTimeout(() => {
      const element = document.getElementById('baId');
      element.style.display = 'block';
      gsap.registerPlugin(ScrollTrigger);
      let ctx1 = gsap.context(() => {
        const boxes = gsap.utils.toArray('.ba');
        boxes.forEach((box, i) => {
          const anim = gsap.fromTo(
            box,
            { autoAlpha: 0, y: 300 },
            { duration: 1, autoAlpha: 1, y: 0 }
          );
          ScrollTrigger.create({
            trigger: box,
            start: "top 95%",
            animation: anim,
            toggleActions: 'play reverse play reset',
            markers: false,
          });
        });
      });
      return () => ctx1.revert();
    }, delay);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const delay = 900;
    const timer = setTimeout(() => {
      const element = document.getElementById('haId');
      element.style.display = 'block';
      gsap.registerPlugin(ScrollTrigger);
      let ctx1 = gsap.context(() => {
        const boxes = gsap.utils.toArray('.ha');
        boxes.forEach((box, i) => {
          const anim = gsap.fromTo(
            box,
            { autoAlpha: 0, y: 300, fill: "blue" },
            { duration: 1.3, autoAlpha: 1, y: 0 }
          );
          ScrollTrigger.create({
            trigger: box,
            start: "top 95%",
            animation: anim,
            toggleActions: 'play reverse play reset',
            markers: false,
          });
        });
      });
      return () => ctx1.revert();
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const delay = 1000;
    const timer = setTimeout(() => {
      const element = document.getElementById('naId');
      element.style.display = 'block';
      gsap.registerPlugin(ScrollTrigger);
      let ctx1 = gsap.context(() => {
        const boxes = gsap.utils.toArray('.no');

        boxes.forEach((box, i) => {
          const anim = gsap.fromTo(
            box,
            { autoAlpha: 0, y: 300 },
            { duration: 1.6, autoAlpha: 1, y: 0 }
          );
          ScrollTrigger.create({
            trigger: box,
            start: "top 95%",
            animation: anim,
            toggleActions: 'play reverse play reset',
            markers: false,
          });
        });
      });
      return () => ctx1.revert();
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <React.Fragment >
      <div className="container">
        <div className="welcomeInner">
          <div className="inner" >
            <img className='no' id='baId' src={noon} alt="" />
            <img className='ha' id='haId' src={ha} alt="" />
            <img className='ba' id='naId' src={Ba} alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
