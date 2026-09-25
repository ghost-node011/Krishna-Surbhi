export const NAV_LINKS = [
  { label: 'Our Story', href: '/our-story' },
  { label: 'Meet Our Residents', href: '/meet-the-cows' },
  { label: 'Volunteers', href: '/volunteers' },
  { label: 'Community', href: '/community' },
  { label: 'Core Team', href: '/core-team' },
  { label: 'Support', href: '/support' },
  { label: 'Contact', href: '/contact' },
];

// Visits are paused while the gaushala is being rebuilt. One place to change
// when the gates reopen: flip this and restore the /visit route in App.jsx.
export const VISITS_OPEN = false;
export const VISITS_PAUSED_NOTE =
  'Our gaushala is being rebuilt, so we are not hosting visitors at the moment. Write to us and we will tell you the day we reopen.';

// ── Residents ──────────────────────────────────────────────────────────────
// Every name, photograph and story below is taken from the sanctuary's own
// deck (Krishna Surabhi Gausadan.pdf). Nothing here is invented — where the
// deck does not give a date or an age, the field is simply left out.
export const COWS = [
  {
    id: 'shankar',
    name: 'Shankar',
    tag: 'Recovered',
    rescuedBy: 'Vaishali Rana',
    story: 'Rescued from the streets in a miserable condition. Our team of doctors gave Shankar the medical treatment he needed, and he has recovered.',
    fullStory: [
      'Meet our Shankar, who was rescued from the streets by Vaishali Rana in a miserable condition.',
      'Our efficient team of doctors gave Shankar the necessary medical treatment.',
      'Now Shankar has recovered and is happy at our Gausadan.',
    ],
    image: '/cows/shankar.jpg',
    imagePosition: 'center 30%',
  },
  {
    id: 'nandini',
    name: 'Nandini',
    tag: 'Recovered',
    rescuedBy: 'Vaishali Rana',
    story: 'She came in injured, and her leg had to be amputated. The surgery was a success. Today Nandini stands tall, proud and happy.',
    fullStory: [
      'Meet Nandini, who was brought to us in an injured state by Vaishali Rana.',
      'After analysing her injury, our team of doctors concluded that her leg would have to be amputated. We went in for surgery, and it was successful.',
      'Today Nandini stands tall, proud, and happy.',
    ],
    image: '/cows/nandini.jpg',
    imagePosition: 'center 20%',
  },
  {
    id: 'laxmi',
    name: 'Laxmi',
    tag: 'In Treatment',
    rescuedBy: 'Shanu Tiwari and Abhinav',
    story: 'Found malnourished and very weak. Our doctors are treating her to the best of their abilities, and she is recovering well.',
    fullStory: [
      'Meet our Laxmi, rescued by Shanu Tiwari and Abhinav in a malnourished and very weak condition.',
      'Our team of doctors are treating her to the best of their abilities.',
      'Today, Laxmi is recovering well at our Gau Seva Sadan.',
    ],
    image: '/cows/laxmi.jpg',
  },
  {
    id: 'shakuntala',
    name: 'Shakuntala',
    tag: 'Recovered',
    story: 'Her mother Meneka could not feed her and did not survive. Our gausevaks raised Shakuntala on another cow\u2019s milk, and she pulled through.',
    fullStory: [
      'Meet our Shakuntala, whose mother was extremely serious. Shakuntala was malnourished because her mother was not able to feed her milk.',
      'Our team of doctors and gausevaks tried their best to save Meneka, her mother, but unfortunately she left us. The challenge then was to save her daughter.',
      'After a lot of effort by our gausevaks, and by feeding her another cow\u2019s milk, we managed to revive her.',
      'Today, our Shakuntala is the upcoming star of Krishna Surabhi Gau Seva Sadan.',
    ],
    image: '/cows/shakuntala.jpg',
  },
  {
    id: 'surabhi',
    name: 'Surabhi',
    tag: 'Recovered',
    rescuedBy: 'Vaishali Rana',
    story: 'The most serious of all our rescues \u2014 just a week old. Thirty-five days of treatment and seva brought her back.',
    fullStory: [
      'Meet our Surabhi, who was the most serious of all our rescues \u2014 just one week old, rescued by Vaishali Rana.',
      'It took our team of doctors and gau sevaks 35 days of treatment and seva to bring her back from a near-death situation.',
      'Today Surabhi is growing up to be a beautiful girl.',
    ],
    image: '/cows/surabhi.jpg',
  },
  {
    id: 'basanti',
    name: 'Basanti',
    tag: 'In Treatment',
    rescuedBy: 'Vaishali Rana',
    story: 'Injured and abandoned on the streets. She is being treated for a serious injury to her stomach, in her forever home.',
    fullStory: [
      'Another cow injured and abandoned on the streets, rescued by Vaishali Rana, has been brought to her forever safe haven.',
      'She has already started treatment for a serious injury on her stomach.',
      'Our efficient team of doctors and gau sevaks will make sure she gets all the care and love that all our mother cows truly deserve.',
    ],
    image: '/cows/basanti.jpg',
  },
  {
    id: 'bala',
    name: 'Bala',
    tag: 'Recovered',
    rescuedBy: 'Vaishali Rana',
    story: 'A male calf found on the streets in a miserable condition. He is now in his forever home, with friends and family around him.',
    fullStory: [
      'Meet our male calf Bala, who was on the streets in a miserable condition and has been rescued by Vaishali Rana.',
      'He is now in his forever home, where he will have friends and family to spend his life with.',
    ],
    image: '/cows/bala.jpg',
  },
  {
    id: 'narayani',
    name: 'Narayani',
    tag: 'In Our Memory',
    rescuedBy: 'Vaishali Rana',
    memorial: true,
    story: 'Picked up from the middle of the street in the scorching heat. We could not save her \u2014 but her last days were full of love, care and dignity.',
    fullStory: [
      'Meet our Narayani, picked up in the scorching heat from the middle of the street, with no strength in her to get up on her own. She was rescued by Vaishali Rana.',
      'Our team of doctors gave in their best to help Narayani survive, but we couldn\u2019t save her.',
      'The good part is that Narayani, in her last days, got a lot of love, care and dignity \u2014 which all our mother cows truly deserve. We feel blessed that we were able to give her that bit of happiness.',
    ],
    image: '/cows/narayani.jpg',
  },
];

