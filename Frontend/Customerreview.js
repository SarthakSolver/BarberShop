const testimonials = [
  {
      rating: "./Assets/Testimonials/rating.svg",
      title: "Amazing work",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...",
      image:"./Assets/Testimonials/profile.svg",
      name:"Vivek Verma",
      profile:"Graphic Designer"
  },
  {
      rating:"./Assets/Testimonials/rating.svg",
      title:"Quality Desgin",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...",
      image:"./Assets/Testimonials/profile1.svg",
      name:"Md Javed",
      profile:"Facial remover"
  },
  {
      rating:"./Assets/Testimonials/rating.svg",
      title:"Smooth Service",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...",
      image:"./Assets/Testimonials/profile2.svg",
      name:"Atul Yadav",
      profile:"Hair Designer"
  },
  {
      rating:"./Assets/Testimonials/rating.svg",
      title:"Loved Ones",
      description:"Ensure a clean, organized workspace for trust,Provide transparent pricing and detailed estimates Offer online scheduling and reminders.Use quality tools and genuine parts. Build customer trust with warranties and satisfaction guarantees.",
      image:"./Assets/Testimonials/profile.svg",
      name:"Raju Yadav",
      profile:" Car Mechanic"
  },
  {
      rating:"./Assets/Testimonials/rating.svg",
      title:"Too Good",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...",
      image:"./Assets/Testimonials/profile2.svg",
      name:"Shivam Singh",
      profile:"Barber"
  },
  {
      rating:"./Assets/Testimonials/rating.svg",
      title:"Amazing Work",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...",
      image:"./Assets/Testimonials/profile1.svg",
      name:"Prince Bhai",
      profile:"Hair Desginer"
  }

]
function createTestimonials(){
  const testimonialsContainer=document.getElementById("testimonials-container");
  const cardTestimonials =testimonials.map((test)=>{
      return `
      <div class="swiper-slide">
      <div class="test-cards">
      <img src="${test.rating}">
      <h3>${test.title}</h3>
      <p>${test.description}</p>
      <div class="profile-info">
      <img src="${test.image}" class="test-image">
      <span><h4>${test.name}</h4>
      <h5>${test.profile}<h5><span>
      </div>
      </div>
      </div>
      `;
  }).join('');
  testimonialsContainer.innerHTML=cardTestimonials;
}
document.addEventListener('DOMContentLoaded', () => {
  createTestimonials();
  
  // Initialize Swiper after the content is added
  var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1, // Default to 1 slide for mobile
      spaceBetween: 10, // Default space between slides for mobile
      pagination: {
          el: '.swiper-pagination', // Ensure this matches your HTML
          clickable: true,
      },
      breakpoints: {
          768: {
              slidesPerView: 3,
              spaceBetween: 30,
          },
      },
  });
});

