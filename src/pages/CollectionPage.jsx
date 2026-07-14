import React, { useState, useEffect } from 'react';
import { SlidersHorizontal, Check, FileText } from 'lucide-react';

// ==========================================
// 1. ERGONOMIC CHAIRS DATA
// ==========================================
const ERGONOMIC_CHAIRS = [
  {
    id: 'feather-chair',
    name: 'Feather Ergonomic Chair',
    tagline: 'Calibrated mesh suspension designed for weightless orthopedic support.',
    description: 'A masterclass in responsive materials, the Feather chair features an adaptive elastomer frame that self-adjusts to your spinal curvature in real time.',
    images: {
      front: '/feather_front.jpg',
      side: '/feather_side.jpg',
      back: '/feather_back.jpg'
    },
    features: [
      { title: 'Adaptive Lumbar Support', desc: 'Independent lumbar pads respond to microscopic shifts in sitting posture.' },
      { title: 'Premium Breathable Mesh', desc: 'Elastomeric mesh provides optimal breathability and weight distribution.' },
      { title: 'Multi Tilt Mechanism', desc: 'Calibrate height, depth, and angle to eliminate shoulder strain.' }
    ]
  },
  {
    id: 'flow-chair',
    name: 'Flow High-Back Chair',
    tagline: 'High-tension backrest matrix finished in polished aluminum accents.',
    description: 'Designed for executive workspaces, the Flow chair combines structural rigidity with elegant contouring, promoting long-cycle focus.',
    images: {
      front: '/flow_front.png',
      back: '/flow_back.png'
    },
    features: [
      { title: 'Adaptive Lumbar Support', desc: 'Synchro-tilt lumbar support adapts to your leaning posture.' },
      { title: 'Premium Breathable Mesh', desc: 'Elastomeric tensile mesh provides continuous cooling during focus cycles.' },
      { title: 'Multi Tilt Mechanism', desc: 'Lock the recline in multiple positions for customized day-long comfort.' }
    ]
  },
  {
    id: 'glanza-chair',
    name: 'Glanza Executive Chair',
    tagline: 'Double-arched mesh suspension finished with executive lumbar alignment.',
    description: 'Engineering comfort into corporate suites. The Glanza features double-arched mesh framing that provides active, targeted alignment to the upper and lower lumbar zones.',
    images: {
      front: '/glanza_front.jpg',
      side: '/glanza_side.jpg',
      back: '/glanza_back.jpg'
    },
    features: [
      { title: 'Adaptive Lumbar Support', desc: 'Double-arched composite structure matches the spine\'s natural S-curve.' },
      { title: 'Premium Breathable Mesh', desc: 'Heavy-duty tensile weave prevents friction and heat build-up.' },
      { title: 'Multi Tilt Mechanism', desc: 'Synchro-tilt lockable recline handles both active tasking and relaxed thinking.' }
    ]
  },
  {
    id: 'hilite-chair',
    name: 'Hilite Advanced Task Chair',
    tagline: 'Architectural silhouette engineered for high-performance workplaces.',
    description: 'Featuring a distinct hook-style headrest frame, the Hilite task chair provides targeted support to the thoracic spine, minimizing neck fatigue.',
    images: {
      front: '/hilite_front.png',
      side: '/hilite_side.png',
      back: '/hilite_back.png'
    },
    features: [
      { title: 'Adaptive Lumbar Support', desc: 'Advanced active spring-loaded lumbar tracking systems.' },
      { title: 'Premium Breathable Mesh', desc: 'High-density tensile mesh weave prevents sagging over years.' },
      { title: 'Multi Tilt Mechanism', desc: 'Full-featured recline calibration with tension adjustment dials.' }
    ]
  },
  {
    id: 'hola-chair',
    name: 'Hola Compact Task Chair',
    tagline: 'Minimalist mesh suspension designed for home offices and flex tables.',
    description: 'A compact and lightweight task chair with a small footprint. Tucks fully underneath standard desks to maximize space.',
    images: {
      front: '/element_chair.png'
    },
    features: [
      { title: 'Adaptive Lumbar Support', desc: 'Curved mesh backrest aligns naturally with the lumbar spine.' },
      { title: 'Premium Breathable Mesh', desc: 'Ultra-durable, highly breathable composite polymer mesh.' },
      { title: 'Multi Tilt Mechanism', desc: 'Smooth single-lever recline and height adjustments.' }
    ]
  },
  {
    id: 'zoom-chair',
    name: 'Zoom Active Focus Chair',
    tagline: 'Crescent headrest and T-shaped alignment controls for active workspaces.',
    description: 'Calibrated for intense design and development workflows. The Zoom task chair features a crescent headrest and mechanical T-adjusters to keep your focus perfectly locked.',
    images: {
      front: '/zoom_front.jpg',
      side: '/zoom_side.jpg'
    },
    features: [
      { title: 'Adaptive Lumbar Support', desc: 'Active T-bracket adjuster offers precise depth and vertical placement.' },
      { title: 'Premium Breathable Mesh', desc: 'Custom elastomeric blend breathes naturally while providing deep lumbar tension.' },
      { title: 'Multi Tilt Mechanism', desc: 'Rapid-tilt controls calibrate recline resistance to your body weight.' }
    ]
  }
];