// ── The Nandi family ───────────────────────────────────────────────────────
// Fourteen male calves, raised alongside their mothers — a rarity in the world
// of gaushalas, and the thing the sanctuary is proudest of.
export const NANDIS = [
  { id: 'tejas', name: 'Tejas', image: '/nandis/tejas.jpg' },
  { id: 'shankar', name: 'Shankar', image: '/nandis/shankar.jpg' },
  { id: 'teer', name: 'Teer', image: '/nandis/teer.jpg' },
  { id: 'nandi', name: 'Nandi', image: '/nandis/nandi.jpg' },
  { id: 'bajrangi', name: 'Bajrangi', image: '/nandis/bajrangi.jpg' },
  { id: 'bala', name: 'Bala', image: '/nandis/bala.jpg' },
  { id: 'shambhu', name: 'Shambhu', image: '/nandis/shambhu.jpg' },
  { id: 'dhanush', name: 'Dhanush', image: '/nandis/dhanush.jpg' },
  { id: 'bal-gopal', name: 'Bal Gopal', image: '/nandis/bal-gopal.jpg' },
  { id: 'ram-lal', name: 'Ram Lal', image: '/nandis/ram-lal.jpg' },
  { id: 'chunnu-patel', name: 'Chunnu Patel', image: '/nandis/chunnu-patel.jpg' },
  { id: 'kartik', name: 'Kartik', image: '/nandis/kartik.jpg' },
  { id: 'tungi', name: 'Tungi', image: '/nandis/tungi.jpg' },
  { id: 'yamuna', name: 'Yamuna', image: '/nandis/yamuna.jpg' },
];

export const getCow = (id) => COWS.find((c) => c.id === id);

export const FOUNDER = {
  id: 'rakhi',
  name: 'Rakhi',
  role: 'Founder',
  image: '/core-team/Rakhi.png',
  imagePosition: 'center 30%',
  message: [
    'I am Rakhi, the founder of Krishna Surabhi. What started from my small love for animals has today become a home for 133 beautiful rescued cows in Bansur.',
    'For me, this is not a Gaushala. These cows are my family, my children. I am here every single day — for their rescue, their food, their treatment, and to just give them love.',
    'My only dream is that no cow should ever have to feel abandoned, hungry or unsafe.',
  ],
  quote: 'I may be soft-spoken, but I will fight the whole world for my cows. Krishna Surabhi is not my work, it is my life, my prayer and my seva to Shri Krishna.',
};

