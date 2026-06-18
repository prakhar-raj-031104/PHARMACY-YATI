const products = [
    {
        id: 1,
        name: "Setyflam-XP Massage Oil",
        category: "Nutraceuticals",
        volume: "60 ml",
        type: "Roll On Oil",
        tagline: "Fast Pain Reliever Roll-On",
        description: "Setyflam-XP is a powerful Ayurvedic herbal massage oil in a convenient roll-on format. It is designed to provide rapid relief from muscle aches, joint pain, strains, sprains, and stiffness, with a blend of natural active oils.",
        mainImage: "processed/transparent/massage_oil_front.png",
        alternateImage: "processed/transparent/WhatsApp Image 2026-06-15 at 11.35.37 AM.png",
        labelImage: "processed/transparent/WhatsApp Image 2026-06-15 at 11.35.16 AM (1).png",
        composition: [
            { name: "Mahanarayan Oil", qty: "30 ml" },
            { name: "Gaultheria procumbens oil (Wintergreen)", qty: "10 ml" },
            { name: "Vitex negundo extract (Nirgundi)", qty: "1.62 gm w/v" },
            { name: "Boswellia serrata (Salai) extract", qty: "10% w/v" },
            { name: "Eucalyptus globulus oil", qty: "5 ml v/v" },
            { name: "Menthol", qty: "2.6 gm w/v" },
            { name: "Apium graveolens extract (Ajmoda)", qty: "1.6 gm w/v" },
            { name: "Oil Base (Mustard Oil)", qty: "q.s." }
        ],
        indications: "Joint pain, backache, muscular strain, sprains, stiffness, and neck pain.",
        dosage: "Massage gently on the affected part of the body two to three times a day, or as directed by the physician."
    },
    {
        id: 2,
        name: "Collinzyme Digestive Syrup",
        category: "Syrups",
        volume: "200 ml",
        type: "Liquid Syrup",
        tagline: "Herbal Digestive Enzyme with Hepatoprotectives",
        description: "Collinzyme is a comprehensive herbal digestive syrup formulation. It combines natural digestive enzymes with carminatives and liver-protecting herbs to treat indigestion, acidity, heartburn, flatulence, and loss of appetite.",
        mainImage: "processed/transparent/syrup_bottle_front.png?v=1.2",
        alternateImage: "processed/transparent/WhatsApp Image 2026-06-15 at 11.35.29 AM (2).png",
        labelImage: "processed/transparent/WhatsApp Image 2026-06-15 at 11.35.16 AM.png",
        composition: [
            { name: "Trifala (Pharmacopoeial)", qty: "150 mg" },
            { name: "Trikatu (Pharmacopoeial)", qty: "150 mg" },
            { name: "Bhringraj (Eclipta alba) Leaf", qty: "100 mg" },
            { name: "Pitta Papda (Fumaria indica)", qty: "100 mg" },
            { name: "Dhaniya (Coriandrum sativum) Fruit", qty: "100 mg" },
            { name: "Mulethi (Glycyrrhiza glabra) Rhizome", qty: "80 mg" },
            { name: "Anantmool (Hemidesmus indicus) Root", qty: "100 mg" },
            { name: "Kalmegh (Andrographis paniculata)", qty: "20 mg" },
            { name: "Arjun (Terminalia arjuna) Bark", qty: "50 mg" },
            { name: "Chitrak (Plumbago zeylanica) Root", qty: "20 mg" }
        ],
        indications: "Indigestion, Acidity, Heartburn, Flatulence, Anorexia, and Constipation.",
        dosage: "1 to 2 teaspoonfuls (5-10 ml) twice daily after meals, or as directed by the physician."
    },
    {
        id: 3,
        name: "Collinzyme Pediatric Drops",
        category: "Syrups",
        volume: "30 ml",
        type: "Oral Drops",
        tagline: "Alpha Amylase & Papain Drops (Mango Flavour)",
        description: "Collinzyme Drops provide gentle, effective relief from colic, flatulence, and digestive discomfort in infants and young children. The delicious mango flavour makes it easy to administer.",
        mainImage: "processed/transparent/pediatric_drops_front.png",
        alternateImage: "processed/transparent/WhatsApp Image 2026-06-15 at 11.35.21 AM (1).png",
        labelImage: "processed/transparent/WhatsApp Image 2026-06-15 at 11.35.21 AM (2).png",
        composition: [
            { name: "Alpha Amylase", qty: "12.5 mg" },
            { name: "Papain", qty: "10 mg" },
            { name: "Dill Oil", qty: "2 mg" },
            { name: "Anise Oil", qty: "1.0 mg" },
            { name: "Caraway Oil", qty: "1.0 mg" }
        ],
        indications: "Infantile colic, flatulence, abdominal bloating, griping pain, and digestive issues in children.",
        dosage: "Infants (up to 1 year): 0.5 ml to 1.0 ml daily. Children (above 1 year): 1.0 ml to 2.0 ml daily, or as directed by the pediatrician."
    },
    {
        id: 4,
        name: "Nephrotone Syrup",
        category: "Syrups",
        volume: "100 ml",
        type: "Ayurvedic Syrup",
        tagline: "For Safe Management of Urinary Tract Infections & Stones",
        description: "Nephrotone is a specialized Ayurvedic formulation for urinary health. It helps flush out kidney stones (renal calculi), relieves burning micturition, treats urinary tract infections, and supports impaired renal function.",
        mainImage: "processed/transparent/syrup_bottle_front.png?v=1.2",
        alternateImage: "processed/transparent/WhatsApp Image 2026-06-15 at 11.35.23 AM (1).png",
        labelImage: "processed/transparent/WhatsApp Image 2026-06-15 at 11.35.17 AM.png",
        composition: [
            { name: "Shuddha Shilajit (Purified Asphaltum)", qty: "200 mg" },
            { name: "Shwet Parpati (Classical Ay. Prep)", qty: "150 mg" },
            { name: "Sajjikhar (Natural Soda Bicarb)", qty: "50 mg" },
            { name: "Moolichar (L-arch of Raphanus sativus)", qty: "150 mg" },
            { name: "Sheetal Chini (Piper cubeba)", qty: "100 mg" },
            { name: "Gokshru (Tribulus terrestris)", qty: "450 mg" },
            { name: "Punarnava (Boerhaavia diffusa)", qty: "500 mg" },
            { name: "Varun Twak (Crataeva nurvala)", qty: "400 mg" }
        ],
        indications: "Dysuria, Urinary Tract Infections, Renal Calculi, Crystalluria, and Enlarged Prostate.",
        dosage: "Children: 1 teaspoonful (5ml) thrice a day. Adults: 2 teaspoonfuls (10ml) thrice a day, or as directed by the physician."
    },
    {
        id: 5,
        name: "Nephrotone Liquid Hand Wash",
        category: "Nutraceuticals",
        volume: "200 ml",
        type: "Liquid Soap",
        tagline: "Herbal Antibacterial Hand Wash",
        description: "Nephrotone Hand Wash combines advanced cleansing agents with herbal extracts to ensure complete hand hygiene. It kills 99.9% of germs while keeping the skin soft, hydrated, and pleasantly fragranced.",
        mainImage: "processed/transparent/pump_bottle_front.png",
        alternateImage: "processed/transparent/WhatsApp Image 2026-06-15 at 11.35.17 AM (2).png",
        labelImage: "processed/transparent/WhatsApp Image 2026-06-15 at 11.35.28 AM (1).png",
        composition: [
            { name: "Neem (Azadirachta indica) Extract", qty: "1.5% w/v" },
            { name: "Tulsi (Ocimum sanctum) Extract", qty: "1.0% w/v" },
            { name: "Aloe Vera (Aloe barbadensis) Gel", qty: "2.0% w/v" },
            { name: "Glycerin", qty: "5.0% w/v" },
            { name: "Cleansing Base", qty: "q.s." }
        ],
        indications: "Daily hand hygiene, germ protection, and skin hydration.",
        dosage: "Press pump to dispense liquid onto wet hands. Lather thoroughly for 20 seconds and rinse with water."
    },
    {
        id: 6,
        name: "Rosytone Liquid Hand Wash",
        category: "Nutraceuticals",
        volume: "200 ml",
        type: "Liquid Soap",
        tagline: "Moisturizing Herbal Hand Wash",
        description: "Rosytone Herbal Hand Wash is enriched with soothing floral extracts and moisturizers. It offers a gentle, nourishing wash that eliminates harmful bacteria without drying out the skin, leaving a subtle rosy aroma.",
        mainImage: "processed/transparent/pump_bottle_front.png",
        alternateImage: "processed/transparent/WhatsApp Image 2026-06-15 at 11.35.27 AM (1).png",
        labelImage: "processed/transparent/WhatsApp Image 2026-06-15 at 11.35.27 AM.png",
        composition: [
            { name: "Rose (Rosa centifolia) Flower Water", qty: "3.0% w/v" },
            { name: "Aloe Vera (Aloe barbadensis) Gel", qty: "2.0% w/v" },
            { name: "Tea Tree Oil", qty: "0.5% w/v" },
            { name: "Glycerin & Vitamin E", qty: "4.0% w/v" },
            { name: "Cleansing Base", qty: "q.s." }
        ],
        indications: "Daily hand sanitization, germ defense, skin softening.",
        dosage: "Pump onto wet hands, work into a rich lather, wash thoroughly, and rinse off completely."
    },
    {
        id: 7,
        name: "Rosytone-LV Intimate Wash",
        category: "Nutraceuticals",
        volume: "100 ml",
        type: "Intimate Wash",
        tagline: "pH 3.5 Balanced Intimate Hygiene Wash",
        description: "Rosytone-LV Wash is specifically formulated to maintain the natural pH balance (3.5) of the intimate area. Enriched with Sea Buckthorn and Tea Tree Oil, it prevents dryness, irritation, itchiness, and unpleasant odors, ensuring fresh comfort all day.",
        mainImage: "processed/transparent/pump_bottle_front.png",
        alternateImage: "processed/transparent/WhatsApp Image 2026-06-15 at 11.35.33 AM (2).png",
        labelImage: "processed/transparent/WhatsApp Image 2026-06-15 at 11.35.33 AM (1).png",
        composition: [
            { name: "Lactic Acid", qty: "1.2% w/v" },
            { name: "Sea Buckthorn Fruit Oil", qty: "0.5% w/v" },
            { name: "Tea Tree (Melaleuca alternifolia) Leaf Oil", qty: "0.2% w/v" },
            { name: "Cocamidopropyl Betaine", qty: "q.s." },
            { name: "Purified Water Base", qty: "q.s." }
        ],
        indications: "Daily intimate hygiene, prevention of irritation, itching, dryness, and odor.",
        dosage: "Pour a small amount on your palm. Apply gently on the external intimate area. Rinse thoroughly with clean water."
    },
    {
        id: 8,
        name: "Rosytone Uterine Syrup",
        category: "Syrups",
        volume: "200 ml",
        type: "Herbal Syrup",
        tagline: "Complete Uterine Health Tonic for Ladies",
        description: "Rosytone Syrup is a time-tested Ayurvedic restorative tonic designed for women. It helps regulate menstrual cycles, treats leucorrhoea, relieves weakness, fatigue, and lower backaches, and supports general vitality and wellness.",
        mainImage: "processed/transparent/syrup_bottle_front.png?v=1.2",
        alternateImage: "processed/transparent/WhatsApp Image 2026-06-15 at 11.35.35 AM (2).png",
        labelImage: "processed/transparent/WhatsApp Image 2026-06-15 at 11.35.35 AM (1).png",
        composition: [
            { name: "Ashoka (Saraca asoca) Bark", qty: "400 mg" },
            { name: "Lodhra (Symplocos racemosa) Bark", qty: "300 mg" },
            { name: "Shatavari (Asparagus racemosus) Root", qty: "200 mg" },
            { name: "Ashwagandha (Withania somnifera)", qty: "150 mg" },
            { name: "Dashmoola (Ten Roots)", qty: "250 mg" },
            { name: "Haritaki (Terminalia chebula)", qty: "100 mg" }
        ],
        indications: "Menstrual irregularities, leucorrhoea, menorrhagia, backache, general weakness, and female health support.",
        dosage: "2 teaspoonfuls (10 ml) twice daily after meals, or as directed by the physician."
    },
    {
        id: 9,
        name: "Cledex-AT Cough Expectorant",
        category: "Syrups",
        volume: "100 ml",
        type: "Cough Syrup",
        tagline: "Fast Expectorant for Productive & Asthmatic Cough",
        description: "Cledex-AT Expectorant is a highly effective, triple-action cough syrup. It acts as a mucolytic (dilutes thick mucus), a bronchodilator (relaxes airways), and an expectorant (clears throat), providing rapid relief from wet coughs and chest congestion.",
        mainImage: "processed/transparent/cledex_at_bottle.png?v=1.2",
        alternateImage: "processed/transparent/cledex_at_box.png",
        labelImage: "processed/transparent/WhatsApp Image 2026-06-15 at 11.35.26 AM (1).png",
        composition: [
            { name: "Ambroxol Hydrochloride IP", qty: "15 mg" },
            { name: "Guaiphenesin IP", qty: "50 mg" },
            { name: "Terbutaline Sulphate IP", qty: "1.25 mg" },
            { name: "Menthol IP", qty: "2.5 mg" },
            { name: "Flavoured Syrupy Base", qty: "q.s." }
        ],
        indications: "Relief from productive, asthmatic cough, bronchitis, and sore throat.",
        dosage: "Adults: 2 teaspoonfuls (10ml) three times a day. Children: 1 teaspoonful (5ml) three times a day, or as directed by the physician."
    },
    {
        id: 10,
        name: "Cledex-LF Oral Suspension",
        category: "Syrups",
        volume: "100 ml",
        type: "Cough Suspension",
        tagline: "Levocloperastine Fendizoate (Sugar-Free)",
        description: "Cledex-LF is a modern, sugar-free antitussive oral suspension. Formulated with Levocloperastine Fendizoate, it directly targets the cough center in the brain to suppress dry, dry-tickly, and allergic coughs quickly without causing drowsiness.",
        mainImage: "processed/transparent/syrup_bottle_front.png?v=1.2",
        alternateImage: "processed/transparent/WhatsApp Image 2026-06-15 at 11.35.36 AM.png",
        labelImage: "processed/transparent/WhatsApp Image 2026-06-15 at 11.35.34 AM (1).png",
        composition: [
            { name: "Levocloperastine Fendizoate", qty: "35.4 mg" },
            { name: "Equivalent to Levocloperastine HCl", qty: "20 mg" },
            { name: "Flavoured Suspension Base", qty: "q.s." }
        ],
        indications: "Dry, dry-tickly, spasmodic, and irritative cough associated with cold or respiratory tract infections.",
        dosage: "Adults: 5-10 ml three times a day. Children: 1.25-2.5 ml three times a day, or as directed by the physician."
    },
    {
        id: 11,
        name: "Liveract Liver Capsules",
        category: "Capsules",
        volume: "10x10 Capsules",
        type: "Softgel Capsules",
        tagline: "Lecithin & Silymarin Soft Gelatin Capsules",
        description: "Liveract Capsules contain a synergistic combination of Silymarin (Milk Thistle) and Lecithin (Essential Phospholipids). It acts as a powerful hepatoprotective, supporting liver cell regeneration, improving lipid metabolism, and protecting liver cells from toxic damage.",
        mainImage: "processed/transparent/medicine_box_front.png",
        alternateImage: "processed/transparent/WhatsApp Image 2026-06-15 at 11.35.18 AM (2).png",
        labelImage: "processed/transparent/WhatsApp Image 2026-06-15 at 11.35.18 AM (1).png",
        composition: [
            { name: "Silymarin Extract (Standardized)", qty: "70 mg" },
            { name: "Essential Phospholipids (Lecithin)", qty: "175 mg" },
            { name: "Vitamin B1, B2, B6, B12", qty: "q.s." },
            { name: "Niacinamide & Pantothenate", qty: "q.s." }
        ],
        indications: "Alcoholic liver disease, fatty liver, hepatic cirrhosis, drug-induced hepatotoxicity, and overall liver detoxification.",
        dosage: "1 to 2 capsules daily with meals, or as directed by the physician."
    },
    {
        id: 12,
        name: "Liveract-UD Liver Suspension",
        category: "Syrups",
        volume: "100 ml",
        type: "Oral Suspension",
        tagline: "Ursodeoxycholic Acid Oral Suspension",
        description: "Liveract-UD is an Ursodeoxycholic Acid suspension that helps dissolve gallstones, prevents cholesterol accumulation in the bile, and protects liver cells from toxic bile acids, aiding in chronic cholestatic liver disease management.",
        mainImage: "processed/transparent/syrup_bottle_front.png?v=1.2",
        alternateImage: "processed/transparent/WhatsApp Image 2026-06-15 at 11.35.19 AM.png",
        labelImage: "processed/transparent/WhatsApp Image 2026-06-15 at 11.35.19 AM (2).png",
        composition: [
            { name: "Ursodeoxycholic Acid IP", qty: "125 mg" },
            { name: "Flavoured Suspension Base", qty: "q.s." }
        ],
        indications: "Primary biliary cholangitis, cholesterol gallstone dissolution, and cholestatic liver disorders.",
        dosage: "10-15 mg/kg body weight daily in divided doses, or as directed by the physician."
    },
    {
        id: 13,
        name: "Liveract-UD 150 Tablets",
        category: "Tablets",
        volume: "10x10 Tablets",
        type: "Tablets",
        tagline: "Ursodeoxycholic Acid Tablets IP 150mg",
        description: "Liveract-UD 150 provides Ursodeoxycholic Acid in an exact 150mg tablet form. It reduces cholesterol secretion from the liver and cholesterol absorption in the intestine, facilitating gradual dissolution of radiolucent cholesterol gallstones.",
        mainImage: "processed/transparent/medicine_box_front.png",
        alternateImage: "processed/transparent/WhatsApp Image 2026-06-15 at 11.35.20 AM.png",
        labelImage: "processed/transparent/WhatsApp Image 2026-06-15 at 11.35.20 AM (2).png",
        composition: [
            { name: "Ursodeoxycholic Acid IP", qty: "150 mg" },
            { name: "Excipients", qty: "q.s." }
        ],
        indications: "Chronic liver disorders, gallstones, biliary tract blockages.",
        dosage: "As directed by the physician (usually 1 tablet two to three times daily)."
    },
    {
        id: 14,
        name: "Nutricom Multivitamin Softgels",
        category: "Capsules",
        volume: "10x10 Capsules",
        type: "Softgel Capsules",
        tagline: "Anti-oxidants, Vitamins & Minerals",
        description: "Nutricom is a premium nutritional supplement packed with key antioxidants, vitamins, and minerals. It speeds up recovery, helps bridge nutritional gaps, boosts daily energy levels, and protects body tissues from oxidative damage.",
        mainImage: "processed/transparent/medicine_box_front.png",
        alternateImage: "processed/transparent/WhatsApp Image 2026-06-15 at 11.35.22 AM (1).png",
        labelImage: "processed/transparent/WhatsApp Image 2026-06-15 at 11.35.22 AM (2).png",
        composition: [
            { name: "Ginseng Extract", qty: "42.5 mg" },
            { name: "Vitamin A, C, E, D3", qty: "q.s." },
            { name: "Zinc, Magnesium, Manganese", qty: "q.s." },
            { name: "Calcium, Phosphorus, Potassium", qty: "q.s." },
            { name: "Folic Acid & B-Complex Vitamins", qty: "q.s." }
        ],
        indications: "General weakness, fatigue, convalescence, antioxidant defense, and nutritional deficiencies.",
        dosage: "1 softgel capsule daily with water after meals, or as directed by the physician."
    },
    {
        id: 15,
        name: "Y-PLAT Platelet Tablets",
        category: "Tablets",
        volume: "10x10 Tablets",
        type: "Herbal Tablets",
        tagline: "Papaya Leaf & Guduchi extract for Platelet Support",
        description: "Y-PLAT is a highly effective, natural formula to rapidly increase blood platelet counts. Combining concentrated extracts of Papaya Leaves, Guduchi, Kiwi, and Tulsi, it is highly recommended during dengue, malaria, viral fever, and thrombocytopenia.",
        mainImage: "processed/transparent/medicine_box_front.png",
        alternateImage: "processed/transparent/WhatsApp Image 2026-06-15 at 11.35.25 AM (1).png",
        labelImage: "processed/transparent/WhatsApp Image 2026-06-15 at 11.35.30 AM.png",
        composition: [
            { name: "Papaya (Carica papaya) Leaf Extract", qty: "1100 mg" },
            { name: "Guduchi (Tinospora cordifolia) Stem", qty: "150 mg" },
            { name: "Kiwi (Actinidia deliciosa) Fruit", qty: "40 mg" },
            { name: "Tulsi (Ocimum sanctum) Leaf Extract", qty: "50 mg" }
        ],
        indications: "Thrombocytopenia (low platelet count), dengue, malaria, viral fever, and immune deficiencies.",
        dosage: "Adults: 1 tablet three times a day for 5 days, or as directed by the physician."
    },
    {
        id: 16,
        name: "Axiom-OR 100 Antibiotic",
        category: "Tablets",
        volume: "10x10 Tablets",
        type: "Dispersible Tablets",
        tagline: "Cefixime Dispersible Tablets IP 100mg",
        description: "Axiom-OR 100 contains Cefixime, a third-generation cephalosporin antibiotic. It is highly effective in treating a wide range of bacterial infections affecting the lungs, throat, urinary tract, ear, and skin.",
        mainImage: "processed/transparent/medicine_box_front.png",
        alternateImage: "processed/transparent/WhatsApp Image 2026-06-15 at 11.35.38 AM (1).png",
        labelImage: "processed/transparent/WhatsApp Image 2026-06-15 at 11.35.38 AM (2).png",
        composition: [
            { name: "Cefixime IP (as Trihydrate)", qty: "100 mg" },
            { name: "Excipients", qty: "q.s." }
        ],
        indications: "Tonsillitis, pharyngitis, bronchitis, otitis media, urinary tract infections, and typhoid fever.",
        dosage: "As directed by the physician (usually 1-2 tablets daily in divided doses)."
    },
    {
        id: 17,
        name: "Y.D.CAL FORTE Bone Tablets",
        category: "Tablets",
        volume: "10x10 Tablets",
        type: "Tablets",
        tagline: "CCM, Vitamin D3, K2-7 & Zinc Bone Formula",
        description: "Y.D.CAL FORTE is a comprehensive bone health formula. It contains Calcium Citrate Malate (highly bioavailable calcium), Vitamin D3 (for calcium absorption), Vitamin K2-7 (for binding calcium to bone matrix), Magnesium, and Zinc to maintain maximum bone mineral density.",
        mainImage: "processed/transparent/medicine_box_front.png",
        alternateImage: "processed/transparent/WhatsApp Image 2026-06-15 at 11.35.39 AM.png",
        labelImage: "processed/transparent/WhatsApp Image 2026-06-15 at 11.35.31 AM.png",
        composition: [
            { name: "Calcium Citrate Malate", qty: "1250 mg" },
            { name: "Vitamin D3", qty: "1000 IU" },
            { name: "Vitamin K2-7", qty: "90 mcg" },
            { name: "Methylcobalamin", qty: "1500 mcg" },
            { name: "Zinc Oxide", qty: "15 mg" },
            { name: "Magnesium Oxide", qty: "50 mg" }
        ],
        indications: "Osteoporosis, osteomalacia, calcium deficiency, bone fractures, and joint health support.",
        dosage: "1 tablet daily after meals, or as directed by the physician."
    },
    {
        id: 18,
        name: "Yaticef-1g Injection",
        category: "Injectables",
        volume: "1 Vial",
        type: "Dry Powder Injection",
        tagline: "Ceftriaxone Injection IP 1g",
        description: "Yaticef-1g contains Ceftriaxone Sodium, a potent third-generation cephalosporin antibiotic. It is sterile, pyrogen-free, and indicated for severe bacterial infections including sepsis, meningitis, and post-operative prophylaxis.",
        mainImage: "processed/transparent/medicine_box_front.png",
        alternateImage: "processed/transparent/WhatsApp Image 2026-06-15 at 11.35.38 AM (1).png",
        labelImage: "processed/transparent/WhatsApp Image 2026-06-15 at 11.35.38 AM (2).png",
        composition: [
            { name: "Sterile Ceftriaxone Sodium IP eq. to Anhydrous Ceftriaxone", qty: "1000 mg" }
        ],
        indications: "Sepsis, meningitis, abdominal infections, bone/joint infections, and respiratory tract infections.",
        dosage: "As directed by the physician. Dissolve in sterile water for injection and administer intravenously or intramuscularly."
    },
    {
        id: 19,
        name: "Yati-Methyl Injection",
        category: "Injectables",
        volume: "5x2 ml Ampoules",
        type: "Liquid Injection",
        tagline: "Methylcobalamin 1500 mcg Injection",
        description: "Yati-Methyl is a high-potency Vitamin B12 injection. It is formulated to treat peripheral neuropathies, megaloblastic anemia, and severe vitamin deficiencies, promoting nerve cell regeneration and cognitive health.",
        mainImage: "processed/transparent/medicine_box_front.png",
        alternateImage: "processed/transparent/WhatsApp Image 2026-06-15 at 11.35.22 AM (1).png",
        labelImage: "processed/transparent/WhatsApp Image 2026-06-15 at 11.35.22 AM (2).png",
        composition: [
            { name: "Methylcobalamin", qty: "1500 mcg" },
            { name: "Benzyl Alcohol (Preservative)", qty: "1.5% v/v" },
            { name: "Water for Injection IP", qty: "q.s." }
        ],
        indications: "Peripheral neuropathy, diabetic neuropathy, megaloblastic anemia, and vitamin B12 deficiency.",
        dosage: "Administer intramuscularly or intravenously as directed by the physician."
    }
];

