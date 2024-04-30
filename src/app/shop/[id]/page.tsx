'use client'
import { useEffect, useState } from "react"
import './style.scss'
import img from '../../../../public/assets/imgUser.png'
import Image from 'next/image'
import { Product } from "@/app/product"
import { showSuccessToast } from "@/app/erros/erros"
import { redirect, useRouter } from 'next/navigation'
import { ToastContainer } from "react-toastify"
export default function Page({ params }: { params: { id: number } }) {
  const [products, setProducts] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const checkIsLoginUser= localStorage.getItem('token')
  const url =`http://localhost:4000/product/${params.id}`
  const router = useRouter()
console.log(url);
console.log("aaa",products);
  useEffect(() => {
    if (checkIsLoginUser) {
      setIsLogin(true)
    }else{
      showSuccessToast("Chưa đăng nhập")  
      router.push('/Login', { scroll: false });
      // setTimeout(() => {
      // }, 500);
      console.log("chưa đăng nhập");
    }
    const fetchProdutcDetail = async () => {
      try {
        const res = await fetch("http://localhost:3001/product/"+params.id)
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
        <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
      <div className="container">
        {products && (
          <div className="productDetail__wrap">
            <div className="productDetail__top">
              <div className="productDetail__img">
                <Image src={`/${products.img}`} width={500} height={500} alt="logo" />
              </div>
              <div className="productDetail__content">
                <div className="productDetail__title">
                  <h3>{products.name}</h3>
                </div>
                <div className="productDetail__price">
                  <p>giá :</p>
                  <span>{products.price}</span>
                </div>
                <div className="productDetail__button">
                  <div className="productDetail__minus">
                    <span>-</span>
                  </div>
                  <input type="text" value={"0"} />
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
                <strong>Mô tả :</strong>
                <span>{products.description}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
    
  }