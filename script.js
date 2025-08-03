// Mobile menu functionality
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenuBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });

  // Close mobile menu when clicking on links
  const mobileLinks = mobileMenu.querySelectorAll("a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenu.classList.add("hidden");
    });
  });

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Load schools data
  loadSchools();

  // Load documentation data
  loadDocumentation();

  // Load hero images
  loadHeroImages();

  // Navigation scroll effect - now navbar is inside hero section
  const navbar = document.getElementById("navbar");

  // Add background when scrolling past hero section
  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const heroSection = document.querySelector("section");
    const heroHeight = heroSection.offsetHeight;

    if (scrollTop > heroHeight - 100) {
      // Add background when scrolling past hero
      navbar.classList.add(
        "bg-white/95",
        "backdrop-blur-sm",
        "shadow-sm",
        "border-b",
        "border-gray-100"
      );
      navbar.classList.remove("bg-transparent");

      // Change text colors to dark
      const navTexts = navbar.querySelectorAll("h1, span, a, button");
      navTexts.forEach((el) => {
        if (el.tagName === "H1") {
          el.classList.remove("text-white");
          el.classList.add("text-catc-blue");
        } else if (el.tagName === "SPAN") {
          el.classList.remove("text-gray-200");
          el.classList.add("text-gray-500");
        } else if (el.tagName === "A") {
          el.classList.remove("text-white", "hover:text-gray-200");
          el.classList.add("text-gray-700", "hover:text-catc-blue");
        } else if (el.tagName === "BUTTON") {
          el.classList.remove("text-white");
          el.classList.add("text-gray-700");
        }
      });
    } else {
      // Remove background when in hero section
      navbar.classList.remove(
        "bg-white/95",
        "backdrop-blur-sm",
        "shadow-sm",
        "border-b",
        "border-gray-100"
      );
      navbar.classList.add("bg-transparent");

      // Change text colors back to white
      const navTexts = navbar.querySelectorAll("h1, span, a, button");
      navTexts.forEach((el) => {
        if (el.tagName === "H1") {
          el.classList.remove("text-catc-blue");
          el.classList.add("text-white");
        } else if (el.tagName === "SPAN") {
          el.classList.remove("text-gray-500");
          el.classList.add("text-gray-200");
        } else if (el.tagName === "A") {
          el.classList.remove("text-gray-700", "hover:text-catc-blue");
          el.classList.add("text-white", "hover:text-gray-200");
        } else if (el.tagName === "BUTTON") {
          el.classList.remove("text-gray-700");
          el.classList.add("text-white");
        }
      });
    }
  });
});

// Hero images data
const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Bali, Indonesia",
  },
  {
    url: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Angkor Wat, Cambodia",
  },
  {
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Mount Fuji, Japan",
  },
  {
    url: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Ha Long Bay, Vietnam",
  },
  {
    url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Bangkok, Thailand",
  },
  {
    url: "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Singapore",
  },
];

// Load hero images with slide animation
function loadHeroImages() {
  const heroImagesContainer = document.getElementById("hero-images");
  let currentImageIndex = 0;

  // Create initial image
  const img = document.createElement("img");
  img.src = heroImages[0].url;
  img.alt = heroImages[0].alt;
  img.className =
    "w-full h-full object-cover transition-transform duration-1000 ease-in-out";
  heroImagesContainer.appendChild(img);

  // Slide images every 3 seconds
  setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % heroImages.length;

    // Slide out current image
    img.style.transform = "translateX(-100%)";

    setTimeout(() => {
      img.src = heroImages[currentImageIndex].url;
      img.alt = heroImages[currentImageIndex].alt;
      img.style.transform = "translateX(0)";
    }, 500);
  }, 3000);
}

// Import data from separate files
// Note: These will be loaded by the respective HTML files

