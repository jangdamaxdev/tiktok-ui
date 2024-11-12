import clip from './video/ss.mp4'
import { forwardRef, useImperativeHandle, useRef, useState } from 'react'
function Video(props, ref) {
    const tageVideo = useRef()
    const [random, setR] =  useState(Math.random())
    useImperativeHandle(ref, () => {
        console.log('useImperativeHandle running')
        return {
        hat() { return tageVideo.current.play() },
        dung() { return tageVideo.current.pause() }
    }

    },[random])

    // ref.current = {
    //         hat() { return tageVideo.current.play() },
    //         dung() { return tageVideo.current.pause() },
    //     }

    
    console.log('Video render');
    return (
        <div>

            <video
                ref={tageVideo}
                src={clip}
                width={280}
            />
            <button onClick={e => setR(Math.random())}>Click</button>
            {console.log('Video render UI', random)}
        </div>
    )

}
export default forwardRef(Video)