// ==========================================
// 2. WORKSTATIONS DATA
// ==========================================
const WORKSTATIONS = [
  {
    id: 'curvivo-pod',
    name: 'Curvivo Collaborative Pod',
    tagline: 'Curved office pods configured for individual focus and quick team syncs.',
    image: '/coworking_space.png',
    shortCopy: 'Slightly curved organic pods featuring privacy panels and integrated cable routing. Perfect for quiet focus.',
    specs: {
      'Structure': 'Steel subframe with CNC-molded oak outer wrap',
      'Privacy Screen': 'Acoustic PET felt tiles, noise reduction coefficient 0.75',
      'Cable Routing': 'Internal cable pathways leading to central ground terminals',
      'Add-ons': 'Integrated LED desk lamp & dual USB-C charging docks'
    }
  },
  {
    id: 'linear-benching',
    name: 'Linear Benching Workstation',
    tagline: 'Modular workstation system designed for modern coding floors and trading desks.',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
    shortCopy: 'Clean modular desks aligned linearly with shared central cable tracks and acoustic felt screens.',
    specs: {
      'Structure': 'Powder-coated steel H-legs with solid white birch table top',
      'Privacy Screen': 'Movable pinable desktop panels finished in wool fabric',
      'Cable Routing': 'Under-desk folding cable basket with pop-up desktop ports',
      'Add-ons': 'Dual monitor mount tracks & slide-out CPU holders'
    }
  },
  {
    id: 'creative-clustering',
    name: 'Creative Hub Cluster',
    tagline: '120-degree desk arrangements optimized for collaborative creative sprints.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80',
    shortCopy: 'Dynamic star-shaped or hub clustering for rapid collaboration and collaborative project teams.',
    specs: {
      'Structure': 'Triangular central pillar with radial wood desktops',
      'Privacy Screen': 'Frosted acrylic desk dividers for visual privacy without light loss',
      'Cable Routing': 'Central vertical cord drop column with internal hubs',
      'Add-ons': 'Under-desk storage pedestals & mobile magnetic whiteboards'
    }
  },
  {
    id: 'focus-station',
    name: 'Focus Solo Station',
    tagline: 'High-walled private workstations designed for high-concentration research tasks.',
    image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800&q=80',
    shortCopy: 'Single-user partitioned workstations featuring built-in lighting and charging ports for private tasks.',
    specs: {
      'Structure': 'High density composite panels with walnut veneer surface',
      'Privacy Screen': 'High-sided acoustic enclosure panels (140cm height)',
      'Cable Routing': 'Hidden grommet feed to base compartment',
      'Add-ons': 'Built-in wireless phone charger & retractable bag hook'
    }
  }
];

// ==========================================
// 3. EXECUTIVE COLLECTION DATA
// ==========================================
const EXECUTIVE_COLLECTION = [
  {
    id: 'apex-desk',
    name: 'Apex Executive Command Desk',
    tagline: 'Solid Burma teakwood desk detailed with integrated cable vaults.',
    description: 'An architectural statement for the modern leader. Crafted from hand-selected Burma teak, featuring a hand-stitched leather writing blotter and soft-close storage vaults.',
    image: '/apex_desk.png',
    material: 'Burma Teakwood & Cast Aluminum',
    usage: 'CEO Cabins / Founder Suites',
    finishes: 'Natural Matte Lacquer / Dark Ebony Wood'
  },
  {
    id: 'astra-exec',
    name: 'Astra Executive Leather Chair',
    tagline: 'Top-grain executive high-back chair detailed with quilted patterns.',
    description: 'Finished in premium hand-stitched leatherite, the Astra Executive Chair combines active orthopedic support with board-level prestige.',
    image: '/astra_chair.png',
    material: 'Top-Grain Leatherite & Heavy Steel Skeleton',
    usage: 'Executive Cabins / Luxury Boardrooms',
    finishes: 'Charcoal Black / Cognac Brown / Slate Grey'
  },
  {
    id: 'summit-boardroom',
    name: 'Summit Walnut Conference Table',
    tagline: 'A commanding walnut boardroom table featuring motorized connection ports.',
    description: 'Designed for global board briefing chambers. Features a solid American Walnut surface with motorized popup panels containing electrical and HDMI docks.',
    image: '/summit_table.png',
    material: 'American Walnut & Brass Accents',
    usage: 'Corporate Boardrooms / Conference Chambers',
    finishes: 'Warm Walnut / Antique Brass / Electroplated Gold'
  }
];