// ── Team — write-ups from the "Volunteer" tab, roles from the "People Index" tab ──
// Per the founder (Recordings 1, 6, 7): trustees are never called volunteers.
// Only Rakesh and Pooja (added Sept 2026, per the client) are called volunteers.
//
// group:   'foundation' | 'trustee' | 'volunteer' | 'member' — drives where they appear
// story:   full write-up (paragraphs) for /team/:id — null until the client sends one
// image:   null until the client sends a photo (a silhouette is shown instead)
export const TEAM = [
  {
    id: 'prem-sethi',
    name: 'Shri Prem Sethi',
    role: 'The Foundation of Krishna Surabhi',
    classification: 'Founding Supporter',
    group: 'foundation',
    image: '/team/prem-sethi.jpg',
    imagePosition: 'center 30%',
    summary: 'The main force and the foundation behind Krishna Surabhi. With his support, we bought this patch of land and laid its very first brick.',
    quote: 'He is the silent strength behind our entire journey — never in front, but always holding us from behind.',
    story: [
      'Shri Prem Sethi is the main force and the foundation behind Krishna Surabhi.',
      'Much against his own will and despite facing serious health challenges for the last three years, he stood by us and made this dream possible.',
      'It was with his support that we were able to buy this patch of land and lay the first brick of Krishna Surabhi.',
      'He is the silent strength behind our entire journey — never in front, but always holding us from behind.',
      'We are extremely grateful to him and to his entire family for being our biggest support system. Without him and his family, Krishna Surabhi simply would not have existed.',
      // Client's text is cut off after "pray for..." — ask for the rest of this line.
      'We bow to his selfless spirit.',
    ],
  },
  {
    id: 'kapil',
    name: 'Shri Kapil Yadav',
    role: 'Co-Founder',
    classification: 'Trustee / Co-Founder',
    group: 'foundation',
    image: '/team/kapil.jpg',
    imagePosition: 'center 25%',
    summary: "Rakhi's best friend, partner and one of the strongest pillars of Krishna Surabhi — working behind the scenes to keep everything running smoothly.",
    quote: 'He is not just a supporter, he is an integral part of Krishna Surabhi itself.',
    story: [
      'Shri Kapil Yadav is my best friend, my partner, and one of the strongest pillars of Krishna Surabhi.',
      'Without his support and belief in this dream, Shri Prem Sethi ji would probably not have given us the go-ahead to start Krishna Surabhi. He is one of my greatest supports, and without him, this beautiful dream would not have been possible.',
      'He is working very hard behind the scenes — organizing papers, handling documentation, and doing everything possible to keep Krishna Surabhi running smoothly.',
      'He is not just a supporter, he is an integral part of Krishna Surabhi itself. We are deeply grateful for his constant strength, hard work, and unwavering faith in our mission.',
    ],
  },
  {
    id: 'cb-singh',
    name: 'Dr. C.B. Singh',
    role: 'Chief Patron & Chairperson',
    classification: 'Trustee (Core)',
    group: 'trustee',
    image: '/core-team/Dr_CB_SIngh.png',
    imagePosition: 'center 20%',
    summary: 'His guidance, inspiration and practical ideas strengthen the running of our Gaushala and the welfare of every cow in it.',
    quote: 'His valuable guidance, inspiration, and innovative ideas have been instrumental in strengthening the functioning of our Gaushala.',
    story: [
      'Dr. C.B. Singh is one of the esteemed members of our Trust, and serves as its Chief Patron and Chairperson.',
      'His valuable guidance, inspiration, and innovative ideas have been instrumental in supporting and strengthening the functioning of our Gaushala.',
      'His dedicated efforts and practical suggestions continue to contribute significantly to the welfare of the cattle and the overall development of the Gaushala.',
    ],
  },
  {
    id: 'manishwath',
    name: 'Dr. Manishwath',
    role: 'Vaid (Ayurvedic Doctor)',
    classification: 'Trustee',
    group: 'trustee',
    image: '/core-team/Dr. Manishwath.png',
    imagePosition: 'center 25%',
    summary: 'Our Vaid — an Ayurvedic doctor on the Krishna Surabhi Trust.',
    story: null,
  },
  {
    id: 'vaishali-rana',
    name: 'Vaishali Rana',
    role: 'Gaurakshak & Environmentalist',
    classification: 'Trustee',
    group: 'trustee',
    image: '/team/vaishali-rana.jpg',
    imagePosition: 'center 20%',
    summary: 'A dedicated environmentalist and animal rescuer who has sent many rescued cows to our sanctuary for a safe second life.',
    quote: 'After witnessing the level of seva and care at our sanctuary, she chose to stand firmly with us.',
    story: [
      'Vaishali Rana is a dedicated environmentalist and passionate animal rescuer who has been an integral part of the Krishna Surabhi family.',
      'Our association began when she entrusted us with a few of her rescues. After witnessing the level of seva and care at our sanctuary, she chose to stand firmly with us.',
      'She has since sent many rescued cows to our sanctuary, ensuring they get a safe second life.',
      'Beyond Gau Seva, she is a strong voice against tree felling, garbage dumping, and environmental neglect, and is highly respected in her field for her years of service and wide network.',
    ],
  },
  {
    id: 'yagna',
    name: 'Yagna',
    role: 'Animal Activist',
    classification: 'Trustee',
    group: 'trustee',
    image: '/team/yagna.jpg',
    imagePosition: '30% 60%',
    summary: 'Found us through an Instagram reel in January 2025. Today she helps with rescues, feeding, animal care, documentation and fundraising.',
    quote: 'Krishna Surabhi feels like my place — a sanctuary where I can be free, and where the animals can be free too.',
    story: [
      'I first came across Krishna Surabhi in January 2025 through an Instagram reel. What immediately connected with me was how clearly they showed the bond between a mother and her baby, built on love, care and respect, and recognised that this bond deserves to be protected. They also said something that stayed with me: the gaushala has nothing to do with milk.',
      'To me, that should not be a radical idea. It is simply how it is supposed to be. But in a system where animals are constantly viewed as resources, the fact that a gaushala actually stands by this principle felt radical. Krishna Surabhi recognises that cows have their own lives, relationships, bodies and rights, and that those rights deserve to be respected. That was what connected me to Krishna Surabhi the most.',
      'I became more closely associated with Krishna Surabhi a few months ago through a young girl from a village in Rajasthan who reached out to me. She was fighting to keep her cows together despite opposition from her family, especially because one of them was a male cow. Her family was only willing to keep the cows if they continued to produce milk, which meant continuing artificial insemination and breeding. She fought against this and stopped the artificial insemination of her cows. She also stopped consuming dairy herself.',
      'She refused to see her cows as sources of milk or as commodities that could be sold, bred or separated. She wanted them to live together as a family, with their bodies, relationships and freedom respected. Today, her three cows — a mother and her two children born in different years — live together at Krishna Surabhi. Being able to support her in making that possible brought me even closer to the work of the sanctuary.',
      // "As a volunteer," dropped from Yagna's original — per the founder, trustees are never called volunteers.
      'I contribute wherever I can — through social media, documentation, fundraising, rescuing, feeding and animal care. I also try to connect more people with Krishna Surabhi and help build a stronger community around the sanctuary.',
      'For me, Krishna Surabhi is not just a shelter. It is a space built around justice. A place where animals are not seen as milk producing bodies, property or resources, but as individuals with their own lives and rights.',
      'Krishna Surabhi feels like my place — a sanctuary where I can be free, and where the animals can be free too. In a world where animals are constantly exploited and their bodies are treated as something we are entitled to use, I believe we have to create spaces that show another way is possible: where their bodies belong to them, their families are not torn apart, their relationships are respected, and their freedom is theirs.',
    ],
  },
  {
    // Client sent only "Mr Sharma" — confirm his full name.
    id: 'sharma',
    name: 'Mr. Sharma',
    role: 'Gau Sevak & Tree Planter',
    classification: 'Trustee',
    group: 'trustee',
    image: '/team/mr2.png',
    imagePosition: 'center 8%',
    summary: 'A Cleansing Therapy Practitioner with a lifelong love for planting trees, who has now given the rest of his life to Krishna Surabhi as a Gau Sevak.',
    quote: 'My aim is to plant 1,00,000 trees before I leave this world.',
    story: [
      'I love planting trees. My aim is to plant 1,00,000 trees before I leave this world.',
      'I am also a CTP — a Cleansing Therapy Practitioner — since February 2024.',
      'Now I have become a member of the Trust.',
      'For the rest of my life, my knowledge and my experience are only for Krishna Surabhi Gau Seva Sadan, as a Gau Sevak.',
    ],
  },
  {
    // "One of the youngest members on board" — confirm whether his title is Trustee.
    id: 'ishan-sethi',
    name: 'Shri Ishan Sethi',
    role: 'Young Entrepreneur & Leader',
    classification: 'Board Member',
    group: 'trustee',
    image: '/team/ishan-sethi.jpg', // cropped copy of "Ishan Sethi.png" without the scanner watermark
    imagePosition: 'center 20%',
    summary: 'One of the youngest members on board, and the son of Shri Prem Sethi ji — bringing youthful energy, fresh ideas and strong belief to our vision.',
    quote: 'He is a well-loved young leader who inspires many in his generation to support Gau Seva and meaningful causes.',
    story: [
      'Shri Ishan Sethi is one of the youngest members on board at Krishna Surabhi, and the son of Shri Prem Sethi ji.',
      'He is a young and highly successful entrepreneur who is doing extremely well for himself in the field of real estate.',
      'Loved and deeply respected by one and all, he has a huge circle of friends, supporters, and well-wishers who admire him.',
      'His presence brings youthful energy, fresh ideas, and strong belief to the vision of Krishna Surabhi. While he is busy building his own successful ventures, he has always stood by Krishna Surabhi with an open heart.',
      'He is a well-loved young leader who inspires many in his generation to support Gau Seva and meaningful causes.',
      'We are truly grateful and blessed to have his support and youthful guidance as part of our Krishna Surabhi family.',
    ],
  },
  {
    id: 'rakesh',
    name: 'Rakesh',
    role: 'Gardener (Mali) turned All-Rounder',
    classification: 'Volunteer',
    group: 'volunteer',
    image: '/team/rakesh.jpg',
    imagePosition: 'center 35%',
    descriptor: 'Gardener Turned All-Rounder · 15 Years With Rakhi',
    summary: 'Rakesh has worked with Rakhi for around 15 years. He loves the cows — and the cows and dogs love him right back.',
    quote: 'He joined us as a gardener, and now he is an all-rounder who takes care of everything. He has been with us like a backbone.',
    // Founder, Recording 6: must be specially mentioned — joined as the gardener, now an all-rounder.
    story: [
      'Rakesh joined Krishna Surabhi as our gardener (Mali), and today he is an all-rounder who takes care of everything.',
      'He loves the cows, and the cows and dogs love him right back. He has been working with Rakhi for around 15 years.',
      'He has been with us like a backbone, and is an integral part of this entire organisation.',
    ],
  },
  {
    id: 'pooja',
    name: 'Pooja',
    role: 'Gau Seva Volunteer',
    classification: 'Volunteer',
    group: 'volunteer',
    image: '/team/pooja.png',
    imagePosition: 'center 20%',
    summary: 'From preparing organic fodder and daily feeding to cleaning the shelters and caring for sick and rescued cattle — Pooja gives her time to true Gau Seva.',
    quote: 'Volunteering at Krishna Surabhi Gau Seva Sadan has been a deeply grounding and transformative experience.',
    story: [
      'Volunteering at Krishna Surabhi Gau Seva Sadan has been a deeply grounding and transformative experience. A peaceful sanctuary dedicated to the welfare, rescue, and protection of cows, the Sadan provides a safe haven where these gentle animals live with complete love, care, and dignity.',
      'As a volunteer, my time here revolves around true Gau Seva — from preparing nutritious organic fodder and assisting with daily feeding routines to maintaining clean shelter areas and helping care for sick or rescued cattle.',
      'Beyond physical care, the sanctuary emphasizes holistic connection and sustainability through organic farming, vermicomposting, and eco-friendly initiatives that keep the premises balanced and peaceful.',
    ],
  },
  {
    id: 'isha',
    name: 'Isha',
    role: 'Member',
    classification: 'Member',
    group: 'member',
    image: '/team/isha.png',
    imagePosition: 'center 30%',
    summary: 'The newest member of the Krishna Surabhi family.',
    story: null,
  },
];

