import { MyCarsouel, ProductSlider } from '@/components'
import './page.module.css'
// import { MyCarsouel, ProductSlider } from '@/components'

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";                                       
        
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