// ==========================================
// 4. COLLABORATION SPACES DATA
// ==========================================
const COLLABORATION_SPACES = [
  { title: 'Acoustic Meeting Pods', desc: 'Quiet, insulated environments for virtual calls and quick discussions.', image: '/acoustic_meeting_pods.png', type: 'pods' },
  { title: 'Collaborative Media Tables', desc: 'High desks with integrated screen mounts for rapid team presentations.', image: 'https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=800&q=80', type: 'tables' },
  { title: 'Lounge Collaboration Areas', desc: 'Low sofas and modular seating designed to foster informal brainstorming.', image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80', type: 'lounge' },
  { title: 'Flexible Training Chambers', desc: 'Nesting tables and movable seating configured for dynamic learning sessions.', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80', type: 'training' }
];

// ==========================================
// 5. STORAGE & ACCESSORIES DATA
// ==========================================
const STORAGE_ACCESSORIES = [
  { id: 'pedestals', name: 'Mobile Cushion Pedestal', desc: 'Versatile under-desk storage drawers with comfortable cushion seating tops.', image: '/pedestal_details_hero.png' },
  { id: 'storage-cabinets', name: 'Modular Office Storage Cabinet', desc: 'Sleek glass-fronted and locker cabinets designed for organizing office workspaces.', image: '/storage_details_hero.png' },
  { id: 'lockers', name: 'Fortress Secure Metal Locker', desc: 'Heavy-duty steel lockers with modern keyless latch entries.', image: '/lockers_details_hero.png' },
  { id: 'credenzas', name: 'Metro Office Storage Credenza', desc: 'Modern low-profile credenzas and lateral filing systems for open offices.', image: '/credenzas_details_hero.png' },
  { id: 'file-storage', name: 'Omni Filing Storage Wardrobe', desc: 'High-density vertical storage wardrobes designed for corporate filing rooms.', image: '/filing_details_hero.png' },
  { id: 'shelving-systems', name: 'Matrix Modular Shelving Lockers', desc: 'Versatile multi-tier modular lockers and shelving grids for active teams.', image: '/shelving_details_hero.png' },
  { id: 'monitor-arm', name: 'Dynamic Gas-Spring Monitor Arm', desc: 'Premium counterbalanced single monitor arm holding screens from 17" to 34".', image: '/monitor_arm_hero.png' },
  { id: 'whiteboard-collaboration', name: 'Mobile Whiteboard & Collaborative Tools', desc: 'Agile team collaboration package featuring mobile whiteboards, TV stands, and stools.', image: '/whiteboard_hero.png' }
];

// ==========================================
// 6. HEIGHT ADJUSTABLE DESKS DATA
// ==========================================
const ADJUSTABLE_DESKS = [
  { id: 'zenith-adjustable', name: 'Zenith Active Standing Desk', desc: 'Heavy-duty standing desk with silent motorized controls and memory presets.', image: '/after_setup.png' },
  { id: 'apex-electric', name: 'Apex Compact Adjustable Desk', desc: 'A compact height-adjustable desk designed to fit into home office setups.', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80' }
];

export default function CollectionPage({ setCurrentPage, setSelectedProductId, selectedCategory, setSelectedCategory }) {
  
  // Quality standards panel state
  const [showStandards, setShowStandards] = useState(false);

  // Brochure download simulator state
  const [brochureStatus, setBrochureStatus] = useState({}); // { itemId: 'loading' | 'downloaded' }

  // ----------------------------------------
  // CATEGORY 1 STATES (Ergonomic Chairs)
  // ----------------------------------------
  const [activeChairIndex, setActiveChairIndex] = useState(0);
  const [activeChairAngle, setActiveChairAngle] = useState('front'); // 'front' | 'side' | 'back'
  const [chairAnimating, setChairAnimating] = useState(false);

  const activeChair = ERGONOMIC_CHAIRS[activeChairIndex];

  // Reset angle to 'front' when swapping chair models
  useEffect(() => {
    setActiveChairAngle('front');
  }, [activeChairIndex]);

  const handleChairChange = (idx) => {
    if (idx === activeChairIndex) return;
    setChairAnimating(true);
    setTimeout(() => {
      setActiveChairIndex(idx);
      setChairAnimating(false);
    }, 300);
  };

  // ----------------------------------------
  // CATEGORY 2 STATES (Workstations)
  // ----------------------------------------
  const [activeWorkstationIndex, setActiveWorkstationIndex] = useState(0);
  const activeWorkstation = WORKSTATIONS[activeWorkstationIndex];

  // ----------------------------------------
  // CATEGORY 3 STATES (Executive)
  // ----------------------------------------
  const [activeExecIndex, setActiveExecIndex] = useState(0);
  const activeExec = EXECUTIVE_COLLECTION[activeExecIndex];

  // ----------------------------------------
  // GLOBAL ENQUIRY MODAL STATE
  // ----------------------------------------
  const [enquiryItem, setEnquiryItem] = useState(null); // item object or name
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', company: '', email: '', message: '' });

  const triggerEnquiry = (item, e) => {
    if (e) e.stopPropagation();
    setEnquiryItem(item);
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setFormSubmitted(false);
      setFormData({ name: '', company: '', email: '', message: '' });
    }, 2000);
  };

  // ----------------------------------------
  // BROCHURE SIMULATOR
  // ----------------------------------------
  const triggerDownload = (itemId, e) => {
    if (e) e.stopPropagation();
    setBrochureStatus(prev => ({ ...prev, [itemId]: 'loading' }));
    setTimeout(() => {
      setBrochureStatus(prev => ({ ...prev, [itemId]: 'downloaded' }));
      setTimeout(() => {
        setBrochureStatus(prev => ({ ...prev, [itemId]: '' }));
      }, 3000);
    }, 1200);
  };

  // Categories list matching 6 showrooms
  const showroomCategories = [
    'All',
    'Ergonomic Chairs',
    'Workstations',
    'Executive Collection',
    'Storage & Accessories',
    'Height Adjustable Desks'
  ];

  // -------------------------------------------------------------
  // SHOWROOM 1: ERGONOMIC CHAIRS
  // -------------------------------------------------------------
  const renderErgonomicChairsShowroom = () => {
    const ERGO_SUB_CATEGORIES = [
      {
        title: 'Executive Chairs',
        id: 'astra-chair',
        name: 'Astra Executive Leather Chair',
        tagline: 'Top-grain luxury leatherite high-back chair with quilted stitching.',
        image: '/astra_chair.png',
        desc: 'The Astra Executive Leather Chair is the ultimate expression of corporate comfort and board-level prestige. Finished in hand-stitched leatherite, it features a contoured high-back profile that provides comprehensive alignment.',
        features: [
          { title: 'Quilted Zoned Support', desc: 'Segmented foam backing provides orthopedic relief.' },
          { title: 'Executive Synchro Recline', desc: 'Synchro-tilt recline with variable angle locks.' }
        ]
      },
      {
        title: 'Task Chairs',
        id: 'flow-chair',
        name: 'Flow Executive Office Chair',
        tagline: 'Fluid high-back silhouette finished with premium architectural accents.',
        image: '/flow_front.png',
        desc: 'Designed for leaders, the Flow chair combines executive comfort with sharp, minimalist contouring that commands attention.',
        features: [
          { title: 'Spinal Spine Guard', desc: 'Rigid structural spine frame supports direct vertical posture.' },
          { title: 'Sync-Tilt Comfort', desc: 'Sync-tilt recline keeps feet flat on ground during recline.' }
        ]
      },
      {
        title: 'Mesh Chairs',
        id: 'feather-chair',
        name: 'Ozaya Orthopedic Task Chair',
        tagline: 'Pebble-shaped lumbar support aligning the spine and promoting wellbeing.',
        image: '/ozaya_mesh_hero.png',
        desc: 'Ozaya is inspired by the harmony of nature and the demands of modern work. Its signature pebble-shaped lumbar support mirrors the gentle curves found in nature.',
        features: [
          { title: 'Signature Lumbar Support', desc: 'Pebble-shaped design for natural spinal alignment.' },
          { title: 'Weight-Activated Tilt System', desc: 'Multi-point locking and seat-depth adjustment.' }
        ]
      },
      {
        title: 'Leather Chairs',
        id: 'glanza-chair',
        name: 'Glanza Executive Task Chair',
        tagline: 'Double-arched support frame built for total thoracic alignment.',
        image: '/glanza_front.jpg',
        desc: 'Engineering comfort into corporate suites. The Glanza features double-arched mesh framing that provides active, targeted alignment to the upper and lower lumbar zones.',
        features: [
          { title: 'Double Arch Alignment', desc: 'Distinct S-shaped frame tracks and aligns separate lumbar segments.' },
          { title: 'Thoracic Relief', desc: 'High backrest supports shoulder blades to prevent slouching.' }
        ]
      },
      {
        title: 'Visitor Chairs',
        id: 'hola-chair',
        name: 'Hola Compact Task Chair',
        tagline: 'Minimalist mesh suspension designed for agile desks and home offices.',
        image: '/element_chair.png',
        desc: 'A compact and lightweight task chair with a small footprint. Tucks fully underneath standard desks to maximize space.',
        features: [
          { title: 'Compact Frame', desc: 'Small space footprint fits cleanly in cozy home workspaces.' },
          { title: 'Orthopedic Curve', desc: 'Curved structural frame mirrors the lower back S-curve.' }
        ]
      },
      {
        title: 'Training Chairs',
        id: 'zoom-chair',
        name: 'Zoom Active Focus Chair',
        tagline: 'Crescent headrest and T-shaped alignment controls for creative tasks.',
        image: '/zoom_front.jpg',
        desc: 'Calibrated for intense workflows. Features an adjustable crescent headrest and T-bracket arm adjustment for high-focus coding.',
        features: [
          { title: 'Crescent Headrest', desc: 'Curved pillow supports neck movement during deep thought.' },
          { title: 'T-Bracket Controls', desc: 'Mechanical adjusters calibrate arm pad spacing and height.' }
        ]
      },
      {
        title: 'Lounge Seating',
        id: 'hilite-chair',
        name: 'Hilite Advanced Task Chair',
        tagline: 'Distinct hook-frame headrest and spring-loaded lumbar tracking.',
        image: '/hilite_front.png',
        desc: 'An architectural silhouette engineered for high-performance creative and technology studios.',
        features: [
          { title: 'Hook Headrest Frame', desc: 'Architectural hook frame provides target neck support.' },
          { title: 'Spring-Loaded Lumbar', desc: 'Dynamic lumbar tracker applies constant gentle pressure.' }
        ]
      }
    ];

    return (
      <div key="ergo-chairs-showroom" style={{ marginBottom: '8rem' }}>
        <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem', marginBottom: '3.5rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '0.25rem' }}>Showroom 01</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', fontWeight: 600, color: 'var(--text-primary)' }}>
            Ergonomic Seating
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
          {ERGO_SUB_CATEGORIES.map((subCat) => {
            const bStatus = brochureStatus[subCat.id] || '';
            return (
              <div 
                key={subCat.id} 
                id={`subcategory-${subCat.title.toLowerCase().replace(' ', '-')}`}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '4rem',
                  alignItems: 'center',
                  borderBottom: '1px solid rgba(0,0,0,0.05)',
                  paddingBottom: '4rem'
                }}
              >
                {/* Image Section */}
                <div style={{
                  backgroundColor: '#FCFCFA',
                  borderRadius: '12px',
                  border: '1px solid var(--border-color)',
                  padding: '3rem 2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '340px',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={subCat.image} 
                    alt={subCat.name} 
                    style={{ maxHeight: '90%', objectFit: 'contain' }} 
                  />
                </div>

                {/* Details Section */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '0.25rem' }}>
                      {subCat.title}
                    </span>
                    <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 0.5rem 0' }}>
                      {subCat.name}
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontWeight: 300, lineHeight: 1.5, margin: 0 }}>
                      {subCat.tagline}
                    </p>
                  </div>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                    {subCat.desc}
                  </p>

                  {/* Bullet features */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', margin: '0.5rem 0' }}>
                    {subCat.features.map((feat, fIdx) => (
                      <div key={fIdx} style={{ fontSize: '0.85rem' }}>
                        <strong style={{ color: 'var(--text-primary)', display: 'block', fontWeight: 600 }}>✓ {feat.title}</strong>
                        <span style={{ color: 'var(--text-secondary)', fontWeight: 300 }}>{feat.desc}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                    <button
                      onClick={(e) => triggerEnquiry(subCat, e)}
                      className="btn-primary"
                      style={{ padding: '0.9rem 2rem', fontSize: '0.85rem' }}
                    >
                      <span>Enquire</span>
                    </button>

                    <button
                      onClick={() => {
                        const rawId = subCat.id.replace('-chair', '');
                        window.history.pushState({ page: 'product', prodId: subCat.id }, '', `/collection/ergonomic-chairs/${rawId}`);
                        setSelectedProductId(subCat.id);
                        setCurrentPage('product');
                      }}
                      className="btn-secondary"
                      style={{ padding: '0.9rem 2rem', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center' }}
                    >
                      <span>Explore Details →</span>
                    </button>

                    <button
                      onClick={(e) => triggerDownload(subCat.id, e)}
                      className="btn-secondary"
                      style={{ padding: '0.9rem 1.5rem', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                    >
                      <FileText size={14} />
                      <span>{bStatus === 'loading' ? '...' : bStatus === 'downloaded' ? '✓' : 'Brochure'}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // -------------------------------------------------------------
  // SHOWROOM 2: WORKSTATIONS
  // -------------------------------------------------------------
  const renderWorkstationsShowroom = () => {
    const WORKSTATION_SUB_CATEGORIES = [
      {
        title: 'Linear Workstations',
        id: 'linear-series',
        name: 'Linear Series Workstation',
        tagline: 'Modular straight-line benching optimized for collaborative engineering groups.',
        image: '/linear_details_hero.png',
        desc: 'The Linear Series Workstation coordinates space efficiency and productivity. Designed to fit team groups, its straight line design keeps computers and documents organized while keeping communication channels open.',
        features: [
          { title: 'Modular Architecture', desc: 'Add, shift, or extend desks as teams grow without changing overall spacing.' },
          { title: 'Cable Management', desc: 'Integrated under-desk wire tracks and desktop sockets feed monitors cleanly.' }
        ]
      },
      {
        title: 'Manager Cabins',
        id: 'manager-cabin',
        name: 'Manager Cabin Desking',
        tagline: 'Private executive workstations detailed with returns and drawer pedestals.',
        image: '/manager_details_hero.png',
        desc: 'The Manager Cabin Desking combines utility and executive styling. Its L-shaped table return delivers expansive surface areas for files, laptops, and client briefings.',
        features: [
          { title: 'Executive Inlay', desc: 'Plush writing zones wrapped in premium materials.' },
          { title: 'Secure Pedestal storage', desc: 'Soft-close lockable drawers for files and key business folders.' }
        ]
      },
      {
        title: 'Open Office Systems',
        id: 'open-office',
        name: 'Open Office Hub Systems',
        tagline: '120-degree radial workstations designed for collaborative creative teams.',
        image: '/open_details_hero.png',
        desc: 'Open Office Hub Systems organize linear team desks into dynamic clusters. Orienting workspaces at 120-degree radial angles gives users larger desk surfaces while simplifying collaboration.',
        features: [
          { title: '120-Degree Clustering', desc: 'Provides generous desk surfaces and clear sightlines between colleagues.' },
          { title: 'Frosted Screen Division', desc: 'Filters light and sound between desks to support focus.' }
        ]
      },
      {
        title: 'Height Adjustable Workstations',
        id: 'height-adjustable',
        name: 'Height Adjustable Series Desking',
        tagline: 'Dual motor sit-stand benching designed to promote active workspaces.',
        image: '/height_details_hero.png',
        desc: 'Height Adjustable Series Desking delivers active ergonomics to corporate teams. Silent motorized columns rise from 65cm to 125cm in seconds, prompting sit-stand shifts.',
        features: [
          { title: 'Dual Motor Telescopic legs', desc: 'Silent motorized lifts travel from sit to stand smoothly in seconds.' },
          { title: 'Anti-collision safety sensors', desc: 'Halts height adjustments instantly if desk registers obstacles.' }
        ]
      },
      {
        title: 'Collaborative Workstations',
        id: 'collaborative-workstations',
        name: 'Collaborative Media Pods',
        tagline: 'Curved acoustic office pods configured for screen sharing and syncs.',
        image: '/collab_details_hero.png',
        desc: 'Collaborative Media Pods give teams quick focus points inside open layout corporate offices. Sound-shielding walls filter noise to make meeting syncs productive.',
        features: [
          { title: 'PET Acoustical felt shielding', desc: 'High privacy walls damp external echo and local typing noise.' },
          { title: 'Integrated Media Mounts', desc: 'Power and HDMI sockets connect laptops to central sharing screens.' }
        ]
      },
      {
        title: 'Cubicle Systems',
        id: 'executive-workstations',
        name: 'Executive Cabin Suite',
        tagline: 'Commanding solid wood desking collections configured for leadership offices.',
        image: '/cubicle_details_gallery.png',
        desc: 'Executive Cabin Suites represent a premium leadership office experience. Hand-finished teak tops coordinate with brushed structural junctions to deliver a high-prestige executive desking layout.',
        features: [
          { title: 'Solid Wood veneers', desc: 'Teak and ebony finishes showcase executive craftsmanship.' },
          { title: 'Complete Executive layout', desc: 'Fitted returns and drawer credenzas keep office spaces tidy.' }
        ]
      }
    ];

    return (
      <div key="workstations-showroom" style={{ marginBottom: '8rem' }}>
        <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem', marginBottom: '3.5rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '0.25rem' }}>Showroom 02</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', fontWeight: 600, color: 'var(--text-primary)' }}>
            Workstations
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
          {WORKSTATION_SUB_CATEGORIES.map((subCat) => {
            const bStatus = brochureStatus[subCat.id] || '';
            return (
              <div 
                key={subCat.id} 
                id={`subcategory-${subCat.title.toLowerCase().replace(' ', '-')}`}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '4rem',
                  alignItems: 'center',
                  borderBottom: '1px solid rgba(0,0,0,0.05)',
                  paddingBottom: '4rem'
                }}
              >
                {/* Image Section */}
                <div style={{
                  backgroundColor: '#FCFCFA',
                  borderRadius: '12px',
                  border: '1px solid var(--border-color)',
                  padding: '3rem 2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '340px',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={subCat.image} 
                    alt={subCat.name} 
                    style={{ maxHeight: '90%', objectFit: 'contain' }} 
                  />
                </div>

                {/* Details Section */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '0.25rem' }}>
                      {subCat.title}
                    </span>
                    <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 0.5rem 0' }}>
                      {subCat.name}
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontWeight: 300, lineHeight: 1.5, margin: 0 }}>
                      {subCat.tagline}
                    </p>
                  </div>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                    {subCat.desc}
                  </p>

                  {/* Bullet features */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', margin: '0.5rem 0' }}>
                    {subCat.features.map((feat, fIdx) => (
                      <div key={fIdx} style={{ fontSize: '0.85rem' }}>
                        <strong style={{ color: 'var(--text-primary)', display: 'block', fontWeight: 600 }}>✓ {feat.title}</strong>
                        <span style={{ color: 'var(--text-secondary)', fontWeight: 300 }}>{feat.desc}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                    <button
                      onClick={(e) => triggerEnquiry(subCat, e)}
                      className="btn-primary"
                      style={{ padding: '0.9rem 2rem', fontSize: '0.85rem' }}
                    >
                      <span>Enquire</span>
                    </button>

                    <button
                      onClick={() => {
                        window.history.pushState({ page: 'product', prodId: subCat.id }, '', `/collection/workstations/${subCat.id}`);
                        setSelectedProductId(subCat.id);
                        setCurrentPage('product');
                      }}
                      className="btn-secondary"
                      style={{ padding: '0.9rem 2rem', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center' }}
                    >
                      <span>Explore Details →</span>
                    </button>

                    <button
                      onClick={(e) => triggerDownload(subCat.id, e)}
                      className="btn-secondary"
                      style={{ padding: '0.9rem 1.5rem', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                    >
                      <FileText size={14} />
                      <span>{bStatus === 'loading' ? '...' : bStatus === 'downloaded' ? '✓' : 'Brochure'}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // -------------------------------------------------------------
  // SHOWROOM 3: EXECUTIVE COLLECTION
  // -------------------------------------------------------------
  const renderExecutiveShowroom = () => {
    const TABLE_SUB_CATEGORIES = [
      {
        title: 'Executive Tables',
        id: 'executive-tables',
        name: 'Summit Walnut Executive Table',
        tagline: 'Premium leadership desk detailed in American Walnut and brushed steel.',
        image: '/executive_tables_hero.png',
        desc: 'The Summit Walnut Executive Table represents board-level workspace craftsmanship. Blending heavy-grain veneers with geometric steel understructures, it commands focus and styling prestige.',
        features: [
          { title: 'American Walnut Veneer', desc: 'Hand-selected heavy-grain panels coordinate with drawer storage.' },
          { title: 'Integrated Utility Track', desc: 'Pneumatic pop-up center media compartments conceal cable trails.' }
        ]
      },
      {
        title: 'Meeting Tables',
        id: 'meeting-tables',
        name: 'Media-Sync Meeting Table',
        tagline: 'A modular, media-ready table designed for agile project sync rooms.',
        image: '/meeting_tables_hero.png',
        desc: 'The Media-Sync Meeting Table brings collaboration to project teams. The center channel keeps screens, tablets, and notes connected to power and display links cleanly.',
        features: [
          { title: 'Media Integration Hub', desc: 'Provides quick-access HDMI and Ethernet modules in desk center.' },
          { title: 'Agile Seating Footprint', desc: 'Sparsely-spaced base legs maximize employee legroom.' }
        ]
      },
      {
        title: 'Conference Tables',
        id: 'conference-tables',
        name: 'Forum Boardroom Conference Table',
        tagline: 'Large modular conference arrays built for boardroom presentations.',
        image: '/conference_tables_hero.png',
        desc: 'The Forum Conference Table coordinates corporate spaces. Its modular design allows panels to link together, matching the sizes of large conference rooms.',
        features: [
          { title: 'Modular Slab Links', desc: 'Desking segments link up cleanly to support larger group capacities.' },
          { title: 'Under-desk Wire Trunks', desc: 'Heavy routing channels collect cable tails securely.' }
        ]
      },
      {
        title: 'Training Tables',
        id: 'training-tables',
        name: 'Flexi-Flip Training Table',
        tagline: 'Mobile, flip-top training desks configured for quick seminar setups.',
        image: '/training_tables_hero.png',
        desc: 'The Flexi-Flip Training Table delivers agility to learning environments. A single lever release tilts desktops vertically, allowing tables to nest together to save floor space when idle.',
        features: [
          { title: 'Vertical nesting release', desc: 'Desk flips up easily to slot side-by-side inside storage locks.' },
          { title: 'Roll-and-Lock casters', desc: 'Durable nylon swivel rollers roll silently and clamp securely.' }
        ]
      },
      {
        title: 'Cafeteria Tables',
        id: 'cafeteria-tables',
        name: 'Cafe Social Dining Table',
        tagline: 'Scratch-resistant dining tables built for corporate lounges and bistros.',
        image: '/cafeteria_tables_hero.png',
        desc: 'The Cafe Social Dining Table adds clean dining surfaces to office lounges and cafeterias. High-pressure laminate tops prevent staining and clean up quickly after lunch periods.',
        features: [
          { title: 'High-Pressure laminate', desc: 'Resists liquid spills, grease heat marks, and cleaning scrubs.' },
          { title: 'Single pillar base frame', desc: 'Ensures simple visual aesthetic profile and clear foot clearance.' }
        ]
      },
      {
        title: 'Height Adjustable Tables',
        id: 'height-adjustable-tables',
        name: 'Apex Motorized Conference Table',
        tagline: 'Motorized sit-stand meeting tables configured for active presentation rooms.',
        image: '/height_tables_hero.png',
        desc: 'The Apex Motorized Conference Table introduces sit-stand active loops to corporate meetings. Driven by synchronized quad motors, it raises large tables to standing height smoothly in seconds.',
        features: [
          { title: 'Quad-Motor Sync control', desc: 'Continuous lifts rise smoothly under balanced weights.' },
          { title: 'Anti-collision safety sensor', desc: 'Automatically stops movement upon meeting hard desks.' }
        ]
      }
    ];

    return (
      <div key="executive-showroom" style={{ marginBottom: '8rem' }}>
        <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem', marginBottom: '3.5rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '0.25rem' }}>Showroom 03</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', fontWeight: 600, color: 'var(--text-primary)' }}>
            Tables & Executive Collection
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
          {TABLE_SUB_CATEGORIES.map((subCat) => {
            const bStatus = brochureStatus[subCat.id] || '';
            return (
              <div 
                key={subCat.id} 
                id={`subcategory-${subCat.title.toLowerCase().replace(' ', '-')}`}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '4rem',
                  alignItems: 'center',
                  borderBottom: '1px solid rgba(0,0,0,0.05)',
                  paddingBottom: '4rem'
                }}
              >
                {/* Image Section */}
                <div style={{
                  backgroundColor: '#FCFCFA',
                  borderRadius: '12px',
                  border: '1px solid var(--border-color)',
                  padding: '3rem 2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '340px',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={subCat.image} 
                    alt={subCat.name} 
                    style={{ maxHeight: '90%', objectFit: 'contain' }} 
                  />
                </div>

                {/* Details Section */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '0.25rem' }}>
                      {subCat.title}
                    </span>
                    <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 0.5rem 0' }}>
                      {subCat.name}
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontWeight: 300, lineHeight: 1.5, margin: 0 }}>
                      {subCat.tagline}
                    </p>
                  </div>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                    {subCat.desc}
                  </p>

                  {/* Bullet features */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', margin: '0.5rem 0' }}>
                    {subCat.features.map((feat, fIdx) => (
                      <div key={fIdx} style={{ fontSize: '0.85rem' }}>
                        <strong style={{ color: 'var(--text-primary)', display: 'block', fontWeight: 600 }}>✓ {feat.title}</strong>
                        <span style={{ color: 'var(--text-secondary)', fontWeight: 300 }}>{feat.desc}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                    <button
                      onClick={(e) => triggerEnquiry(subCat, e)}
                      className="btn-primary"
                      style={{ padding: '0.9rem 2rem', fontSize: '0.85rem' }}
                    >
                      <span>Enquire</span>
                    </button>

                    <button
                      onClick={() => {
                        window.history.pushState({ page: 'product', prodId: subCat.id }, '', `/collection/workstations/${subCat.id}`);
                        setSelectedProductId(subCat.id);
                        setCurrentPage('product');
                      }}
                      className="btn-secondary"
                      style={{ padding: '0.9rem 2rem', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center' }}
                    >
                      <span>Explore Details →</span>
                    </button>

                    <button
                      onClick={(e) => triggerDownload(subCat.id, e)}
                      className="btn-secondary"
                      style={{ padding: '0.9rem 1.5rem', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                    >
                      <FileText size={14} />
                      <span>{bStatus === 'loading' ? '...' : bStatus === 'downloaded' ? '✓' : 'Brochure'}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // -------------------------------------------------------------
  // SHOWROOM 4: COLLABORATION SPACES
  // -------------------------------------------------------------


  // -------------------------------------------------------------
  // SHOWROOM 5: STORAGE & ACCESSORIES
  // -------------------------------------------------------------
  const renderStorageShowroom = () => {
    return (
      <div key="storage-showroom" style={{ marginBottom: '8rem' }}>
        <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem', marginBottom: '3.5rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '0.25rem' }}>Showroom 05</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', fontWeight: 600, color: 'var(--text-primary)' }}>
            Storage & Accessories
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
          gap: '3rem'
        }}>
          {STORAGE_ACCESSORIES.map((item) => {
            const bStatus = brochureStatus[item.id] || '';
            return (
              <div
                key={item.id}
                id={`subcategory-${item.id}`}
                style={{
                  backgroundColor: 'var(--bg-tertiary)',
                  borderRadius: '12px',
                  border: '1px solid var(--border-color)',
                  padding: '2.25rem',
                  boxShadow: 'var(--shadow-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'var(--transition-smooth)'
                }}
                className="desk-showroom-card"
              >
                <div style={{ height: '240px', backgroundColor: 'var(--bg-secondary)', borderRadius: '6px', marginBottom: '1.5rem', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={item.image} alt={item.name} style={{ maxHeight: '85%', maxWidth: '85%', objectFit: 'contain' }} />
                </div>

                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, fontFamily: 'var(--font-display)', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    {item.name}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '2rem', fontWeight: 300, lineHeight: 1.5 }}>
                    {item.desc}
                  </p>

                  <div style={{ display: 'flex', gap: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', flexWrap: 'wrap' }}>
                    <button
                      onClick={(e) => triggerEnquiry(item, e)}
                      className="btn-primary"
                      style={{ flex: 1.2, padding: '0.8rem 1.25rem', fontSize: '0.825rem' }}
                    >
                      <span>Enquire</span>
                    </button>

                    <button
                      onClick={() => {
                        window.history.pushState({ page: 'product', prodId: item.id }, '', `/collection/storage-accessories/${item.id}`);
                        setSelectedProductId(item.id);
                        setCurrentPage('product');
                      }}
                      className="btn-secondary"
                      style={{ flex: 1.5, padding: '0.8rem 1rem', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      <span>Explore Details →</span>
                    </button>

                    <button
                      onClick={(e) => triggerDownload(item.id, e)}
                      className="btn-secondary"
                      style={{ flex: 1, padding: '0.8rem 1rem', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem' }}
                    >
                      <FileText size={14} />
                      <span>{bStatus === 'loading' ? '...' : bStatus === 'downloaded' ? '✓' : 'Brochure'}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // -------------------------------------------------------------
  // SHOWROOM 6: HEIGHT ADJUSTABLE DESKS
  // -------------------------------------------------------------
  const renderDesksShowroom = () => {
    return (
      <div key="desks-showroom" style={{ marginBottom: '8rem' }}>
        <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem', marginBottom: '3.5rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '0.25rem' }}>Showroom 06</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', fontWeight: 600, color: 'var(--text-primary)' }}>
            Height Adjustable Desks
          </h2>
        </div>

        <div className="desks-showroom-grid">
          {ADJUSTABLE_DESKS.map((item) => {
            const bStatus = brochureStatus[item.id] || '';
            return (
              <div
                key={item.id}
                className="desk-showroom-card"
              >
                <div className="desk-card-image-container">
                  <img src={item.image} alt={item.name} className="desk-card-img" />
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 600, fontFamily: 'var(--font-display)', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  {item.name}
                </h3>
                
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '2rem', fontWeight: 300, lineHeight: 1.5 }}>
                  {item.desc}
                </p>

                <div style={{ display: 'flex', gap: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', flexWrap: 'wrap' }}>
                  <button
                    onClick={(e) => triggerEnquiry(item, e)}
                    className="btn-primary"
                    style={{ flex: 1.2, padding: '0.8rem 1.25rem', fontSize: '0.85rem' }}
                  >
                    <span>Enquire</span>
                  </button>

                  <button
                    onClick={() => {
                      window.history.pushState({ page: 'product', prodId: item.id }, '', `/collection/height-adjustable-desks/${item.id}`);
                      setSelectedProductId(item.id);
                      setCurrentPage('product');
                    }}
                    className="btn-secondary"
                    style={{ flex: 1.5, padding: '0.8rem 1rem', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <span>Explore Details →</span>
                  </button>

                  <button
                    onClick={(e) => triggerDownload(item.id, e)}
                    className="btn-secondary"
                    style={{ flex: 1, padding: '0.8rem 1rem', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem' }}
                  >
                    <FileText size={14} />
                    <span>{bStatus === 'loading' ? '...' : bStatus === 'downloaded' ? '✓' : 'Brochure'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // -------------------------------------------------------------
  // SWITCH RENDER DECISION
  // -------------------------------------------------------------
  const renderActiveShowroom = (cat) => {
    switch (cat) {
      case 'Ergonomic Chairs':
        return renderErgonomicChairsShowroom();
      case 'Workstations':
        return renderWorkstationsShowroom();
      case 'Executive Collection':
        return renderExecutiveShowroom();
      case 'Storage & Accessories':
        return renderStorageShowroom();
      case 'Height Adjustable Desks':
        return renderDesksShowroom();
      default:
        return null;
    }
  };

  return (
    <div style={{ paddingTop: '1.5rem', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container-premium">
        
        {/* Page Title Header */}
        <div style={{ marginBottom: '4rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            ErgoSpace Showroom Catalogue
          </span>
          <h1 className="editorial-title" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
            The Active Showrooms
          </h1>
          <p className="editorial-subtitle">
            Premium workspace furniture calibrated to optimize physical posture, focus cycles, and architectural flow. No prices, no shopping cart—pure spatial architectural inspiration.
          </p>
        </div>

        {/* Filter Toolbar controls */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid var(--border-color)',
          paddingBottom: '1.5rem',
          marginBottom: '4rem',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          {/* Categories Tab list */}
          <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', scrollbarWidth: 'none' }}>
            {showroomCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  background: selectedCategory === cat ? 'var(--bg-dark)' : 'var(--bg-secondary)',
                  color: selectedCategory === cat ? 'white' : 'var(--text-primary)',
                  padding: '0.6rem 1.5rem',
                  borderRadius: '4px',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  fontFamily: 'var(--font-display)',
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)',
                  whiteSpace: 'nowrap'
                }}
              >
                {cat === 'All' ? 'View All Showrooms' : cat}
              </button>
            ))}
          </div>

          {/* Info Details */}
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <button
              onClick={() => setShowStandards(!showStandards)}
              style={{
                background: 'none',
                border: '1px solid var(--border-color)',
                padding: '0.6rem 1.25rem',
                borderRadius: '4px',
                fontSize: '0.85rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontWeight: 500,
                color: showStandards ? 'var(--accent)' : 'var(--text-primary)'
              }}
            >
              <SlidersHorizontal size={16} />
              <span>Showroom Standards</span>
            </button>
          </div>
        </div>

        {/* Expandable Showroom Standards Panel */}
        {showStandards && (
          <div style={{
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            borderRadius: '8px',
            padding: '2rem',
            marginBottom: '3rem',
            animation: 'fadeIn 0.3s ease-out'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '1rem', color: 'var(--accent)' }}>
                  Calibrated Ergonomics
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 300, lineHeight: 1.6 }}>
                  Every seat in the catalogue is built around dynamic load-bearing structures. Recline systems operate in sync with weight distribution.
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '1rem', color: 'var(--accent)' }}>
                  Architectural Consultation
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 300, lineHeight: 1.6 }}>
                  We provide corporate clients with white-glove space planning drafts, 3D floor plan layout designs, and custom finish configurations.
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => setShowStandards(false)}
                  style={{
                    background: 'none',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    textDecoration: 'underline',
                    color: 'var(--text-secondary)'
                  }}
                >
                  Close panel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Product Catalog Showrooms rendering */}
        <div style={{ marginBottom: '8rem' }}>
          {selectedCategory === 'All' ? (
            // If All is selected: render all 6 showrooms stacked down the page
            showroomCategories.slice(1).map(catName => renderActiveShowroom(catName))
          ) : (
            // If a specific category tab is selected: render only that showroom
            renderActiveShowroom(selectedCategory)
          )}
        </div>

      </div>

      {/* Corporate Enquiry Modal Overlay */}
      {isModalOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            zIndex: 1500,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onClick={() => setIsModalOpen(false)}
        >
          <div style={{
            backgroundColor: 'var(--bg-primary)',
            borderRadius: '12px',
            border: '1px solid var(--border-color)',
            padding: '2.5rem',
            width: '100%',
            maxWidth: '520px',
            position: 'relative',
            boxShadow: 'var(--shadow-premium)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }} onClick={(e) => e.stopPropagation()}>
            
            <button
              onClick={() => setIsModalOpen(false)}
              style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', cursor: 'pointer', fontSize: '1.1rem', color: 'var(--text-primary)' }}
            >
              ✕
            </button>

            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                Corporate Solutions
              </span>
              <h3 style={{ fontSize: '1.65rem', fontFamily: 'var(--font-display)', fontWeight: 600, marginTop: '0.25rem' }}>
                Enquire About {enquiryItem?.name || enquiryItem || 'Workspace Catalog'}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', lineHeight: 1.4 }}>
                Request structural configurations, 3D mockups, or volume quotation drafts. A design consultant will connect with you.
              </p>
            </div>

            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(226, 55, 68, 0.1)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  ✓
                </div>
                <div>
                  <h4 style={{ fontWeight: 600, fontSize: '1.1rem' }}>Enquiry Logged</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>We will contact you via email shortly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.25rem', textTransform: 'uppercase' }}>Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.25rem', textTransform: 'uppercase' }}>Company / Organization *</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.25rem', textTransform: 'uppercase' }}>Work Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.25rem', textTransform: 'uppercase' }}>Message / Requirements</label>
                  <textarea
                    rows="3"
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe quantity needed, floor dimensions, or custom finish preferences..."
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', resize: 'none' }}
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ padding: '0.85rem', cursor: 'pointer', marginTop: '0.5rem' }}>
                  <span>Submit Showroom Inquiry</span>
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
