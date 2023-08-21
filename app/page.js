import './page.module.css'
import { MyCarsouel, OurService, ProductDiscSlider, ProductSlider } from '@/components'

export default function Home() {
  return (
    <>
      <MyCarsouel />
        <div className='px10'>
          <ProductSlider title="Our Products" /> <br />
          
          <ProductSlider title="Offers Up to 50%" />

        </div>
        <div className='px-2'>
          <OurService />
        </div>
    </>
  ) 
}
