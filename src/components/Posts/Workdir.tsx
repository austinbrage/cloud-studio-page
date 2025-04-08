import blogImg2 from '../../assets/images/blog-image-2-full.png'
import officialWorkdir from '../../assets/images/official_workdir.png'
import profileIcon from '../../assets/svgs/profile.svg'

export function WorkdirPost() {

    return (
        <div className="alternative-background h-[390vh] flex items-start justify-center w-full">
            <div className='mt-5 flex flex-col gap-5 text-center w-5/12'>
                <p className='text-xl font-["Alef"] text-[rgba(255,255,255,0.8)]'>
                    February 15, 2025
                </p>
                <p className='text-4xl w-11/12 text-white'>
                    The heart of the app, the intention behind the WORKDIR
                </p>
                <div 
                    onClick={() => window.open('https://github.com/austinbrage')}
                    className='flex items-end justify-center gap-5 cursor-pointer'
                >
                    <img 
                        src={profileIcon} 
                        alt="Profile icon" 
                    />
                    <p className='mt-5 me-3 text-lg font-["Alkatra"] text-[rgba(182,179,179,0.8)]'> 
                        Austin Brage
                    </p>
                </div>
                <img 
                    src={blogImg2} 
                    alt="Blog image 1" 
                />
                <div className='font-["Archivo"] text-lg font-normal text-left text-white'>
                    <p className='opacity-90'>
                        CloudStudio can be explain simply as a code editor specialized for terraform & ansible projects that are stored inside a workdir.
                    </p>
                    <p className='my-10 font-bold tracking-wider'>
                        What is exactly the workdir?
                    </p>
                    <p className='mb-7'>
                        The "working directory" is just a public git repo stored in github that any user can clone and let the app to use it for deploying new and existing projects.
                    </p>
                    <ul className='list-disc ps-10 flex flex-col gap-5 font-light opacity-75'>
                        <li>It stores tested templates that can be scaffold into new projects</li>
                        <li>It stores tested modules and roles for terraform and ansible projects</li>
                        <li>It stores projects with a specific folder structure for different envs</li>
                        <li>It separates all of this by provider on different folders</li>
                    </ul>
                    <img 
                        src={officialWorkdir} 
                        alt="Official workdir" 
                        className='mt-5 ms-10'
                    />
                    <p className='my-10 font-bold tracking-wider'>
                        The community I want to grow
                    </p>
                    <p className='opacity-90'>
                        My ambition is to grow a community to develop, test and add new templates and modules to the public official workdir stored on github.
                    </p>
                    <p className='mt-7 ms-5 italic'>
                        Why is this necessary?
                    </p>
                    <p className='mt-4 ms-5 p-2 rounded-md border-2 opacity-70 border-[rgba(255,255,255,0.2)]'>
                        The app lives by and for the workdir, so in order to enhance the functionality of the app, it is demanded to improve the quantity and quality of the cloud projects inside the workdir.
                    </p>
                    <p className='mt-7 ms-5 italic'>
                        What should we aim to?
                    </p>
                    <p className='mt-4 ms-5 p-2 rounded-md border-2 opacity-70 border-[rgba(255,255,255,0.2)]'>
                        The projects inside the workdir are just terraform and ansible code, and there are other communities out there creating modules and roles for it:
                        <span className='font-bold'>
                            {` Terraform registry and Ansible galaxy.`}
                        </span> 
                        <span className='block mt-4'>
                            We should follow this role.
                        </span>
                    </p>
                    <p className='my-10 font-bold tracking-wider'>
                        How do I contribute?
                    </p>
                    <p className='opacity-90'>
                        Install the app, create a new project with the default template, write some code, deploy it, make it work as intended, store it on templates, and make a <strong>pull request</strong> to the 
                        <a 
                            target="_blank" 
                            rel="noopener noreferrer"
                            href="https://github.com/austinbrage/cloud-studio-workdir" 
                            className='ps-1 tracking-wider text-pink-300'
                        >
                            official workdir.
                        </a>
                    </p>
                    <p className='mt-7 italic tracking-wide opacity-80'>
                        The templates are separate on different folders by category, like "virtual machines", "serverless functions", "clusters", etc
                    </p>
                    <p className='w-max mt-5 py-2 px-5 tracking-wider rounded-md border-2 bg-[rgba(126,125,125,0.2)]'>
                        Every contribution adds to the positive-sum game
                    </p>
                </div>
            </div>
        </div>
    )
}