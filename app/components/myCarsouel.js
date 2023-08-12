export default function MyCarsouel() {
    return(
        <div id="carouselExample" className="carousel slide mt-3">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="Carsouel-images/carsouel-1.png" className="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
            </div>

            </div>
            <div className="carousel-item">
            <img src="Carsouel-images/carsouel-2.png" className="d-block w-100" alt="..." />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    )
}