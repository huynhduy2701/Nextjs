'use client'
import CarouselNav from "@/components/carousel";
import Link from 'next/link';
import '../Login/style.scss';
import { useState } from "react";
import { showErrorToast, showSuccessToast } from "../erros/erros";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import { redirect } from 'next/navigation'
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
    const [lastName,setLastName]=useState('');
    const [firstName,setFirstName]=useState('');
    const [phone,setPhone]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');

    const handleRegister = async () => {
        const rolePhone=/^0\d{9}[!@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?]*$/
        const roleName=/^[a-zA-Z\s]{4,}$/
        const roleGmail=/^[\w.]+@gmail\.com$/
        if (lastName ==="" || firstName === "" || phone ==="" || email ==="" || password ==="" || confirmPassword ==="") {
            console.log("không được để trống");
            showErrorToast("chưa điền thông tin")
            
        }else if(!roleName.test(firstName)){
            console.log("first name phải hơn 3 kí tự");
            showErrorToast("first name phải hơn 3 kí tự")
            return
            
        }
        else if(!roleName.test(lastName)){
            console.log("last name phải hơn 3 kí tự");
            showErrorToast("last name phải hơn 3 kí tự")
            return
            
        }
        else if(!rolePhone.test(phone)){
            console.log("số điện thoại không hợp lệ");
            showErrorToast("số điện thoại không hợp lệ")
            return
            
        }else if(!roleGmail.test(email)){
            console.log("email không hợp lệ hãy nhập đúng định dạng 'abc@gmail.com'");
            showErrorToast("email không hợp lệ hãy nhập đúng định dạng 'abc@gmail.com'")
            return
            
        }else if(password.length<6){
            console.log("mật khẩu phải lớn hơn 6");
            showErrorToast("mật khẩu phải lớn hơn 6")
            return

        }else if(password!==confirmPassword){
            console.log("mật khẩu không trùng khớp");
            showErrorToast("mật khẩu không trùng khớp")
            return
        }
        else{
            try {
                const data={
                    email:email,
                    lastName:lastName,
                    firstName:firstName,
                    phone:phone,
                    password:password
                }
                const existingUser = await fetch('http://localhost:4000/users')
                  .then((response)=>response.json())
                  .then((user)=>user.find((u:any)=>u.email===data.email ))
    
                  if (existingUser) {
                    console.log("email đã tồn tại");
                    showErrorToast("email đã tồn tại")
                  }else{
    
                      const res = await fetch('http://localhost:4000/users',{
                        method:'POST',
                        headers:{
                            'Content-Type': 'application/json',
                        },
                        body:JSON.stringify(data)
                      })
                      if(res){
                        console.log("đăng kí thành công");
                        showSuccessToast("đăng kí thành công")
                      }else{
                        console.log("đăng kí thất bại");
                        showErrorToast('đăng kí không thành công')
                      }
                      const dl= await res.json()
                      console.log("dulieu dang ki : " ,dl);
                    //   router.push('/Login')
                    redirect('/Login')
                  }
    
    
           } catch (error) {
                console.log(error);
           }
        }
        // else if(){

        // }
      
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
                                <input type="text" placeholder='gmail' className={'gmail'} onChange={(e) => setEmail(e.target.value)} />
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
