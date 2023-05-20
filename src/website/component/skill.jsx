import React from 'react'
import reactIcon from '../../assets/icons/ReactIcon.png'
import sassIcon from '../../assets/icons/2560px-Sass_Logo_Color.svg.png'
import npmIcon from '../../assets/icons/2560px-Npm-logo.svg.png'
import photoShopIcon from '../../assets/icons/Adobe_Photoshop_CC_icon.svg.png'
import bootstrapIcon from '../../assets/icons/Bootstrap_logo.svg.png'
import githubIcon from '../../assets/icons/github-mark.png'
import nextIcon from '../../assets/icons/next js.png'
import jsIcon from '../../assets/icons/js.png'
import tailwindIcon from '../../assets/icons/Tailwind_CSS_Logo.svg.png'
export const Skill = () => {
  return (
    <React.Fragment >

      <div className="container">
        <div className="skillInner">
          <div className="upperSection">
            <div className="upperInner">
              <h2>What I do?</h2>
              <p>
              Software engineers specializing in Next.js, React.js, and GitHub need expertise in JavaScript, React framework, server-side rendering, component-based architecture, version control, and collaboration using Git and GitHub.
              </p>
            </div>
          </div>
          <div className="bottomSection">
            <div className="bottomInner">
              <div className="skillContainer">
                <img src={reactIcon} alt="" />
              </div>
              <div className="skillContainer">
                <img src={nextIcon} alt="" />
              </div>
              <div className="skillContainer">
                <img src={jsIcon} alt="" />
              </div>
            </div>
            <div className="bottomInner">

              <div className="skillContainer">
                <img src={sassIcon} alt="" />
              </div>
              <div className="skillContainer">
                <img src={bootstrapIcon} alt="" />
              </div>
              <div className="skillContainer">
                <img src={tailwindIcon} alt="" />
              </div>
            </div>
            <div className="bottomInner">

              <div className="skillContainer">
                <img src={npmIcon} alt="" />
              </div>
              <div className="skillContainer">
                <img src={githubIcon} alt="" />
              </div>
              <div className="skillContainer">
                <img src={photoShopIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
