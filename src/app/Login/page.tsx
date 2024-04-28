'use client'
import CarouselNav from '@/components/carousel'
import './style.scss'
import Link from 'next/link'
import { useState } from 'react'

const Login=()=>{
    const [username, setUsername] = useState('');
    const [Matkhau, setMatkhau] = useState('');
    const [loginStatus, setLoginStatus] = useState('');
    // thêm các hàm onChange vào các trường input của username và mật khẩu. Khi người dùng nhập vào các trường này, giá trị của chúng sẽ được cập nhật vào state tương ứng (username và Matkhau). Sau đó, khi bạn đăng nhập thành công, giá trị của username và Matkhau sẽ được lấy từ state để in ra console
    const handleLogin = async () => {
        try {
            const data = {
                'username': username,
                'password': Matkhau
            }
            const response = await fetch('http://localhost:4000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                // Đăng nhập thành công, in ra username và mật khẩu
                console.log('Đăng nhập thành công');
                console.log('Username:', username);
                console.log('Mật khẩu:', Matkhau);
                // Đặt trạng thái đăng nhập thành công
                setLoginStatus('Đăng nhập thành công');
            } else {
                // Đăng nhập không thành công, in ra thông báo lỗi
                console.log('Đăng nhập không thành công');
                // Đặt trạng thái đăng nhập không thành công
                setLoginStatus('Đăng nhập không thành công');
            }
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <div>
            <CarouselNav/>
            <div className="containerLogin">
                <div className='formLogin'>
                    <div className='cardLogin'>
                        <div className='cardBox'>
                            <div className='cardHeader'>
                                <h1>Login</h1>
                            </div>
                            <div className='cardBody'>
                                <label htmlFor="">Username</label>
                                <input type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)}  className='username' />
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