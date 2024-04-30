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

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('');
    // thêm các hàm onChange vào các trường input của username và mật khẩu. Khi người dùng nhập vào các trường này, giá trị của chúng sẽ được cập nhật vào state tương ứng (username và Matkhau). Sau đó, khi bạn đăng nhập thành công, giá trị của username và Matkhau sẽ được lấy từ state để in ra console
    const handleLogin = async () => {
        if (!setEmail || !password) {
            showErrorToast('Vui lòng nhập tên đăng nhập và mật khẩu');
            return; // Thoát khỏi hàm handleLogin
        }
        // const listUser = localStorage.getItem('listUser');

        // // Chuyển đổi chuỗi JSON thành mảng
        // const newListUser = listUser ? JSON.parse(listUser) : [];
        // if (newListUser.length > 0) {
        //     let isCheked = false;
        //     newListUser.forEach((user:any) => {
        //         if (user.email === email) {
        //             isCheked = true;
        //         }
        //     })

        //     if (isCheked) {
        //         return "lôi emaul"
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
                                <input type="text" placeholder='gmail' onChange={(e) => setEmail(e.target.value)} className='email' />
                                <label htmlFor="">Mật khẩu</label>
                                <input type="text" placeholder='Mật khẩu' onChange={(e) => setPassword(e.target.value)} className='password' />
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