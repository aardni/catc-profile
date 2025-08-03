// Load curriculum detail based on URL parameter or default to Food & Beverage
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const curriculumId = parseInt(urlParams.get("id")) || 1;

  const curriculum = documentationData.find((c) => c.id === curriculumId);
  if (!curriculum) {
    // Default to Food & Beverage if not found
    loadCurriculumDetail(documentationData[0]);
    return;
  }

  loadCurriculumDetail(curriculum);
  setupNavigation();
});

function loadCurriculumDetail(curriculum) {
  // Update page title
  document.title = `${curriculum.title} - CATC Curriculum`;

  // Update content
  document.getElementById("content-title").textContent = curriculum.title;
  document.getElementById(
    "content-subtitle"
  ).textContent = `Meet ${curriculum.title}`;

  // Set default content based on curriculum type
  const contentMap = {
    "Food & Beverage Service": `
      <p>
        The Food & Beverage module in the CATC curriculum is designed to develop students' competencies in providing quality food and beverage services according to ASEAN tourism industry standards. This module covers various aspects from service area preparation to customer handling.
      </p>
      <p>
        Students will learn about food and beverage service techniques, product knowledge, hygiene and sanitation standards, and customer service excellence. The module emphasizes practical skills and theoretical knowledge to prepare students for professional roles in the hospitality industry.
      </p>
      <p>
        The curriculum follows ASEAN standards and includes hands-on training, case studies, and industry best practices. Students will develop competencies in restaurant operations, bar service, wine knowledge, and customer relationship management.
      </p>
      <h2 class="text-xl font-bold text-catc-blue mt-6 mb-4">Key Learning Objectives</h2>
      <ul class="list-disc list-inside space-y-2 text-gray-700">
        <li>Understand food and beverage service principles and techniques</li>
        <li>Develop product knowledge for various food and beverage items</li>
        <li>Master hygiene and sanitation standards in food service</li>
        <li>Enhance customer service and communication skills</li>
        <li>Learn restaurant operations and management basics</li>
      </ul>
    `,
    "Front Office Operations": `
      <p>
        The Front Office module in the CATC curriculum focuses on developing students' competencies in hotel front office operations and guest services. This module covers all aspects of guest service from check-in to check-out.
      </p>
      <p>
        Students will learn about reservation systems, guest registration, cashiering, and guest relations. The module emphasizes practical skills in using hotel management systems and providing excellent customer service.
      </p>
      <p>
        The curriculum includes hands-on training with industry-standard software and real-world scenarios to prepare students for professional front office roles in the hospitality industry.
      </p>
      <h2 class="text-xl font-bold text-catc-blue mt-6 mb-4">Key Learning Objectives</h2>
      <ul class="list-disc list-inside space-y-2 text-gray-700">
        <li>Master hotel reservation and booking systems</li>
        <li>Develop guest registration and check-in/check-out procedures</li>
        <li>Learn cashiering and financial transaction handling</li>
        <li>Enhance guest relations and problem-solving skills</li>
        <li>Understand hotel management software and technology</li>
      </ul>
    `,
    "Food Production": `
      <p>
        The Food Production module in the CATC curriculum is designed to develop students' competencies in culinary arts and kitchen operations. This module covers food preparation, cooking techniques, and kitchen management.
      </p>
      <p>
        Students will learn about food safety, cooking methods, menu planning, and kitchen organization. The module emphasizes practical skills in food preparation and theoretical knowledge of culinary arts.
      </p>
      <p>
        The curriculum includes hands-on training in commercial kitchens, food safety certification, and industry best practices to prepare students for professional culinary roles.
      </p>
      <h2 class="text-xl font-bold text-catc-blue mt-6 mb-4">Key Learning Objectives</h2>
      <ul class="list-disc list-inside space-y-2 text-gray-700">
        <li>Master various cooking techniques and methods</li>
        <li>Understand food safety and hygiene standards</li>
        <li>Develop menu planning and costing skills</li>
        <li>Learn kitchen organization and management</li>
        <li>Enhance culinary creativity and presentation skills</li>
      </ul>
    `,
    "Tour Guiding": `
      <p>
        The Tour Guiding module in the CATC curriculum focuses on developing students' competencies in professional tour guiding and destination interpretation. This module covers all aspects of professional guiding.
      </p>
      <p>
        Students will learn about tour planning, cultural interpretation, safety procedures, and customer service for tourists. The module emphasizes practical skills in guiding and theoretical knowledge of tourism destinations.
      </p>
      <p>
        The curriculum includes field trips, cultural immersion experiences, and safety training to prepare students for professional tour guiding roles in the tourism industry.
      </p>
      <h2 class="text-xl font-bold text-catc-blue mt-6 mb-4">Key Learning Objectives</h2>
      <ul class="list-disc list-inside space-y-2 text-gray-700">
        <li>Develop tour planning and itinerary design skills</li>
        <li>Master cultural and heritage interpretation techniques</li>
        <li>Learn safety and emergency procedures for tours</li>
        <li>Enhance communication and presentation skills</li>
        <li>Understand tourism destination knowledge and management</li>
      </ul>
    `,
    "Travel Agency Operations": `
      <p>
        The Travel Agency Operations module in the CATC curriculum is designed to develop students' competencies in travel agency management and tourism business operations. This module covers all aspects of travel agency business.
      </p>
      <p>
        Students will learn about travel product development, reservation systems, customer service, and business management. The module emphasizes practical skills in travel agency operations and theoretical knowledge of tourism business.
      </p>
      <p>
        The curriculum includes industry partnerships, technology training, and business simulation to prepare students for professional roles in the travel industry.
      </p>
      <h2 class="text-xl font-bold text-catc-blue mt-6 mb-4">Key Learning Objectives</h2>
      <ul class="list-disc list-inside space-y-2 text-gray-700">
        <li>Master travel product development and packaging</li>
        <li>Learn reservation and booking system operations</li>
        <li>Develop customer service and sales skills</li>
        <li>Understand travel agency business management</li>
        <li>Enhance destination knowledge and marketing skills</li>
      </ul>
    `,
    "Housekeeping Operations": `
      <p>
        The Housekeeping Operations module in the CATC curriculum focuses on developing students' competencies in hotel housekeeping and facility management. This module covers all aspects of professional housekeeping.
      </p>
      <p>
        Students will learn about room cleaning procedures, linen management, laundry operations, and quality control. The module emphasizes practical skills in housekeeping and theoretical knowledge of facility management.
      </p>
      <p>
        The curriculum includes hands-on training in hotel environments, industry standards, and management principles to prepare students for professional housekeeping roles.
      </p>
      <h2 class="text-xl font-bold text-catc-blue mt-6 mb-4">Key Learning Objectives</h2>
      <ul class="list-disc list-inside space-y-2 text-gray-700">
        <li>Master room cleaning and maintenance procedures</li>
        <li>Learn linen and textile management systems</li>
        <li>Develop laundry and dry cleaning operations skills</li>
        <li>Understand quality control and inspection procedures</li>
        <li>Enhance housekeeping management and leadership skills</li>
      </ul>
    `,
  };

  const content =
    contentMap[curriculum.title] ||
    `
    <p>
      This module in the CATC curriculum is designed to develop students' competencies in professional tourism and hospitality operations according to ASEAN tourism industry standards.
    </p>
    <p>
      Students will learn about industry best practices, customer service excellence, and professional development. The module emphasizes practical skills and theoretical knowledge to prepare students for professional roles in the tourism and hospitality industry.
    </p>
  `;

  document.getElementById("content-body").innerHTML = content;

  // Load modules
  loadModules(curriculum.modules);

  // Update navigation active state
  updateNavigationActiveState(curriculum.id);
}

