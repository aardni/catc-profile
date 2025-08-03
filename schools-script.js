// Load schools data
document.addEventListener("DOMContentLoaded", function () {
  loadSchools();
});

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
