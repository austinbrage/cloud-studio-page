import blogImg1 from '../../assets/images/blog-image-1-full.png'
import profileIcon from '../../assets/svgs/profile.svg'

export function MotivationPost() {

    return (
        <div className="alternative-background h-[350vh] flex items-start justify-center w-full">
            <div className='mt-5 flex flex-col gap-5 text-center w-5/12'>
                <p className='text-xl font-["Alef"] text-[rgba(255,255,255,0.8)]'>
                    February 15, 2025
                </p>
                <p className='text-4xl w-11/12 text-white'>
                    Motivation behind the creation of the app
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
                    src={blogImg1} 
                    alt="Blog image 1" 
                />
                <div className='font-["Archivo"] text-lg font-normal text-left text-white'>
                    <p className='opacity-90'>
                        This application was initially a side project made to ease the process of learning cloud infraestructure with terraform and ansible.
                    </p>
                    <p className='my-10 font-bold tracking-wider'>
                        What problems did I face?
                    </p>
                    <p className='mb-7'>
                        While trying to learn how to deploy and manage cloud projects via Terraform and Ansible I encounter a couple of obstacles...
                    </p>
                    <ul className='list-disc ps-10 flex flex-col gap-5 font-light opacity-75'>
                        <li>Manage the folder structure for multiple environments and navigating between them</li>
                        <li>Creating modules and roles fast with all necessary files and default code and using them on main files</li>
                        <li>Storing personal templates and modules, navigate between them and scaffolding anyone of them when needed</li>
                        <li>Running commands right away, use combinations of commands and have a detailed output (for the case of infracost JSON)</li>
                    </ul>
                    <p className='my-10 font-bold tracking-wider'>
                        The personal solution I found
                    </p>
                    <p className='opacity-90'>
                        If somehow I could build a DESKTOP app to code and deploy cloud projects, with a UI made especifically for terraform and ansible, then all of these problems will vanish.
                    </p>
                    <p className='mt-7 ms-5 italic'>
                        But how is this made?
                    </p>
                    <p className='mt-4 ms-5 p-2 rounded-md border-2 opacity-70 border-[rgba(255,255,255,0.2)]'>
                        The app is made with ElectronJS, powered by node using fs-extra to read and write files/folders and execa to run all terraform, ansible and infracost commands.
                    </p>
                    <p className='mt-7 ms-5 italic'>
                        How did I do it?
                    </p>
                    <p className='mt-4 ms-5 p-2 rounded-md border-2 opacity-70 border-[rgba(255,255,255,0.2)]'>
                        With a solid knowledge on frontend development, eager to learn devops and basic cloud infrastructures, I take around 6 months to have a MVP working version for the app.
                    </p>
                    <p className='my-10 font-bold tracking-wider'>
                        The app served the porpuse?
                    </p>
                    <p className='opacity-90'>
                        Absolutely, the app allowed me to create, deploy, test and destroy all types of cloud projects on the learning process with <strong>aws, azure, gcp.</strong>
                    </p>
                    <p className='mt-7 italic tracking-wide opacity-80'>
                        You can do the same now, repeating the process of creating and deploying new projects, storing templates for future side-hustles.
                    </p>
                    <p className='w-max mt-5 py-2 px-5 tracking-wider rounded-md border-2 bg-[rgba(126,125,125,0.2)]'>
                        Create, Deploy, Test, Destroy, Store, Repeat
                    </p>
                </div>
            </div>
        </div>
    )
}