import { FiMenu, FiX } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaBehance } from 'react-icons/fa'
import { useEffect, useState } from 'react'
function Header() {
    const [activeSection, setActiveSection] = useState("")
    const [isOpen, setisOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    //Menu Items
    const menuItems = [
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "experience", label: "Experience" },
        { id: "work", label: "Projects" },
        { id: "education", label: "Education" },
        { id: "contact", label: "Contact" }
    ]

    //Check Scroll and change navbar background
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    //Smooth scroll function
    const handleMenuItemClick = (sectionId) => {
        setActiveSection(sectionId)
        setisOpen(false)
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <>
            {/* Desktop Nav */}
            <nav className={`fixed top-0 w-full z-50 transition duration-300s px-[7vw] lg:px-[10vw] ${isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
                <div className='text-white py-5 flex items-center justify-between'>
                    {/* Logo */}
                    <div className='text-lg font-semibold cursor-pointer'>
                        <span className='text-[#8245ec]'>&lt;</span>
                        <span className='text-white'>Rashmi</span>
                        <span className='text-[#8245ec]'>/</span>
                        <span className='text-white'>Kashyap</span>
                        <span className='text-[#8245ec]'>&gt;</span>
                    </div>

                    {/* Desktop Menu */}
                    <ul className='hidden lg:flex text-gray-300 space-x-8'>
                        {
                            menuItems.map((item) => (
                                <li key={item.id} className={`cursor-pointer hover:text-[#8245ec] ${activeSection === item.id ? "text-[#8245ec]" : ""}`}>
                                    <button onClick={() => handleMenuItemClick(item.id)}> {item.label}</button>
                                </li>
                            ))
                        }
                    </ul>

                    {/* Social Media Icons */}
                    <div className='hidden lg:flex space-x-4'>
                        <a href="https://www.behance.net/rashmi_webdesigner" target='_blank' className='text-gray-300 hover:text-[#8245ec]'>
                            <FaBehance size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/rashmi-kashyap-575214163/" target="_blank" className='text-gray-300 hover:text-[#8245ec]'>
                            <FaLinkedin size={24} />
                        </a>
                    </div>

                    {/* Mobile Menu Icons */}
                    <div className='lg:hidden'>
                        {
                            isOpen ? <FiX className="text-3xl text-[#8245ec] cursor-pointer" onClick={() => setisOpen(false)} /> : <FiMenu className='text-3xl text-[#8245ec] cursor-pointer' onClick={() => setisOpen(true)} />
                        }
                    </div>
                </div>
            </nav>

            {/* Mobile Nav*/}
            {
                isOpen && (
                    <div className='fixed top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-blur-md z-50 rounded-lg shadow-lg p-3'>
                        <ul className='flex flex-col items-center space-y-4 py-4 text-gray-300'>
                            {
                                menuItems.map((item) => (
                                    <li key={item.id} className={`cursor-pointer hover:text-white ${activeSection === item.id ? "text-[#8245ec]" : ""}`}><button onClick={() => handleMenuItemClick(item.id)}>{item.label}</button></li>
                                ))
                            }
                        </ul>
                        <div className='flex space-x-4 justify-center'>
                            <a href="https://www.behance.net/rashmi_webdesigner" target='_blank' className='text-gray-300 hover:text-white'>
                                {/* <FaGithub size={24} /> */}
                                <FaBehance size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/rashmi-kashyap-575214163/" target="_blank" className='text-gray-300 hover:text-white'>
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Header