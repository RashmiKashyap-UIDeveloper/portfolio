import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';
import profile from '../../assets/profile-image.png'
function About() {
    return (
        <section id="about" className="py-16 sm:py-24 px-[7vw] lg:px-[10vw] font-sans mt-0 md:mt-18 lg:mt-18">
            <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-5">
                {/* {Left Content} */}
                <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
                        Hi, I am  Rashmi
                    </h1>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                        Kashyap
                    </h2>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
                        <span className="text-white mr-2">
                            I am a
                        </span>
                        <TypeAnimation
                            sequence={['UI/UX Designer', 2000, 'Frontend Developer', 2000, 'React.js Developer', 2000, 'Design-to-Code Expert', 2000, 'Creative Problem Solver', 2000]}
                            speed={50}
                            wrapper="span"
                            repeat={Infinity}
                        />

                    </h3>
                    {/* About Me Paragraph */}
                    <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
                        I’m a UI/UX Designer and Front-End Developer with 9+ years of experience creating user-friendly, visually polished digital products. I specialize in building pixel-perfect, accessible interfaces using React.js, Figma, and design systems.

                        I bridge the gap between design and development with scalable code and a smooth design-to-code workflow.
                    </p>
                    {/* Resume Button */}
                    <a
                        href="https://drive.google.com/file/d/1KjkUtZ5CrRQKkgqMuIBM_kzy06mGDukO/view?usp=sharing"
                        target="_blank"
                        className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
                        style={{
                            background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                            boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
                        }}
                    >
                        DOWNLOAD CV
                    </a>
                </div>

                {/* Right Image */}
                <div className='w-full md:w-1/2 flex justify-center md:justify-end'>
                    <Tilt
                        className="w-72 h-72 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
                        tiltMaxAngleX={20}
                        tiltMaxAngleY={20}
                        perspective={1000}
                        scale={1.05}
                        transitionSpeed={1000}
                        gyroscope={true}
                    >
                        <img
                            src={profile}
                            alt="Rashmi Kashyap"
                            className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
                        />
                    </Tilt>
                </div>
            </div>
        </section>
    )
}

export default About