// Open modal for a specific featured product ID
function openFeaturedModal(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        openModal(product);
    }
}
window.openFeaturedModal = openFeaturedModal;

// Modal Core Functions
const modal = document.getElementById('product-modal');

function openModal(p) {
    const modalBody = document.getElementById('modal-body');
    
    // Check which images are available to build the tabs
    let tabsHtml = `
        <button class="image-tab active" id="tab-mockup">
            <span>Product Shot</span>
        </button>
    `;
    if (p.labelImage) {
        tabsHtml += `
            <button class="image-tab" id="tab-label">
                <span>Packaging & Label</span>
            </button>
        `;
    }
    if (p.alternateImage && p.alternateImage !== p.mainImage) {
        tabsHtml += `
            <button class="image-tab" id="tab-alt">
                <span>Alt Angle</span>
            </button>
        `;
    }
    
    modalBody.innerHTML = `
        <div class="modal-gallery-column">
            <div class="image-selector">
                <div class="main-image-display" id="main-display">
                    <img src="${p.mainImage}" id="modal-main-img" alt="${p.name}">
                </div>
                <div class="image-selector-tabs">
                    ${tabsHtml}
                </div>
            </div>
        </div>
        <div class="modal-details-column">
            <div class="modal-details-header">
                <h2>${p.name}</h2>
                <div style="display: flex; gap: 12px; margin-top: 12px; align-items:center; flex-wrap: wrap;">
                    <span class="header-cert" style="border: 1px solid rgba(0, 217, 255, 0.3); background: rgba(0, 217, 255, 0.05); color: var(--cyan); padding: 4px 12px; font-size:11px;">
                        ${p.category}
                    </span>
                    <span style="font-size: 13px; font-weight:700; color: var(--text-muted);">
                        ${p.volume} | ${p.type}
                    </span>
                </div>
            </div>
            
            <div class="product-info-block">
                <div class="modal-section-title">Description</div>
                <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6;">${p.description}</p>
            </div>
            
            <div class="product-info-block">
                <div class="modal-section-title">Indications</div>
                <p style="font-size: 14px; font-weight: 700; color: var(--text-color); line-height: 1.5;">${p.indications}</p>
            </div>
            
            <div class="product-info-block">
                <div class="modal-section-title">Composition</div>
                <div class="composition-list">
                    ${p.composition.map(c => `
                        <div class="composition-item">
                            <span class="comp-name">${c.name}</span>
                            <span class="comp-qty">${c.qty}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="product-info-block">
                <div class="modal-section-title">Directions & Dosage</div>
                <p style="font-size: 14px; color: var(--text-muted); font-weight: 500; line-height: 1.5;">${p.dosage}</p>
            </div>
        </div>
    `;
    
    // Wire up image tab switching inside modal
    const mainImg = document.getElementById('modal-main-img');
    const tabMockup = document.getElementById('tab-mockup');
    const tabLabel = document.getElementById('tab-label');
    const tabAlt = document.getElementById('tab-alt');
    
    const tabs = [tabMockup, tabLabel, tabAlt].filter(t => t !== null);
    
    function setActiveTab(activeTab) {
        tabs.forEach(t => t.classList.remove('active'));
        activeTab.classList.add('active');
    }
    
    if (tabMockup) {
        tabMockup.addEventListener('click', () => {
            setActiveTab(tabMockup);
            mainImg.src = p.mainImage;
        });
    }
    
    if (tabLabel) {
        tabLabel.addEventListener('click', () => {
            setActiveTab(tabLabel);
            mainImg.src = p.labelImage;
        });
    }
    
    if (tabAlt) {
        tabAlt.addEventListener('click', () => {
            setActiveTab(tabAlt);
            mainImg.src = p.alternateImage;
        });
    }
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Lock background scroll
}
window.openModal = openModal;

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = ''; // Restore scroll
}
window.closeModal = closeModal;

// Close modal when clicking outside content area
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Inquiry Form Submission Handler
function handleInquirySubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('form-name').value;
    const email = document.getElementById('form-email').value;
    const form = document.getElementById('contact-inquiry-form');
    
    form.style.opacity = '0';
    form.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        form.innerHTML = `
            <div style="background: rgba(0, 214, 122, 0.1); border: 1px solid var(--green); padding: 30px; border-radius: var(--radius-md); text-align: center; box-shadow: var(--glass-glow-green); animation: fadeIn 0.6s ease;">
                <i class="fa-solid fa-circle-check" style="font-size: 48px; color: var(--green); margin-bottom: 16px;"></i>
                <h4 style="font-weight: 800; font-size: 20px; margin-bottom: 8px; color: var(--text-color);">Thank You, ${name}!</h4>
                <p style="font-size: 14px; color: var(--text-muted); line-height: 1.5;">Your message has been sent successfully. Our pharmaceutical expert team will reach out to <strong>${email}</strong> shortly.</p>
            </div>
        `;
        form.style.opacity = '1';
    }, 500);
}
window.handleInquirySubmit = handleInquirySubmit;

// 1. High Performance Background Canvas Ambient Drifting Blobs
function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let particles = [];
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });
    
    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.15; // extremely slow drift
            this.vy = (Math.random() - 0.5) * 0.15;
            this.radius = Math.random() * 150 + 150; // large soft blobs (150px to 300px)
            // Soft translucent cyan and green
            this.color = Math.random() < 0.5 ? 'rgba(14, 165, 233, 0.04)' : 'rgba(16, 185, 129, 0.04)';
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            // Gentle bounce at boundaries
            if (this.x < -this.radius) this.x = width + this.radius;
            if (this.x > width + this.radius) this.x = -this.radius;
            if (this.y < -this.radius) this.y = height + this.radius;
            if (this.y > height + this.radius) this.y = -this.radius;
        }
        
        draw() {
            // Draw particle as a soft radial gradient blob
            const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
            grad.addColorStop(0, this.color);
            grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
            
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = grad;
            ctx.fill();
        }
    }
    
    const count = 6;
    for (let i = 0; i < count; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, width, height);
        
        // Update & Draw particles (drifting blobs without lines)
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// 2. Interactive Scroll Storyteller Capsule positioning logic removed

// 3. Horizontal timeline scroll driving function
// Cached layout coordinates to prevent layout thrashing (forced reflows) during scroll
let manufacturingOffsetTop = 0;
let manufacturingOffsetHeight = 0;
let timelineMaxScroll = 0;

function cacheTimelineLayout() {
    const manufacturingSection = document.getElementById('manufacturing');
    const timelineWrapper = document.getElementById('timeline-wrapper');
    
    if (manufacturingSection && timelineWrapper) {
        manufacturingOffsetTop = manufacturingSection.offsetTop;
        manufacturingOffsetHeight = manufacturingSection.offsetHeight;
        timelineMaxScroll = timelineWrapper.scrollWidth - timelineWrapper.clientWidth;
    }
}

function updateTimeline() {
    const timelineWrapper = document.getElementById('timeline-wrapper');
    const timelineFill = document.getElementById('timeline-fill');
    
    if (!timelineWrapper || !timelineFill) return;
    
    // The pinning starts when the section's top hits the top of the viewport
    const start = manufacturingOffsetTop;
    // The pinning ends when the section's bottom hits the bottom of the viewport
    const end = manufacturingOffsetTop + manufacturingOffsetHeight - window.innerHeight;
    
    const p = Math.max(0, Math.min(1, (window.scrollY - start) / (end - start)));
    
    timelineWrapper.scrollLeft = p * timelineMaxScroll;
    timelineFill.style.width = (p * 100) + '%';
}

// 4. Render product cards and category modals
function openCategoryModal(category) {
    const modalBody = document.getElementById('modal-body');
    const modal = document.getElementById('product-modal');
    if (!modalBody || !modal) return;
    
    // Filter products in this category
    const catProducts = products.filter(p => p.category === category);
    
    let productsHtml = '';
    if (catProducts.length === 0) {
        productsHtml = `<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">No products found in this category.</p>`;
    } else {
        productsHtml = catProducts.map(p => `
            <div class="category-modal-card" onclick="event.stopPropagation(); openModalFromCategory(${p.id})">
                <img src="${p.mainImage}" alt="${p.name}">
                <h4>${p.name}</h4>
                <span>${p.volume} | ${p.type}</span>
            </div>
        `).join('');
    }
    
    modalBody.innerHTML = `
        <div style="width: 100%; padding: 10px 20px;">
            <h2 style="font-size: 28px; font-weight: 700; color: var(--primary-navy); border-bottom: 2px solid rgba(0, 119, 182, 0.1); padding-bottom: 12px; margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">
                <i class="fa-solid fa-prescription-bottle-medical" style="color: var(--medical-blue);"></i> ${category} Range
            </h2>
            <div class="category-modal-grid">
                ${productsHtml}
            </div>
        </div>
    `;
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Lock body scroll
}
window.openCategoryModal = openCategoryModal;

