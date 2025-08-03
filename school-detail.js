// Note: schoolsData is imported from schools-data.js

// Load school detail data
document.addEventListener("DOMContentLoaded", function () {
  loadSchoolDetail();
});

// Load school detail into the page
function loadSchoolDetail() {
  // Get school ID from URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const schoolId = parseInt(urlParams.get("id")) || 1;

  // Find the school data
  const school = schoolsData.find((s) => s.id === schoolId);

  if (!school) {
    // If school not found, redirect to schools page
    window.location.href = "schools.html";
    return;
  }

  // Update school information
  document.getElementById("school-name").textContent = school.name;
  document.getElementById("school-location").textContent = school.location;

  // Update school logo
  const schoolLogo = document.getElementById("school-logo");
  const logoPath = `assets/images/${school.name
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[^a-z0-9]/g, "")}.png`;
  schoolLogo.src = logoPath;
  schoolLogo.onerror = function () {
    this.style.display = "none";
    // Show initial if image not found
    const initial = document.createElement("span");
    initial.className = "text-white font-bold text-2xl";
    initial.textContent = school.name.charAt(0);
    this.parentNode.appendChild(initial);
  };

  // Update school about
  document.getElementById(
    "school-about"
  ).textContent = `${school.name} adalah salah satu sekolah menengah kejuruan terkemuka yang telah mengimplementasikan kurikulum CATC (Common ASEAN Tourism Curriculum) dalam program pendidikan pariwisata mereka. Sekolah ini berkomitmen untuk menghasilkan lulusan yang siap kerja sesuai standar ASEAN.`;

  // Update contact information (using mock data for now)
  document.getElementById("school-address").textContent = `Jl. Raya ${
    school.name.split(" ")[1]
  } No. 1, ${school.location.split(", ")[0]}`;
  document.getElementById("school-email").textContent = `info@${school.name
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[^a-z0-9]/g, "")}.sch.id`;
  document.getElementById("school-phone").textContent = `(0361) ${
    Math.floor(Math.random() * 900) + 100
  }-${Math.floor(Math.random() * 900) + 100}`;

  // Load modules
  loadModules(school);
}

// Load modules for the school
function loadModules(school) {
  const modulesGrid = document.getElementById("modules-grid");

  // Create module cards based on school modules
  school.modules.forEach((module, index) => {
    const moduleCard = document.createElement("div");
    moduleCard.className =
      "bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300";

    // Get icon based on module name
    const getModuleIcon = (moduleName) => {
      const icons = {
        "Food & beverage": `<svg class="w-8 h-8 text-catc-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
        </svg>`,
        "Front office": `<svg class="w-8 h-8 text-catc-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
        </svg>`,
        "Food Production": `<svg class="w-8 h-8 text-catc-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zM3 10h18M7 15h4m4 0h4"></path>
        </svg>`,
        "Tour Guiding": `<svg class="w-8 h-8 text-catc-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.447 2.224A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
        </svg>`,
        UPW: `<svg class="w-8 h-8 text-catc-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>`,
        "Tour Operation": `<svg class="w-8 h-8 text-catc-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.447 2.224A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
        </svg>`,
        "Perhotelan & Jasa Pariwisata": `<svg class="w-8 h-8 text-catc-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
        </svg>`,
        "Usaha Layanan Pariwisata": `<svg class="w-8 h-8 text-catc-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>`,
        "Perhotelan dan Tata Boga": `<svg class="w-8 h-8 text-catc-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zM3 10h18M7 15h4m4 0h4"></path>
        </svg>`,
        "Provide Arrival and Departure Assistance": `<svg class="w-8 h-8 text-catc-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.447 2.224A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
        </svg>`,
        Sales: `<svg class="w-8 h-8 text-catc-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>`,
        "Kitchen Knowledge": `<svg class="w-8 h-8 text-catc-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zM3 10h18M7 15h4m4 0h4"></path>
        </svg>`,
        Bar: `<svg class="w-8 h-8 text-catc-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
        </svg>`,
        Housekeeping: `<svg class="w-8 h-8 text-catc-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
        </svg>`,
        Laundry: `<svg class="w-8 h-8 text-catc-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
        </svg>`,
      };

      return (
        icons[module] ||
        `<svg class="w-8 h-8 text-catc-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
      </svg>`
      );
    };

    // Get competencies for this module
    const competencies = school.competencies || [];
    const moduleCompetencies = competencies.filter(
      (comp) =>
        comp.includes(module.split(" ")[0]) ||
        comp.includes(module.split(" ")[1]) ||
        comp.includes(module)
    );

    moduleCard.innerHTML = `
      <div class="flex items-center mb-4">
        <div class="w-12 h-12 bg-catc-blue/10 rounded-xl flex items-center justify-center mr-4">
          ${getModuleIcon(module)}
        </div>
        <div>
          <h3 class="text-lg font-semibold text-catc-blue mb-1 font-poppins">${module}</h3>
          <p class="text-gray-600 text-xs">Modul CATC</p>
        </div>
      </div>
      <div class="space-y-3">
        <p class="text-sm text-gray-700 leading-relaxed">
          Modul ${module} merupakan bagian dari kurikulum CATC yang diimplementasikan di ${
      school.name
    }.
        </p>
        ${
          moduleCompetencies.length > 0
            ? `
          <div>
            <h4 class="text-sm font-semibold text-catc-blue mb-2">Kompetensi:</h4>
            <div class="space-y-1">
              ${moduleCompetencies
                .map(
                  (comp) => `
                <div class="flex items-center text-xs text-gray-600">
                  <svg class="w-3 h-3 mr-2 text-catc-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  ${comp}
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        `
            : ""
        }
        <div class="flex items-center text-xs text-gray-500">
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          Standar ASEAN
        </div>
      </div>
    `;

    modulesGrid.appendChild(moduleCard);
  });
}
