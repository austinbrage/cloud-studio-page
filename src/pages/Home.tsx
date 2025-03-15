import { URLS } from '../utils/consts'
import ReactPlayer from 'react-player'
import heroBg from '../assets/hero-bg-1.png'
import numberOne from '../assets/svgs/number-one.svg'
import numberTwo from '../assets/svgs/number-two.svg'
import numberThree from '../assets/svgs/number-three.svg'
import mainDashboardVideo from '../assets/videos/main-dashboard.mp4'
import codeDashboardVideo from '../assets/videos/code-dashboard.mp4'
import execDashboardVideo from '../assets/videos/exec-dashboard.mp4'
// import mainDashboard from '../assets/main_dashboard.png'
// import codeDashboard from '../assets/code_dashboard.png'
// import execDashboard from '../assets/execution_dashboard.png'

export function HomePage() {

    const handleInstallBtn = () => {
        window.open(URLS.DOCS_START, "_blank")
    }

    return (
        <section className='h-[400vh] overflow-hidden z-10 homepage'>
            <img 
                src={heroBg} 
                alt="Home background" 
                className='w-full h-[88%] fixed z-0'
            />

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
                    {/* <img 
                        src={mainDashboard} 
                        alt="Main dashboard image" 
                        className='w-[550px] relative' 
                    /> */}
                    <ReactPlayer 
                        url={mainDashboardVideo} 
                        width={'550px'} 
                        playing
                        muted 
                        loop
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
                    {/* <img 
                        src={codeDashboard} 
                        alt="Code dashboard image"
                        className='w-[550px]' 
                    /> */}
                    <ReactPlayer 
                        url={codeDashboardVideo} 
                        width={'550px'} 
                        playing
                        muted 
                        loop
                    />
                </div>
                <div className='flex items-center justify-center gap-[200px]'>
                    {/* <img 
                        src={execDashboard} 
                        alt="Execution dashboard image" 
                        className='w-[550px] relative' 
                    /> */}
                    <ReactPlayer 
                        url={execDashboardVideo} 
                        width={'550px'} 
                        playing
                        muted 
                        loop
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

        </section>
    )
}