import Tilt from 'react-parallax-tilt';
import htmlLogo from '../../assets/tech_logo/html.png'
import CSSLogo from '../../assets/tech_logo/css.png'
import jsLogo from '../../assets/tech_logo/javascript.png'
import bootstrapLogo from '../../assets/tech_logo/bootstrap.png'
import jQueryLogo from '../../assets/tech_logo/jQuery.png'
import ReactLogo from '../../assets/tech_logo/reactjs.png'
import angularLogo from '../../assets/tech_logo/angular.png'
import SvelteLogo from '../../assets/tech_logo/svelte.png'
import tailwindCSSLogo from '../../assets/tech_logo/tailwindcss.png'
import typescriptLogo from '../../assets/tech_logo/typescript.png'
import figmaLogo from '../../assets/tech_logo/figma.png'
import adobeXDLogo from '../../assets/tech_logo/adobeXD.png'
import photoshopLogo from '../../assets/tech_logo/photoshop.png'
import illustratorLogo from '../../assets/tech_logo/illustrator.png'
import gitLogo from '../../assets/tech_logo/git.png'
import gitLabLogo from '../../assets/tech_logo/gitlab.webp'
import jiraLogo from '../../assets/tech_logo/jira.webp'
import vsCodeLogo from '../../assets/tech_logo/vscode.png'
import githubLogo from '../../assets/tech_logo/github.png'
import prototypeLogo from '../../assets/tech_logo/prototype.png'
import pixelPerfectLogo from '../../assets/tech_logo/pixelperfect.png'
import designSystemLogo from '../../assets/tech_logo/designsystem.png'
import designCodeLogo from '../../assets/tech_logo/deisgnCode.png'
import componentLogo from '../../assets/tech_logo/component.png'
import responsiveLogo from '../../assets/tech_logo/responsive.png'
import accessibilityLogo from '../../assets/tech_logo/accessibility.png'
function Skills() {
    const skillsInfo = [
        {
            title: "Frontend",
            skills: [
                { name: 'HTML', logo: htmlLogo },
                { name: 'CSS3', logo: CSSLogo },
                { name: 'Javascript', logo: jsLogo },
                { name: 'Typescript', logo: typescriptLogo },
                { name: 'React', logo: ReactLogo },
                { name: 'Angular', logo: angularLogo },
                { name: 'Svelte', logo: SvelteLogo },
                { name: 'Tailwind CSS', logo: tailwindCSSLogo },
                { name: 'Bootstrap', logo: bootstrapLogo },
                { name: 'jQuery', logo: jQueryLogo },
            ]
        },
        {
            title: "UI/UX Design",
            skills: [
                { name: 'Figma', logo: figmaLogo },
                { name: 'Adobe XD', logo: adobeXDLogo },
                { name: 'Photoshop', logo: photoshopLogo },
                { name: 'Illustrator', logo: illustratorLogo },
                { name: 'Prototyping', logo: prototypeLogo },
                { name: 'Pixel-perfect Design', logo: pixelPerfectLogo },
            ]
        },
        {
            title: "Tools & Version Control",
            skills: [
                { name: 'Git', logo: gitLogo },
                { name: 'GitLab', logo: gitLabLogo },
                { name: 'GitHub ', logo: githubLogo },
                { name: 'VS Code', logo: vsCodeLogo },
                { name: 'JIRA', logo: jiraLogo },
            ]
        },
        {
            title: "UX Engineering",
            skills: [
                { name: 'Design Systems', logo: designSystemLogo },
                { name: 'Component-Based UI ', logo: componentLogo },
                { name: 'Design-to-Code', logo: designCodeLogo },
                { name: 'Accessibility', logo: accessibilityLogo },
                { name: 'Responsive Design', logo: responsiveLogo },

            ]
        }
    ]
    return (
        <section id="skills" className='py-16 sm:py-24 px-[7vw] lg:px-[10vw] font-sans bg-skills-gradient clip-path-custom'>
            {/* Section Title */}
            <div className='text-center mb-8 '>
                <h2 className='text-3xl sm:text-4xl font-bold text-white'>SKILLS</h2>
                <div className='w-24 h-1 bg-[#8245ec] mx-auto mt-2'></div>
                <p className='text-gray-400 mt-4 text-lg font-semibold w-full max-w-3xl mx-auto'>A showcase of the technical skills and tools I’ve mastered through 9+ years of real-world experience.</p>
            </div>

            {/* Skills category */}
            <div className='flex flex-wrap gap-1 lg:gap-5 pb-10 pt-5 justify-between'>
                {
                    skillsInfo.map((skillCategory) => (
                        <div key={skillCategory.title} className='bg-gray-950 backdrop-blur-md p-6 sm:px-8 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]'>
                            <Tilt tiltMaxAngleX={20}
                                tiltMaxAngleY={20}
                                perspective={1000}
                                scale={1.05}
                                transitionSpeed={1000}
                                gyroscope={true}>
                                <h3 className='text-2xl sm:text-3xl font-semibold text-gray-400 mb-6 text-center'>{skillCategory.title}</h3>
                                <div className='flex flex-wrap gap-3'>
                                    {
                                        skillCategory.skills.map((skill) => (
                                            <div key={skill.name} className='flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-3 text-center'>
                                                <img src={skill.logo} alt={skill.name} className=' h-6  sm:h-8' />
                                                <span className="text-xs sm:text-sm text-gray-300">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </Tilt>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Skills