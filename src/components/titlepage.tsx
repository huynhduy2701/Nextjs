import "./style/baner.scss"
import Link from 'next/link'
const TitlePage = (props: any) => {
    return (
        <div className="containerBaner">
            {/* {props.message} */}
            <div className="containerBaner_wrapBanner">
                <div className="containerBaner__boxNav">
                    <h1>
                        {props.message}
                    </h1>
                    <p><Link href={'/'}>Home</Link> {'>'} {props.message} </p>
                </div>
            </div>
        </div>
    );
};

export default TitlePage;
