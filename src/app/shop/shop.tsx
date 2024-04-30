'use client'
import './style.scss'
import { CiSearch } from "react-icons/ci";
import iphone15 from '../../../public/assets/iphone15.png'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { Product } from '../product';
import Link from 'next/link';
const Shop=()=>{
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:3001/product');
                const data = await response.json();
                setProducts(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);


    return (
        
        <div className='shop'>
            <div className='containerShop'>
                <div className='shop__wrap'>
                    <div className='shop__top'>
                        <div className='shop__toolFind'>
                            <div className='shop__InputSearch'> 
                                <input type="text" placeholder='nhập tìm kiếm'/>
                                <CiSearch/>
                            </div>
                            <div className='shop__soft'>

                            </div>
                        </div>
                    </div>
                    <div className='shop__center'>
                        <div className='shop__wrapCenter'>
                            {products &&products.map((item,index)=>(
                                <div className='shop__itemProduct' key={index}>
                                <div className='shop__wrapProduct'>
                                    <div className='shop__img'>
                                    <Image 
                                                src={`/${item.img}`} 
                                                alt={item.name} 
                                                width={300} 
                                                height={300} 
                                            />
                                    </div>
                                    <div className='shop__content'>
                                        <div className='shop__contentProduct'>
                                            <h3>{item.name}</h3>
                                            <div className='shop__price'>
                                               <span>
                                                    Giá :
                                               </span>
                                                    <p>{item.price}</p>
                                            </div>
                                        </div>
                                        <div className='shop__button'>
                                            <div className='shop__viewDetail'>
                                                <Link href={`/shop/${item.id}`}>Xem Chi tiết</Link>
                                            </div>
                                            <div className='shop__addToCard'>
                                                <button>Thêm sản phẩm</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Shop