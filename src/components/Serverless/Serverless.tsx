import { useState } from 'react'
import { RequestsChart } from '../FaaS/Requests'
import { DurationsChart } from '../FaaS/Duration'
import { CalculationBars } from '../FaaS/Calculation'
import { DisplayButtons } from '../DisplayButtons/DisplayButtons'
import './serverless.css'

export function ServerlessInfo() {

    const [showFreeTier, setShowFreeTier] = useState(true)
    const [awsProcessor, setAwsProcessor] = useState<'amd' | 'arm'>('arm')
    const [googleTier, setGoogleTier] = useState<'tier1' | 'tier2'>('tier1')

    return (
        <div className="serverless-container">
            <div className="serverless-cards">

                <div 
                    onClick={() => window.open('https://aws.amazon.com/es/lambda/pricing')}
                    className="serverless-cards-item"
                >
                    <div className="serverless-cards-item-glow bg-yellow-500"></div>

                    <h2 className="text-yellow-500">AWS Lambda</h2>
                    <p className="text-gray-400 mt-3">
                        Price (us-east-1, {awsProcessor === 'amd' ? 'AMDX86' : 'ARM64'}): <br />
                        <span className="text-white font-bold">${awsProcessor === 'amd' ? '0.000016' : '0.000013'} / GB-sec </span>
                    </p>
                    <p className="text-sm text-gray-500 mt-3">
                        Free tier: 1M requests/month, 400,000 GB-sec
                    </p>
                </div>

                <div 
                    onClick={() => window.open('https://azure.microsoft.com/en-us/pricing/details/functions/?ef_id=_k_CjwKCAjwvr--BhB5EiwAd5YbXtDvpcu1jNYcTPd953c7Pyugr5gck_Dzn7FaVHC_qeFby64ozOL2ZRoC-JsQAvD_BwE_k_&OCID=AIDcmm8iiz2htt_SEM__k_CjwKCAjwvr--BhB5EiwAd5YbXtDvpcu1jNYcTPd953c7Pyugr5gck_Dzn7FaVHC_qeFby64ozOL2ZRoC-JsQAvD_BwE_k_&gad_source=1&gclid=CjwKCAjwvr--BhB5EiwAd5YbXtDvpcu1jNYcTPd953c7Pyugr5gck_Dzn7FaVHC_qeFby64ozOL2ZRoC-JsQAvD_BwE')}
                    className="serverless-cards-item"
                >
                    <div className="serverless-cards-item-glow bg-blue-500"></div>
                    
                    <h2 className="text-blue-600">Azure Functions</h2>
                    <p className="text-gray-400 mt-3">
                        Price (Consumption Plan): <br />
                        <span className="text-white font-bold">$0.000016 / GB-sec</span>
                    </p>
                    <p className="text-sm text-gray-500 mt-3">
                        Free tier: 1M requests/month, 400,000 GB-sec
                    </p>
                </div>

                <div 
                    onClick={() => window.open('https://cloud.google.com/functions/pricing-1stgen')}
                    className="serverless-cards-item"
                >
                    <div className="serverless-cards-item-glow bg-red-500"></div>
                    
                    <h2 className="text-red-500">GCP Functions</h2>
                    <p className="text-gray-400 mt-3">
                        Price (Tier {googleTier === 'tier1' ? '1' : '2'} regions): <br />
                        <span className="text-white font-bold">${googleTier === 'tier1' ? '0.0000025' : '0.0000035'} / GB-sec</span>
                    </p>
                    <p className="text-sm text-gray-500 mt-3">
                        Free tier: 2M requests/month, 400,000 GB-sec
                    </p>
                </div>
            </div>

            <div className="mt-8 w-full">
                <p className="w-10/12 text-sm text-gray-400 bg-gray-950 p-4 rounded-lg border border-gray-800">
                ⚠️ Prices exclude data transfer costs outside the provider/region.  
                Advanced CPU-seconds plans for intensive tasks (e.g., ML) not included.
                </p>
            </div>
            
            <div className='mt-10 flex flex-col items-start justify-center gap-10'>
                <div className='relative w-10/12 dark'>
                    <RequestsChart showFreeTier={showFreeTier}/>
                </div>
                <div className='relative w-10/12 dark'>
                    <DurationsChart {...{ showFreeTier, awsProcessor, googleTier }}/>
                </div>
                <div className='relative w-10/12 dark'>
                    <CalculationBars {...{ awsProcessor, googleTier }}/>
                </div>
            </div>

            <DisplayButtons {...{
                showFreeTier,
                awsProcessor,
                googleTier,
                toogleFreeTier: () => setShowFreeTier(prev => !prev),
                toogleAwsProcessor: () => setAwsProcessor(prev => prev === 'amd' ? 'arm' : 'amd'),
                toogleGoogleTier: () => setGoogleTier(prev => prev === 'tier1' ? 'tier2' : 'tier1')
            }} />
        </div>
    )
}