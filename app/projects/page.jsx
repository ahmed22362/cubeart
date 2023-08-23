import React from 'react' ;
import styles from './page.module.css'
import Link from 'next/link';
import { NavLinks } from '@/components';

const page = () => {
  return (
    <>
    <NavLinks />
    <div className="container mt-5  mb-5">
        <div className="row g-4">
            <div className="col-md-4">
                <div className={`${styles.box}`}>
                   <div className={`${styles.image}`}>
                   <img className='w-100' src="images/image 9.png" alt="product1" />
                   </div>
                    <div className={`${styles.caption} `}>
                        <h1 className={`h4 mt-2 ms-2`}>Cat Décor </h1>
                        <p><Link className={`${styles.link}`} href={'/projects/dd'}>View Project  <i className="bi bi-arrow-right ps-2 fa-sm"></i></Link></p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className={`${styles.box}`}>
                   <div className={`${styles.image}`}>
                   <img className='w-100' src="images/image 10.png" alt="product1" />
                   </div>
                    <div className={`${styles.caption} `}>
                        <h1 className={`h4 mt-2 ms-2`}>Rubber Duck </h1>
                        <p><Link className={`${styles.link}`} href={'/projects/dd'}>View Project  <i className="bi bi-arrow-right ps-2 fa-sm"></i></Link></p>
                    </div>
                </div>
            </div>  
            
             <div className="col-md-4">
                <div className={`${styles.box}`}>
                   <div className={`${styles.image}`}>
                   <img className='w-100' src="images/image 9.png" alt="product1" />
                   </div>
                    <div className={`${styles.caption} `}>
                        <h1 className={`h4 mt-2 ms-2`}>Cat Décor </h1>
                        <p><Link className={`${styles.link}`} href={'/projects/dd'}>View Project  <i className="bi bi-arrow-right ps-2 fa-sm"></i></Link></p>
                    </div>
                </div>
            </div>  
            <div className="col-md-4">
                <div className={`${styles.box}`}>
                   <div className={`${styles.image}`}>
                   <img className='w-100' src="images/image 10.png" alt="product1" />
                   </div>
                    <div className={`${styles.caption} `}>
                        <h1 className={`h4 mt-2 ms-2`}>Rubber Duck </h1>
                        <p><Link className={`${styles.link}`} href={'/projects/dd'}>View Project  <i className="bi bi-arrow-right ps-2 fa-sm"></i></Link></p>
                    </div>
                </div>
            </div>  
             <div className="col-md-4">
                <div className={`${styles.box}`}>
                   <div className={`${styles.image}`}>
                   <img className='w-100' src="images/image 9.png" alt="product1" />
                   </div>
                    <div className={`${styles.caption} `}>
                        <h1 className={`h4 mt-2 ms-2`}>Cat Décor </h1>
                        <p><Link className={`${styles.link}`} href={'/projects/dd'}>View Project  <i className="bi bi-arrow-right ps-2 fa-sm"></i></Link></p>
                    </div>
                </div>
            </div> 
              <div className="col-md-4">
                <div className={`${styles.box}`}>
                   <div className={`${styles.image}`}>
                   <img className='w-100' src="images/image 10.png" alt="product1" />
                   </div>
                    <div className={`${styles.caption} `}>
                        <h1 className={`h4 mt-2 ms-2`}>Rubber Duck </h1>
                        <p><Link className={`${styles.link}`} href={'/projects/dd'}>View Project  <i className="bi bi-arrow-right ps-2 fa-sm"></i></Link></p>
                    </div>
                </div>
            </div>  
             <div className="col-md-4">
                <div className={`${styles.box}`}>
                   <div className={`${styles.image}`}>
                   <img className='w-100' src="images/image 9.png" alt="product1" />
                   </div>
                    <div className={`${styles.caption} `}>
                        <h1 className={`h4 mt-2 ms-2`}>Cat Décor </h1>
                        <p><Link className={`${styles.link}`} href={'/projects/dd'}>View Project  <i className="bi bi-arrow-right ps-2 fa-sm"></i></Link></p>
                    </div>
                </div>
            </div> 
              <div className="col-md-4">
                <div className={`${styles.box}`}>
                   <div className={`${styles.image}`}>
                   <img className='w-100' src="images/image 10.png" alt="product1" />
                   </div>
                    <div className={`${styles.caption} `}>
                        <h1 className={`h4 mt-2 ms-2`}>Rubber Duck </h1>
                        <p><Link className={`${styles.link}`} href={'/projects/dd'}>View Project  <i className="bi bi-arrow-right ps-2 fa-sm"></i></Link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default page