function openModalFromCategory(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        openModal(product);
    }
}
window.openModalFromCategory = openModalFromCategory;

// Safe fallback/binding for legacy filterCategory calls (e.g. from search or menu)
function filterCategory(cat) {
    if (cat === 'All') return;
    openCategoryModal(cat);
}
window.filterCategory = filterCategory;

// 6. Statistics Counter animation observer
let statsAnimated = false;
function initStatsCounter() {
    const statsSection = document.getElementById('global');
    const statNums = document.querySelectorAll('.stat-num');
    
    if (!statsSection || statNums.length === 0) return;
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !statsAnimated) {
                statsAnimated = true;
                statNums.forEach(num => {
                    const target = parseInt(num.getAttribute('data-val'));
                    const duration = 2000;
                    const start = performance.now();
                    
                    function updateCount(timestamp) {
                        const elapsed = timestamp - start;
                        const progress = Math.min(elapsed / duration, 1);
                        const easeProgress = progress * (2 - progress); // Ease out quad
                        const current = Math.floor(easeProgress * target);
                        
                        if (target === 1500) {
                            num.textContent = current.toLocaleString() + '+';
                        } else if (target === 5) {
                            num.textContent = current + 'M+';
                        } else {
                            num.textContent = current + '+';
                        }
                        
                        if (progress < 1) {
                            requestAnimationFrame(updateCount);
                        } else {
                            if (target === 1500) {
                                num.textContent = '1,500+';
                            } else if (target === 5) {
                                num.textContent = '5M+';
                            } else {
                                num.textContent = target + '+';
                            }
                        }
                    }
                    requestAnimationFrame(updateCount);
                });
            }
        });
    }, { threshold: 0.2 });
    
    statsObserver.observe(statsSection);
}