// Load schools into the page
function loadSchools() {
  const schoolsGrid = document.getElementById("schools-grid");

  // Check if we're on the schools page to show more data
  const isSchoolsPage = window.location.pathname.includes("schools.html");

  // Use all data for schools page, limited data for home page
  const schoolsToShow = isSchoolsPage ? schoolsData : schoolsData.slice(0, 8);

  schoolsToShow.forEach((school) => {
    const schoolCard = document.createElement("div");
    schoolCard.className =
      "bg-white border-r border-b border-gray-400 p-4 hover:bg-blue-50 transition-colors duration-200 cursor-pointer";
    schoolCard.innerHTML = `
            <div class="flex items-center w-full">
                <div class="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <img src="assets/images/${school.name
                      .toLowerCase()
                      .replace(/\s+/g, "")
                      .replace(/[^a-z0-9]/g, "")}.png" alt="${
      school.name
    }" class="w-8 h-8 object-contain" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                    <span class="text-catc-blue font-bold text-sm" style="display: none;">${school.name.charAt(
                      0
                    )}</span>
                </div>
                <div class="flex-1 min-w-0">
                    <h3 class="text-sm font-semibold text-catc-blue mb-1 font-poppins leading-tight truncate">${
                      school.name
                    }</h3>
                    <p class="text-gray-600 text-xs truncate">${
                      school.location
                    }</p>
                </div>
            </div>
        `;

    // Add click event to navigate to school detail
    schoolCard.addEventListener("click", function () {
      window.location.href = `school-detail.html?id=${school.id}`;
    });

    schoolsGrid.appendChild(schoolCard);
  });
}

// Load documentation into the page
function loadDocumentation() {
  const documentationGrid = document.getElementById("documentation-grid");

  // Icon mapping for each documentation type
  const getIcon = (title) => {
    const icons = {
      "Food & Beverage Service": `<svg class="w-6 h-6 text-catc-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
      </svg>`,
      "Front Office Operations": `<svg class="w-6 h-6 text-catc-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
      </svg>`,
      "Food Production": `<svg class="w-6 h-6 text-catc-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zM3 10h18M7 15h4m4 0h4"></path>
      </svg>`,
      "Tour Guiding": `<svg class="w-6 h-6 text-catc-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.447 2.224A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
      </svg>`,
      "Travel Agency Operations": `<svg class="w-6 h-6 text-catc-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>`,
      "Housekeeping Operations": `<svg class="w-6 h-6 text-catc-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
      </svg>`,
    };
    return (
      icons[title] ||
      `<svg class="w-6 h-6 text-catc-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
    </svg>`
    );
  };

  // Description mapping for each documentation type
  const getDescription = (title) => {
    const descriptions = {
      "Food & Beverage Service":
        "Kurikulum komprehensif untuk layanan makanan dan minuman dengan standar internasional",
      "Front Office Operations":
        "Modul operasional front office untuk manajemen tamu dan reservasi",
      "Food Production":
        "Program pengembangan keterampilan kuliner dan produksi makanan",
      "Tour Guiding":
        "Pelatihan pemandu wisata dengan fokus pada interpretasi budaya dan keselamatan",
      "Travel Agency Operations":
        "Kurikulum operasional agen perjalanan dan pengembangan produk wisata",
      "Housekeeping Operations":
        "Program manajemen housekeeping dan pemeliharaan akomodasi",
    };
    return (
      descriptions[title] ||
      "Kurikulum standar ASEAN untuk pengembangan kompetensi pariwisata"
    );
  };

  // Check if we're on the curriculum page to show more data
  const isCurriculumPage = window.location.pathname.includes("curriculum.html");

  // Use all data for curriculum page, limited data for home page
  const docsToShow = isCurriculumPage
    ? documentationData
    : documentationData.slice(0, 6);

  docsToShow.forEach((doc) => {
    const docCard = document.createElement("div");
    docCard.className =
      "bg-white rounded-lg border border-gray-200 p-5 hover:border-gray-300 transition-all duration-300 relative cursor-pointer";
    docCard.innerHTML = `
            <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-white border border-gray-300 rounded-lg flex items-center justify-center mr-3">
                    ${getIcon(doc.title)}
                </div>
                <div>
                    <h3 class="text-lg font-semibold text-catc-blue mb-1 font-poppins">${
                      doc.title
                    }</h3>
                    <p class="text-gray-600 text-xs">${
                      doc.modules.length
                    } modul</p>
                </div>
            </div>
            <div class="mb-4">
                <p class="text-gray-700 text-sm leading-relaxed">${getDescription(
                  doc.title
                )}</p>
            </div>
            <div class="absolute bottom-4 right-4">
                <svg class="w-5 h-5 text-gray-400 hover:text-catc-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </div>
        `;

    // Add click event to navigate to documentation detail
    docCard.addEventListener("click", function () {
      window.location.href = `curriculum-detail.html?id=${doc.id}`;
    });

    documentationGrid.appendChild(docCard);
  });
}
