import './style/blog.scss'
import Link from 'next/link'
import Image from 'next/image'
import metting from '../../public/assets/metting.png'
import { IoNewspaperOutline } from "react-icons/io5";
import user from '../../public/assets/imgUser.png'
import './style/reponsive.scss'
const Blog=()=>{
    return (
        <div className='BlogContainer' > 
            {/* div bự */}
            <div className='containerheight'>
                {/* div bao */}
                <div>
                    {/* div bao 2 */}
                    <div className='Blog'>
                        {/* wrapp */}
                       <div className='Blog__Blogwrap'>
                            <div className='Blog__blogTop'>
                                    {/* top */}
                                    <div className='Blog__BlogIcon'>
                                        {/* icon */}
                                        <IoNewspaperOutline/>
                                    </div>
                                    <div className='Blog__blogTextTitle'>
                                        {/* text */}
                                        <h3>
                                            Programmics Blog
                                            <span className="blogDivider"></span>
                                        
                                        </h3>
                                        <div className='Blog__blogTextDes'>
                                            {/* description */}
                                            <p>Programmics help you to understand the world better.</p>
                                        </div>
                                    </div>
                            </div>

                        <div className='Blog__blogCenter'>
                            {/* center */}

                            <div className='Blog__blogCard'>
                                {/* card */}
                                <div className='Blog__postner'>
                                    <div className='Blog__blogMedia'>
                                        {/* media */}
                                        <div className='Blog__formatImg'>
                                            {/* format */}
                                            <Link href={'/'}>
                                                <Image src={metting} alt='logo'/>
                                            </Link>

                                        </div>
                                        <div className='Blog__date'>
                                            {/* data */}
                                            <Link href={'/'}>
                                                22/04/2024
                                            </Link>
                                        </div>

                                    </div>
                                    <div className='Blog__blogInfo'>
                                        {/* info */}
                                        <h3>
                                            <Link href={'/'}>
                                                
                                            10 Imperative Reasons why your site must be mobile-friendly		
                                            </Link>
                                        </h3>
                                        <div className='Blog__blogContent'>
                                            {/* content */}
                                            1. Create a direct merchandising medium for your business Having a Mob...
                                        </div>
                                        <div className='Blog__blogPost'>
                                            {/* arrow Link */}
                                            <div className='Blog__blogAuthor'>
                                                <Image src={user} alt='logo'/>
                                                <Link href={'/'}>
                                                programmics
                                                </Link>
                                            </div>
                                            <div className='Blog__blogRight'>
                                                <Link href={'/'}>
                                                     0
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className='Blog__blogCard'>
                                {/* card */}
                                <div className='Blog__postner'>
                                    <div className='Blog__blogMedia'>
                                        {/* media */}
                                        <div className='Blog__formatImg'>
                                            {/* format */}
                                            <Link href={'/'}>
                                                <Image src={metting} alt='logo'/>
                                            </Link>

                                        </div>
                                        <div className='Blog__date'>
                                            {/* data */}
                                            <Link href={'/'}>
                                                22/04/2024
                                            </Link>
                                        </div>

                                    </div>
                                    <div className='Blog__blogInfo'>
                                        {/* info */}
                                        <h3>
                                            <Link href={'/'}>
                                                
                                            10 Imperative Reasons why your site must be mobile-friendly		
                                            </Link>
                                        </h3>
                                        <div className='Blog__blogContent'>
                                            {/* content */}
                                            1. Create a direct merchandising medium for your business Having a Mob...
                                        </div>
                                        <div className='Blog__blogPost'>
                                            {/* arrow Link */}
                                            <div className='Blog__blogAuthor'>
                                                <Image src={user} alt='logo'/>
                                                <Link href={'/'}>
                                                programmics
                                                </Link>
                                            </div>
                                            <div className='Blog__blogRight'>
                                                <Link href={'/'}>
                                                     0
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className='Blog__blogCard'>
                                {/* card */}
                                <div className='Blog__postner'>
                                    <div className='Blog__blogMedia'>
                                        {/* media */}
                                        <div className='Blog__formatImg'>
                                            {/* format */}
                                            <Link href={'/'}>
                                                <Image src={metting} alt='logo'/>
                                            </Link>

                                        </div>
                                        <div className='Blog__date'>
                                            {/* data */}
                                            <Link href={'/'}>
                                                22/04/2024
                                            </Link>
                                        </div>

                                    </div>
                                    <div className='Blog__blogInfo'>
                                        {/* info */}
                                        <h3>
                                            <Link href={'/'}>
                                                
                                            10 Imperative Reasons why your site must be mobile-friendly		
                                            </Link>
                                        </h3>
                                        <div className='Blog__blogContent'>
                                            {/* content */}
                                            1. Create a direct merchandising medium for your business Having a Mob...
                                        </div>
                                        <div className='Blog__blogPost'>
                                            {/* arrow Link */}
                                            <div className='Blog__blogAuthor'>
                                                <Image src={user} alt='logo'/>
                                                <Link href={'/'}>
                                                programmics
                                                </Link>
                                            </div>
                                            <div className='Blog__blogRight'>
                                                <Link href={'/'}>
                                                     0
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>

                        <div className='Blog__blogBottom'>
                            <div className='Blog__content'>
                                <p>
                                Programmics Blogs provide you the insight to learn more about Software technology. <Link href={'#'}> Read Full Blog</Link>
                                </p>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Blog