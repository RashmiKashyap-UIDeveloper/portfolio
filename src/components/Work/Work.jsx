import jenda from "../../assets/work_logo/jenda.png"
import gmware from "../../assets/work_logo/gmware.png"
import patientSquare from "../../assets/work_logo/patient-square.png"
import leaveManagement from "../../assets/work_logo/leave-management.png"
import stirling from "../../assets/work_logo/stirling.png"
import plantImage from "../../assets/work_logo/plant-image.png"
import { use, useEffect, useRef, useState } from "react"
import { FiX } from 'react-icons/fi'

function Work() {
    const [selectedProject, setSelectedProject] = useState(null)
    const modalRef = useRef(null);

    const projects = [
        {
            id: 0,
            name: "Jenda",
            desc: "Led UI/UX design and frontend development for Jenda, a data-driven platform for beverage alcohol suppliers and distributors. Designed real-time analytics dashboard, and detailed reports, improved data visualization, and optimized the UI for a seamless user experience.",
            img: jenda,
            tags: ["React", "Angular", "HTML", "CSS", "Bootstrap 5", 'JavaScript', 'Django Templates', "Metronic Components", "Figma", "Photoshop", "Illustrator", "API"],
            webUrl: "https://jenda.com/",
            uiUrl: "https://www.behance.net/gallery/221160811/Jenda"
        },
        {
            id: 1,
            name: "Leave Management",
            desc: "Designed and developed the frontend for the Leave Management Portal under GMWare, using React.js and Svelte.js. This platform streamlines leave management for employees and HR with an intuitive and responsive UI.",
            img: leaveManagement,
            tags: ["React.js", "Svelte.js", "HTML", "CSS", 'Bootstrap 5', "JavaScript", "API"],
            webUrl: "https://leave-management-beige.vercel.app/",
            uiUrl: "https://www.behance.net/gallery/221151623/Leave-Management-Portal"
        },
        {
            id: 2,
            name: "Patient Square",
            desc: "Developed the frontend for Patient Square, a healthcare product under GMWare. This platform enhances patient management with an intuitive, user-friendly interface for healthcare professionals.",
            img: patientSquare,
            tags: ["React.js", "HTML", "CSS", "Bootstrap 5", "JavaScript", "jQuery", 'Django Templates', "API"],
            webUrl: "https://rashmikashyap-uideveloper.github.io/Patient-Square/",
            uiUrl: "https://www.behance.net/gallery/221063377/Patient-Square"
        },
        {
            id: 3,
            name: "Gmware",
            desc: "Designed and developed the official website for GMWare, a global management and software consulting company. The website showcases the company's services, expertise, and solutions for startups, small businesses, and SMEs",
            img: gmware,
            tags: ["HTML", "CSS", "Bootstrap 5", "JavaScript", "jQuery", "Django Templates", "Wagtail CMS", "API"],
            webUrl: "https://gmware.com/",
            uiUrl: "https://www.behance.net/gallery/221075985/Gmware"
        },
        {
            id: 4,
            name: "Stirling",
            desc: "Designed and developed the frontend for multiple projects under Webforce 5, a global digital solutions company. Focused on simplifying digital challenges for businesses by creating seamless, responsive, and high-performing websites",
            img: stirling,
            tags: ["Photoshop", "HTML", 'CSS', "Bootstrap", "LESS", "JavaScript", "jQuery", "CMS"],
            webUrl: "http://sba.staging4.webforcefive.com.au/",
            uiUrl: "https://www.behance.net/gallery/90145093/Stirling"
        },
        {
            id: 5,
            name: "Plant Image",
            desc: "Designed and developed the frontend for multiple projects under Webforce 5, a global digital solutions company. Focused on simplifying digital challenges for businesses by creating seamless, responsive, and high-performing websites",
            img: plantImage,
            tags: ["Photoshop", "HTML", 'CSS', "Bootstrap", "LESS", "JavaScript", "jQuery", "CMS"],
            webUrl: "http://plantimage.com.au/",
            uiUrl: "https://www.behance.net/gallery/90145167/Plant-Image"
        }
    ]

    const handleOpenModal = (project) => {
        setSelectedProject(project)
    }

    const handleCloseModal = () => {
        setSelectedProject(null)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                handleCloseModal();
            }
        };

        if (selectedProject) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [selectedProject])
    return (
        <section id="work" className="pb-10  sm:pt-12 sm:pb-24 px-[7vw] lg:px-[10vw] font-sans relative">
            {/* Section Title */}
            <div className='text-center mb-8 '>
                <h2 className='text-3xl sm:text-4xl font-bold text-white'>PROJECTS</h2>
                <div className='w-24 h-1 bg-[#8245ec] mx-auto mt-2'></div>
                <p className='text-gray-400 mt-4 text-lg font-semibold w-full max-w-3xl mx-auto'>A showcase of the projects I have worked on, highlighting my skills and experience in various technologies</p>
            </div>

            {/* Projects Grid */}
            <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    projects.map((project) => (
                        <div key={project.id} className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
                            onClick={() => handleOpenModal(project)}>
                            <div className='p-6'>
                                <div className='max-h-[175px] overflow-hidden rounded-xl mb-4'>
                                    <img src={project.img} alt={project.name} className="w-full h-auto object-cover" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    {project.name}
                                </h3>
                                <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                                    {project.desc}
                                </p>
                                <ul className="flex flex-wrap">
                                    {

                                        project.tags.map((tag, index) => (
                                            <li key={index} className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2">
                                                {tag}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* Modal Container */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4" >
                    <div className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative max-h-[90vh] overflow-y-auto" ref={modalRef}>
                        <div className="flex justify-end p-4">
                            <button onClick={handleCloseModal}
                                className="text-white text-3xl font-bold hover:text-purple-500"
                            >
                                <FiX size={20} />
                            </button>
                        </div>

                        <div className="flex flex-col">
                            <div className="w-full flex justify-center bg-gray-900 px-4">
                                <div className="max-h-[275px] overflow-y-auto rounded-xl">
                                    <img
                                        src={selectedProject.img}
                                        alt={selectedProject.title}
                                        className="w-full  object-cover rounded-xl shadow-2xl object-top"
                                    />
                                </div>
                            </div>
                            <div className="lg:p-8 p-6">
                                <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
                                    {selectedProject.name}
                                </h3>
                                <p className="text-gray-400 mb-6 lg:text-base text-xs">
                                    {selectedProject.desc}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {selectedProject.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a
                                        href={selectedProject.webUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 py-2 px-2 rounded-xl lg:text-xl text-sm font-semibold text-center flex items-center justify-center"
                                    >
                                        View Live
                                    </a>
                                    <a
                                        href={selectedProject.uiUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white lg:px-6 py-2 px-2 rounded-xl lg:text-xl text-sm font-semibold text-center flex items-center justify-center"
                                    >
                                        View UI Design
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Work