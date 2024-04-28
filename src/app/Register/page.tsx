'use client'
import CarouselNav from "@/components/carousel";
import Link from 'next/link';
import '../Login/style.scss';
import { useState } from "react";

const Register = () => {
    const [users, setUsers] = useState('');
    const [Gmail, setGmail] = useState('');
    const [Matkhau, setMatkhau] = useState('');

    const handleRegister = async () => {
        try {
            const dulieu = {
                email: Gmail,
                username: users,
                password: Matkhau
            };

            const response = await fetch('http://localhost:4000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dulieu)
            });

            if (!response.ok) {
                throw new Error('Failed to register');
            }

            const data = await response.json();
            console.log('Data:', data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <CarouselNav />
            <div className="containerLogin">
                <div className='formLogin'>
                    <div className='cardLogin'>
                        <div className='cardBox'>
                            <div className='cardHeader'>
                                <h1>đăng kí</h1>
                            </div>
                            <div className='cardBody'>
                                <label htmlFor="">Username</label>
                                <input type="text" placeholder='username' className={'username'} onChange={(e) => setUsers(e.target.value)} />
                                <label htmlFor="">gmail</label>
                                <input type="text" placeholder='gmail' className={'gmail'} onChange={(e) => setGmail(e.target.value)} />
                                <label htmlFor="">Mật khẩu</label>
                                <input type="text" placeholder='Mật khẩu' className={'matkhau'} onChange={(e) => setMatkhau(e.target.value)} />
                            </div>
                            <div className='CardFooter'>
                                <div className='btnLogin'>
                                    <button className='' onClick={handleRegister}>đăng kí</button>
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
    );
};

export default Register;
