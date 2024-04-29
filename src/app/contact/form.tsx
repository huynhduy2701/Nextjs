import './style.scss'
const FormContact=()=>{
    return (
        <div className="form">
            <div className="containerContacts">
                <div className='form__wrap'>
                    <div className='form__formInput'>
                        <div className='form__nameGroup'>
                            <div className='form__firstName'>
                                <input type="text" placeholder='Nhập họ'/>
                            </div>
                            <div className='form__lastName'>
                                <input type="text" placeholder='Nhập tên'/>
                            </div>
                        </div>
                        <div className='form__email'>
                            <input type="text" placeholder='Nhập email'/>
                        </div>
                        <div className='form__message'>
                            <textarea placeholder='Nhập message'></textarea>
                        </div>
                    <div className='form__button'>
                        <div className='form__btn'>
                            <span>Send Message</span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FormContact