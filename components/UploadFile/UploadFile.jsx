// // import UploadCard from "@/components/UploadCard/UploadCard";
// // import { v4 as uuidv4 } from "uuid";

// // import UploadCarsoul from "@/components/UploadCarsoul/UploadCarsoul";
// // import File from "../File/File";
// // import { StepOne } from "../Steps/StepOne/StepOne";
// // import { StepTwo } from "../Steps/StepTwo/StepTwo";
// // import { StepThree } from "../Steps/StepThree/StepThree";
// // import { StepFour } from "../Steps/StepFour/StepFour";
// // import StepsRender from "../Steps/StepsRender";
// const steps = [
//   { name: "Name A", component: <StepOne /> },
//   { name: "Email", component: <StepTwo /> },
//   { name: "Password", component: <StepThree /> },
//   { name: "Agreement", component: <StepFour /> }
// ];
// function UploadFile() {
//   let cards = [
//     {
//       key: 1,
//       content: (
//         // <UploadCard imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg" />
//       <StepOne/>
//         )
//     },
//     {
//       key: 2,
//       content: (
//         <StepTwo/>
//         // <UploadCard imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" />
//       )
//     },
//     {
//       key: 3,
//       content: (
//         <StepThree/>
//         // <UploadCard imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" />
//       )
//     },
//     {
//       key: 4,
//       content: (
//         <StepFour/>
//         // <UploadCard imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
//       )
//     },
//     {
//       key: 5,
//       content: (
//         <StepsRender/>
//         // <UploadCard imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
//       )
//     }
//   ];
//   return (
//     <div className="">
//       <UploadCarsoul
//         cards={cards}
//         height="500px"
//         width="30%"
//         margin="0 auto"
//         offset={2}
//         showArrows={true}
//       />
//     </div>
//   );
// }

// export default UploadFile;