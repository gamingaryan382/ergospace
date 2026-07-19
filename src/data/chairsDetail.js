export const CHAIRS_DETAIL = {
  feather: {
    id: 'feather',
    name: 'Feather Orthopedic Task Chair',
    tagline: 'Weightless mesh suspension designed for continuous spinal alignment.',
    description: 'Engineered with responsive tensile mesh, the Feather chair adapts dynamically to posture shifts, delivering a weightless sitting experience.',
    images: {
      front: '/feather_front.jpg',
      side: '/feather_side.jpg',
      back: '/feather_back.jpg'
    },
    gallery: [
      { name: 'Front Profile', src: '/feather_front.jpg' },
      { name: 'Side Profile', src: '/feather_side.jpg' },
      { name: 'Spinal Alignment (Back)', src: '/feather_back.jpg' }
    ],
    features: [
      { title: 'Adaptive Lumbar', desc: 'Sensing lumbar nodes adjust tension automatically based on force.' },
      { title: 'Multi-Tilt Lock', desc: 'Calibrate recline angle and resistance across 4 lockable positions.' },
      { title: '4D Armrests', desc: 'Height, depth, width, and rotation adjustments to align arms.' },
      { title: 'Breathable Mesh', desc: 'Custom elastomeric blend delivers cool aeration all day.' }
    ],
    overview: [
      "The Feather Orthopedic Task Chair represents a design breakthrough in reactive workspace ergonomics. Its core philosophy revolves around weightlessness, utilizing a high-tension elastomeric mesh suspension that evenly distributes body weight and eliminates tailbone pressure points.",
      "Designed in collaboration with physical therapists, the adaptive composite frame flexes laterally with the user's movements, encouraging micro-movements that promote blood circulation and reduce spinal stagnation during long-cycle coding and focus tasks.",
      "Built with high-end sustainability in mind, the chair features a structural die-cast aluminum base and fiber-reinforced composite frame, guaranteeing BIFMA-certified durability for up to 12 years of enterprise operation."
    ],
    specs: {
      dimensions: '112–122cm H x 66cm W x 66cm D',
      material: 'Elastomeric Tensile Polymer Mesh',
      frame: 'Fiber-Reinforced Structural Nylon',
      base: 'Polished Diecast Aluminum 5-Star Pedestal',
      armrest: '4D Multi-directional Anodized Steel Support',
      mechanism: 'Synchronized Weight-Activated Recline',
      gaslift: 'Class-4 German Engineered Chrome Cylinder',
      colors: 'Obsidian Black, Granite Gray, Cobalt Blue',
      warranty: '12 Years Structural Warranty',
      weightCapacity: '150 kg'
    },
    colors: [
      { name: 'Obsidian Black', hex: '#1C1C1C', filter: 'none' },
      { name: 'Granite Gray', hex: '#7A7A7A', filter: 'hue-rotate(180deg) brightness(1.2)' },
      { name: 'Cobalt Blue', hex: '#1E3A8A', filter: 'hue-rotate(220deg) saturate(1.5) brightness(0.9)' }
    ],
    idealFor: ['Executive Suite', 'Corporate Coding Floor', 'High-Performance Home Office']
  },
  flow: {
    id: 'flow',
    name: 'Flow Executive Office Chair',
    tagline: 'Fluid high-back silhouette finished with premium architectural accents.',
    description: 'Designed for leaders, the Flow chair combines executive comfort with sharp, minimalist contouring that commands attention.',
    images: {
      front: '/flow_front.png',
      side: '/flow_front.png', // Fallback
      back: '/flow_back.png'
    },
    gallery: [
      { name: 'Front Profile', src: '/flow_front.png' },
      { name: 'Rear Architecture', src: '/flow_back.png' }
    ],
    features: [
      { title: 'Spinal Spine Guard', desc: 'Rigid structural spine frame supports direct vertical posture.' },
      { title: 'Sync-Tilt Comfort', desc: 'Synchro-tilt recline keeps feet flat on ground during stretch.' },
      { title: 'Tension Controls', desc: 'Calibrate backrest recline resistance to matches body weight.' },
      { title: 'Aluminum Details', desc: 'Polished cast-aluminum structural junctions deliver solid strength.' }
    ],
    overview: [
      "The Flow Executive Chair is a product of modern workspace architecture. It marries form and function, pairing a clean structural silhouette with a highly supportive elastomeric matrix that adjusts to the user's natural seated posture.",
      "An integrated headrest supports the cervical spine, making this chair ideal for executive cabins, media lounges, and conference rooms where decision-making and long-term comfort must coexist.",
      "Crafted with durable, heavy-gauge steel internals and wrapped in premium non-fraying mesh, the Flow chair delivers unmatched thermal comfort by eliminating heat traps behind the back."
    ],
    specs: {
      dimensions: '118–128cm H x 68cm W x 65cm D',
      material: 'High-Tensile Micro-Weave Mesh',
      frame: 'Polished Diecast Aluminum & Nylon',
      base: 'Heavy Duty Anodized Steel Base',
      armrest: '3D Height & Depth Adjustable Armrests',
      mechanism: 'Heavy Duty Multi-Lock Synchro-Tilt',
      gaslift: 'Class-4 Pneumatic Cylinder',
      colors: 'Obsidian Black, Emerald Green, Wine Red',
      warranty: '10 Years Warranty',
      weightCapacity: '140 kg'
    },
    colors: [
      { name: 'Obsidian Black', hex: '#1C1C1C', filter: 'none' },
      { name: 'Emerald Green', hex: '#065F46', filter: 'hue-rotate(120deg) brightness(0.8)' },
      { name: 'Wine Red', hex: '#991B1B', filter: 'hue-rotate(340deg) saturate(1.2)' }
    ],
    idealFor: ['CEO Suite', 'Boardroom Chamber', 'High-End Conference Space']
  },
  glanza: {
    id: 'glanza',
    name: 'Glanza Executive Task Chair',
    tagline: 'Double-arched support frame built for total thoracic alignment.',
    description: 'With its signature double-arch backrest, the Glanza chair offers targeted support to both lower and middle spinal areas.',
    images: {
      front: '/glanza_front.jpg',
      side: '/glanza_side.jpg',
      back: '/glanza_back.jpg'
    },
    gallery: [
      { name: 'Front Profile', src: '/glanza_front.jpg' },
      { name: 'Ergonomic Side Curve', src: '/glanza_side.jpg' },
      { name: 'Double Arch Backrest', src: '/glanza_back.jpg' }
    ],
    features: [
      { title: 'Double Arch Alignment', desc: 'Distinct S-shaped frame tracks and aligns separate lumbar segments.' },
      { title: 'Thoracic Relief', desc: 'High backrest supports shoulder blades to prevent slouching.' },
      { title: 'Integrated Hanger', desc: 'Sleek built-in coat hanger integrated into the backrest shell.' },
      { title: 'Sliding Seat Pan', desc: 'Adjust seat depth to fit users of different heights.' }
    ],
    overview: [
      "The Glanza Executive Task Chair stands as a benchmark of corporate seating engineering. Its dual-arch backrest structure actively aligns the thoracic and lumbar curves, providing targeted bracing to the middle back and neck.",
      "Suitable for high-focus professional environments like data centers, law offices, and development hubs, the Glanza minimizes structural body fatigue by ensuring the pelvis remains locked in a healthy forward angle.",
      "The premium waterfall seat design features a slidable frame, distributing thigh load and preventing pressure build-up behind the knees for improved circulation."
    ],
    specs: {
      dimensions: '115–125cm H x 67cm W x 67cm D',
      material: 'Reinforced Elastomeric Grid Mesh',
      frame: 'Molded Structural Nylon & Polycarbonate',
      base: 'Polished Cast Aluminum base',
      armrest: '3D Armrests with Polyurethane Pads',
      mechanism: 'Advanced Knee-Tilt Synchro Mechanism',
      gaslift: 'Class-4 Chrome Pneumatic Gas Lift',
      colors: 'Off-White Shell / Grey Mesh, Black Shell / Black Mesh',
      warranty: '8 Years Warranty',
      weightCapacity: '135 kg'
    },
    colors: [
      { name: 'Graphite Black', hex: '#222222', filter: 'none' },
      { name: 'Off-White / Silver', hex: '#D1D5DB', filter: 'invert(0.9) brightness(1.2)' },
      { name: 'Crimson Red', hex: '#DC2626', filter: 'hue-rotate(350deg) saturate(1.8)' }
    ],
    idealFor: ['Managerial Office', 'Financial Trading Floor', 'Enterprise Development Hub']
  },
  hilite: {
    id: 'hilite',
    name: 'Hilite Advanced Task Chair',
    tagline: 'Distinct hook-frame headrest and spring-loaded lumbar tracking.',
    description: 'An architectural silhouette engineered for high-performance creative and technology studios.',
    images: {
      front: '/hilite_front.png',
      side: '/hilite_side.png',
      back: '/hilite_back.png'
    },
    gallery: [
      { name: 'Front Setup', src: '/hilite_front.png' },
      { name: 'Hook Frame Headrest', src: '/hilite_side.png' },
      { name: 'Structural Tension Back', src: '/hilite_back.png' }
    ],
    features: [
      { title: 'Hook Headrest Frame', desc: 'Architectural hook frame provides target neck support.' },
      { title: 'Spring-Loaded Lumbar', desc: 'Dynamic lumbar tracker applies constant gentle pressure.' },
      { title: 'Pivoting Armrests', desc: 'Armrest supports tilt with recline to keep arms supported.' },
      { title: 'High Density Base', desc: 'Heavy weight base plate delivers low center of gravity.' }
    ],
    overview: [
      "The Hilite Advanced Task Chair is built specifically for tech teams, creative designers, and research labs that require prolonged focus sessions. Its iconic hook-frame neck support elevates focus by eliminating tension in the neck and shoulders.",
      "A spring-loaded dynamic lumbar system follows the user's movements, providing continuous spinal support whether sitting upright or fully reclined in active thought.",
      "Equipped with polyurethane casters, the chair rolls silently and smoothly across hard floors and carpets alike, preventing floor scratching."
    ],
    specs: {
      dimensions: '120–130cm H x 65cm W x 65cm D',
      material: 'Triple-Weave Heavy Duty Mesh',
      frame: 'Nylon Composite & Steel Spine Support',
      base: 'Premium Matte Black Steel 5-Star Base',
      armrest: '4D Fully Calibrated Armrests',
      mechanism: 'Synchro-Tilt with Multi-Lock & Tension Dial',
      gaslift: 'Class-4 Heavy Duty gas cylinder',
      colors: 'Matte Black, Arctic White, Emerald Teal',
      warranty: '10 Years Warranty',
      weightCapacity: '150 kg'
    },
    colors: [
      { name: 'Matte Black', hex: '#1C1C1C', filter: 'none' },
      { name: 'Arctic White', hex: '#F3F4F6', filter: 'invert(0.85) brightness(1.3)' },
      { name: 'Emerald Teal', hex: '#0D9488', filter: 'hue-rotate(170deg) saturate(1.4)' }
    ],
    idealFor: ['Software Dev Suite', 'Design & Architecture Studio', 'Innovation Labs']
  },
  hola: {
    id: 'hola',
    name: 'Hola Compact Task Chair',
    tagline: 'Minimalist mesh suspension designed for agile desks and home offices.',
    description: 'A compact and lightweight task chair with a small footprint. Tucks fully underneath standard desks to maximize space.',
    images: {
      front: '/element_chair.png',
      side: '/element_chair.png',
      back: '/element_chair.png'
    },
    gallery: [
      { name: 'Front Profile', src: '/element_chair.png' }
    ],
    features: [
      { title: 'Compact Frame', desc: 'Small space footprint fits cleanly in cozy home workspaces.' },
      { title: 'Orthopedic Curve', desc: 'Curved structural frame mirrors the lower back S-curve.' },
      { title: 'Pneumatic Height', desc: 'Raise or lower seat height smoothly using a single gas lever.' },
      { title: 'Nylon Casters', desc: 'Dual wheel casters deliver stable and smooth floor traction.' }
    ],
    overview: [
      "The Hola Compact Task Chair is engineered for the modern remote work era and hot-desking setups. Its minimalist footprint fits effortlessly into small apartments, study corners, and co-working benches.",
      "Despite its light silhouette, the Hola does not compromise on posture health, providing a beautifully contoured mesh backrest that cradles the lower back.",
      "The heavy-duty nylon composite frame is light to move yet strong enough to support up to 120 kg, making it a highly versatile WFH companion."
    ],
    specs: {
      dimensions: '98–108cm H x 60cm W x 60cm D',
      material: 'Tensile Elastomeric Polymer Mesh',
      frame: 'Nylon Composite Structure',
      base: 'Reinforced Nylon Star Pedestal',
      armrest: 'Fixed Ergonomic Curved Armrests',
      mechanism: 'Tilt Tension Adjustment & Lock',
      gaslift: 'Class-3 Hydraulic Cylinder',
      colors: 'Off-White, Charcoal Gray, Dusty Pink',
      warranty: '5 Years Warranty',
      weightCapacity: '120 kg'
    },
    colors: [
      { name: 'Charcoal Black', hex: '#262626', filter: 'none' },
      { name: 'Ice White', hex: '#E5E7EB', filter: 'invert(0.9) brightness(1.15)' },
      { name: 'Dusty Pink', hex: '#DB2777', filter: 'hue-rotate(300deg) saturate(1.2)' }
    ],
    idealFor: ['Home Office Setup', 'Shared Co-working Spaces', 'Student Study Chamber']
  },
  zoom: {
    id: 'zoom',
    name: 'Zoom Active Focus Chair',
    tagline: 'Crescent headrest and T-shaped alignment controls for creative tasks.',
    description: 'Calibrated for intense workflows. Features an adjustable crescent headrest and T-bracket arm adjustment for high-focus coding and design cycles.',
    images: {
      front: '/zoom_front.jpg',
      side: '/zoom_side.jpg',
      back: '/zoom_front.jpg'
    },
    gallery: [
      { name: 'Front Profile', src: '/zoom_front.jpg' },
      { name: 'Crescent Headrest View', src: '/zoom_side.jpg' }
    ],
    features: [
      { title: 'Crescent Headrest', desc: 'Curved pillow supports neck movement during deep thought.' },
      { title: 'T-Bracket Controls', desc: 'Mechanical adjusters calibrate arm pad spacing and height.' },
      { title: 'Rapid-Tilt Control', desc: 'Quick-adjust dial changes recline resistance immediately.' },
      { title: 'Mesh Edge Waterfall', desc: 'Thick waterfall cushion edge prevents leg fatigue.' }
    ],
    overview: [
      "The Zoom Active Focus Chair is designed for developers, researchers, and creators whose work requires sustained mental focus. The customizable crescent headrest cradles the neck, reducing stress on the upper back during screen-intensive tasks.",
      "Its unique mechanical T-bracket controls offer precise micro-adjustments for both width and height, ensuring that your elbows remain at a perfect 90-degree angle for typing and mouse movements.",
      "The front seat profile features a waterfall molded foam pad, eliminating blood restriction behind the thighs during long-duration design sprints."
    ],
    specs: {
      dimensions: '118–128cm H x 67cm W x 65cm D',
      material: 'High-Density Elastomeric Mesh',
      frame: 'Reinforced Composite Nylon',
      base: 'Matte Black Cast Aluminum Base',
      armrest: 'T-Style Height Adjustable Armrests',
      mechanism: 'Rapid Synchro-Tilt with Multi-Lock',
      gaslift: 'Class-4 Hydraulic Gas Lift',
      colors: 'Obsidian Black, Navy Blue, Steel Grey',
      warranty: '8 Years Warranty',
      weightCapacity: '140 kg'
    },
    colors: [
      { name: 'Obsidian Black', hex: '#1C1C1C', filter: 'none' },
      { name: 'Navy Blue', hex: '#1E3A8A', filter: 'hue-rotate(220deg) saturate(1.4)' },
      { name: 'Steel Grey', hex: '#6B7280', filter: 'hue-rotate(200deg) brightness(1.2)' }
    ],
    idealFor: ['Software Developer Studio', 'Creative Production Cabins', 'Day-long Design Workstations']
  },
  astra: {
    id: 'astra',
    name: 'Astra Executive Leather Chair',
    tagline: 'Top-grain luxury leatherite high-back chair with quilted stitching.',
    description: 'Elevate your office aesthetic. The Astra combines professional prestige with active spinal support and soft cushion comfort.',
    images: {
      front: '/astra_chair.png',
      side: '/astra_chair.png',
      back: '/astra_chair.png'
    },
    gallery: [
      { name: 'Front Setup', src: '/astra_chair.png' }
    ],
    features: [
      { title: 'Luxury Leatherite', desc: 'Hand-stitched premium leatherite offers rich texture and durability.' },
      { title: 'Quilted Padding', desc: 'Segmented foam backing provides zoned orthopedic relief.' },
      { title: 'Executive Synchro Recline', desc: 'Synchro-tilt recline with variable angle locks for relaxation.' },
      { title: 'Padded Armrests', desc: 'Soft padded arm pads keep shoulders relaxed.' }
    ],
    overview: [
      "The Astra Executive Leather Chair is the ultimate expression of corporate comfort and board-level prestige. Finished in hand-stitched leatherite, it features a contoured high-back profile that provides comprehensive alignment from the pelvis to the neck.",
      "Beneath its luxurious cushioning lies a heavy-gauge steel skeleton, guaranteeing structural integrity and comfort that does not compress or sag over years of operation.",
      "The solid steel synchro-tilt mechanism permits a generous recline angle, allowing executives to transition from active computer work to relaxed strategic contemplation seamlessly."
    ],
    specs: {
      dimensions: '120–130cm H x 70cm W x 68cm D',
      material: 'Premium Perforated Leatherite & High Density Foam',
      frame: 'Heavy Gauge Welded Steel Skeleton',
      base: 'Polished Cast Aluminum Star Pedestal',
      armrest: 'Executive Anodized Steel Armrests with Cushions',
      mechanism: 'Heavy Duty Synchro-Tilt with Multi-Lock',
      gaslift: 'Class-4 German Engineered Hydraulic Cylinder',
      colors: 'Charcoal Black, Cognac Brown, Slate Grey',
      warranty: '12 Years Structural Warranty',
      weightCapacity: '160 kg'
    },
    colors: [
      { name: 'Charcoal Black', hex: '#111111', filter: 'none' },
      { name: 'Cognac Brown', hex: '#78350F', filter: 'hue-rotate(20deg) saturate(1.8) sepia(0.8)' },
      { name: 'Slate Grey', hex: '#4B5563', filter: 'hue-rotate(180deg) brightness(0.9)' }
    ],
    idealFor: ['Executive Offices', 'Enterprise Boardrooms', 'Luxury Workstations']
  }
};
