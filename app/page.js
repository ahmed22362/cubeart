import './page.module.css'
import { MyCarsouel, ProductSlider } from '@/components'

export default function Home() {
  return (
    <>
      <MyCarsouel />
        <div className='container'>
          <ProductSlider />
        </div>
    </>
  ) 
}
