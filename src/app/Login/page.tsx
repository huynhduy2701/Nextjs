'use client'
import CarouselNav from '@/components/carousel'
import './style.scss'
import Link from 'next/link'
import { useState } from 'react'
import TitlePage from '@/components/titlepage'
import { ToastContainer, toast } from 'react-toastify'
import { showErrorToast, showSuccessToast } from '../erros/erros'


import { redirect, useRouter } from 'next/navigation'
const Login = () => {
    const router = useRouter()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('');
    const header={
        alg:'HS256',
        typ:"JWT"
    }
    // @ts-ignore sử dụng tắt kiểm tra dữ liệu
    const base64urlEncode = (data) => {
        return btoa(JSON.stringify(data))
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');
    };
    
    // thêm các hàm onChange vào các trường input của username và mật khẩu. Khi người dùng nhập vào các trường này, giá trị của chúng sẽ được cập nhật vào state tương ứng (username và Matkhau). Sau đó, khi bạn đăng nhập thành công, giá trị của username và Matkhau sẽ được lấy từ state để in ra console
    const handleLogin = async () => {
        // if (!email || !password) {
        //     showErrorToast('Vui lòng nhập tên đăng nhập và mật khẩu');
        //     return; // Thoát khỏi hàm handleLogin
        // }
        // console.log(email)
        // console.log(password)
        const listUser = localStorage.getItem('listUser');
        const checkToken=localStorage.getItem('token')
    
        // Chuyển đổi chuỗi JSON thành mảng
        const newListUser = listUser ? JSON.parse(listUser) : [];
        const findUser = newListUser.find((user:any)=>user.email===email && user.password===password)
        if(newListUser.length>0){
            console.log(newListUser);
          console.log("có tài khoản user");
        //   console.log("tài khoản trùng : " ,findUser.email);
          if (findUser) {
            
            const token=base64urlEncode(header)+"."+base64urlEncode(email)
 
             // Lưu token vào localStorage
             localStorage.setItem('token', token);
             console.log(checkToken);
            showSuccessToast("Đăng Nhập Thành Công")
            console.log("có tài khoản nhập vào");
            setTimeout(() => {
              
                router.push('/', { scroll: false });
                
                
            }, 2000);
          }else{
            console.log("sai");
            showErrorToast("Sai tài khoản hoặc mật khẩu")
          }

        }else{
            console.log("chưa có tài khoản user");
            showErrorToast("Tài khoản chưa được đăng kí vui lòng đăng kí để đăng nhập")
        }
       




        // else{
        //     if (newListUser.length===0) {
        //         showSuccessToast("Tài khoản chưa được đăng kí vui lòng đăng kí để đăng nhập")
        //         console.log("Tài khoản chưa được đăng kí vui lòng đăng kí để đăng nhập");
        //     }else{
        //         showSuccessToast("tài khoản hoặc mật khẩu chưa đúng")
        //         console.log("tài khoản hoặc mật khẩu chưa đúng");
        //     }
        // }
        // if (newListUser.length > 0) {
        //     let isCheked = false;
        //     newListUser.forEach((user:any) => {
        //         if (user.email === email && user.password===password) {
        //             isCheked = true; 
        //             showSuccessToast("Đăng nhập thành công")
        //             console.log("Đăng nhập thành công");
        //             router.push('/')
        //         }
        //     })

        //     if (isCheked) {
        //         console.log('Mật khẩu hoặc tài khoản không đúng');
        //         showErrorToast('Mật khẩu hoặc tài khoản không đúng')
        //         return 
        //     }

        //     const user = {
        //         email: email,
        //         password: password
        //     }

        //     newListUser.push(user);
        //     localStorage.setItem('listUser', JSON.stringify(newListUser));
        // } else {
        //     const user = {
        //         email: email,
        //         password: password
        //     }

        //     newListUser.push(user);
        //     localStorage.setItem('listUser', JSON.stringify(newListUser));
        //     console.log('chưa đăng kí tài khoản vui lòng tạo tài khoản');
        //     showErrorToast('chưa đăng kí tài khoản vui lòng tạo tài khoản')
        // }


    }
    return (
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
            <TitlePage message={'Login'} />
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
                                <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} className='email' />
                                <label htmlFor="">Mật khẩu</label>
                                <input type="text" placeholder='Mật khẩu' onChange={(e) => setPassword(e.target.value)} className='password' />
                            </div>
                            <div className='CardFooter'>
                                <div className='btnLogin'>
                                    <button className='' onClick={handleLogin}>Login</button>
                                </div>
                                <br />
                                <a href={'/Register'}>
                                    chưa có tài khoản
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login