import './page.module.css'
import { AboutUs, Footer, MyCarsouel, OurService, ProductDiscSlider, ProductSlider, QuickQuote } from '@/components'

export default function Home() {
  return (
    <>
      <MyCarsouel />
        <section className='px10'>
          <ProductSlider title="Our Products" /> <br />
          
          <ProductSlider title="Offers Up to 50%" />

        </section>
        <section className='px-2'>
          <OurService />
        </section>
        <section className='px-2 aboutSection'>
          <AboutUs />
          <QuickQuote />
        </section>
        <Footer className="px-2 py-2 footerSection" />
    </>
  ) 
}
