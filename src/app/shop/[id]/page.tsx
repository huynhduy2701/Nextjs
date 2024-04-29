'use client'
import { useEffect, useState } from "react"
import './style.scss'
import img from '../../../../public/assets/imgUser.png'
import Image from 'next/image'
import { Product } from "@/app/product"
export default function Page({ params }: { params: { id: number } }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const url =`http://localhost:4000/product/${params.id}`
console.log(url);
console.log("aaa",products);
  useEffect(() => {
    const fetchProdutcDetail = async () => {
      try {
        const res = await fetch("http://localhost:4000/product/"+params.id)
        // .then((data)=>data.json())
        const data = await res.json();
        console.log(data);
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchProdutcDetail();
  },[params.id]);
    return (
      <div className="productDetail">
          <div className="container">
          {products && Array.isArray(products) && products.length > 0 &&
        products.map((item) => (

                <div className="productDetail__wrap" >
                  <div className="productDetail__top">
                      <div className="productDetail__img">
                          <Image src={item.img} alt="logo"/>
                      </div>
                      <div className="productDetail__content">
                          <div className="productDetail__title">
                              <h3>
                                {item.name}
                              </h3>
                          </div>
                          <div className="productDetail__price">
                            <p> giá :</p>
                            <span>{item.price}</span>
                          </div>
                          <div className="productDetail__button">
                                <div className="productDetail__minus">
                                    <span>-</span>
                                </div>
                                <input type="text" value={"0"}/>
                                <div className="productDetail__plus">
                                    <span>+</span>
                                </div>
                          </div>
                          <div className="productDetail__buttonSubmit">
                              <div className="productDetail__btnAddToCard">
                                  <span>Add to Card</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="productDetail__bottom">
                      <p>
                       <strong> Mô tả :</strong>
                        <span> {item.description}</span>
                      </p>
                  </div>
              </div>
              ))
             
              }
               
          </div>
      </div>
    )
    
  }