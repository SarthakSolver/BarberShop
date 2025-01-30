// Simulate real-time queue updates for demo purposes
document.addEventListener('DOMContentLoaded', function () {
  const queueCounts = document.querySelectorAll('.queue-count');

  // Simulated queue numbers (in a real application, this would come from a server)
  const queues = [3, 1, 5];

  queueCounts.forEach((queueCount, index) => {
    queueCount.innerText = queues[index];
  });

  // Booking button logic
  const bookButtons = document.querySelectorAll('.book-btn');
  bookButtons.forEach(button => {
    button.addEventListener('click', () => {
      alert('Appointment booked successfully!');
    });
  });
});


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slideImg");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}


// scrolling location hidden property
const scrollDiv = document.getElementById('scroll-div');
let scrollTimeout;

// Listen to scroll events
window.addEventListener('scroll', () => {
  // Hide the div on scroll
  scrollDiv.classList.add('hidden');

  // Clear previous timeout
  clearTimeout(scrollTimeout);

  // Show the div after scrolling stops (delay of 300ms)
  scrollTimeout = setTimeout(() => {
    scrollDiv.classList.remove('hidden');
  }, 500);
});


const shops = [



  {
    category: "Barber Shop",
    shops: [
      {
        name: "Alee & Barbers Unisex Salon",
        image: "../img/AleeBarberShop.jpg",
        address: "Omaxe India Trade Centre, B-25, Alpha-II Commercial Belt, Block I, Sector Alpha II, Greater Noida, Brahmpur Rajraula Urf Nawada, Uttar Pradesh 201308",
        repairs: "Men's Haircut: 2  Haircut + Beard: 3  Women's Services: 0",
        expectedTime: "Haircut: 1 hr 0 Minutes  Haircut + Beard: 1 hr 45 minutes",
        updated: "Last updated 3 mins ago",
      },
      {
        name: "Max Unisex Salon",
        image: "../img/Max Unisex salon.png",
        address: "CGJ3+WXP, Chi V, Greater Noida, Uttar Pradesh 201310",
        repairs: "Men's Haircut: 0  Haircut + Beard: 2  Women's Services: 0",
        expectedTime: "Haircut: 0 hr 0 Minutes  Haircut + Beard: 1 hr 05 minutes",
        updated: "Last updated 10 mins ago",
      },
      {
        name: "National Hair Dresser and Beauty Parlour",
        image: "../img/slide-3.jpg",
        address: "8/5, W Patel Nagar Rd, Block 8, West Patel Nagar, Patel Nagar, New Delhi, Delhi, 110008",
        repairs: "Men's Haircut: 1  Haircut + Beard: 2  Women's Services: 2",
        expectedTime: "Haircut: 0 hr 15 Minutes  Haircut + Beard: 0 hr 45 minutes Women's Services: 1 hr 0 Minutes",
        updated: "Last updated 5 mins ago",
      },
    ],
  },

  {
    category: "Repairing Shop for AutoMobile",
    shops: [
      {
        name: "Shree Krishan AutoMobile Service Center",
        image: "../img/shop1.png",
        address: "Shop No 1, Surajpur, Greater Noida, Uttar Pradesh 201306",
        repairs: "Car to Repair: 3  Bike to Repair: 2",
        expectedTime: "Car: 2 hr 45 Minutes  Bike: 1 hr 25 Minutes",
        updated: "Last updated 3 mins ago",
      },
      {
        name: "Krishna Motors OSM Workshop",
        image: "../img/mechanic.avif",
        address: "B, 3, near Jhilmil metro station, Ambedkar Colony, Jhilmil Industrial Area, Jhilmil, Delhi, 110095",
        repairs: "Auto to Repair: 2  Car to Repair: 1",
        expectedTime: "Auto: 1 hr 45 Minutes  Car: 0 hr 25 Minutes",
        updated: "Last updated 10 mins ago",
      },
      {
        name: "Go Mechanic",
        image: "../img/GoMechanicShop3.jpg",
        address: "Plot No- 367, 235, Shakti Khand III, Indirapuram, Ghaziabad, Uttar Pradesh 201014",
        repairs: "Car to Repair: 5  Bike to Repair: 2",
        expectedTime: "Car: 1 hr 45 Minutes  Bike: 1 hr 05 Minutes",
        updated: "Last updated 5 mins ago",
      },
    ],
  },
  {
    category: "Repairing Shop for Electric Gadgets",
    shops: [
      {
        name: "AK Electronics LED tv & AC Service Center",
        image: "../img/electricshop1.jpg",
        address: "Shop No B 31, Rampur, Block D, Beta I, Greater Noida, Uttar Pradesh 201308",
        repairs: "Mobile to Repair: 3  Laptop to Repair: 2",
        expectedTime: "Mobile: 2 hr 45 Minutes    ",
        updated: "Last updated 3 mins ago",
      },
      {
        name: "Tapasya Electronics Service Centre",
        image: "../img/electricshop2.jpg",
        address: "Nirmal Market, Beta-1, Gr. Noida",
        repairs: "Air Cooler to Repair: 3",
        expectedTime: "Air Cooler: 2 hr 45 Minutes",
        updated: "Last updated 10 mins ago",
      },
      {
        name: "Patel Electric",
        image: "../img/Patelelectricvaranassi.png",
        address: "BHU Rd, Karmanveer, Susuwahi, Varanasi, Uttar Pradesh 221011",
        repairs: "Laptop to Repair: 1  Printer to Repair: 5",
        expectedTime: "Laptop: 2 hr 25 Minutes  ",
        updated: "Last updated 5 mins ago",
      },
    ],
  },
];




