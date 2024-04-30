'use client'
import CarouselNav from "@/components/carousel";
import Link from 'next/link';
import '../Login/style.scss';
import { useState } from "react";
import { showErrorToast, showSuccessToast } from "../erros/erros";
import { ToastContainer } from "react-toastify";
// import { useRouter } from "next/router";
import { redirect, useRouter } from 'next/navigation'
import { message } from "antd";
interface UserData {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    password: string;
    confirmPassword: string;
}
const Register = () => {
    // const router = useRouter()

    // const [users, setUsers] = useState('');
    // const [Gmail, setGmail] = useState('');
    // const [Matkhau, setMatkhau] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const router = useRouter()
    const handleRegister = async () => {
        const rolePhone = /^0\d{9}[!@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?]*$/
        const roleName = /^[a-zA-Z\s]{4,}$/
        const roleGmail = /^[\w.]+@gmail\.com$/
        const regexMatKhau = /^\S{6,}$/;
        // if (lastName ==="" || firstName === "" || phone ==="" || email ==="" || password ==="" || confirmPassword ==="") {
        //     console.log("không được để trống");
        //     showErrorToast("chưa điền thông tin")

        // }else if(!roleName.test(firstName)){
        //     console.log("first name phải hơn 3 kí tự");
        //     showErrorToast("first name phải hơn 3 kí tự")
        //     return

        // }
        // else if(!roleName.test(lastName)){
        //     console.log("last name phải hơn 3 kí tự");
        //     showErrorToast("last name phải hơn 3 kí tự")
        //     return

        // }
        // else if(!rolePhone.test(phone)){
        //     console.log("số điện thoại không hợp lệ");
        //     showErrorToast("số điện thoại không hợp lệ")
        //     return

        // }else if(!roleGmail.test(email)){
        //     console.log("email không hợp lệ hãy nhập đúng định dạng 'abc@gmail.com'");
        //     showErrorToast("email không hợp lệ hãy nhập đúng định dạng 'abc@gmail.com'")
        //     return

        // }else if(password.length<6){
        //     console.log("mật khẩu phải lớn hơn 6");
        //     showErrorToast("mật khẩu phải lớn hơn 6")
        //     return

        // }else if(password!==confirmPassword){
        //     console.log("mật khẩu không trùng khớp");
        //     showErrorToast("mật khẩu không trùng khớp")
        //     return
        // }
        // else{
        //     try {
        //         const data={
        //             email:email,
        //             lastName:lastName,
        //             firstName:firstName,
        //             phone:phone,
        //             password:password
        //         }
        //         const existingUser = await fetch('http://localhost:4000/users')
        //           .then((response)=>response.json())
        //           .then((user)=>user.find((u:any)=>u.email===data.email ))

        //           if (existingUser) {
        //             console.log("email đã tồn tại");
        //             showErrorToast("email đã tồn tại")
        //           }else{

        //               const res = await fetch('http://localhost:4000/users',{
        //                 method:'POST',
        //                 headers:{
        //                     'Content-Type': 'application/json',
        //                 },
        //                 body:JSON.stringify(data)
        //               })
        //               if(res){
        //                 console.log("đăng kí thành công");
        //                 showSuccessToast("đăng kí thành công")
        //               }else{
        //                 console.log("đăng kí thất bại");
        //                 showErrorToast('đăng kí không thành công')
        //               }
        //               const dl= await res.json()
        //               console.log("dulieu dang ki : " ,dl);
        //             //   router.push('/Login')
        //             redirect('/Login')
        //           }


        //    } catch (error) {
        //         console.log(error);
        //    }
        // }
        //  Kiểm tra tính hợp lệ
        type Validation = {
            field?: string;
            test: (value: string, values?: Record<string, string>) => boolean;
            message: string;
        };

        const validations: Validation[] = [
            {
                field: 'firstName',
                test: value => value === '',
                message: 'không được để trống'
            },
            {
                field: 'firstName',
                test: value => !roleName.test(value),
                message: 'Ho phải chứa chỉ chữ cái, phải hơn 3 ký tự.'
            },
            {
                field: 'lastName',
                test: value => !roleName.test(value),
                message: 'Ten phải chứa chỉ chữ cái, phải hơn 3 ký tự.'
            },
            {
                field: 'phone',
                test: value => !rolePhone.test(value),
                message: 'Số điện thoại phải có 10 chữ số và bắt đầu bằng số 0..'
            },
            {
                field: 'email',
                test: value => !roleGmail.test(value),
                message: "Email phải là một địa chỉ Gmail hợp lệ 'vd:abc@gmail.com'."
            },
            {
                field: 'password',
                test: value => !regexMatKhau.test(value),
                message: 'Mật khẩu phải có ít nhất 6 ký tự và không được chứa khoảng trắng.'
            },
            {
                test: (value, values) => values! && values.password !== values.confirmPassword,
                message: 'Mật khẩu không trùng khớp.'
            }
        ];

        const values: Record<string, string> = { lastName, firstName, phone, email, password, confirmPassword };

        for (let i = 0; i < validations.length; i++) { 
            const validation = validations[i];
            if (validation.field) {
                if (validation.test(values[validation.field], values)) {
                    showErrorToast(validation.message);
                    return;
                }
            } else {
                if (validation.test('', values)) {
                    showErrorToast(validation.message);
                    return;
                }
            }
        }
        const listUser = localStorage.getItem('listUser');

        // Chuyển đổi chuỗi JSON thành mảng
        const newListUser = listUser ? JSON.parse(listUser) : [];
        if (newListUser.length > 0) {
            // Kiểm tra xem người dùng đã tồn tại hay chưa
            let isCheked = false;
            newListUser.forEach((user: any) => {
                if (user.email === email) {
                    isCheked = true;
                }
            })
            // Nếu người dùng đã tồn tại, trả về thông báo lỗi
            if (isCheked) {
                console.log("email đã tồn tại");
                showErrorToast("Email đã tồn tại")
                return;
            }
            // Nếu không tồn tại, thêm người dùng mới vào danh sách
            // và lưu danh sách mới vào localStorage
            const user = {
                email: email,
                lastName: lastName,
                firstName: firstName,
                phone: phone,
                password: password,
            }
            newListUser.push(user);
            localStorage.setItem('listUser', JSON.stringify(newListUser));
            console.log("đăng kí thành công :", user);
            showSuccessToast("Đăng kí thành công")
            router.push('/Login')
        } else {
            // Nếu danh sách người dùng rỗng, thêm người dùng mới vào danh sách
            // và lưu danh sách mới vào localStorage
            const user = {
                email: email,
                lastName: lastName,
                firstName: firstName,
                phone: phone,
                password: password,
            }
            newListUser.push(user);
            localStorage.setItem('listUser', JSON.stringify(newListUser));
            console.log("đăng kí thành công :", user);
            showSuccessToast("Đăng kí thành công")
            router.push('/Login')

        }


    };

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
            <CarouselNav />
            <div className="containerLogin">
                <div className='formLogin'>
                    <div className='cardLogin'>
                        <div className='cardBox'>
                            <div className='cardHeader'>
                                <h1>đăng kí</h1>
                            </div>
                            <div className='cardBody'>
                                <label htmlFor="">first Name</label>
                                <input type="text" placeholder='first Name' className={'firstName'} onChange={(e) => setFirstName(e.target.value)} />
                                <label htmlFor="">last Name</label>
                                <input type="text" placeholder='last Name' className={'lastName'} onChange={(e) => setLastName(e.target.value)} />
                                <label htmlFor="">phone</label>
                                <input type="text" placeholder='phone' className={'phone'} onChange={(e) => setPhone(e.target.value)} />
                                <label htmlFor="">gmail</label>
                                <input type="text" placeholder='gmail' className={'email'} onChange={(e) => setEmail(e.target.value)} />
                                <label htmlFor="">password</label>
                                <input type="text" placeholder='password' className={'password'} onChange={(e) => setPassword(e.target.value)} />
                                <label htmlFor="">confirm password</label>
                                <input type="text" placeholder='confirm password' className={'confirmPassword'} onChange={(e) => setConfirmPassword(e.target.value)} />
                            </div>
                            <div className='CardFooter'>
                                <div className='btnLogin'>
                                    <button className='' onClick={handleRegister}>đăng kí</button>
                                </div>
                                <br />
                                <Link href={'/Login'}>
                                    có tài khoản
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