function loadModules(modules) {
  const modulesContainer = document.getElementById("modules-container");
  modulesContainer.innerHTML = "";

  modules.forEach((module) => {
    const moduleElement = createModuleElement(module);
    modulesContainer.appendChild(moduleElement);
  });
}

function createModuleElement(module) {
  const moduleDiv = document.createElement("div");
  moduleDiv.className =
    "bg-white rounded-lg shadow-md p-6 border-l-4 border-catc-blue";

  moduleDiv.innerHTML = `
    <div class="flex items-start justify-between mb-4">
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-1">${module.code} - ${
    module.title
  }</h3>
        <p class="text-sm text-gray-600">Duration: ${module.duration}</p>
      </div>
      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-catc-blue/10 text-catc-blue">
        ${module.code}
      </span>
    </div>
    
    <div class="mb-4">
      <p class="text-gray-700 leading-relaxed">${module.description}</p>
    </div>
    
    <div>
      <h4 class="text-sm font-semibold text-gray-900 mb-2">Key Competencies:</h4>
      <div class="flex flex-wrap gap-2">
        ${module.competencies
          .map(
            (competency) =>
              `<span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
            ${competency}
          </span>`
          )
          .join("")}
      </div>
    </div>
  `;

  return moduleDiv;
}

function setupNavigation() {
  // Add click event listeners to navigation items
  const navItems = [
    { id: "nav-food-beverage", curriculumId: 1 },
    { id: "nav-front-office", curriculumId: 2 },
    { id: "nav-food-production", curriculumId: 3 },
    { id: "nav-tour-guiding", curriculumId: 4 },
    { id: "nav-travel-agency", curriculumId: 5 },
    { id: "nav-housekeeping", curriculumId: 6 },
  ];

  navItems.forEach((item) => {
    const navElement = document.getElementById(item.id);
    if (navElement) {
      navElement.addEventListener("click", function (e) {
        e.preventDefault();
        const curriculum = documentationData.find(
          (c) => c.id === item.curriculumId
        );
        if (curriculum) {
          loadCurriculumDetail(curriculum);
          // Update URL without page reload
          const newUrl = new URL(window.location);
          newUrl.searchParams.set("id", item.curriculumId);
          window.history.pushState({}, "", newUrl);
        }
      });
    }
  });
}

function updateNavigationActiveState(activeId) {
  // Remove active state from all navigation items
  const navItems = [
    "nav-food-beverage",
    "nav-front-office",
    "nav-food-production",
    "nav-tour-guiding",
    "nav-travel-agency",
    "nav-housekeeping",
  ];

  navItems.forEach((navId) => {
    const navElement = document.getElementById(navId);
    if (navElement) {
      navElement.className =
        "flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-catc-blue hover:bg-gray-50 rounded-r-lg";
    }
  });

  // Map curriculum titles to navigation IDs
  const titleToNavMap = {
    "Food & Beverage Service": "nav-food-beverage",
    "Front Office Operations": "nav-front-office",
    "Food Production": "nav-food-production",
    "Tour Guiding": "nav-tour-guiding",
    "Travel Agency Operations": "nav-travel-agency",
    "Housekeeping Operations": "nav-housekeeping",
  };

  const curriculum = documentationData.find((c) => c.id === activeId);
  if (curriculum) {
    const activeNavId = titleToNavMap[curriculum.title];
    const activeNavElement = document.getElementById(activeNavId);
    if (activeNavElement) {
      activeNavElement.className =
        "flex items-center px-3 py-2 text-sm font-medium text-catc-blue bg-catc-blue/10 border-l-4 border-catc-blue rounded-r-lg";
    }
  }
}
