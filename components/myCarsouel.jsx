import {Image} from 'next/image';

export default function MyCarsouel() {
    
return(
        <div id="carouselExampleAutoplaying" className="carousel slide my-5" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <div className="carousel-caption d-none d-md-block" style={{top: "8rem", zIndex: "100"}}>
                <h1 style={{fontSize: "36px"}}>Let’s Bring your idea to life</h1>
                <div className="carsoule-btns">
                    <button className="btn btn-warning" style={{color: "#FFF"}}>Print your design</button>
                    <button className="btn" style={{
                        border: "1px solid #eee",
                        color: "#fff",
                        marginLeft: "4px"
                }}>Get in touch</button>
                </div>
            </div>
            {/* <Image src="Carsouel-images/carsouel-1.png" className="d-block w-100 carosuel-img" alt="..." /> */}
            <Image src="Carsouel-images/carsouel-1.png" width="100" height="100" alt="carsuoel" />
            </div>
            <div className="carousel-item">
            <div className="carousel-caption d-none d-md-block" style={{top: "8rem", zIndex: "100"}}>
                <h1 style={{fontSize: "36px"}}>Let’s Bring your idea to life</h1>
                <div className="carsoule-btns">
                    <button className="btn btn-purple">Get in touch</button>
                    <button className="btn" style={{
                        border: "1px solid #eee",
                        color: "#fff",
                        marginLeft: "4px"
                }}>Get in touch</button>
                </div>
            </div>
            <Image src="Carsouel-images/carsouel-2.png" className="d-block w-100 carosuel-img" alt="carsouel2" />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    )
}