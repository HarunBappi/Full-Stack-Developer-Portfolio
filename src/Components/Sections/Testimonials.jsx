// import React, { useRef, useState } from "react";
// import FadeIn from "../Animations/FadeIn";
// import { Quote } from "lucide-react";

// const Testimonials = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const scrollContainerRef = useRef(null);

//   const scrollToIndex = (index) => {
//     setCurrentIndex(index);
//     if (scrollContainerRef.current) {
//       const cardWidth = scrollContainerRef.current.offsetWidth;
//       scrollContainerRef.current.scrollTo({
//         left: cardWidth * index,
//         behavior: "smooth",
//       });
//     }
//   };

//   const nextTestimonial = () => {
//     const newIndex = (currentIndex + 1) % Testimonials.length;
//     scrollToIndex(newIndex);
//   };

//   const prevTestimonial = () => {
//     const newIndex =
//       (currentIndex - 1 + Testimonials.length) % Testimonials.length;
//     scrollToIndex(newIndex);
//   };

//   const testimonialState = [
//     { value: "3x", label: "Faster Delivery" },
//     { value: "95%", label: "Client Satisfaction" },
//     { value: "100%", label: "On-Time Delivery" },
//     { value: "5*", label: "Average Rating" },
//   ];
//   return (
//     <section id="testimonials" className="">
//       <div className="">
//         <div className=""></div>
//       </div>
//       <div className="">
//         <FadeIn delay={0}>
//           <div className="">
//             <div className="">
//               <Quote className=""></Quote>
//               <span className="">Testimonials</span>
//             </div>
//             <h2 className="">Trusted by Forward-Thinking Teams.</h2>
//             <p className="">
//               Empowering clients with design-driven, high-quality solutions
//               built for success.
//             </p>
//           </div>
//         </FadeIn>
//         <FadeIn delay={100}>
//           <div className="">
//             <div
//               ref={scrollContainerRef}
//               className=""
//               style={{ scrollSnapType: "x mandatory" }}
//             >
//                 <div className="">
//                     {testimonials.map((testimonial, index)=>(
//                         <div className="" key={testimonial.id} style={{scrollSnapAlign: "start"}}>
//                             <div className="">
//                                 <div className="">
//                                     {/* Image Sections */}
//                                     <div className=""></div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//           </div>
//         </FadeIn>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