// 8. Scroll Reveal Animations Initializer
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => observer.observe(el));
}

// 7. Initial startup logic
document.addEventListener('DOMContentLoaded', () => {
    // Canvas Particles
    // initParticles();
    
    // Stats observer setup
    initStatsCounter();
    
    // Scroll reveal setup
    initScrollReveal();
    
    // Initial run of timeline placement
    setTimeout(() => {
        cacheTimelineLayout();
        updateTimeline();
    }, 200);
});

// Performance optimized scroll binding using requestAnimationFrame ticks
let scrollTick = false;
window.addEventListener('scroll', () => {
    if (!scrollTick) {
        requestAnimationFrame(() => {
            updateTimeline();
            updateHeaderOnScroll();
            updateBackToTopButton();
            scrollTick = false;
        });
        scrollTick = true;
    }
});

// Header scroll shrink effect
const headerEl = document.querySelector('header');
function updateHeaderOnScroll() {
    if (!headerEl) return;
    if (window.scrollY > 60) {
        headerEl.classList.add('scrolled');
    } else {
        headerEl.classList.remove('scrolled');
    }
    
    // Active nav link on scroll
    const sections = ['about', 'products', 'featured', 'manufacturing', 'research', 'gallery', 'contact'];
    const navLinks = document.querySelectorAll('.nav-links a');
    let current = '';
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
            current = id;
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}


