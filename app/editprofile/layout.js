import SlideBar from "@/components/slideBar/SlideBar";
export default function RootLayout({ children }) {

return(
    <>
   <div className="d-flex gap-4 position-relative">
   <SlideBar/>
    <div className="container mt-4 flex-wrap">
        {children}
    </div>
   </div>
    </>
)
}