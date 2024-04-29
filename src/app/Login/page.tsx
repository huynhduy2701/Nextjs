'use client'
import CarouselNav from '@/components/carousel'
import './style.scss'
import Link from 'next/link'
import { useState } from 'react'
import TitlePage from '@/components/titlepage'
import { ToastContainer, toast } from 'react-toastify'
import { showErrorToast, showSuccessToast } from '../erros/erros'
import { useRouter } from 'next/router'
import { redirect } from 'next/navigation'

const Login=()=>{
  
    const [gmail, setGmail] = useState('');
    const [Matkhau, setMatkhau] = useState('');
    const [loginStatus, setLoginStatus] = useState('');
    // thêm các hàm onChange vào các trường input của username và mật khẩu. Khi người dùng nhập vào các trường này, giá trị của chúng sẽ được cập nhật vào state tương ứng (username và Matkhau). Sau đó, khi bạn đăng nhập thành công, giá trị của username và Matkhau sẽ được lấy từ state để in ra console
    const handleLogin = async () => {
        if (!setGmail || !Matkhau) {
            showErrorToast('Vui lòng nhập tên đăng nhập và mật khẩu');
            return; // Thoát khỏi hàm handleLogin
          }
            try {
                const res = await fetch('http://localhost:4000/users')
                const users = await res.json()
                const user= users.find(
                    (u:any)=>u.email===gmail && u.password===Matkhau 
                )
                if(user){
                    console.log('đăng nhập thành công1');
                    console.log("user",gmail);
                    console.log("mật khẩu",Matkhau);
                    setLoginStatus('đăng nhập thành công')
                    showSuccessToast('đăng nhập thành công')
                    redirect('/')
                }
        
                else{
                    console.log('đăng nhập không thành công');
                    console.log(res.status);
                setLoginStatus('đăng nhập không thành công')
                showErrorToast("đăng nhập thất bại")
                }
            } catch (error) {
                console.log(error);
                
            }
      }
    return(
        <div>
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
            <TitlePage message={'Login'}/>
            {/* <CarouselNav/> */}
            <div className="containerLogin">
                <div className='formLogin'>
                    <div className='cardLogin'>
                        <div className='cardBox'>
                            <div className='cardHeader'>
                                <h1>Login</h1>
                            </div>
                            <div className='cardBody'>
                                <label htmlFor="">gmail</label>
                                <input type="text" placeholder='gmail' onChange={(e) => setGmail(e.target.value)}  className='gmail' />
                                <label htmlFor="">Mật khẩu</label>
                                <input type="text" placeholder='Mật khẩu' onChange={(e) => setMatkhau(e.target.value)} className='matkhau' />
                            </div>
                            <div className='CardFooter'>
                               <div className='btnLogin'>
                                <button className='' onClick={handleLogin}>Login</button>
                               </div>
                                <br />
                                <Link href={'/Register'}>
                                    chưa có tài khoản
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login