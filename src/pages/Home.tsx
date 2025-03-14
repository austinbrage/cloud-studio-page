import { URLS } from '../utils/consts'
import heroBg from '../assets/hero-bg-1.png'
import mainDashboard from '../assets/main_dashboard.png'

export function HomePage() {

    const handleInstallBtn = () => {
        window.open(URLS.DOCS_START, "_blank")
    }

    return (
        <section className='h-max overflow-hidden z-10 homepage'>
            <img 
                src={heroBg} 
                alt="Home background" 
                className='w-full h-[88%] fixed z-0'
            />
            <div className='absolute mt-16 flex items-center justify-around w-11/12'>
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
                <div className='relative top-10 flex flex-col gap-4 text-white'>
                    <p className='flex flex-col font-semibold text-lg tracking-wider'>
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
            <img 
                src={mainDashboard} 
                alt="Main dashboard image"
                // className='w-[600px] absolute right-0 -bottom-16' 
                className='w-[600px] absolute right-[50%] -bottom-16' 
            />
        </section>
    )
}