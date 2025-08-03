// Load curriculum data
document.addEventListener("DOMContentLoaded", function () {
  loadDocumentation();
});

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

    // Add click event to navigate to curriculum detail
    docCard.addEventListener("click", function () {
      window.location.href = `curriculum-detail.html?id=${doc.id}`;
    });

    documentationGrid.appendChild(docCard);
  });
}
