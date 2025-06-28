import gmwarelogo from "../../assets/company_logo/gmware.jfif"
import aichunkslogo from "../../assets/company_logo/aichunks.jfif"
import adrenologo from "../../assets/company_logo/adreno.jfif"
import dbuglabllogo from "../../assets/company_logo/dbuglab.jfif"
import webEyelogo from "../../assets/company_logo/webeye.png"

function Experience() {
  const experiences = [
    {
      id: 0,
      img: gmwarelogo,
      role: "Sr. UI/UX Designer & Developer",
      company: "Gmware Pvt. Ltd.",
      date: "JUN 2021 – MAY 2025",
      desc: "Led the UI/UX and frontend for enterprise platforms like Jenda, focusing on responsive design, component reusability, and performance optimization. Built scalable React interfaces, designed using Figma and maintained visual consistency with Metronic and design systems.",
      skills: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Bootstrap 5",
        "jQuery",
        "Django Templates",
        "API",
        "Metronic",
        "Figma",
        "Photoshop",
        "Illustrator"
      ]
    },
    {
      id: 1,
      img: aichunkslogo,
      role: "Web Designer",
      company: "AICHUNKS Pvt. Ltd.",
      date: "JAN 2020 – MAY 2021",
      desc: "Designed and developed responsive, pixel-perfect web pages for Webforce5, a global digital agency. Converted UI mockups into clean HTML/CSS using LESS and jQuery, ensuring cross-browser compatibility and brand consistency.",
      skills: [
        "HTML5",
        "CSS3",
        "Bootstrap 4",
        "JavaScript",
        "jQuery",
        "Webforce5 CMS",
        "Figma",
        "Adobe XD",
        "Photoshop",
        "Illustrator",
      ]
    },
    {
      id: 2,
      img: adrenologo,
      role: "Web Designer",
      company: "ADRENO TECHNOLOGIES Pvt. Ltd.",
      date: "JUN 2018 – JAN 2020",
      desc: "Designed and developed responsive user interfaces for Indian government portals like ITI, eKharid, and HSAMB, using modern web technologies and frameworks. Delivered scalable, accessible front-end solutions in collaboration with backend teams.",
      skills: [
        "HTML",
        "CSS",
        "Bootstrap",
        "React",
        "Angular",
        "JavaScript",
        "jQuery",
        "Photoshop",
        "Illustrator"
      ]
    },
    {
      id: 3,
      img: dbuglabllogo,
      role: "Web Designer",
      company: "DBUG LAB Private Limited, ",
      date: "APR 2017 – MAY 2018",
      desc: "Converted design mockups into responsive, pixel-perfect web pages using HTML, CSS, and Bootstrap. Maintained and updated UI for websites across platforms like WordPress, Shopify, and Drupal, ensuring performance and cross-device compatibility.",
      skills: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "jQuery",
        "Wordpress",
        "Shopify",
        "Drupal"
      ]
    },
    {
      id: 4,
      img: webEyelogo,
      role: "Web Designer",
      company: "WEB EYE EXPERTS",
      date: "MAR 2016 – APR 2017",
      desc: "Designed mockups, banners, and logos using Photoshop and Illustrator, ensuring brand consistency and Developed HTML and CSS-based responsive websites, optimizing performance for desktop and mobile users.",
      skills: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "jQuery",
        "Photoshop",
        "Illustrator"
      ]
    }
  ]
  return (
    <section id="experience" className="py-10 pb-16 sm:py-24 px-[7vw] lg:px-[10vw] font-sans bg-skills-gradient clip-path-custom-2">
      {/* Section Title */}
      <div className='text-center mb-16'>
        <h2 className='text-3xl sm:text-4xl font-bold text-white'>EXPERIENCE</h2>
        <div className='w-24 h-1 bg-[#8245ec] mx-auto mt-2'></div>
        <p className='text-gray-400 mt-4 text-lg font-semibold w-full max-w-3xl mx-auto'>A collection of my work experience and the roles I have taken in various organizations</p>
      </div>

      {/* Experience Content */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2  transform -translate-x-0 w-1 bg-white h-full"></div>

        {/* Experience */}
        {experiences.map((experience, index) => (
          <div key={experience.id} className={`flex flex-col sm:flex-row items-center mb-16  ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-0 transfrom -translate-x-1/2  bg-gray-300 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 font-bold text-2xl hidden md:flex">
              {experience.id + 1}
            </div>

            {/* Experience boxes */}
            <div className={`w-full md:w-[45%] p-6 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-950 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${index % 2 === 0 ? "sm-ml-0" : "sm-mr-0"} tranform transition-transfrom duration-300 hover:scale-105`}>
              <div className="flex items-start sm:items-center sm:space-x-6 flex-col sm:flex-row ">
                <div className="w-16 h-16 min-w-16 bg-white rounded-md overflow-hidden mb-3 sm:mb-0">
                  <img src={experience.img} alt={experience.company} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">{experience.role}</h3>
                    <h4 className="text-md sm:text-sm text-gray-300">{experience.company}</h4>
                  </div>
                  <p className="text-sm text-gray-500  mt-2">{experience.date}</p>
                </div>

              </div>
              <p className="mt-4 text-gray-400">{experience.desc}</p>
              <div className="mt-4">
                <h5 className="text-white font-medium">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {
                    experience.skills.map((skill, index) => (
                      <li key={index} className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400">{skill}</li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
        ))
        }
      </div>
    </section>
  )
}

export default Experience