// Trigger dynamic resize recalculation for coordinates
window.addEventListener('resize', () => {
    cacheTimelineLayout();
    updateTimeline();
});

// Ensure final recalculation when all images and fonts are loaded
window.addEventListener('load', () => {
    cacheTimelineLayout();
    updateTimeline();
});

// ==========================================
// Lupin UI Redesign - Dynamic Interactions
// ==========================================

// 1. Globe Region Selector Dropdown Panel Toggle
const globeTrigger = document.getElementById('globe-trigger');
const regionDropdown = document.getElementById('region-dropdown');

if (globeTrigger && regionDropdown) {
    globeTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        regionDropdown.classList.toggle('active');
    });
    
    document.addEventListener('click', (e) => {
        if (!regionDropdown.contains(e.target) && e.target !== globeTrigger) {
            regionDropdown.classList.remove('active');
        }
    });
}

// 2. Search Overlay Toggle and Real-time Search Engine
const searchTrigger = document.getElementById('search-trigger');
const searchClose = document.getElementById('search-close');
const searchOverlay = document.getElementById('search-overlay');
const searchInput = document.getElementById('search-input');
const searchResultsWrapper = document.getElementById('search-results-wrapper');

if (searchTrigger && searchClose && searchOverlay) {
    searchTrigger.addEventListener('click', () => {
        searchOverlay.classList.add('active');
        if (searchInput) {
            searchInput.value = '';
            searchInput.focus();
        }
        if (searchResultsWrapper) {
            searchResultsWrapper.innerHTML = `<div class="search-no-query">Type to search YATI products (e.g. Setyflam, Collinzyme, Multivitamin...)</div>`;
        }
    });
    
    searchClose.addEventListener('click', () => {
        searchOverlay.classList.remove('active');
    });
}

