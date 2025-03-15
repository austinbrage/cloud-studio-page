import { ServerlessInfo } from '../components/Serverless/Serverless'
import heroBg from '../assets/images/hero-bg-2.png'

export function UtilitiesPage() {

    return (
        <section className="h-[350vh] overflow-hidden z-10 bg-[#0E0F13]">
            <img 
                src={heroBg} 
                alt="Home background" 
                className='w-full h-[88%] fixed'
            />
            <div className='relative top-5 left-20 flex flex-col gap-4'>
                <h1 className='text-[#FFFFFFDE]'>
                    FaaS price comparison utility
                </h1>
                <ServerlessInfo/>
            </div>
        </section>
    )
}