export const getTeamMember = (id) => TEAM.find((p) => p.id === id);
export const teamByGroup = (group) => TEAM.filter((p) => p.group === group);
export const profilePath = (p) => (p.group === 'volunteer' ? `/volunteers/${p.id}` : `/team/${p.id}`);
export const TRUSTEES = TEAM.filter((p) => p.classification.startsWith('Trustee'));
export const VOLUNTEER_SPOTLIGHT = getTeamMember('rakesh');

// ── Real sanctuary photos — web-sized copies (public/hero/web) of the originals in public/hero ──
// Every photo is portrait, so each carries the crop that keeps faces in frame on wide banners.
export const PHOTOS = {
  cowHug: { src: '/hero/web/1.jpg', position: 'center 42%', alt: 'A warm embrace with a rescued cow at Krishna Surabhi' },
  cowCuddle: { src: '/hero/web/2.jpg', position: 'center 28%', alt: 'Cuddling a rescued cow in the sanctuary yard' },
  herdYard: { src: '/hero/web/3.jpg', position: 'center 35%', alt: 'Rescued cows and a calf in the sanctuary yard' },
  shedHug: { src: '/hero/web/4.jpg', position: 'center 32%', alt: 'Hugging a white cow under the sanctuary shed' },
  visitorCow: { src: '/hero/web/5.jpg', position: 'center 42%', alt: 'Stroking a rescued cow at Krishna Surabhi' },
  restingCow: { src: '/hero/web/6.jpg', position: 'center 58%', alt: 'Bowing to a resting cow in the open sanctuary yard' },
  yardCalm: { src: '/hero/web/7.jpg', position: 'center 58%', alt: 'Sitting quietly beside a cow at Krishna Surabhi' },
  // The small card tucked beside the hero photo.
  heroInset: { src: '/small-hero.png', position: 'center 45%', alt: 'A calf nursing from her mother at Krishna Surabhi' },
  // Cropped from the sanctuary's own brochure — a calf nursing, bells at her neck.
  calfNursing: { src: '/brand/calf-portrait.jpg', position: 'center 45%', alt: 'A calf nursing from her mother at Krishna Surabhi' },
  calfBanner: { src: '/brand/calf-banner.jpg', position: 'center 55%', alt: 'A calf nursing beside her mother in the sanctuary yard' },
};