if (searchInput && searchResultsWrapper) {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (query.length === 0) {
            searchResultsWrapper.innerHTML = `<div class="search-no-query">Type to search YATI products (e.g. Setyflam, Collinzyme, Multivitamin...)</div>`;
            return;
        }
        
        // Filter based on product attributes
        const matches = products.filter(p => {
            const nameMatch = p.name.toLowerCase().includes(query);
            const catMatch = p.category.toLowerCase().includes(query);
            const tagMatch = p.tagline.toLowerCase().includes(query);
            const compMatch = p.composition.some(c => c.name.toLowerCase().includes(query));
            return nameMatch || catMatch || tagMatch || compMatch;
        });
        
        if (matches.length === 0) {
            searchResultsWrapper.innerHTML = `<div class="search-no-query">No products found matching "${e.target.value}"</div>`;
            return;
        }
        
        searchResultsWrapper.innerHTML = `<div class="search-results-grid" id="search-results-grid"></div>`;
        const grid = document.getElementById('search-results-grid');
        
        matches.forEach(p => {
            const card = document.createElement('div');
            card.className = 'search-result-card';
            card.innerHTML = `
                <img src="${p.mainImage}" alt="${p.name}" class="search-result-img">
                <div class="search-result-info">
                    <span class="search-result-name">${p.name}</span>
                    <span class="search-result-category">${p.category}</span>
                </div>
            `;
            card.addEventListener('click', () => {
                searchOverlay.classList.remove('active');
                openModal(p);
            });
            grid.appendChild(card);
        });
    });
}

