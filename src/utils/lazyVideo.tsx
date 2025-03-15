import { useState } from "react"
import ReactPlayer from "react-player"

type Props = { 
    videoSrc: string 
    imageSrc: string 
    imageMargin?: string
}

export function LazyLoadVideo({ videoSrc, imageSrc, imageMargin }: Props) {
    const [videoReady, setVideoReady] = useState(false)

    return (
        <div className="relative w-[550px]">

            {!videoReady && (
                <img
                    src={imageSrc}
                    alt="Dashboard preview"
                    style={{ marginTop: `${imageMargin}rem` }}
                    className="w-full"
                />
            )}

            <ReactPlayer
                url={videoSrc}
                width="100%"
                playing
                muted
                loop
                onReady={() => setVideoReady(true)}
            />
        </div>
    )
}