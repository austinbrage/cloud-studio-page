import { useState, useEffect } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { URLS } from '../../utils/consts'
import appLogo from '/app-logo.svg'
import youtubeIcon from '../../assets/svgs/social-youtube.svg'
import githubIcon from '../../assets/svgs/social-github.svg'
import discordIcon from '../../assets/svgs/social-discord.svg'
import linkedinIcon from '../../assets/svgs/social-linkedin.svg'
import './layout.css'

export function LayoutElements() {

    const navigate = useNavigate()
    const { pathname } = useLocation()

    const [showUtilities, setShowUtilities] = useState<boolean>(false)

    const handleInstallBtn = () => {
        window.open(URLS.DOCS_START, "_blank")
    }

    useEffect(() => {
        if(pathname === '/') return
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <div className='relative'>
            <header 
                className='fixed flex justify-between items-center px-7 w-full h-[75px] backdrop-blur-md bg-transparent z-50'
            >
                <div className='flex justify-start items-center gap-16 scale-95'>                    
                    <a 
                        onClick={() => navigate('/')}
                        className='flex justify-start items-center gap-4 cursor-pointer'
                    >
                        <img 
                            src={appLogo} 
                            alt="CloudStudio logo"
                            className='w-[50px] h-[50px]'
                        />
                        <p className='font-semibold text-lg text-[#FFFFFFDE]'>
                            CloudStudio
                        </p>
                    </a>
                    <nav className='w-[300px]'>
                        <ul className='flex justify-between items-center w-full'>
                            <li 
                                className='text-lg tracking-wider cursor-pointer text-[#ffffff8c]'
                            >
                                <a href={URLS.DOCS_HOME} target='_blank' className='font-normal'>
                                    Docs
                                </a>
                            </li>
                            <li 
                                onClick={() => setShowUtilities(prev => !prev)}
                                className='text-lg tracking-wider cursor-pointer text-[#ffffff8c]'
                            >
                                Utilities
                            </li>
                            <li 
                                onClick={() => window.open('https://discord.gg/ChgyCwTKKf')}
                                className='text-lg tracking-wider cursor-pointer text-[#ffffff8c]'
                            >
                                Community
                            </li>
                        </ul>
                    </nav>
                </div>
                <button 
                    type="button"
                    onClick={handleInstallBtn}
                    className='mt-4 font-bold tracking-wider text-black bg-[#479DAC] hover:scale-100 hover:transition-all hover:duration-300  transition-all duration-300 scale-95'
                >
                    Install now
                </button>
                <div 
                    className='utilities-menu'
                    style={{ display: showUtilities ? 'block' : 'none' }}
                >
                    <ul>
                        <li onClick={() => {
                            navigate('/utilities/faas')
                            setShowUtilities(false)
                        }}>
                            <p>FaaS Comparison</p>
                            <span>Compare the prices of the Serverless functions services on aws, azure, gcp</span>
                        </li>
                        <li style={{ opacity: 0.5, pointerEvents: 'none' }}>
                            <p>Document DBs Comparison</p>
                            <span>Compare the prices of the Document databases services on aws, azure, gcp</span>
                        </li>
                        <li style={{ opacity: 0.5, pointerEvents: 'none' }}>
                            <p>CIAM Comparison</p>
                            <span>Compare the prices of the Customer admin services on aws, azure, gcp</span>
                        </li>
                        <li style={{ opacity: 0.5, pointerEvents: 'none' }}>
                            <p>Key value DBs Comparison</p>
                            <span>Compare the prices of the Key value databases services on aws, azure, gcp</span>
                        </li>
                    </ul>
                </div>
            </header>
            
            <main className='relative top-20 w-full min-h-screen'>
                <Outlet/>
            </main>

            <footer className='absolute -bottom-20 w-full h-[150px] grid grid-cols-2 px-14 py-4 bg-[rgba(188,188,188,0.05)] backdrop-blur-lg z-[1025]'>
                <a 
                    onClick={() => navigate('/')}
                    className='flex justify-start items-start gap-4 cursor-pointer'
                >
                    <img 
                        src={appLogo} 
                        alt="CloudStudio logo"
                        className='w-[35px] h-[35px]'
                    />
                    <p className='font-semibold text-lg text-[#FFFFFFDE]'>
                        CloudStudio
                    </p>
                </a>
                <p 
                    onClick={() => window.open('https://austinbrage.me/')}
                    className='flex items-start justify-end text-lg text-[rgba(255,255,255,0.7)] cursor-pointer'
                >
                    about the creator
                </p>
                <div className='flex items-end justify-start gap-3 font-medium text-white'>
                    <img 
                        src={youtubeIcon} 
                        alt="Youtube icon" 
                        className='w-[35px] cursor-pointer'
                        onClick={() => window.open('https://www.youtube.com/@austinbrage')}
                    />
                    <img 
                        src={githubIcon} 
                        alt="Github icon" 
                        className='w-[32px] cursor-pointer'
                        onClick={() => window.open('https://github.com/austinbrage/cloud-studio-workdir')}
                        />
                    <img 
                        src={discordIcon} 
                        alt="Discord icon" 
                        className='w-[32px] cursor-pointer'
                        onClick={() => window.open('https://discord.gg/ChgyCwTKKf')}
                    />
                    <img 
                        src={linkedinIcon} 
                        alt="Linkedin icon" 
                        className='w-[32px] cursor-pointer'
                        onClick={() => window.open('https://www.linkedin.com/in/austinbrage')}
                    />
                </div>
                <p className='flex items-end justify-end font-medium text-[rgba(255,255,255,0.9)]'>
                    Copyright © 2025 CloudStudio
                </p>
            </footer>
        </div>
    )
}