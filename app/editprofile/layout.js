import dynamic from "next/dynamic"
import styles from './page.module.css';
export default function RootLayout({ children }) {
    const SlideBar = dynamic(() => (import('@/components/slideBar/SlideBar')), {
        ssr: false,
    })

return(
    <>
   <div className={`d-flex gap-4 position-relative ${styles.resetWidth}`}>
   <SlideBar/>
    <div className="container mt-4 flex-wrap">
        {children}
    </div>
   </div>
    </>
)
}