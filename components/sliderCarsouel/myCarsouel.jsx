"use client"

import CarsouleItemSlider from './carsouleItem';
import styles from './sliderCarsouel.module.css'

export default function CarsouelSlider() {
    return(
        <div id="carouselExampleAutoplaying" className="carousel slide my-5" data-bs-ride="carousel">
        <div className="carousel-inner">
            <CarsouleItemSlider
                headerText={"Let’s Bring your idea to life"}
                carsouelText={"If you want to customize your product or design,contact us for partnership, support and more."}
                firstBtn={"Print your design"} 
                secBtn={"Get in touch"}
                btnColor={styles.yellow}
                img={"carsouel-1.png"}
                alt={"image 1"}
                active={"active"} />
            <CarsouleItemSlider 
                headerText={"Do you have a custom idea ?"}
                carsouelText={"If you want to customize your product or design,contact us for partnership, support and more."}
                firstBtn={"Get in Touch"} 
                secBtn={"Get in touch"}
                btnColor={styles.purple}
                img={"carsouel-2.png"}
                alt={"image 2"} />
            <CarsouleItemSlider 
                headerText={"Do you want to discover our services ?"}
                carsouelText={"If you want to customize your product or design,contact us for partnership, support and more."}
                firstBtn={"Get in Touch"} 
                secBtn={"Get in touch"}
                btnColor={styles.yellow}
                img={"carsouel-3.png"}
                alt={"image 3"} />
            <CarsouleItemSlider 
                headerText={"Do you want to discover our services ?"}
                carsouelText={"If you want to customize your product or design,contact us for partnership, support and more."}
                firstBtn={"Get in Touch"} 
                secBtn={"Get in touch"}
                btnColor={styles.purple}
                img={"carsouel-2.png"}
                alt={"image 2"} />
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
