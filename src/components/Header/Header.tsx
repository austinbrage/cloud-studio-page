import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { URLS } from '../../utils/consts'
import appLogo from '/app-logo.svg'
import './header.css'

export function HeaderSection() {

    const navigate = useNavigate()

    const [showUtilities, setShowUtilities] = useState<boolean>(false)

    const handleInstallBtn = () => {
        window.open(URLS.DOCS_START, "_blank")
    }

    return (
        <>
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
                            navigate('/utilities')
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
        </>
    )
}