// Every image in the gallery is a real photograph from the sanctuary — the
// rescues, the Nandi family, and the yard itself.
export const GALLERY = [
  { src: '/cows/shankar.jpg', alt: 'Shankar, recovered and happy at the gausadan', caption: 'Shankar, recovered' },
  { src: '/hero/web/1.jpg', alt: 'A warm embrace with a rescued cow', caption: 'A quiet morning in the shed' },
  { src: '/nandis/tejas.jpg', alt: 'Tejas, one of our fourteen Nandis', caption: 'Tejas, one of the fourteen' },
  { src: '/brand/calf-portrait.jpg', alt: 'A calf nursing from her mother, bells at her neck', caption: 'Mothers and calves stay together' },
  { src: '/hero/web/3.jpg', alt: 'Rescued cows and a calf in the sanctuary yard', caption: 'The herd in the open yard' },
  { src: '/cows/shakuntala.jpg', alt: 'Shakuntala, raised on another cow\u2019s milk', caption: 'Shakuntala, our upcoming star' },
  { src: '/nandis/kartik.jpg', alt: 'Kartik resting in the sand', caption: 'Kartik, resting out the afternoon' },
  { src: '/hero/web/2.jpg', alt: 'Cuddling a rescued cow in the sanctuary yard', caption: 'Getting to know each other' },
  { src: '/cows/laxmi.jpg', alt: 'Laxmi recovering at the gau seva sadan', caption: 'Laxmi, recovering well' },
  { src: '/nandis/bala.jpg', alt: 'Bala the Nandi in the yard', caption: 'Bala, in his forever home' },
  { src: '/hero/web/6.jpg', alt: 'Bowing to a resting cow in the open yard', caption: 'Rest, in the middle of the day' },
  { src: '/cows/nandini.jpg', alt: 'Nandini, who stands tall after losing a leg', imagePosition: 'center 20%', caption: 'Nandini still stands tall' },
  { src: '/nandis/dhanush.jpg', alt: 'Dhanush at sunset', caption: 'Dhanush, at the end of the day' },
  { src: '/hero/web/4.jpg', alt: 'Hugging a white cow under the sanctuary shed', caption: 'Under the shed, out of the sun' },
  { src: '/cows/bala.jpg', alt: 'Bala the rescued calf with the herd', caption: 'Never on his own again' },
  { src: '/nandis/shambhu.jpg', alt: 'Shambhu standing in the yard', caption: 'Shambhu, grown up here' },
  { src: '/hero/web/5.jpg', alt: 'Stroking a rescued cow at the sanctuary', caption: 'Hands the herd knows' },
  { src: '/cows/surabhi.jpg', alt: 'Surabhi, rescued at one week old', caption: 'Surabhi, 35 days of seva' },
  { src: '/nandis/chunnu-patel.jpg', alt: 'Chunnu Patel in the yard', caption: 'Chunnu Patel' },
  { src: '/hero/web/7.jpg', alt: 'Sitting quietly beside a cow', caption: 'Sitting with them, as long as you like' },
  { src: '/cows/basanti.jpg', alt: 'Basanti being treated for a stomach injury', caption: 'Basanti, still in treatment' },
  { src: '/nandis/ram-lal.jpg', alt: 'Ram Lal at the water trough', caption: 'Ram Lal' },
];


