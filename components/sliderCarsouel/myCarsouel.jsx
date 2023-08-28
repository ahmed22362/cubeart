"use client"

import CarsouleItemSlider from './carsouleItem';

export default function CarsouelSlider() {
    return(
        <div id="carouselExampleAutoplaying" className="carousel slide my-5" data-bs-ride="carousel">
        <div className="carousel-inner">
            <CarsouleItemSlider 
                headerText={"Let’s Bring your idea to life"}
                carsouelText={"If you want to customize your product or design,contact us for partnership, support and more."}
                firstBtn={"Print your design"} 
                secBtn={"Get in touch"} 
                img={"carsouel-1.png"}
                alt={"image 1"} />
            {/* <CarsouleItemSlider 
                headerText={"test test"} 
                firstBtn={"Get in touch"} 
                secBtn={"Get in touch"} 
                img={"carsouel-2.png"}
                alt={"image 1"} /> */}
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
