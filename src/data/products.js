// Premium product, reviews, and B2B portfolio database for ErgoSpace

export const PRODUCTS = [
  {
    id: 'astra-chair',
    name: 'Astra Leatherite Executive Chair',
    tagline: 'Premium top-grain leatherite executive recline support.',
    category: 'Leatherite Chairs',
    price: 24999,
    originalPrice: 29999,
    rating: 4.9,
    reviewsCount: 1420,
    image: '/astra_chair.png',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-modern-office-chair-close-up-42211-large.mp4',
    images: [
      '/astra_chair.png'
    ],
    features: [
      {
        title: 'Adaptive Cushioning Matrix',
        description: 'Molded foam support wrapped in hand-stitched premium leatherite contours perfectly to your back.',
        graphic: 'matrix'
      }
    ],
    specs: {
      'Frame Material': 'Polished Diecast Aluminum & Steel Support',
      'Seat Material': 'High-Density Foam & Premium Hand-Stitched Leatherite',
      'Recline Range': '90° to 135° with Synchro-Tilt mechanism',
      'Gas Lift Class': 'Class 4 heavy duty cylinder',
      'Weight Capacity': 'Up to 150 kg',
      'Warranty': '12 Years Limited Warranty'
    },
    faq: [
      { q: "Is the leatherite material breathable?", a: "Yes, our custom executive leatherite features micro-perforations to allow maximum heat dissipation during long focus periods." }
    ]
  },
  {
    id: 'zenith-desk',
    name: 'Zenith Active WFH Chair',
    tagline: 'Ergonomic mesh suspension designed for daily focus routines.',
    category: 'Work From Home Chairs',
    price: 18999,
    originalPrice: 22999,
    rating: 4.8,
    reviewsCount: 890,
    image: '/zenith_chair.png',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-modern-office-chair-close-up-42211-large.mp4',
    images: [
      '/zenith_chair.png'
    ],
    features: [
      {
        title: 'Calibrated Lumbar Support',
        description: 'Tension-adjustable lumbar mesh frame provides dynamic orthopedic support.',
        graphic: 'mesh'
      }
    ],
    specs: {
      'Frame Material': 'Fiber-Reinforced Structural Composite',
      'Seat Material': 'Elastomeric Tensile Mesh & Molded Foam',
      'Gas Lift Class': 'Class 4 hydraulic cylinder',
      'Warranty': '5 Years Warranty'
    },
    faq: [
      { q: "Is it suitable for small home setups?", a: "Yes, its compact pedestal footprint and pivoting armrests let it tuck fully underneath standard desks." }
    ]
  },
  {
    id: 'apex-desk',
    name: 'Apex Luxury Lounge Chair',
    tagline: 'Commanding visual posture. Finished in natural premium teakwood accents.',
    category: 'Lounge Chairs',
    price: 85000,
    originalPrice: 95000,
    rating: 4.95,
    reviewsCount: 112,
    image: '/apex_chair.png',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-modern-office-chair-close-up-42211-large.mp4',
    images: [
      '/apex_chair.png'
    ],
    features: [
      {
        title: 'Iconic Swan Architecture',
        description: 'Hand-shaped composite shell wrapped in premium red wool felt set on polished aluminum legs.',
        graphic: 'wood'
      }
    ],
    specs: {
      'Shell Profile': 'Molded Reinforced Shell',
      'Base Profile': 'Die-cast aluminum swivel base',
      'Warranty': '10 Years Limited Structural Warranty'
    },
    faq: [
      { q: "Does it rotate?", a: "Yes, it features a smooth 360-degree silent swivel rotation." }
    ]
  },
  {
    id: 'nexus-bench',
    name: 'Nexus Glitter Reception Chair',
    tagline: 'Premium velvet accent chair with high-shine gold base.',
    category: 'Glitter Series',
    price: 24999,
    originalPrice: 29999,
    rating: 4.75,
    reviewsCount: 78,
    image: '/nexus_chair.png',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-modern-office-chair-close-up-42211-large.mp4',
    images: [
      '/nexus_chair.png'
    ],
    features: [
      {
        title: 'Luxury Velvet Finish',
        description: 'Rich velvet weave cushions detailed with electroplated gold-finish steel legs.',
        graphic: 'wool'
      }
    ],
    specs: {
      'Cushion Material': 'High-density comfort foam & velvet fabric overlay',
      'Leg Finish': 'Electroplated Gold-anodized steel legs',
      'Warranty': '5 Years Warranty'
    },
    faq: [
      { q: "Is the velvet easy to clean?", a: "Yes, the fabric is treated with a stain-repellent finish that can be dry-wiped easily." }
    ]
  },
  {
    id: 'summit-conference',
    name: 'Summit High-Back Leatherite Chair',
    tagline: 'High-back support for boardroom meeting spaces.',
    category: 'Leatherite Chairs',
    price: 32000,
    originalPrice: 38000,
    rating: 4.9,
    reviewsCount: 34,
    image: '/summit_chair.png',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-modern-office-chair-close-up-42211-large.mp4',
    images: [
      '/summit_chair.png'
    ],
    features: [
      {
        title: 'Boardroom Synchro-Tilt',
        description: 'Smooth recline with multi-position lock for focused boardroom briefings.',
        graphic: 'matrix'
      }
    ],
    specs: {
      'Material': 'Burnt Coal Black leatherite upholstery',
      'Warranty': '8 Years Warranty'
    },
    faq: [
      { q: "Does it come pre-assembled?", a: "Yes, we ship conference bundles pre-assembled via turnkey delivery." }
    ]
  },
  {
    id: 'vault-credenza',
    name: 'Vault Velvet Accent Chair',
    tagline: 'Refined velvet lounge seating with contoured backrest.',
    category: 'Glitter Series',
    price: 21999,
    originalPrice: 25999,
    rating: 4.8,
    reviewsCount: 56,
    image: '/vault_chair.png',
    images: [
      '/vault_chair.png'
    ],
    features: [
      {
        title: 'Contoured Comfort Profile',
        description: 'Ergonomic shape wrapped in durable luxury velvet for lobbies and executive offices.',
        graphic: 'wool'
      }
    ],
    specs: {
      'Dimensions': '85cm x 65cm footprint',
      'Frame': 'Powder-coated steel skeleton',
      'Warranty': '5 Years Warranty'
    },
    faq: [
      { q: "What weights does it support?", a: "It is rated for static weights up to 130 kg." }
    ]
  },
  {
    id: 'element-arm',
    name: 'Element WFH Task Chair',
    tagline: 'Sleek, budget-friendly mesh seating to elevate your focus.',
    category: 'Work From Home Chairs',
    price: 14999,
    originalPrice: 18999,
    rating: 4.9,
    reviewsCount: 320,
    image: '/element_chair.png',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-modern-office-chair-close-up-42211-large.mp4',
    images: [
      '/element_chair.png'
    ],
    features: [
      {
        title: 'Weightless Mesh suspension',
        description: 'Responsive elastic mesh breathes and moves with you to support natural postures.',
        graphic: 'mesh'
      }
    ],
    specs: {
      'Support': 'Tilt lock & gas height lift',
      'Warranty': '3 Years Warranty'
    },
    faq: [
      { q: "Is it easy to clean?", a: "Yes, you can vacuum the mesh and wipe the composite frame with a damp cloth." }
    ]
  },
  {
    id: 'wool-pad',
    name: 'Raptor Pro Gaming Chair',
    tagline: 'Calibrated racing posture with built-in lumbar cushion support.',
    category: 'Gaming Chair',
    price: 29999,
    originalPrice: 34999,
    rating: 4.7,
    reviewsCount: 512,
    image: '/raptor_chair.png',
    images: [
      '/raptor_chair.png'
    ],
    features: [
      {
        title: '3D Orthopedic Cushions',
        description: 'Removable memory-foam neck and lumbar cushions support severe leaning postures.',
        graphic: 'matrix'
      }
    ],
    specs: {
      'Dimensions': 'Racing seat shape',
      'Material': 'Anti-scratch PU leather & high-density foam',
      'Warranty': '3 Years Warranty'
    },
    faq: [
      { q: "How far does it recline?", a: "It features a full racing lay-flat recline up to 170 degrees." }
    ]
  }
];

