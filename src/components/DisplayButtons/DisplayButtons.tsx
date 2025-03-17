import { useEffect, useRef, useState } from 'react'
// import { useDetectClickOutside } from 'react-detect-click-outside'
import settingsGray from '../../assets/svgs/settings-gray.svg'
import priceTagGray from '../../assets/svgs/price-tag-gray.svg'
import priceTagDark from '../../assets/svgs/price-tag-dark.svg'
import processorGray from '../../assets/svgs/processor-gray.svg'
import processorDark from '../../assets/svgs/processor-dark.svg'
import googleIconGray from '../../assets/svgs/google-gray.svg'
import googleIconDark from '../../assets/svgs/google-dark.svg'
import './displayButtons.css'

type Props = {
    showFreeTier: boolean
    awsProcessor: 'arm' | 'amd'
    googleTier: 'tier1' | 'tier2'
    toogleFreeTier: () => void
    toogleAwsProcessor: () => void
    toogleGoogleTier: () => void
}

export function DisplayButtons({ 
    showFreeTier,
    awsProcessor,
    googleTier,
    toogleFreeTier,
    toogleAwsProcessor,
    toogleGoogleTier
}: Props) {

    const menuRadialRef = useRef<HTMLUListElement>(null)

    const [isProcessorHovered, setIsProcessorHovered] = useState<boolean>(false)
    const [isGoogleHovered, setIsGoogleHovered] = useState<boolean>(false)
    const [isPriceHovered, setIsPriceHovered] = useState<boolean>(false)
    const [bottomOffset, setBottomOffset] = useState(10)

    const toggleMenu = () => menuRadialRef.current && menuRadialRef.current.classList.toggle('active')
    const closeMenu = () => menuRadialRef.current && menuRadialRef.current.classList.remove('active')


    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight
            const scrollPosition = window.innerHeight + window.scrollY
            const distanceToBottom = scrollHeight - scrollPosition

            if (distanceToBottom < 390) {
                setBottomOffset(100 - distanceToBottom + 300)
            } else {
                setBottomOffset(10)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // const containerRef = useDetectClickOutside({
    //     onTriggered: closeMenu
    // })

    return (
        <div className='display-buttons-container' style={{ bottom: `${bottomOffset}px` }}>
            <div className='menu-radial'>
                <ul 
                    ref={menuRadialRef}
                    className="navigation" 
                >
                    
                    <li className="toggle" onClick={toggleMenu}>
                        <img src={settingsGray} alt="Settings gray icon" />
                    </li>

                    <li 
                        onClick={() => {
                            toogleGoogleTier()
                            closeMenu()
                        }}
                        style={
                            {
                                '--i': 0, 
                                '--delay': '0.1s',
                                '--clr': '#8e8c8c', 
                                zIndex: '2' 
                            } as React.CSSProperties
                        }
                        onMouseEnter={() => setIsGoogleHovered(true)}
                        onMouseLeave={() => setIsGoogleHovered(false)}
                    >
                        <span 
                            data-text={
                                googleTier === 'tier1' 
                                    ? 'Use google tier 2'
                                    : 'Use google tier 1'
                            } 
                            data-pos="top align-right"
                        > 
                            {isGoogleHovered ? (
                                <img src={googleIconDark} alt="Google dark icon" />
                            ) : (
                                <img src={googleIconGray} alt="Google gray icon" />
                            )}
                        </span> 
                    </li>

                    <li 
                        onClick={() => {
                            toogleAwsProcessor()
                            closeMenu()
                        }}
                        style={
                            {
                                '--i': 1, 
                                '--delay': '0.1s', 
                                '--clr': '#8e8c8c',
                                zIndex: '2' 
                            } as React.CSSProperties
                        }
                        onMouseEnter={() => setIsProcessorHovered(true)}
                        onMouseLeave={() => setIsProcessorHovered(false)}
                    >
                        <span 
                            data-text={
                                awsProcessor === 'arm' 
                                    ? 'Use lambda x86 processor'
                                    : 'Use lambda ARM processor'
                            } 
                            data-pos="top align-right"
                        > 
                            {isProcessorHovered ? (
                                <img src={processorDark} alt="Processor dark icon" />
                            ) : (
                                <img src={processorGray} alt="Processor gray icon" />
                            )}
                        </span> 
                    </li>

                    <li 
                        onClick={() => {
                            toogleFreeTier()
                            closeMenu()
                        }}
                        style={
                            {
                                '--i': 2, 
                                '--delay': '0.1s', 
                                '--clr': '#8e8c8c', 
                                zIndex: '1' 
                            } as React.CSSProperties
                        }
                        onMouseEnter={() => setIsPriceHovered(true)}
                        onMouseLeave={() => setIsPriceHovered(false)}
                    >
                        <span 
                            data-text={
                                showFreeTier
                                    ? 'Hide free tier prices'
                                    : 'Show free tier prices'
                            } 
                            data-pos="top align-right"
                        > 
                            {isPriceHovered ? (
                                <img src={priceTagDark} alt="Price tag dark icon" />
                            ) : (
                                <img src={priceTagGray} alt="Price tag gray icon" />
                            )}
                        </span> 
                    </li>
                </ul>
            </div>
        </div>
    )
}