// ── Contact — PLACEHOLDER number/email (same as Footer & Contact page) until the client confirms ──
// ── Contact — from the sanctuary's own deck (final page) ──
export const CONTACT = {
  phoneDisplay: '+91 93157 01187',
  phoneHref: 'tel:+919315701187',
  whatsapp: '919315701187', // country code + number, digits only
  people: [
    { name: 'Rakhi', role: 'Founder', display: '+91 93157 01187', href: 'tel:+919315701187' },
    { name: 'Kapil', role: 'Co-Founder', display: '+91 85720 91789', href: 'tel:+918572091789' },
    { name: 'Vaishali', role: 'Rescues', display: '+91 98990 78299', href: 'tel:+919899078299' },
  ],
  email: 'info@krishnasurabhi.org',
  website: 'www.krishnasurabhi.org',
  instagram: '@krishnasurabhiorg',
  instagramUrl: 'https://www.instagram.com/krishnasurabhiorg',
  location: 'Neb Sarai Extension, near St. Mary\u2019s Public School, New Delhi',
  mapUrl: 'https://maps.app.goo.gl/Y6ZWfjr3M48Csxn46?g_st=aw',
};


// ── Visit & booking (Visit page) ──
// PLACEHOLDER: timings, prices and policies are drafts — confirm every value with Rakhi.
export const VISIT = {
  closedDay: 1, // 0 = Sunday … 6 = Saturday
  closedDayLabel: 'Mondays',
  weekdayLabel: 'Tuesday – Friday',
  weekendLabel: 'Saturday & Sunday',
  freeUnderAge: 5,
  seasons: [
    { id: 'summer', label: 'Summer', months: 'April – September', monthIndexes: [3, 4, 5, 6, 7, 8], hours: '7:00 AM – 7:00 PM', lastEntry: '6:00 PM', weekday: 200, weekend: 300 },
    { id: 'winter', label: 'Winter', months: 'October – March', monthIndexes: [9, 10, 11, 0, 1, 2], hours: '9:00 AM – 6:00 PM', lastEntry: '5:00 PM', weekday: 200, weekend: 300 },
  ],
  basket: {
    name: 'Gau Seva Basket',
    price: 200,
    contents: 'Fresh green fodder, jaggery (gud) and rotis, prepared by our team so every bite is safe for the cows.',
  },
  steps: [
    { title: 'Arrive & settle in', text: 'Someone from our team walks you in and shares a few simple rules for being around the cows.' },
    { title: 'Meet the herd', text: 'Meet our rescued cows. Mothers and their calves live together here, as a family.' },
    { title: 'Do Gau Seva', text: 'Feed them by hand from your seva basket and see how the day’s care is done.' },
    { title: 'Sit with them', text: 'Stay as long as you like. There is no rush at Krishna Surabhi.' },
  ],
  note: 'Krishna Surabhi does not take milk from its cows. Please check with our team before feeding anything that isn’t from your seva basket.',
  occasions: [
    { label: 'Birthday or anniversary seva', desc: 'Feed the cows on your special day, with your family around you.' },
    { label: 'Punya tithi seva', desc: 'Remember a loved one with a day of Gau Seva in their name.' },
    { label: 'School or college visit', desc: 'Let children see where kindness to animals begins.' },
    { label: 'Company or group visit', desc: 'A day of seva for your team, away from the city.' },
    { label: 'Something else' },
  ],
  faqs: [
    { q: 'Do I need to book before visiting?', a: 'We recommend it. Booking lets our small team plan the day around the cows and make sure someone is free to walk you around. Send your booking on WhatsApp and we’ll confirm.' },
    { q: 'How do I pay?', a: 'You pay at the sanctuary on the day of your visit. Nothing is charged online.' },
    { q: 'What is in a Gau Seva Basket?', a: 'Fresh green fodder, jaggery (gud) and rotis, prepared by our team so the food is safe for the cows. One basket is enough to feed a few cows by hand.' },
    { q: 'Can I bring my own food for the cows?', a: 'Please ask us first. Some foods, and any plastic packaging, can make cows very ill. If you’d like to bring green fodder or jaggery, we’ll gladly guide you.' },
    { q: 'Is it safe for children?', a: 'Yes, children love meeting the calves. Please keep little ones with an adult near the cows and follow our team’s lead.' },
    { q: 'Do you sell milk?', a: 'No. Krishna Surabhi does not take milk from its cows. Mothers and their calves stay together, and every cow here lives out her life in peace.' },
    { q: 'What should I wear?', a: 'Comfortable clothes and closed shoes. The sanctuary is a working farm, so expect some dust and mud.' },
  ],
};