export const WORKSPACE_SETUPS = [
  {
    id: 'creator-setup',
    title: 'The Creative Director Suite',
    creator: 'Aarav Mehta',
    role: 'Product Designer',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=80',
    products: ['astra-chair', 'zenith-desk', 'element-arm', 'wool-pad'],
    totalPrice: 78996,
    discount: 7896,
    finalPrice: 71100
  },
  {
    id: 'coder-setup',
    title: 'The Founder Focus Base',
    creator: 'Rohan Sharma',
    role: 'SaaS Founder',
    image: 'https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=1200&q=80',
    products: ['astra-chair', 'zenith-desk'],
    totalPrice: 67998,
    discount: 4000,
    finalPrice: 63998
  },
  {
    id: 'minimalist-setup',
    title: 'Minimalist Dream Chamber',
    creator: 'Priya Patel',
    role: 'Tech Writer',
    image: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1200&q=80',
    products: ['zenith-desk', 'wool-pad'],
    totalPrice: 46498,
    discount: 2500,
    finalPrice: 43998
  }
];

// Expanded B2B Case study models and image audits
export const B2B_CLIENTS = [
  {
    id: 'razorpay',
    name: 'Razorpay',
    logo: 'RP',
    industry: 'Fintech Hub',
    projectSize: '450 Workstations',
    furnitureSupplied: 'Zenith Adjustable Desks & Astra Custom Chairs',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
    caseStudy: 'Razorpay relocated its Bangalore HQ with an intensive mandate: maximize ergonomics while maintaining a high density floorplan layout. ErgoSpace custom color-matched 450 dual-motor Zenith desks in Graphite finish, integrated with clean under-desk acoustic dividers.'
  },
  {
    id: 'zomato',
    name: 'Zomato',
    logo: 'ZM',
    industry: 'Enterprise Technology',
    projectSize: '1,200 Workstations',
    furnitureSupplied: 'Nexus Bench Workstations & Astra Ergonomic Chairs',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    caseStudy: 'Deploying linear Nexus pods across Zomato’s high-collaboration office zones. Built with acoustic PET partitions and dynamic gas arm mounts for all coders, reducing floor-wide cord visible footprints by 90%.'
  },
  {
    id: 'groww',
    name: 'Groww',
    logo: 'GW',
    industry: 'Financial Investment Services',
    projectSize: '320 Workstations',
    furnitureSupplied: 'Apex Executive Desks, Vault Credenzas, Summit Boardroom setups',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80', // Boardroom table verified image
    caseStudy: 'Equipped Groww’s executive suite and boardroom chambers. Designed custom 12-meter American Walnut Summit conference tables with motorized pop-up electrical hubs, and premium Burma Teak Apex command desks.'
  }
];

