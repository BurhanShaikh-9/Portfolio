import React, { useEffect } from 'react'
import picture from '../../assets/burhan.png'
import Ba from '../../assets/ba.png'
import ha from '../../assets/ha.png'
import noon from '../../assets/noon.png'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const Welcome = () => {

    useEffect(() => {
        const delay = 500; 
        const timer = setTimeout(() => {
          gsap.registerPlugin(ScrollTrigger);
          let ctx1 = gsap.context(() => {
            const boxes = gsap.utils.toArray('.ba');
      
            boxes.forEach((box, i) => {
              const anim = gsap.fromTo(
                box,
                { autoAlpha: 0, y: 50 },
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
        const delay = 1000; 
        const timer = setTimeout(() => {
          gsap.registerPlugin(ScrollTrigger);
          let ctx1 = gsap.context(() => {
            const boxes = gsap.utils.toArray('.ha');
      
            boxes.forEach((box, i) => {
              const anim = gsap.fromTo(
                box,
                { autoAlpha: 0, y: 50 },
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
          gsap.registerPlugin(ScrollTrigger);
          let ctx1 = gsap.context(() => {
            const boxes = gsap.utils.toArray('.no');
      
            boxes.forEach((box, i) => {
              const anim = gsap.fromTo(
                box,
                { autoAlpha: 0, y: 50 },
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

    return (
        <React.Fragment >
            <div className="container">
                <div className="welcomeInner">
                    <div className="inner">
                        <img className='no' src={noon} alt="" />
                        <img className='ha' src={ha} alt="" />
                        <img className='ba' src={Ba} alt="" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