// ── Where to follow along ──
export const SOCIALS = [
  { label: 'Instagram', href: 'https://www.instagram.com/krishnasurabhiorg' },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UCJ3koZoMQp8t02mLmxL7krA' },
  { label: 'Facebook', href: 'https://www.facebook.com/p/Krishna-Surbahi-61588833954482/' },
];

// ── Volunteering ───────────────────────────────────────────────────────────
// The seva list mirrors what volunteers actually do here (see the Volunteers
// page); the form offers exactly these so we hear back in their own terms.
export const SEVA_OPTIONS = [
  'Preparing fodder',
  'Daily feeding',
  'Cleaning shelters',
  'Caring for the sick',
  'Organic farming & composting',
  'Photos, video & social media',
  'Veterinary help',
  'Transport & rescue runs',
  'Fundraising & outreach',
];

export const AVAILABILITY_OPTIONS = [
  'Weekends',
  'Weekdays',
  'A full week or more',
  'A few hours, whenever I can',
  'Remotely, from anywhere',
];

// Money is not being collected while the gaushala is rebuilt — the ask is seva.
export const DONATIONS_OPEN = false;


export const TESTIMONIALS = [
  {
    quote: 'I came to Krishna Surabhi broken, grieving my mother. Sitting with Ganga for an hour, I felt something I cannot explain — a deep peace that I hadn\'t felt in months.',
    name: 'Priya Mehta',
    location: 'Mumbai',
    role: 'Yoga Teacher',
  },
  {
    quote: 'My daughter has severe anxiety. After three visits to the sanctuary, she\'s calmer, more connected to the world. These cows are genuine healers.',
    name: 'Rajesh & Sunita Sharma',
    location: 'Pune',
    role: 'Parents',
  },
  {
    quote: 'As a veterinarian, I have seen many gaushalas. After volunteering here for a weekend, the difference was obvious. The care in this place is real.',
    name: 'Dr. Ananya Bose',
    location: 'Bengaluru',
    role: 'Veterinarian & Volunteer',
  },
  {
    quote: 'We brought our entire leadership team here for an offsite. The conversations that happened under those trees changed how we think about our work and each other.',
    name: 'Vikram Nair',
    location: 'Delhi',
    role: 'CEO, Tech Startup',
  },
];

export const STATS = [
  { num: '500+', label: 'Cows Rescued' },
  { num: '8,000+', label: 'Visitors Healed' },
  { num: String(TRUSTEES.length), label: 'Trustees' },
  { num: '7 yrs', label: 'Of Sacred Work' },
];

// ── About us — the sanctuary's own words, from their deck ──
export const ABOUT_STORY = [
  'At Krishna Surabhi Gau Seva Sadan, our story began with a chance encounter between a curious cow and a compassionate heart. That meeting blossomed into a lifelong bond, and inspired a movement of love, care and conservation.',
  'As the COVID-19 pandemic brought its challenges, our community came together to provide refuge and rehabilitation for abandoned cows. With every new arrival, our resolve strengthened and our mission expanded.',
  'Today, Gau Seva Sadan stands as a testament to the transformative power of compassion and coexistence. Our holy cows have taught us invaluable lessons in trust, resilience, and the healing energy of nature.',
  'Join us on this sacred journey. Let the gentle lowing of our cows soothe your soul, and the warmth of our community embrace you.',
];