// Expanded 16 customer reviews (mix of text, workspace photos, office settings)
export const VISUAL_REVIEWS = [
  {
    id: 1,
    name: 'Gaurav Sen',
    company: 'InterviewReady (Founder)',
    rating: 5,
    text: 'Save your posture before it is too late. The Astra chair is the first ergonomic setup where I do not feel tailbone strain after 8 hours of video editing and coding.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    setupImage: 'https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 2,
    name: 'Rashmi Sinha',
    company: 'ScribeStudio (UX Lead)',
    rating: 5,
    text: 'The American Oak finish on the standing desk is a masterpiece. Transitioning from sitting to standing is butter smooth, keeping my creative focus completely uninterrupted.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    setupImage: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 3,
    name: 'Abhishek Roy',
    company: 'DecentLab CTO',
    rating: 5,
    text: 'Turnkey B2B supply. The White-Glove installation team assembled 40 desks and chairs in our Delhi office in one afternoon. Absolute B2B quality.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    setupImage: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 4,
    name: 'Vikram Malhotra',
    company: 'Vanguard Ventures (VP)',
    rating: 5,
    text: 'The Burmese Teakwood Apex desk has become the absolute centerpiece of my executive cabin. The internal wiring tracks hide all the clutter.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    setupImage: 'https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 5,
    name: 'Deepika Rao',
    company: 'InnovateSpace Design (Lead Planner)',
    rating: 5,
    text: 'We equip all our corporate client layouts with ErgoSpace benches. The modular leg configuration simplifies cabling and saves footprint.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    setupImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 6,
    name: 'Nitin Kamat',
    company: 'WealthX (Founder)',
    rating: 5,
    text: 'Extremely heavy-duty tables. The Summit conference table popup docks work flawlessly every time we run board presentations.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    setupImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 7,
    name: 'Saira Banu',
    company: 'CreativeEdge Media (Director)',
    rating: 5,
    text: 'Merino Wool desk pad adds the perfect warm touch to our solid Oak desks. Mouse tracking is incredibly precise.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    setupImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 8,
    name: 'Sameer Joshi',
    company: 'Apex Tech Labs (CTO)',
    rating: 5,
    text: 'Gas spring arms completely freed up our developers desk space. Monitors slide easily to match our typing angles.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    setupImage: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 9,
    name: 'Manish Pandey',
    company: 'ScaleX (Operations)',
    rating: 5,
    text: 'The Vault storage credenza interior leather lining projects massive executive prestige. Keeps our offices quiet.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    setupImage: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 10,
    name: 'Priyanka Sen',
    company: 'Groww (HR Partner)',
    rating: 5,
    text: 'Our employees report significantly fewer instances of lower back pain since transitioning our offices to Zenith adjustable desks.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    setupImage: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 11,
    name: 'Kunal Shah',
    company: 'Cred (Founder)',
    rating: 5,
    text: 'ErgoSpace is the nearest thing to Apple designing high-performance office installations. Clean line architecture at its absolute best.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    setupImage: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 12,
    name: 'Divya Iyer',
    company: 'Razorpay (Senior Designer)',
    rating: 5,
    text: 'The Astra chair synchro-tilt recline angle keeps our posture calibrated perfectly during intense design sprints.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    setupImage: 'https://images.unsplash.com/photo-1612372606404-0ab33e7187ee?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 13,
    name: 'Anirudh Bose',
    company: 'HedgeFlow (Quantitative Dev)',
    rating: 5,
    text: 'The dual-motor height adjustments on the Zenith desk are silent and heavy-duty. Being able to stand during complex mathematical modeling sessions keeps my mind sharp.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    setupImage: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 14,
    name: 'Meera Jasmine',
    company: 'Studio Outline (Principal Architect)',
    rating: 5,
    text: 'As architects, we critique every line. ErgoSpace excels in visual balance, premium joinery, and structural safety. The sustainable solid Oak desk top is a masterclass in materials.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    setupImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 15,
    name: 'Rohit Kapoor',
    company: 'Nexon Systems (Chief Design Officer)',
    rating: 5,
    text: 'Turnkey boardroom engineering. The Summit tables pop-up motorized connectivity docks and gold finishes fit our modern executive environment perfectly.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    setupImage: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 16,
    name: 'Karan Thapar',
    company: 'Apex Capital (Managing Director)',
    rating: 5,
    text: 'The Apex Burma Teakwood desk is the absolute best executive centerpiece I have seen in India. Complete structural reliability coupled with luxury corporate presence.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    setupImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80'
  }
];

