import { FaLinkedin, FaBehance } from 'react-icons/fa'
function Footer() {
    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId)
        if (sectionId) {
            section.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <footer className="text-white py-8 px-[7vw] lg:px-[10vw]">
            <div className="container mx-auto text-center">
                <h2 className="text-xl font-semibold text-purple-500">Rashmi Kashyap</h2>
                {/* Navigation Links - Responsive */}
                <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
                    {[
                        { name: "About", id: "about" },
                        { name: "Skills", id: "skills" },
                        { name: "Experience", id: "experience" },
                        { name: "Projects", id: "work" },
                        { name: "Education", id: "education" },
                    ].map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleScroll(item.id)}
                            className="hover:text-purple-500 text-sm sm:text-base my-1"
                        >
                            {item.name}
                        </button>
                    ))}
                </nav>

                {/* Social Media Icons - Responsive */}
                <div className="flex flex-wrap justify-center space-x-4 mt-6">
                    {[
                        { icon: <FaBehance />, link: "https://www.behance.net/rashmi_webdesigner" },
                        { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/rashmi-kashyap-575214163/" },
                    ].map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>

                {/* Copyright Text */}
                <p className="text-sm text-gray-400 mt-6">
                    © {new Date().getFullYear()} Rashmi Kashyap. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer