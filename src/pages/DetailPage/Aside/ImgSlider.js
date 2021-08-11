// import React, { Component } from 'react';
// import './ImgSlider.scss';

//   class ImgSlider extends Component{
//     constructor(props) {
//       super(props)
//       this.state = {
//         images : [],
//         viewImage : 0
//       }
//     }
//     ImageData = [
//       “https://www.w3schools.com/howto/img_nature_wide.jpg”,
//       “https://www.w3schools.com/howto/img_snow_wide.jpg”,
//       “https://www.w3schools.com/howto/img_lights_wide.jpg”,
//       “https://www.w3schools.com/howto/img_mountains_wide.jpg”
//     ]
//     componentDidMount() {
//       const newImageData = this.ImageData
//       this.setState({
//         images:newImageData
//       })
//     }
//     handleSlider = (n) => {
//       const {images, viewImage} = this.state;
//       let currentNum = viewImage + n;
//       // console.log(“버튼 누른후 이미지 번호“, viewImage)
//       //예외처리
//       if( currentNum === -1) {
//         currentNum = images.length-1
//       } else if(currentNum > images.length-1){
//         currentNum = 0
//       }
//       this.setState({
//         viewImage:currentNum
//       })
//     }
//     render() {
//       const {images, viewImage} = this.state
//       // console.log(“현재 이미지 번호“, viewImage)
//       return (
//         <div className=“wraper”>
//             <button onClick={() => this.handleSlider(-1)}> prev </button>
//           <div className=“imageContainer”>
//             <img src={images[viewImage]} alt=“background” />
//           </div>
//             <button onClick={() => this.handleSlider(1)}> next </button>
//         </div>
//       );
//     }
//   }
//   export default App
// //   constructor() {

// //   }
// //   render() {
// //     const titleData = this.props.mealKitInfoList;

// //     return (
// //       constructor(props) {
// //         super(props)
// //         this.state = {
// //           images : [],
// //           viewImage : 0
// //         }
// //       }
// //       ImageData = [
// //         “https://www.w3schools.com/howto/img_nature_wide.jpg”,
// //         “https://www.w3schools.com/howto/img_snow_wide.jpg”,
// //         “https://www.w3schools.com/howto/img_lights_wide.jpg”,
// //         “https://www.w3schools.com/howto/img_mountains_wide.jpg”
// //       ]
// //       componentDidMount() {
// //         const newImageData = this.ImageData
// //         this.setState({
// //           images:newImageData
// //         })
// //       }
// //       handleSlider = (n) => {
// //         const {images, viewImage} = this.state;
// //         let currentNum = viewImage + n;
// //         console.log(“버튼 누른후 이미지 번호“, viewImage)
// //         //예외처리
// //         if( currentNum === -1) {
// //           currentNum = images.length-1
// //         } else if(currentNum > images.length-1){
// //           currentNum = 0
// //         }
// //         this.setState({
// //           viewImage:currentNum
// //         })
// //       }
// //       render() {
// //         const {images, viewImage} = this.state
// //         console.log(“현재 이미지 번호“, viewImage)
// //         return (
// //           <div className=“wraper”>
// //               <button onClick={() => this.handleSlider(-1)}> prev </button>
// //             <div className=“imageContainer”>
// //               <img src={images[viewImage]} alt=“background” />
// //             </div>
// //               <button onClick={() => this.handleSlider(1)}> next </button>
// //           </div>
// //         );

// //       // <div className="SliderWrap">
// //       //   <div className="imgSlideAlbum">
// //       //     <div className="inner">
// //       //       <img
// //       //         className="slide_dish"
// //       //         src={Object.values(titleData.description_image)[0]}
// //       //         alt="키트 상세설명을 위한 파스타 사진"
// //       //         // {Object.values(titleData.description_image)[0] ? (
// //       //         //   .prevBotton = disable
// //       //         // ) : null}
// //       //         // button 자체를 불가능하게 만들기
// //       //       />
// //       //     </div>
// //       //     <div className="inner">
// //       //       <img
// //       //         className="slide_ingredients"
// //       //         src={Object.values(titleData.description_image)[1]}
// //       //         alt="키트 상세설명을 위한 재료 사진"
// //       //       />
// //       //     </div>
// //       //     <div className="inner">
// //       //       <img
// //       //         className="slide_cook"
// //       //         src={Object.values(titleData.description_image)[2]}
// //       //         alt="조리 사진"
// //       //       />
// //       //     </div>
// //       //   </div>
// //       //   <button className="prevBotton" onClick={this.selectIndex - 1}>
// //       //     <img src="../public/images/DetailPage/left.png" alt="왼쪽버튼" />
// //       //   </button>
// //       //   <button className="nextButton" onClick={this.selectIndex + 1}>
// //       //     <img src="../public/images/DetailPage/right.png" alt="왼쪽버튼" />
// //       //   </button>
// //       // </div>
// //     );
// //   }
// // }

// // export default ImgSlider;
