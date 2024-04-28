    import './style.scss'
    import Image from 'next/image'
    import imgbg from '../../../public/assets/bggallery.png'
    const Gallery=()=>{
        return(
            <div className="container">
                <div className='gallery'>
                    <div className='gallery_wrap'>
                        <div className='gallery_imgGallery'>
                            <Image src={imgbg}  alt='logo'/>
                        </div>
                        <div className='gallery_imgGallery'>
                            <Image src={imgbg}  alt='logo'/>
                        </div>
                        <div className='gallery_imgGallery'>
                            <Image src={imgbg}  alt='logo'/>
                        </div>
                        <div className='gallery_imgGallery'>
                            <Image src={imgbg}  alt='logo'/>
                        </div>
                        <div className='gallery_imgGallery'>
                            <Image src={imgbg}  alt='logo'/>
                        </div>
                        <div className='gallery_imgGallery'>
                            <Image src={imgbg}  alt='logo'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    export default Gallery