export const PORTFOLIO_PROJECTS = [
  {
    "id": "partner",
    "title": "PARTNER Installation",
    "client": "PARTNER",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "rheau",
    "title": "RHEAU Installation",
    "client": "RHEAU",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "lavanya-homes",
    "title": "LAVANYA HOMES Installation",
    "client": "LAVANYA HOMES",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "nimbus",
    "title": "NIMBUS Installation",
    "client": "NIMBUS",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "a-m-and-saket-enterprises",
    "title": "A&m and Saket Enterprises Installation",
    "client": "A&m and Saket Enterprises",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "tcg-lab",
    "title": "TCG LAB Installation",
    "client": "TCG LAB",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "quattro",
    "title": "QUATTRO Installation",
    "client": "QUATTRO",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "unibiz",
    "title": "UNIBIZ Installation",
    "client": "UNIBIZ",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "o-p-jindal-global-university",
    "title": "O.P.JINDAL GLOBAL UNIVERSITY Installation",
    "client": "O.P.JINDAL GLOBAL UNIVERSITY",
    "category": "Workstations Layout",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Ergonomic Chair",
      "Modular workstation",
      "Office Furniture"
    ],
    "description": "Completed setup featuring ergonomic chair , modular workstation ,office furniture for the organization.",
    "image": "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "grynow",
    "title": "GRYNOW Installation",
    "client": "GRYNOW",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "rolif-india",
    "title": "ROLIF INDIA Installation",
    "client": "ROLIF INDIA",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1612372606404-0ab33e7187ee?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "jamia-hamdard-university",
    "title": "Jamia Hamdard University Installation",
    "client": "Jamia Hamdard University",
    "category": "Institutional / Educational",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1517502884422-41eaaced0168?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "tossido-retail-store",
    "title": "Tossido Retail Store Installation",
    "client": "Tossido Retail Store",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "hotel-polo-towers",
    "title": "Hotel Polo Towers Installation",
    "client": "Hotel Polo Towers",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "inframart",
    "title": "INFRAMART Installation",
    "client": "INFRAMART",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "ozone",
    "title": "OZONE Installation",
    "client": "OZONE",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "everest-group",
    "title": "EVEREST GROUP Installation",
    "client": "EVEREST GROUP",
    "category": "Conference & Meeting",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Meeting Table",
      "Office Furniture"
    ],
    "description": "Completed setup featuring meeting table, office furniture for the organization.",
    "image": "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "op-jindal-admission-office",
    "title": "OP JINDAL ADMISSION OFFICE Installation",
    "client": "OP JINDAL ADMISSION OFFICE",
    "category": "Workstations Layout",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "workstation",
      "office furniture"
    ],
    "description": "Completed setup featuring workstation, office furniture for the organization.",
    "image": "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "alvarez-marsal",
    "title": "Alvarez & Marsal Installation",
    "client": "Alvarez & Marsal",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "credit-saison",
    "title": "CREDIT SAISON Installation",
    "client": "CREDIT SAISON",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "tata-micron",
    "title": "TATA MICRON Installation",
    "client": "TATA MICRON",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "vivekananda-institute-of-professional-studies",
    "title": "Vivekananda Institute Of Professional Studies Installation",
    "client": "Vivekananda Institute Of Professional Studies",
    "category": "Institutional / Educational",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "godrej-a-m-site",
    "title": "GODREJ -A&M SITE Installation",
    "client": "GODREJ -A&M SITE",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1612372606404-0ab33e7187ee?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "raj-unocal",
    "title": "RAJ UNOCAL Installation",
    "client": "RAJ UNOCAL",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1517502884422-41eaaced0168?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "indusnet",
    "title": "INDUSNET Installation",
    "client": "INDUSNET",
    "category": "Lounge & Cafe",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Lounge area",
      "furniture"
    ],
    "description": "Completed setup featuring lounge area, furniture for the organization.",
    "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "apollo-hospital",
    "title": "APOLLO HOSPITAL Installation",
    "client": "APOLLO HOSPITAL",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "fujisilvertech",
    "title": "FUJISILVERTECH Installation",
    "client": "FUJISILVERTECH",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "jindal-stainless-steel",
    "title": "JINDAL STAINLESS STEEL Installation",
    "client": "JINDAL STAINLESS STEEL",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "kashvi-group",
    "title": "KASHVI GROUP Installation",
    "client": "KASHVI GROUP",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "the-indian-garage-company",
    "title": "THE INDIAN GARAGE COMPANY Installation",
    "client": "THE INDIAN GARAGE COMPANY",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "ekaya",
    "title": "EKAYA Installation",
    "client": "EKAYA",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "inalfa",
    "title": "INALFA Installation",
    "client": "INALFA",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "cimet",
    "title": "CIMET Installation",
    "client": "CIMET",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "op-jindal-examination-office",
    "title": "OP JINDAL EXAMINATION OFFICE Installation",
    "client": "OP JINDAL EXAMINATION OFFICE",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "somani",
    "title": "SOMANI Installation",
    "client": "SOMANI",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1612372606404-0ab33e7187ee?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "heritage-school",
    "title": "HERITAGE SCHOOL Installation",
    "client": "HERITAGE SCHOOL",
    "category": "Institutional / Educational",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1517502884422-41eaaced0168?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "upgrad",
    "title": "UPGRAD Installation",
    "client": "UPGRAD",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "clove-dental",
    "title": "CLOVE DENTAL Installation",
    "client": "CLOVE DENTAL",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "airtel-africa",
    "title": "AIRTEL AFRICA Installation",
    "client": "AIRTEL AFRICA",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "op-jindal-registrar-office",
    "title": "OP Jindal Registrar Office Installation",
    "client": "OP Jindal Registrar Office",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "vibgyor",
    "title": "VIBGYOR Installation",
    "client": "VIBGYOR",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "masin",
    "title": "Masin Installation",
    "client": "Masin",
    "category": "Workstations Layout",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Workstation",
      "office workstation",
      "office chair",
      "executive chair",
      "office furniture",
      "cafe furniture",
      "cafeteria furniture",
      "lounge furniture"
    ],
    "description": "Completed setup featuring workstation, office workstation, office chair, executive chair, office furniture, cafe furniture, cafeteria furniture, lounge furniture for the organization.",
    "image": "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "pernod-ricard",
    "title": "Pernod Ricard Installation",
    "client": "Pernod Ricard",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "op-jindal-university-vc-cabin",
    "title": "OP JINDAL UNIVERSITY VC CABIN Installation",
    "client": "OP JINDAL UNIVERSITY VC CABIN",
    "category": "Workstations Layout",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Workstation",
      "office workstation",
      "office chair",
      "executive chair",
      "office furniture",
      "cafe furniture",
      "cafeteria furniture",
      "lounge furniture",
      "meeting room table",
      "conference table"
    ],
    "description": "Completed setup featuring workstation, office workstation, office chair, executive chair, office furniture, cafe furniture, cafeteria furniture, lounge furniture, meeting room table, conference table for the organization.",
    "image": "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "astound-commerce",
    "title": "Astound Commerce Installation",
    "client": "Astound Commerce",
    "category": "Workstations Layout",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Workstation",
      "office workstation",
      "office chair",
      "executive chair",
      "office furniture",
      "cafe furniture",
      "cafeteria furniture",
      "lounge furniture",
      "meeting room table",
      "conference table"
    ],
    "description": "Completed setup featuring workstation, office workstation, office chair, executive chair, office furniture, cafe furniture, cafeteria furniture, lounge furniture, meeting room table, conference table for the organization.",
    "image": "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "auto-zone",
    "title": "Auto Zone Installation",
    "client": "Auto Zone",
    "category": "Workstations Layout",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Ergospace project",
      "project of ergospace",
      "Office furniture",
      "office chair",
      "office workstation"
    ],
    "description": "Completed setup featuring ergospace project, project of ergospace, office furniture, office chair, office workstation for the organization.",
    "image": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "ambica-steel",
    "title": "Ambica Steel Installation",
    "client": "Ambica Steel",
    "category": "Workstations Layout",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Workstation",
      "office workstation",
      "office chair",
      "executive chair",
      "office furniture",
      "cafe furniture",
      "cafeteria furniture",
      "lounge furniture",
      "meeting room table",
      "conference table"
    ],
    "description": "Completed setup featuring workstation, office workstation, office chair, executive chair, office furniture, cafe furniture, cafeteria furniture, lounge furniture, meeting room table, conference table for the organization.",
    "image": "https://images.unsplash.com/photo-1612372606404-0ab33e7187ee?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "your-space-clubhouse",
    "title": "YOUR SPACE CLUBHOUSE Installation",
    "client": "YOUR SPACE CLUBHOUSE",
    "category": "Workstations Layout",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Workstation",
      "office workstation",
      "office chair",
      "executive chair",
      "office furniture",
      "cafe furniture",
      "cafeteria furniture",
      "lounge furniture",
      "meeting room table",
      "conference table"
    ],
    "description": "Completed setup featuring workstation, office workstation, office chair, executive chair, office furniture, cafe furniture, cafeteria furniture, lounge furniture, meeting room table, conference table for the organization.",
    "image": "https://images.unsplash.com/photo-1517502884422-41eaaced0168?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "nestle-r-d-manesar",
    "title": "Nestle R&D Manesar Installation",
    "client": "Nestle R&D Manesar",
    "category": "Corporate Office",
    "location": "Gurugram, HR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "jspl",
    "title": "JSPL Installation",
    "client": "JSPL",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "op-jindal-university-student-lounge",
    "title": "OP JINDAL UNIVERSITY STUDENT LOUNGE Installation",
    "client": "OP JINDAL UNIVERSITY STUDENT LOUNGE",
    "category": "Institutional / Educational",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "ergospace project",
      "ergospace client",
      "office furniture",
      "office furniture manufacture",
      "best office furniture in Delhi NCR"
    ],
    "description": "Completed setup featuring ergospace project, ergospace client, office furniture, office furniture manufacture, best office furniture in delhi ncr for the organization.",
    "image": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "cargill",
    "title": "cargill Installation",
    "client": "cargill",
    "category": "Workstations Layout",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Work station",
      "Office Table",
      "Office furniture",
      "Workstation",
      "office workstation",
      "office chair",
      "executive chair",
      "office furniture",
      "cafe furniture",
      "cafeteria furniture",
      "lounge furniture",
      "meeting room table",
      "conference table"
    ],
    "description": "Completed setup featuring work station, office table, office furniture, workstation, office workstation, office chair, executive chair, office furniture, cafe furniture, cafeteria furniture, lounge furniture, meeting room table, conference table for the organization.",
    "image": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "garage-society",
    "title": "Garage society Installation",
    "client": "Garage society",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Storage Table",
      "Storage table",
      "Work Station",
      "Office Work Station"
    ],
    "description": "Completed setup featuring office storage table, storage table, work station, office work station for the organization.",
    "image": "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "lg-durgapur",
    "title": "LG (Durgapur) Installation",
    "client": "LG (Durgapur)",
    "category": "Conference & Meeting",
    "location": "Durgapur, WB",
    "size": "Commercial Space",
    "itemsUsed": [
      "Work Station",
      "Table",
      "Chair",
      "Meeting Table",
      "Conference Table"
    ],
    "description": "Completed setup featuring work station, table, chair, meeting table, conference table for the organization.",
    "image": "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "daikin",
    "title": "Daikin Installation",
    "client": "Daikin",
    "category": "Conference & Meeting",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Work Station",
      "Table",
      "Chair",
      "Office Table",
      "Conference Table",
      "Panasonic Conference Table"
    ],
    "description": "Completed setup featuring work station, table, chair, office table, conference table, panasonic conference table for the organization.",
    "image": "https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "panasonic",
    "title": "Panasonic Installation",
    "client": "Panasonic",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Work Station",
      "Office Furniture",
      "Office Table",
      "Office Chair",
      "Work Station With Storage",
      "modular office Furniture",
      "Nestle Work Station"
    ],
    "description": "Completed setup featuring work station, office furniture, office table, office chair, work station with storage, modular office furniture, nestle work station for the organization.",
    "image": "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "nestle",
    "title": "Nestle Installation",
    "client": "Nestle",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture",
      "Modular Office Furniture",
      "Work Station",
      "Office Work Station",
      "Work Station With Storage",
      "Table",
      "Office Table",
      "Lenskart Work Station"
    ],
    "description": "Completed setup featuring office furniture, modular office furniture, work station, office work station, work station with storage, table, office table, lenskart work station for the organization.",
    "image": "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "lenskart",
    "title": "Lenskart Installation",
    "client": "Lenskart",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Work Station",
      "Modular Work Station",
      "Office Furniture",
      "Table",
      "Office Table",
      "Chair",
      "Office Table",
      "Flipkart Work Station"
    ],
    "description": "Completed setup featuring work station, modular work station, office furniture, table, office table, chair, office table, flipkart work station for the organization.",
    "image": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "flipkart",
    "title": "Flipkart Installation",
    "client": "Flipkart",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1612372606404-0ab33e7187ee?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "delhi-secretariat",
    "title": "Delhi secretariat Installation",
    "client": "Delhi secretariat",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Work Station",
      "Modular Work Station",
      "Office Table",
      "Office Chair",
      "Chair",
      "Table",
      "Magic Auto Work Station"
    ],
    "description": "Completed setup featuring work station, modular work station, office table, office chair, chair, table, magic auto work station for the organization.",
    "image": "https://images.unsplash.com/photo-1517502884422-41eaaced0168?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "magic-auto",
    "title": "Magic Auto Installation",
    "client": "Magic Auto",
    "category": "Corporate Office",
    "location": "Noida, UP",
    "size": "Commercial Space",
    "itemsUsed": [
      "Work Station",
      "Modular Work Station",
      "Office Table",
      "Office Chair",
      "Table",
      "Chair",
      "SSI Work Station Noida"
    ],
    "description": "Completed setup featuring work station, modular work station, office table, office chair, table, chair, ssi work station noida for the organization.",
    "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "ssi-noida",
    "title": "SSI Noida Installation",
    "client": "SSI Noida",
    "category": "Reception Area",
    "location": "Noida, UP",
    "size": "Commercial Space",
    "itemsUsed": [
      "Modular Office Furniture",
      "Reception Table",
      "HEXAGON Office Furniture"
    ],
    "description": "Completed setup featuring modular office furniture, reception table, hexagon office furniture for the organization.",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "hexagon-geo",
    "title": "Hexagon Geo Installation",
    "client": "Hexagon Geo",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture",
      "Modular Office Furniture",
      "Office Chair",
      "Office Table",
      "Table",
      "Chair",
      "Work Station"
    ],
    "description": "Completed setup featuring office furniture, modular office furniture, office chair, office table, table, chair, work station for the organization.",
    "image": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "stonecraft",
    "title": "Stonecraft Installation",
    "client": "Stonecraft",
    "category": "Corporate Office",
    "location": "Noida, UP",
    "size": "Commercial Space",
    "itemsUsed": [
      "Modular Office Furniture",
      "Office Furniture",
      "Modular Work Station",
      "Work Station",
      "Office Table",
      "Office Chair",
      "Table",
      "Chair",
      "ACS Work Station Noida"
    ],
    "description": "Completed setup featuring modular office furniture, office furniture, modular work station, work station, office table, office chair, table, chair, acs work station noida for the organization.",
    "image": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "acs-noida",
    "title": "ACS Noida Installation",
    "client": "ACS Noida",
    "category": "Corporate Office",
    "location": "Noida, UP",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Table",
      "Office Chair",
      "Table",
      "Chair",
      "Modular Office Furniture",
      "Modular Work Station",
      "Work Station",
      "AIHP Work Station"
    ],
    "description": "Completed setup featuring office table, office chair, table, chair, modular office furniture, modular work station, work station, aihp work station for the organization.",
    "image": "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "aihp-hemp-eros-city-square",
    "title": "AIHP, Hemp (Eros City Square) Installation",
    "client": "AIHP, Hemp (Eros City Square)",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "ambe-group-gorakhpur-food-court",
    "title": "Ambe Group (Gorakhpur Food Court) Installation",
    "client": "Ambe Group (Gorakhpur Food Court)",
    "category": "Workstations Layout",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Workstation",
      "office workstation",
      "office chair",
      "executive chair",
      "office furniture",
      "cafe furniture",
      "cafeteria furniture",
      "lounge furniture",
      "meeting room table",
      "conference table"
    ],
    "description": "Completed setup featuring workstation, office workstation, office chair, executive chair, office furniture, cafe furniture, cafeteria furniture, lounge furniture, meeting room table, conference table for the organization.",
    "image": "https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "delhi-daredevils",
    "title": "Delhi Daredevils Installation",
    "client": "Delhi Daredevils",
    "category": "Workstations Layout",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Workstation",
      "office workstation",
      "office chair",
      "executive chair",
      "office furniture",
      "cafe furniture",
      "cafeteria furniture",
      "lounge furniture",
      "meeting room table",
      "conference table"
    ],
    "description": "Completed setup featuring workstation, office workstation, office chair, executive chair, office furniture, cafe furniture, cafeteria furniture, lounge furniture, meeting room table, conference table for the organization.",
    "image": "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "zomato",
    "title": "Zomato Installation",
    "client": "Zomato",
    "category": "Lounge & Cafe",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Modular Office Furniture",
      "Office Furniture",
      "Cafeteria Furniture",
      "Cafeteria Table",
      "Cafeteria Chair",
      "Vatika Cafeteria Furniture"
    ],
    "description": "Completed setup featuring modular office furniture, office furniture, cafeteria furniture, cafeteria table, cafeteria chair, vatika cafeteria furniture for the organization.",
    "image": "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "vatika",
    "title": "Vatika Installation",
    "client": "Vatika",
    "category": "Conference & Meeting",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture",
      "Modular Office Furniture",
      "Conference Table",
      "Conference Chair",
      "Office Furniture",
      "Office Table",
      "Office Chair",
      "Tribeca Conference Room"
    ],
    "description": "Completed setup featuring office furniture, modular office furniture, conference table, conference chair, office furniture, office table, office chair, tribeca conference room for the organization.",
    "image": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "tribeca",
    "title": "Tribeca Installation",
    "client": "Tribeca",
    "category": "Lounge & Cafe",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture",
      "Modular Office Furniture",
      "Cafeteria Furniture",
      "Cafeteria Chair",
      "Cafeteria Table",
      "FREECHARGE Cafeteria Furniture"
    ],
    "description": "Completed setup featuring office furniture, modular office furniture, cafeteria furniture, cafeteria chair, cafeteria table, freecharge cafeteria furniture for the organization.",
    "image": "https://images.unsplash.com/photo-1612372606404-0ab33e7187ee?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "freecharge-bangalore",
    "title": "FREECHARGE BANGALORE Installation",
    "client": "FREECHARGE BANGALORE",
    "category": "Corporate Office",
    "location": "Bangalore, KA",
    "size": "Commercial Space",
    "itemsUsed": [
      "Work Station",
      "Modular Work Station",
      "Office Furniture",
      "Office Table",
      "Office Chair",
      "Office Work Table",
      "GE Power Work Station"
    ],
    "description": "Completed setup featuring work station, modular work station, office furniture, office table, office chair, office work table, ge power work station for the organization.",
    "image": "https://images.unsplash.com/photo-1517502884422-41eaaced0168?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "ge-power-india-limited",
    "title": "GE Power India Limited Installation",
    "client": "GE Power India Limited",
    "category": "Conference & Meeting",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Work Station",
      "Modular Work Station",
      "Office Table",
      "Office Chair",
      "Conference Table",
      "Modular Conference Table",
      "Hitachi Conference Table"
    ],
    "description": "Completed setup featuring work station, modular work station, office table, office chair, conference table, modular conference table, hitachi conference table for the organization.",
    "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "hitachi-neemrana",
    "title": "Hitachi Neemrana Installation",
    "client": "Hitachi Neemrana",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture",
      "Modular Office Furniture",
      "Office Table",
      "Binary Global Limited Furniture"
    ],
    "description": "Completed setup featuring office furniture, modular office furniture, office table, binary global limited furniture for the organization.",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "binary-global-limited",
    "title": "Binary Global Limited Installation",
    "client": "Binary Global Limited",
    "category": "Workstations Layout",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Workstation",
      "office workstation",
      "office chair",
      "executive chair",
      "office furniture",
      "cafe furniture",
      "cafeteria furniture",
      "lounge furniture",
      "meeting room table",
      "conference table"
    ],
    "description": "Completed setup featuring workstation, office workstation, office chair, executive chair, office furniture, cafe furniture, cafeteria furniture, lounge furniture, meeting room table, conference table for the organization.",
    "image": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "systra",
    "title": "Systra Installation",
    "client": "Systra",
    "category": "Workstations Layout",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Workstation",
      "office workstation",
      "office chair",
      "executive chair",
      "office furniture",
      "cafe furniture",
      "cafeteria furniture",
      "lounge furniture",
      "meeting room table",
      "conference table"
    ],
    "description": "Completed setup featuring workstation, office workstation, office chair, executive chair, office furniture, cafe furniture, cafeteria furniture, lounge furniture, meeting room table, conference table for the organization.",
    "image": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "skootr-global",
    "title": "Skootr Global Installation",
    "client": "Skootr Global",
    "category": "Corporate Office",
    "location": "Gurugram, HR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Chair",
      "Office Table",
      "Resolver Gurgaon"
    ],
    "description": "Completed setup featuring office chair, office table, resolver gurgaon for the organization.",
    "image": "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "resolver-gurgaon",
    "title": "Resolver, Gurgaon Installation",
    "client": "Resolver, Gurgaon",
    "category": "Corporate Office",
    "location": "Gurugram, HR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Work Station",
      "Modular Office Station",
      "Office Table",
      "Office Chair",
      "Work Station",
      "Oyo Work Station"
    ],
    "description": "Completed setup featuring office work station, modular office station, office table, office chair, work station, oyo work station for the organization.",
    "image": "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "oyo",
    "title": "Oyo Installation",
    "client": "Oyo",
    "category": "Workstations Layout",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Workstation",
      "office workstation",
      "office chair",
      "executive chair",
      "office furniture",
      "cafe furniture",
      "cafeteria furniture",
      "lounge furniture",
      "meeting room table",
      "conference table"
    ],
    "description": "Completed setup featuring workstation, office workstation, office chair, executive chair, office furniture, cafe furniture, cafeteria furniture, lounge furniture, meeting room table, conference table for the organization.",
    "image": "https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "op-jindal-university",
    "title": "OP Jindal university Installation",
    "client": "OP Jindal university",
    "category": "Workstations Layout",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Workstation",
      "office workstation",
      "office chair",
      "executive chair",
      "office furniture",
      "cafe furniture",
      "cafeteria furniture",
      "lounge furniture",
      "meeting room table",
      "conference table"
    ],
    "description": "Completed setup featuring workstation, office workstation, office chair, executive chair, office furniture, cafe furniture, cafeteria furniture, lounge furniture, meeting room table, conference table for the organization.",
    "image": "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "itc-bangalore",
    "title": "ITC, Bangalore Installation",
    "client": "ITC, Bangalore",
    "category": "Workstations Layout",
    "location": "Bangalore, KA",
    "size": "Commercial Space",
    "itemsUsed": [
      "Workstation",
      "office workstation",
      "office chair",
      "executive chair",
      "office furniture",
      "cafe furniture",
      "cafeteria furniture",
      "lounge furniture",
      "meeting room table",
      "conference table"
    ],
    "description": "Completed setup featuring workstation, office workstation, office chair, executive chair, office furniture, cafe furniture, cafeteria furniture, lounge furniture, meeting room table, conference table for the organization.",
    "image": "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "aihp-chargepoint",
    "title": "AIHP, Chargepoint Installation",
    "client": "AIHP, Chargepoint",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture"
    ],
    "description": "Completed custom turnkey premium workspace planning and office furniture supply.",
    "image": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "dell",
    "title": "Dell Installation",
    "client": "Dell",
    "category": "Conference & Meeting",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Work Station",
      "Modular Work Station",
      "Office Chair",
      "Office Table",
      "Conference Table",
      "Conference Furniture",
      "Dell Conference Furniture"
    ],
    "description": "Completed setup featuring work station, modular work station, office chair, office table, conference table, conference furniture, dell conference furniture for the organization.",
    "image": "https://images.unsplash.com/photo-1612372606404-0ab33e7187ee?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "mansionaly-go-hive",
    "title": "Mansionaly, Go Hive Installation",
    "client": "Mansionaly, Go Hive",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Modular Work Station",
      "Work Station",
      "Office Chair",
      "Office Table",
      "Chair",
      "Table",
      "Office Furniture",
      "Mansionaly Office Furniture"
    ],
    "description": "Completed setup featuring modular work station, work station, office chair, office table, chair, table, office furniture, mansionaly office furniture for the organization.",
    "image": "https://images.unsplash.com/photo-1517502884422-41eaaced0168?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "abn-amro",
    "title": "ABN Amro Installation",
    "client": "ABN Amro",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Work Station",
      "Modular Work Station",
      "Office Furniture",
      "Office Work Station",
      "Work Station With Storage",
      "ABM Work Station"
    ],
    "description": "Completed setup featuring work station, modular work station, office furniture, office work station, work station with storage, abm work station for the organization.",
    "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "netc-dwarka",
    "title": "NETC Dwarka Installation",
    "client": "NETC Dwarka",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Work Station",
      "Modular Work Station",
      "Office Table",
      "Office Chair",
      "Work Station With Storage",
      "NETC Dwarka Work Station",
      "Office Furniture",
      "Modular Office Work Station"
    ],
    "description": "Completed setup featuring office work station, modular work station, office table, office chair, work station with storage, netc dwarka work station, office furniture, modular office work station for the organization.",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "axtria",
    "title": "Axtria Installation",
    "client": "Axtria",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture",
      "Office Work Station",
      "Work Station",
      "Modular Work Station",
      "Office Table",
      "Office Chair",
      "Work Station With Storage",
      "Axtria Work Station",
      "Modular Office Work Station"
    ],
    "description": "Completed setup featuring office furniture, office work station, work station, modular work station, office table, office chair, work station with storage, axtria work station, modular office work station for the organization.",
    "image": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "ampliphone",
    "title": "Ampliphone Installation",
    "client": "Ampliphone",
    "category": "Lounge & Cafe",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Modular Office Furniture",
      "Office Furniture",
      "Cafeteria Table",
      "Cafeteria Chair",
      "Ampliphone Cafeteria Furniture",
      "Cafeteria Furniture Cafeteria Modular Furniture"
    ],
    "description": "Completed setup featuring modular office furniture, office furniture, cafeteria table, cafeteria chair, ampliphone cafeteria furniture, cafeteria furniture cafeteria modular furniture for the organization.",
    "image": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "deloitte-delhi",
    "title": "Deloitte, Delhi Installation",
    "client": "Deloitte, Delhi",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Work Station",
      "Modular Work Station",
      "Office Furniture",
      "Office Table",
      "Office Chair",
      "Work Station with Storage",
      "Deloitte Work Station"
    ],
    "description": "Completed setup featuring work station, modular work station, office furniture, office table, office chair, work station with storage, deloitte work station for the organization.",
    "image": "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "dlf-hotel",
    "title": "DLF Hotel Installation",
    "client": "DLF Hotel",
    "category": "Lounge & Cafe",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Work Station",
      "Modular Work Station",
      "Office Furniture",
      "Cafeteria Furniture",
      "Cafeteria Table",
      "Cafeteria Chair",
      "DLF Hotel Cafeteria Furniture",
      "Modular Office Work Station",
      "Modular Office Work place"
    ],
    "description": "Completed setup featuring work station, modular work station, office furniture, cafeteria furniture, cafeteria table, cafeteria chair, dlf hotel cafeteria furniture, modular office work station, modular office work place for the organization.",
    "image": "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "everest",
    "title": "Everest Installation",
    "client": "Everest",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Work Station",
      "Modular Work Station",
      "Office Furniture",
      "Office Table",
      "office Chair",
      "Work Station With Storage",
      "Work Station of Everest",
      "Modular office Work Station",
      "Modular Office Work Place"
    ],
    "description": "Completed setup featuring work station, modular work station, office furniture, office table, office chair, work station with storage, work station of everest , modular office work station, modular office work place for the organization.",
    "image": "https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "floor-daniel-gurgaon",
    "title": "Floor Daniel, Gurgaon Installation",
    "client": "Floor Daniel, Gurgaon",
    "category": "Workstations Layout",
    "location": "Gurugram, HR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Work Station",
      "Modular Work Station",
      "Office Chair",
      "Office Table",
      "Work Station With Storage",
      "Work Station of Floor Daniel",
      "Modular office Work Station",
      "Modular Office Work place",
      "Modular Workstation"
    ],
    "description": "Completed setup featuring work station, modular work station, office chair, office table, work station with storage, work station of floor daniel, modular office work station, modular office work place, modular workstation for the organization.",
    "image": "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "fullerton-gurgaon",
    "title": "Fullerton, Gurgaon Installation",
    "client": "Fullerton, Gurgaon",
    "category": "Corporate Office",
    "location": "Gurugram, HR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Work Station",
      "Modular Work Station",
      "Work Station With Storage",
      "Office Furniture",
      "Office Chair",
      "Office Table",
      "Fullerton Office Furniture",
      "Modular Work Station For Office",
      "Modular Work Place For Office"
    ],
    "description": "Completed setup featuring work station, modular work station, work station with storage, office furniture, office chair, office table, fullerton office furniture, modular work station for office, modular work place for office for the organization.",
    "image": "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "ge-infra-india-pvt-ltd",
    "title": "GE Infra India Pvt. Ltd. Installation",
    "client": "GE Infra India Pvt. Ltd.",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Office Furniture",
      "Modular Office Furniture",
      "Work Station",
      "Work Station With Storage",
      "Office Chair",
      "Office Table",
      "Work Station of GE Infra India",
      "Modular Work place For office",
      "Modular Work Station For Office"
    ],
    "description": "Completed setup featuring office furniture, modular office furniture, work station, work station with storage, office chair, office table, work station of ge infra india, modular work place for office, modular work station for office for the organization.",
    "image": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "jmj-original",
    "title": "JMJ- Original Installation",
    "client": "JMJ- Original",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Work Station",
      "Work Station With Storage",
      "Modular Work Station",
      "Office Table",
      "Office Furniture",
      "Work Station Of Group M",
      "Modular Office Work Station",
      "Modular office Work Place"
    ],
    "description": "Completed setup featuring work station, work station with storage, modular work station, office table, office furniture, work station of group m, modular office work station, modular office work place for the organization.",
    "image": "https://images.unsplash.com/photo-1612372606404-0ab33e7187ee?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "l-t",
    "title": "L&T Installation",
    "client": "L&T",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Work Station",
      "Work Station with Storage",
      "Office Table Work Station Of L&T",
      "Office Chair",
      "Office Work Place"
    ],
    "description": "Completed setup featuring work station, work station with storage, office table work station of l&t, office chair, office work place for the organization.",
    "image": "https://images.unsplash.com/photo-1517502884422-41eaaced0168?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "mankind",
    "title": "Mankind Installation",
    "client": "Mankind",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Work Station",
      "Work Station With Storage",
      "Office Chair",
      "Office Table",
      "Modular Work Station",
      "Work Station of Mankind"
    ],
    "description": "Completed setup featuring work station, work station with storage, office chair, office table, modular work station , work station of mankind for the organization.",
    "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "mgf",
    "title": "MGF Installation",
    "client": "MGF",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Work Station",
      "Modular Work Station",
      "Work Station With Storage",
      "Office Table",
      "Work Station of MGF"
    ],
    "description": "Completed setup featuring work station, modular work station, work station with storage, office table, work station of mgf for the organization.",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "mts",
    "title": "MTS Installation",
    "client": "MTS",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Work Station",
      "Modular Work Station",
      "Work Station with Storage",
      "Office Table",
      "Office Chair",
      "Work Station Of MTS"
    ],
    "description": "Completed setup featuring work station, modular work station, work station with storage, office table, office chair, work station of mts for the organization.",
    "image": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80"
  },
  {
    "id": "rapid",
    "title": "Rapid Installation",
    "client": "Rapid",
    "category": "Corporate Office",
    "location": "Delhi NCR",
    "size": "Commercial Space",
    "itemsUsed": [
      "Work Station",
      "Modular Work Station",
      "Work Station With Storage",
      "Office Chair",
      "office Table",
      "Work Station of Rapid"
    ],
    "description": "Completed setup featuring work station, modular work station, work station with storage, office chair, office table, work station of rapid for the organization.",
    "image": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80"
  }
];