// 3. Sliding Mega Menu Toggle & Panel Switching on Hover
const menuTrigger = document.getElementById('menu-trigger');
const megaClose = document.getElementById('mega-close');
const megaMenu = document.getElementById('mega-menu');
const megaMainLinks = document.querySelectorAll('.mega-main-link');
const megaSubPanels = document.querySelectorAll('.mega-sub-panel');

if (menuTrigger && megaClose && megaMenu) {
    menuTrigger.addEventListener('click', () => {
        megaMenu.classList.add('open');
        document.body.style.overflow = 'hidden';
    });
    
    megaClose.addEventListener('click', () => {
        megaMenu.classList.remove('open');
        document.body.style.overflow = '';
    });
}

// Mega-menu links hover state is handled directly via CSS transition hover selectors now.

// Helper function to close mega-menu and scroll to target
function closeModalAndScroll(selector) {
    const megaMenu = document.getElementById('mega-menu');
    if (megaMenu) {
        megaMenu.classList.remove('open');
        document.body.style.overflow = '';
    }
    
    setTimeout(() => {
        const target = document.querySelector(selector);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }, 150);
}
window.closeModalAndScroll = closeModalAndScroll;



// ==========================================
// BUSINESS GALLERY FILTERING & LIGHTBOX LOGIC
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Gallery Filtering Logic
    const filterButtons = document.querySelectorAll('.gallery-filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterButtons.length && galleryItems.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');
                
                const filterValue = button.getAttribute('data-filter');
                
                galleryItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');
                    if (filterValue === 'all' || itemCategory === filterValue) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                });
            });
        });
    }

    // 2. Lightbox Modal Logic
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTag = document.getElementById('lightbox-tag');
    const lightboxTitle = document.getElementById('lightbox-title');
    
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    
    let currentGalleryIndex = 0;
    let visibleGalleryItems = [];

    // Helper to update active visible items list (which changes based on filtering)
    function updateVisibleItems() {
        visibleGalleryItems = Array.from(galleryItems).filter(item => !item.classList.contains('hidden'));
    }

    // Helper to open lightbox at a specific index
    function openLightbox(index) {
        updateVisibleItems();
        if (index < 0 || index >= visibleGalleryItems.length) return;
        
        currentGalleryIndex = index;
        const activeItem = visibleGalleryItems[currentGalleryIndex];
        const imgEl = activeItem.querySelector('img');
        const tagEl = activeItem.querySelector('.gallery-item-tag');
        const titleEl = activeItem.querySelector('.gallery-item-title');
        
        if (lightboxImg && imgEl) {
            lightboxImg.src = imgEl.src;
            lightboxImg.alt = imgEl.alt || 'Gallery Image Preview';
        }
        if (lightboxTag && tagEl) {
            lightboxTag.textContent = tagEl.textContent;
        }
        if (lightboxTitle && titleEl) {
            lightboxTitle.textContent = titleEl.textContent;
        }
        
        if (lightboxModal) {
            lightboxModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Lock scrolling
        }
    }

    // Helper to close lightbox
    function closeLightbox() {
        if (lightboxModal) {
            lightboxModal.classList.remove('active');
            document.body.style.overflow = ''; // Unlock scrolling
        }
    }

    // Add click listeners to items
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            updateVisibleItems();
            const index = visibleGalleryItems.indexOf(item);
            if (index !== -1) {
                openLightbox(index);
            }
        });
    });

    // Close button
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    // Click outside to close
    if (lightboxModal) {
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) {
                closeLightbox();
            }
        });
    }

    // Next image
    if (lightboxNext) {
        lightboxNext.addEventListener('click', (e) => {
            e.stopPropagation();
            updateVisibleItems();
            let nextIndex = currentGalleryIndex + 1;
            if (nextIndex >= visibleGalleryItems.length) {
                nextIndex = 0; // Wrap around
            }
            openLightbox(nextIndex);
        });
    }

    // Previous image
    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', (e) => {
            e.stopPropagation();
            updateVisibleItems();
            let prevIndex = currentGalleryIndex - 1;
            if (prevIndex < 0) {
                prevIndex = visibleGalleryItems.length - 1; // Wrap around
            }
            openLightbox(prevIndex);
        });
    }

    // Keyboard arrow keys navigation & Escape close
    document.addEventListener('keydown', (e) => {
        if (lightboxModal && lightboxModal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowRight') {
                if (lightboxNext) lightboxNext.click();
            } else if (e.key === 'ArrowLeft') {
                if (lightboxPrev) lightboxPrev.click();
            }
        }
    });
});

