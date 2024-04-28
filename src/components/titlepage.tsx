import "./style/baner.scss"
const TitlePage = (props: any) => {
    return (
        <div className="containerBaner">
            {/* {props.message} */}
            <div className="containerBaner_wrapBanner">
                <div className="containerBaner__boxNav">
                    <h1>
                        {props.message}
                    </h1>
                    <p>Home {'>'} {props.message} </p>
                </div>
            </div>
        </div>
    );
};

export default TitlePage;
