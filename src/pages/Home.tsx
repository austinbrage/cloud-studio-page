import { URLS } from '../utils/consts'
import { useNavigate } from 'react-router-dom'
import { LazyLoadVideo } from '../utils/lazyVideo'
import blogImg1 from '../assets/images/blog-img-1.png'
import blogImg2 from '../assets/images/blog-img-2.png'
import terraformIcon from '../assets/svgs/terraform.svg'
import ansibleIcon from '../assets/svgs/ansible.svg'
import infracostIcon from '../assets/svgs/infracost.svg'
import fileCodeIcon from '../assets/svgs/file-code.svg'
import numberOne from '../assets/svgs/number-one.svg'
import numberTwo from '../assets/svgs/number-two.svg'
import numberThree from '../assets/svgs/number-three.svg'
import mainDashboardVideo from '../assets/videos/main-dashboard.mp4'
import codeDashboardVideo from '../assets/videos/code-dashboard.mp4'
import execDashboardVideo from '../assets/videos/exec-dashboard.mp4'
import mainDashboard from '../assets/images/main_dashboard.png'
import codeDashboard from '../assets/images/code_dashboard.png'
import execDashboard from '../assets/images/execution_dashboard.png'

export function HomePage() {

    const navigate = useNavigate()    

    const handleInstallBtn = () => {
        window.open(URLS.DOCS_START, "_blank")
    }

    return (
        <section className='main-background'>

            <div className='relative mt-6 flex items-center justify-around w-11/12 h-64'>
                <div className='flex flex-col gap-4'>
                    <p
                        className='w-max px-3 py-1 font-[Lemon] bg-[#25202033] text-[#B9D7D5] border-2 rounded-md border-[#252020]'    
                    >
                        Aws, Azure, Gcp and more...
                    </p>
                    <h1 className='flex flex-col text-[#FFFFFFDE]'>
                        <span>Work in the Cloud</span>
                        <span>like never before</span>
                    </h1>
                </div>
                <div className='relative top-10 flex flex-col gap-4 text-[rgba(255,255,255,0.8)]'>
                    <p className='flex flex-col font-medium text-lg tracking-wider'>
                        <span>Create, edit, deploy and debug your cloud projects</span>
                        <span>within an intuituve UI on a Desktop App. Scaffold</span>
                        <span>Terraform / Ansible templates easily with 2 clicks.</span>
                    </p>
                    <div className='flex gap-8'>
                        <button 
                            type="button"
                            onClick={handleInstallBtn}
                            className='w-max font-bold tracking-wider text-black bg-[#479DAC] hover:scale-105 hover:transition-all hover:duration-300  transition-all duration-300'
                        >
                            Install now
                        </button>
                        <button 
                            type="button"
                            className='w-max font-bold tracking-wider text-[#CFC9C9] rounded-2 border-2 border-[#479DAC] hover:scale-105 hover:transition-all hover:duration-300  transition-all duration-300'
                        >
                            Watch tutorial
                        </button>
                    </div>
                </div>
            </div>
            
            <div className='absolute left-1/2 top-[520px] w-[15px] h-[15px] -translate-x-[32%] rounded-full bg-[rgba(69,68,68,1)]'></div>
            <div className='absolute left-1/2 top-[520px] w-[5px] h-[1010px] bg-[rgba(69,68,68,0.5)]'></div>
            <div className='absolute left-1/2 top-[160vh] w-[15px] h-[15px] -translate-x-[32%] rounded-full bg-[rgba(69,68,68,1)]'></div>
            <div className='absolute left-1/2 top-[237vh] w-[15px] h-[15px] -translate-x-[32%] rounded-full bg-[rgba(69,68,68,1)]'></div>

            <div className='relative top-16 flex flex-col gap-36'>
                <div className='flex items-center justify-center gap-[200px]'>
                    <LazyLoadVideo
                        imageSrc={mainDashboard}
                        videoSrc={mainDashboardVideo}
                        imageMargin='1'
                    />
                    <div className='relative right-10 w-[500px] h-[90px] flex items-center justify-start gap-5 ps-3 rounded-s-3xl bg-[rgba(30,28,28,0.55)]'>
                        <img 
                            src={numberOne} 
                            alt="Number one icon" 
                            className='w-[40px]'
                        />
                        <p className='text-lg w-[400px] text-[rgba(255,255,255,0.9)]'>
                            Navegate seamlessly between cloud projects, template and modules
                        </p>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-[200px]'>
                    <div className='relative left-10 w-[500px] h-[90px] flex items-center justify-start gap-5 ps-3 rounded-s-3xl bg-[rgba(30,28,28,0.55)]'>
                        <img 
                            src={numberTwo} 
                            alt="Number two icon" 
                            className='w-[40px]'
                        />
                        <p className='text-lg w-[400px] text-[rgba(255,255,255,0.9)]'>
                            Edit the main and module files on the code editor for projects and templates
                        </p>
                    </div>
                    <LazyLoadVideo
                        imageSrc={codeDashboard}
                        videoSrc={codeDashboardVideo}
                        imageMargin='7'
                    />
                </div>
                <div className='flex items-center justify-center gap-[200px]'>
                    <LazyLoadVideo
                        imageSrc={execDashboard}
                        videoSrc={execDashboardVideo}
                        imageMargin='-1'
                    />
                    <div className='relative right-10 w-[500px] h-[90px] flex items-center justify-start gap-5 ps-3 rounded-s-3xl bg-[rgba(30,28,28,0.55)]'>
                        <img 
                            src={numberThree} 
                            alt="Number three icon" 
                            className='w-[40px]'
                        />
                        <p className='text-lg w-[400px] text-[rgba(255,255,255,0.9)]'>
                            Execute all needed comands for terraform and ansible projects with printed output
                        </p>
                    </div>
                </div>
            </div>

            <div className='scale-90 mt-48 w-11/12 mx-auto grid grid-cols-2 place-items-center gap-x-0 gap-y-16 z-[1025]'>
                <div className='w-[526px] h-[244px] rounded-md bg-gradient-to-b from-[rgba(70,68,68,0.15)] to-[rgba(120,118,118,0.15)]'>
                    <div className='flex items-center gap-5 p-3'>
                        <img 
                            src={terraformIcon} 
                            alt="Terraform Icon" 
                        />
                        <p className='text-3xl text-white'>
                            Terraform integration
                        </p>
                    </div>
                    <p className='w-10/12 mt-4 mx-auto text-lg text-white'>
                        The app runs the key commands of the terraform tool, renders the outputs and reads the data from the state file
                    </p>
                </div>
                <div className='w-[526px] h-[244px] rounded-md bg-gradient-to-b from-[rgba(70,68,68,0.15)] to-[rgba(120,118,118,0.15)]'>
                    <div className='flex items-center gap-5 p-3'>
                        <img 
                            src={ansibleIcon} 
                            alt="Ansible Icon" 
                        />
                        <p className='text-3xl text-white'>
                            Ansible integration
                        </p>
                    </div>
                    <p className='w-10/12 mt-4 mx-auto text-lg text-white'>
                        The app runs the key commands of the ansible tool, and add the hosts data to the inventory automatically
                    </p>
                </div>
                <div className='w-[526px] h-[244px] rounded-md bg-gradient-to-b from-[rgba(70,68,68,0.15)] to-[rgba(120,118,118,0.15)]'>
                    <div className='flex items-center gap-5 p-3'>
                        <img 
                            src={infracostIcon} 
                            alt="Infracost Icon" 
                            width={'40px'}
                        />
                        <p className='text-3xl text-white'>
                            Infracost integration
                        </p>
                    </div>
                    <p className='w-10/12 mt-4 mx-auto text-lg text-white'>
                        The app runs the base and diff commands of the infracost tool, and renders a comprehensible JSON for the results
                    </p>
                </div>
                <div className='w-[526px] h-[244px] rounded-md bg-gradient-to-b from-[rgba(70,68,68,0.15)] to-[rgba(120,118,118,0.15)]'>
                    <div className='flex items-center gap-5 p-3'>
                        <img 
                            src={fileCodeIcon} 
                            alt="File code Icon" 
                        />
                        <p className='text-3xl text-white'>
                            Built-in code editor
                        </p>
                    </div>
                    <p className='w-10/12 mt-4 mx-auto text-lg text-white'>
                        The app has an integrated code editor to edit all terraform and ansible files, before running any command
                    </p>
                </div>
            </div>

            <div className='mt-48 flex items-center justify-evenly w-full z-[1026]'>
                <div 
                    onClick={() => navigate('/blog/motivation')}
                    className='flex gap-4 w-[550px] h-[300px] rounded-sm bg-[rgba(53,50,50,0.2)] cursor-pointer transition-all duration-300 hover:scale-105'
                >
                    <img 
                        src={blogImg1} 
                        alt="Blog image 1" 
                        className='w-[258px] h-full'
                    />
                    <div className='mt-3 flex flex-col gap-5'>
                        <p className='font-["Alef"] text-[rgba(255,255,255,0.8)]'>
                            February 15, 2025
                        </p>
                        <p className='w-11/12 text-xl text-white'>
                            Motivation behind the creation of the app
                        </p>
                        <p className='font-light text-white'>
                            This app was initially a side project made to ease the process of learning the cloud with terraform and ansible.
                        </p>

                        <p className='self-end mt-10 me-3 font-["Alkatra"] text-[rgba(182,179,179,0.8)]'> 
                            Austin Brage
                        </p>
                    </div>
                </div>
                <div 
                    onClick={() => navigate('/blog/workdir')}
                    className='flex gap-4 w-[550px] h-[300px] rounded-sm bg-[rgba(53,50,50,0.2)] cursor-pointer transition-all duration-300 hover:scale-105'
                >
                    <img 
                        src={blogImg2} 
                        alt="Blog image 2" 
                        className='w-[258px] h-full'
                    />
                    <div className='mt-3 flex flex-col gap-5'>
                        <p className='font-["Alef"] text-[rgba(255,255,255,0.8)]'>
                            February 15, 2025
                        </p>
                        <p className='w-11/12 text-xl text-white'>
                            The heart of the app, explaining the WORKDIR
                        </p>
                        <p className='font-light text-white'>
                            CloudStudio can be explain simply as a code editor for terraform & ansible projects that are stored inside a workdir.
                        </p>
                        <p className='self-end mt-10 me-3 font-["Alkatra"] text-[rgba(182,179,179,0.8)]'> 
                            Austin Brage
                        </p>
                    </div>
                </div>
            </div>

            <div className='h-[400px]'></div>

        </section>
    )
}