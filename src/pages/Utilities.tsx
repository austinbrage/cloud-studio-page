import { ServerlessInfo } from '../components/Serverless/Serverless'

export function UtilitiesPage() {

    return (
        <section className="alternative-background h-[380vh]">
            <div className='relative top-5 left-20 flex flex-col gap-4'>
                <h1 className='text-[#FFFFFFDE]'>
                    FaaS price comparison utility
                </h1>
                <ServerlessInfo/>
            </div>
        </section>
    )
}