// ==========================================
// PREMIUM HERO SLIDESHOW LOGIC
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroDots = document.querySelectorAll('.hero-dot');
    const heroPrev = document.getElementById('hero-slider-prev');
    const heroNext = document.getElementById('hero-slider-next');
    
    if (!heroSlides.length) return;
    
    let currentHeroSlide = 0;
    let heroIntervalTime = 6000; // 6 seconds auto-cycle
    let heroAutoCycleInterval;
    
    // Function to change slide
    function showHeroSlide(index) {
        // Handle wrap around bounds
        if (index >= heroSlides.length) {
            index = 0;
        } else if (index < 0) {
            index = heroSlides.length - 1;
        }
        
        // Remove active class from current slide and dot
        heroSlides[currentHeroSlide].classList.remove('active');
        if (heroDots.length > currentHeroSlide) {
            heroDots[currentHeroSlide].classList.remove('active');
        }
        
        // Update current index
        currentHeroSlide = index;
        
        // Add active class to target slide and dot
        heroSlides[currentHeroSlide].classList.add('active');
        if (heroDots.length > currentHeroSlide) {
            heroDots[currentHeroSlide].classList.add('active');
        }
    }
    
    // Start auto-cycle interval helper
    function startHeroInterval() {
        stopHeroInterval();
        heroAutoCycleInterval = setInterval(() => {
            showHeroSlide(currentHeroSlide + 1);
        }, heroIntervalTime);
    }
    
    // Stop auto-cycle interval helper
    function stopHeroInterval() {
        if (heroAutoCycleInterval) {
            clearInterval(heroAutoCycleInterval);
        }
    }
    
    // Helper to handle manual navigation (resets interval)
    function handleManualNavigation(action) {
        action();
        startHeroInterval(); // reset timer
    }
    
    // Event listeners for Left and Right buttons
    if (heroPrev) {
        heroPrev.addEventListener('click', () => {
            handleManualNavigation(() => showHeroSlide(currentHeroSlide - 1));
        });
    }
    
    if (heroNext) {
        heroNext.addEventListener('click', () => {
            handleManualNavigation(() => showHeroSlide(currentHeroSlide + 1));
        });
    }
    
    // Event listeners for dot indicators
    heroDots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            handleManualNavigation(() => showHeroSlide(idx));
        });
    });
    
    // Start auto cycling on load
    startHeroInterval();
});

// ==========================================
// FLOATING BACK TO TOP BUTTON LOGIC
// ==========================================
function updateBackToTopButton() {
    const backToTopBtn = document.getElementById('back-to-top');
    const aboutSection = document.getElementById('about');
    if (!backToTopBtn) return;
    
    // Show the button when scroll position reaches the top of the About section (offset by 100px for early fade-in)
    const triggerOffset = aboutSection ? aboutSection.offsetTop - 100 : 400;
    if (window.scrollY >= triggerOffset) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            const heroSection = document.getElementById('hero');
            if (heroSection) {
                heroSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    }
    // Check initial scroll state
    updateBackToTopButton();
});
