// Documentation data
const documentationData = [
  {
    id: 1,
    title: "Food & Beverage Service",
    modules: [
      {
        code: "FBS-001",
        title: "Basic Food & Beverage Service",
        description:
          "Fundamental principles of food and beverage service including table setting, service techniques, and customer interaction.",
        duration: "24 hours",
        competencies: [
          "Table Service",
          "Customer Interaction",
          "Service Standards",
          "Equipment Handling",
        ],
      },
      {
        code: "FBS-002",
        title: "Advanced Food & Beverage Service",
        description:
          "Advanced service techniques including wine service, fine dining procedures, and specialized service methods.",
        duration: "32 hours",
        competencies: [
          "Wine Service",
          "Fine Dining",
          "Specialized Service",
          "Quality Control",
        ],
      },
      {
        code: "FBS-003",
        title: "Wine & Beverage Knowledge",
        description:
          "Comprehensive knowledge of wines, spirits, and beverages including tasting, pairing, and service techniques.",
        duration: "28 hours",
        competencies: [
          "Wine Knowledge",
          "Beverage Pairing",
          "Tasting Techniques",
          "Service Excellence",
        ],
      },
      {
        code: "FBS-004",
        title: "Restaurant Management",
        description:
          "Management principles for restaurant operations including staff supervision, inventory control, and customer satisfaction.",
        duration: "36 hours",
        competencies: [
          "Staff Management",
          "Inventory Control",
          "Customer Satisfaction",
          "Operations Management",
        ],
      },
      {
        code: "FBS-005",
        title: "Customer Service Excellence",
        description:
          "Advanced customer service skills including conflict resolution, upselling techniques, and guest relationship management.",
        duration: "30 hours",
        competencies: [
          "Conflict Resolution",
          "Upselling",
          "Guest Relations",
          "Service Recovery",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Front Office Operations",
    modules: [
      {
        code: "FO-001",
        title: "Reservation Management",
        description:
          "Comprehensive training in hotel reservation systems, booking procedures, and guest communication.",
        duration: "40 hours",
        competencies: [
          "Reservation Systems",
          "Booking Procedures",
          "Guest Communication",
          "System Management",
        ],
      },
      {
        code: "FO-002",
        title: "Check-in & Check-out Procedures",
        description:
          "Detailed procedures for guest registration, room assignment, and departure processes.",
        duration: "35 hours",
        competencies: [
          "Guest Registration",
          "Room Assignment",
          "Departure Process",
          "Documentation",
        ],
      },
      {
        code: "FO-003",
        title: "Guest Relations",
        description:
          "Advanced guest service skills including problem resolution, special requests, and VIP handling.",
        duration: "45 hours",
        competencies: [
          "Problem Resolution",
          "Special Requests",
          "VIP Handling",
          "Service Excellence",
        ],
      },
      {
        code: "FO-004",
        title: "Hotel Information Systems",
        description:
          "Training in hotel management software, database management, and technology integration.",
        duration: "30 hours",
        competencies: [
          "Hotel Software",
          "Database Management",
          "Technology Integration",
          "System Maintenance",
        ],
      },
      {
        code: "FO-005",
        title: "Revenue Management",
        description:
          "Principles of hotel revenue management including pricing strategies and yield management.",
        duration: "25 hours",
        competencies: [
          "Pricing Strategies",
          "Yield Management",
          "Revenue Optimization",
          "Market Analysis",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Food Production",
    modules: [
      {
        code: "FP-001",
        title: "Basic Culinary Skills",
        description:
          "Fundamental cooking techniques including knife skills, basic cooking methods, and food preparation.",
        duration: "50 hours",
        competencies: [
          "Knife Skills",
          "Cooking Methods",
          "Food Preparation",
          "Kitchen Safety",
        ],
      },
      {
        code: "FP-002",
        title: "Asian Cuisine",
        description:
          "Specialized training in Asian cooking techniques, ingredients, and traditional recipes.",
        duration: "30 hours",
        competencies: [
          "Asian Techniques",
          "Traditional Recipes",
          "Ingredient Knowledge",
          "Cultural Understanding",
        ],
      },
      {
        code: "FP-003",
        title: "Western Cuisine",
        description:
          "Comprehensive training in Western cooking methods, sauces, and classic recipes.",
        duration: "25 hours",
        competencies: [
          "Western Techniques",
          "Sauce Making",
          "Classic Recipes",
          "Plating Skills",
        ],
      },
      {
        code: "FP-004",
        title: "Pastry & Bakery",
        description:
          "Specialized training in pastry making, baking techniques, and dessert preparation.",
        duration: "40 hours",
        competencies: [
          "Pastry Making",
          "Baking Techniques",
          "Dessert Preparation",
          "Decoration Skills",
        ],
      },
      {
        code: "FP-005",
        title: "Kitchen Management",
        description:
          "Management principles for kitchen operations including staff supervision and quality control.",
        duration: "35 hours",
        competencies: [
          "Kitchen Management",
          "Staff Supervision",
          "Quality Control",
          "Operations Planning",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Tour Guiding",
    modules: [
      {
        code: "TG-001",
        title: "Tour Planning & Development",
        description:
          "Comprehensive training in tour planning, itinerary design, and logistics management.",
        duration: "45 hours",
        competencies: [
          "Tour Planning",
          "Itinerary Design",
          "Logistics Management",
          "Resource Coordination",
        ],
      },
      {
        code: "TG-002",
        title: "Cultural Heritage Interpretation",
        description:
          "Specialized training in cultural interpretation, storytelling, and heritage presentation.",
        duration: "40 hours",
        competencies: [
          "Cultural Interpretation",
          "Storytelling",
          "Heritage Presentation",
          "Local Knowledge",
        ],
      },
      {
        code: "TG-003",
        title: "Safety & Emergency Procedures",
        description:
          "Comprehensive safety training including emergency procedures and risk management.",
        duration: "35 hours",
        competencies: [
          "Emergency Procedures",
          "Risk Management",
          "Safety Protocols",
          "First Aid",
        ],
      },
      {
        code: "TG-004",
        title: "Customer Service for Tourists",
        description:
          "Advanced customer service skills specifically designed for tourist interactions.",
        duration: "30 hours",
        competencies: [
          "Tourist Service",
          "Communication Skills",
          "Problem Resolution",
          "Cultural Sensitivity",
        ],
      },
      {
        code: "TG-005",
        title: "Tour Guide Certification",
        description:
          "Preparation for professional tour guide certification and industry standards.",
        duration: "25 hours",
        competencies: [
          "Certification Preparation",
          "Industry Standards",
          "Professional Ethics",
          "Legal Requirements",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Travel Agency Operations",
    modules: [
      {
        code: "TA-001",
        title: "Travel Product Development",
        description:
          "Comprehensive training in developing and packaging travel products for various markets.",
        duration: "45 hours",
        competencies: [
          "Product Development",
          "Market Research",
          "Packaging",
          "Pricing Strategies",
        ],
      },
      {
        code: "TA-002",
        title: "Reservation Systems",
        description:
          "Training in global distribution systems and travel booking technology.",
        duration: "30 hours",
        competencies: [
          "GDS Systems",
          "Booking Technology",
          "Reservation Management",
          "System Integration",
        ],
      },
      {
        code: "TA-003",
        title: "Customer Service",
        description:
          "Advanced customer service skills for travel agency operations and client management.",
        duration: "35 hours",
        competencies: [
          "Client Management",
          "Service Excellence",
          "Problem Resolution",
          "Relationship Building",
        ],
      },
      {
        code: "TA-004",
        title: "Marketing & Sales",
        description:
          "Marketing and sales techniques specifically designed for travel agency operations.",
        duration: "40 hours",
        competencies: [
          "Travel Marketing",
          "Sales Techniques",
          "Digital Marketing",
          "Promotional Strategies",
        ],
      },
      {
        code: "TA-005",
        title: "Business Management",
        description:
          "Business management principles for travel agency operations and financial management.",
        duration: "35 hours",
        competencies: [
          "Business Management",
          "Financial Management",
          "Operations Planning",
          "Strategic Planning",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Housekeeping Operations",
    modules: [
      {
        code: "HK-001",
        title: "Room Cleaning Procedures",
        description:
          "Comprehensive training in room cleaning standards, procedures, and quality control.",
        duration: "40 hours",
        competencies: [
          "Cleaning Standards",
          "Room Procedures",
          "Quality Control",
          "Efficiency Management",
        ],
      },
      {
        code: "HK-002",
        title: "Linen Management",
        description:
          "Specialized training in linen and textile management, inventory control, and care procedures.",
        duration: "25 hours",
        competencies: [
          "Linen Management",
          "Inventory Control",
          "Care Procedures",
          "Storage Systems",
        ],
      },
      {
        code: "HK-003",
        title: "Laundry Operations",
        description:
          "Training in commercial laundry operations, equipment maintenance, and textile care.",
        duration: "30 hours",
        competencies: [
          "Laundry Operations",
          "Equipment Maintenance",
          "Textile Care",
          "Chemical Management",
        ],
      },
      {
        code: "HK-004",
        title: "Housekeeping Management",
        description:
          "Management principles for housekeeping operations including staff supervision and planning.",
        duration: "35 hours",
        competencies: [
          "Staff Management",
          "Operations Planning",
          "Resource Allocation",
          "Performance Monitoring",
        ],
      },
      {
        code: "HK-005",
        title: "Quality Control",
        description:
          "Quality control procedures and inspection standards for housekeeping operations.",
        duration: "20 hours",
        competencies: [
          "Quality Standards",
          "Inspection Procedures",
          "Performance Monitoring",
          "Continuous Improvement",
        ],
      },
    ],
  },
];
