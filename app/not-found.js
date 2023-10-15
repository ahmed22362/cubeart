import Image from 'next/image';
import Link from "next/link";

export default function NotFoundPage() {
    return(
            <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="text-center row">
                    <div className=" col-md-6">
                        <Image src="/404.avif" alt="404 error"
                             className="img-fluid"
                        width={100} height={100} loading={"lazy"}
                        style={{width: "100%"}}/>
                    </div>
                    <div className=" col-md-6 mt-5">
                        <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
                        <p className="lead">
                            The page you’re looking for doesn’t exist.
                        </p>
                        <Link href="/" className="btn btn-primary">Go Home</Link>
                    </div>

                </div>
            </div>
    )
}