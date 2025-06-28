import kukLogo from '../../assets/education_logo/kuk.png'
function Education() {
    const education = [
        {
            id: 0,
            img: kukLogo,
            university: "Kurukshetra University, Haryana",
            date: "June 2009 to June 2012",
            grade: "62.29%",
            degree: "Bachelor of Computer Applications - BCA",
        },
        {
            id: 1,
            img: kukLogo,
            university: "Kurukshetra University, Haryana",
            date: "June 2012 to June 2015",
            grade: "67%",
            degree: "Master of Computer Applications - MCA",
        },

    ]
    return (
        <section id="education" className="py-20 px-[7vw] lg:px-[10vw] font-sans bg-skills-gradient clip-path-custom-3">
            {/* Section Title */}
            <div className='text-center mb-8 '>
                <h2 className='text-3xl sm:text-4xl font-bold text-white'>EDUCATION</h2>
                <div className='w-24 h-1 bg-[#8245ec] mx-auto mt-2'></div>
                <p className='text-gray-400 mt-4 text-lg font-semibold w-full max-w-3xl mx-auto'>My education has been a journey of learning and development. Here are the details of my academic background</p>
            </div>

            {/* Education */}
            <div className="flex flex-wrap gap-1 lg:gap-5  justify-between">
                {
                    education.map((edu, index) => (
                        <div key={index} className="bg-gray-950 backdrop-blur-md ps-6 sm:px-8 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]">
                            <div className="flex items-center space-x-6">
                                <div>
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-semibold text-white">{edu.degree}</h3>
                                        <h4 className="text-md sm:text-sm text-gray-300">{edu.university}</h4>
                                    </div>
                                    <p className="text-sm text-gray-500  mt-2">{edu.date}</p>
                                </div>

                            </div>
                            <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Education