// Array of salon data
function generateCards() {
  const container = document.getElementById("salon-cards");
  shops.forEach((category) => {
    // Add Category Header
    const categoryHeader = document.createElement("h1");
    categoryHeader.innerText = category.category;
    categoryHeader.id = "header-reparing-automobile-shop";
    container.appendChild(categoryHeader);

    // Add Row for Shops
    const row = document.createElement("div");
    row.className = "row row-cols-1 row-cols-md-3 g-4";

    category.shops.map((shop) => {
      const col = document.createElement("div");
      col.className = "col";

      col.innerHTML = `
      <div class="shop-card">
      <h4 class="shop-title">${shop.name}</h4>
      <img src="${shop.image}" class="shop-image" alt="${shop.name}">
      <div class="shop-details">
        <div class="shop-address">
          <i class="fa-solid fa-location-dot shop-location-icon"></i>
          ${shop.address}
        </div>
        <p class="shop-repairs">
          ${shop.repairs}<br>
          <span class="expected-time">Expected Time:<br>${shop.expectedTime}</span>
        </p>
      </div>
      <div class="shop-action">
        <a href="bookapointment.html" class="shop-button">Book Now</a>
      </div>
      <div class="shop-footer">
        <small class="shop-updated">${shop.updated}</small>
      </div>
    </div>
    
        `;

      row.appendChild(col);
    });

    container.appendChild(row);
  });
}

// Call the function to generate cards
generateCards();

//user profile on home page login system
   // Fetch user data from localStorage
   const userName = localStorage.getItem("userName");
   const userRole = localStorage.getItem("userRole");
   const token = localStorage.getItem("token");

   if (userName) {
       document.getElementById("user-name").textContent = userName;
       document.getElementById("user-role").textContent = userRole;
       // Optionally, you can fetch role from API if needed
   } else {
      //  window.location.href = "home.html"; // Redirect to login if no user found
   }

   function logout() {
       localStorage.removeItem("token");
       localStorage.removeItem("userName");
       localStorage.removeItem("userRole");
       window.location.href = "index.html"; // Redirect to login

       
   }

