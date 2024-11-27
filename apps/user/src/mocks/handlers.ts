import { http, HttpResponse } from "msw";
import topArticle from "./dummy/topArticle.json";
import { IEditorsPickListResponse } from "@/api/model/editorsPick";
import { IMagazineResponse } from "@/api/model/magazine";
import { IPhotoJournalResponse } from "@/api/model/photoJournal";
import {
  IArticlesResponse,
  IMostReadArticleResponse,
  IRecentArticleResponse,
} from "@/api/model/article";

export const handlers = [
  http.get("/api/topArticle", () => HttpResponse.json(topArticle)),
  http.get("/api/article/recent", ({ request }) => {
    const url = new URL(request.url);
    const count = Number(url.searchParams.get("count"));
    return HttpResponse.json(mockRecentArticles.slice(0, count));
  }),
  http.get("/api/article/mostRead", ({ request }) => {
    const url = new URL(request.url);
    const count = Number(url.searchParams.get("count"));
    return HttpResponse.json(mockMostReadArticles.slice(0, count));
  }),
  http.get("/api/articles/:category/:page", ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.pathname.split("/")[4]);
    return HttpResponse.json({
      totalPages: Math.ceil(mockArticles.length / 10),
      content: mockArticles.slice((page - 1) * 10, page * 10),
    });
  }),
  http.get("/api/editorPick", () => HttpResponse.json(mockEditorsPick)),
  http.get("/api/photoJournal/recent", () => HttpResponse.json(mockPhotoJournal)),
  http.get("/api/magazine/:page", ({ request }) => {
    const url = new URL(request.url);
    const pageSize = Number(url.searchParams.get("pageSize"));
    const page = Number(url.pathname.split("/")[3]);
    return HttpResponse.json({
      totalPages: Math.ceil(mockMagazine.length / pageSize),
      content: mockMagazine.slice((page - 1) * pageSize, page * pageSize),
    });
  }),
];

const mockRecentArticles: IRecentArticleResponse[] = [
  {
    id: 1,
    title: "About Cherry",
    summary:
      "Laceration of intrinsic muscle and tendon at ankle and foot level, left foot, initial encounter",
  },
  {
    id: 2,
    title: "Sacrifice (Zhao shi gu er)",
    summary:
      "Nondisplaced fracture of distal phalanx of right thumb, initial encounter for closed fracture",
  },
  {
    id: 3,
    title: "Thousand Acres, A",
    summary: "Subluxation of proximal interphalangeal joint of right little finger, sequela",
  },
  {
    id: 4,
    title: "Summer Storm",
    summary: "Complex regional pain syndrome affecting the lower limb",
  },
  {
    id: 5,
    title: "The Last Journey",
    summary: "Acute respiratory distress following trauma and surgery",
  },
  {
    id: 6,
    title: "Winter's Tale",
    summary: "Displaced spiral fracture of shaft of ulna, initial encounter",
  },
  {
    id: 7,
    title: "City of Dreams",
    summary: "Toxic effect of contact with venomous marine animal, accidental",
  },
  {
    id: 8,
    title: "The Silent Echo",
    summary: "Burn of third degree of multiple sites of lower limb, initial encounter",
  },
  {
    id: 9,
    title: "Midnight Express",
    summary: "Displaced transverse fracture of shaft of right fibula, subsequent encounter",
  },
  {
    id: 10,
    title: "The Final Chapter",
    summary: "Nondisplaced fracture of lateral condyle of right tibia, initial encounter",
  },
];

const mockMostReadArticles: IMostReadArticleResponse[] = [
  {
    id: 1,
    title: "[Opinion] Gaza, 'If only I were a candle in the dark': A reflection on humanity",
    summary:
      "Laceration of intrinsic muscle and tendon at ankle and foot level, left foot, initial encounter",
  },
  {
    id: 2,
    title: "Private campus tours impact SNU campus life: The growing commercialization debate",
    summary: "Exploring the untold stories of urban development and community growth",
  },
  {
    id: 3,
    title: "City bus strike derails SNU students' mornings: Transportation crisis hits campus",
    summary: "An in-depth analysis of emerging technologies and their societal impact",
  },
  {
    id: 4,
    title: "Growing influence of franchise chains at SNU: Local businesses face tough competition",
    summary: "Investigating sustainable solutions for environmental challenges",
  },
  {
    id: 5,
    title: "[Opinion] Sound of EDM or Buddhist Enlightenment? Cultural clash at temple stay",
    summary: "Understanding cultural transformations in modern society",
  },
];

const mockArticles: IArticlesResponse[] = [
  {
    id: 1,
    pictureUrl: "https://picsum.photos/220/145",
    title: "Special Series Exploring Solutions to Various Problems in Modern Society",
    authorName: "John Smith",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    pictureUrl: "https://picsum.photos/220/145",
    title: "The Future of Living: AI and Big Data in the Fourth Industrial Revolution",
    authorName: "Emma Wilson",
    summary:
      "Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat.",
  },
  {
    id: 3,
    pictureUrl: "https://picsum.photos/220/145",
    title: "Expert Guidelines for Eco-friendly Living in the Climate Crisis Era",
    authorName: "Michael Green",
    summary:
      "Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra.",
  },
  {
    id: 4,
    pictureUrl: "https://picsum.photos/220/145",
    title: "New Professional Competencies Required in the Digital Transformation Era",
    authorName: "Sarah Johnson",
    summary:
      "Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.",
  },
  {
    id: 5,
    pictureUrl: "https://picsum.photos/220/145",
    title: "Changed Daily Life and New Lifestyle Trends in the Post-COVID Era",
    authorName: "David Chen",
    summary:
      "Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet.",
  },
  {
    id: 6,
    pictureUrl: "https://picsum.photos/220/145",
    title: "Sustainable Development and Environmental Protection for Future Generations",
    authorName: "Rachel Brown",
    summary:
      "Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
  },
  {
    id: 7,
    pictureUrl: "https://picsum.photos/220/145",
    title: "Expert's Customized Wellbeing Life Guide for Modern People",
    authorName: "James Wilson",
    summary:
      "Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    id: 8,
    pictureUrl: "https://picsum.photos/220/145",
    title: "New Cultural Arts Trends and the Future Direction of Art in the Digital Age",
    authorName: "Lisa Park",
    summary:
      "Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien.",
  },
  {
    id: 9,
    pictureUrl: "https://picsum.photos/220/145",
    title: "Expert Investment Strategies for Individual Investors in Global Economic Crisis",
    authorName: "Robert Lee",
    summary:
      "Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.",
  },
  {
    id: 10,
    pictureUrl: "https://picsum.photos/220/145",
    title: "In-depth Analysis of Innovative Changes in Future Education",
    authorName: "Emily Davis",
    summary:
      "Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper.",
  },
  {
    id: 11,
    pictureUrl: "https://picsum.photos/220/145",
    title: "The Impact of Social Media on Modern Communication",
    authorName: "Thomas Anderson",
    summary:
      "Analysis of how social platforms are reshaping human interaction and society at large.",
  },
  {
    id: 12,
    pictureUrl: "https://picsum.photos/220/145",
    title: "Renewable Energy: The Path to a Sustainable Future",
    authorName: "Maria Garcia",
    summary:
      "Exploring innovative solutions in renewable energy and their potential impact on climate change.",
  },
  {
    id: 13,
    pictureUrl: "https://picsum.photos/220/145",
    title: "Mental Health in the Digital Age",
    authorName: "Dr. Kevin Park",
    summary:
      "Understanding the psychological impacts of technology and strategies for digital wellbeing.",
  },
  {
    id: 14,
    pictureUrl: "https://picsum.photos/220/145",
    title: "The Evolution of Remote Work Culture",
    authorName: "Jennifer Lee",
    summary: "Examining how remote work is transforming workplace dynamics and corporate culture.",
  },
  {
    id: 15,
    pictureUrl: "https://picsum.photos/220/145",
    title: "Artificial Intelligence in Healthcare",
    authorName: "Dr. Mark Wilson",
    summary: "Exploring the revolutionary applications of AI in medical diagnosis and treatment.",
  },
  {
    id: 16,
    pictureUrl: "https://picsum.photos/220/145",
    title: "Urban Agriculture: Growing Food in Cities",
    authorName: "Sophie Chen",
    summary: "Innovative approaches to sustainable food production in urban environments.",
  },
  {
    id: 17,
    pictureUrl: "https://picsum.photos/220/145",
    title: "The Future of Transportation",
    authorName: "Alex Johnson",
    summary: "Analyzing emerging trends in mobility and transportation technology.",
  },
  {
    id: 18,
    pictureUrl: "https://picsum.photos/220/145",
    title: "Digital Privacy in the Modern Age",
    authorName: "Daniel Kim",
    summary: "Understanding the challenges and solutions for protecting personal data online.",
  },
  {
    id: 19,
    pictureUrl: "https://picsum.photos/220/145",
    title: "The Rise of E-Sports",
    authorName: "Ryan Park",
    summary: "Examining the growing influence of competitive gaming in modern entertainment.",
  },
  {
    id: 20,
    pictureUrl: "https://picsum.photos/220/145",
    title: "Sustainable Fashion: The Future of Style",
    authorName: "Emma Thompson",
    summary: "Exploring eco-friendly innovations in the fashion industry.",
  },
  {
    id: 21,
    pictureUrl: "https://picsum.photos/220/145",
    title: "The Science of Sleep",
    authorName: "Dr. Sarah Lee",
    summary: "Understanding the importance of sleep and its impact on health and productivity.",
  },
  {
    id: 22,
    pictureUrl: "https://picsum.photos/220/145",
    title: "Blockchain Technology Beyond Cryptocurrency",
    authorName: "Michael Chang",
    summary: "Exploring diverse applications of blockchain in various industries.",
  },
  {
    id: 23,
    pictureUrl: "https://picsum.photos/220/145",
    title: "The Future of Education Technology",
    authorName: "Professor James Kim",
    summary: "Analyzing how technology is transforming traditional educational methods.",
  },
  {
    id: 24,
    pictureUrl: "https://picsum.photos/220/145",
    title: "Space Exploration: The Next Frontier",
    authorName: "Dr. Robert Chen",
    summary: "Latest developments and future prospects in space exploration.",
  },
  {
    id: 25,
    pictureUrl: "https://picsum.photos/220/145",
    title: "The Psychology of Social Media",
    authorName: "Dr. Lisa Wong",
    summary: "Understanding the psychological effects of social media usage.",
  },
  {
    id: 26,
    pictureUrl: "https://picsum.photos/220/145",
    title: "Sustainable Cities of Tomorrow",
    authorName: "Andrew Miller",
    summary: "Planning and designing environmentally conscious urban spaces.",
  },
  {
    id: 27,
    pictureUrl: "https://picsum.photos/220/145",
    title: "The Evolution of Digital Art",
    authorName: "Michelle Park",
    summary: "Exploring new forms of artistic expression in the digital age.",
  },
  {
    id: 28,
    pictureUrl: "https://picsum.photos/220/145",
    title: "Quantum Computing: A New Era",
    authorName: "Dr. David Lee",
    summary: "Understanding the potential impact of quantum computing technology.",
  },
  {
    id: 29,
    pictureUrl: "https://picsum.photos/220/145",
    title: "The Future of Work",
    authorName: "Jessica Chen",
    summary: "Analyzing changing workplace dynamics and future career trends.",
  },
  {
    id: 30,
    pictureUrl: "https://picsum.photos/220/145",
    title: "Mindfulness in the Modern World",
    authorName: "Rachel Kim",
    summary: "Exploring practices for maintaining mental wellness in busy times.",
  },
  {
    id: 31,
    pictureUrl: "https://picsum.photos/220/145",
    title: "The Rise of Plant-Based Diets",
    authorName: "Laura Martinez",
    summary: "Examining the growing trend of plant-based nutrition and its impact.",
  },
  {
    id: 32,
    pictureUrl: "https://picsum.photos/220/145",
    title: "Virtual Reality in Education",
    authorName: "Professor Tom Wilson",
    summary: "Exploring the potential of VR technology in learning environments.",
  },
  {
    id: 33,
    pictureUrl: "https://picsum.photos/220/145",
    title: "The Future of Digital Currency",
    authorName: "Steven Chang",
    summary: "Analyzing trends and developments in digital financial systems.",
  },
  {
    id: 34,
    pictureUrl: "https://picsum.photos/220/145",
    title: "Ocean Conservation Efforts",
    authorName: "Marine Biologist Sarah Ocean",
    summary: "Current initiatives and strategies for protecting marine ecosystems.",
  },
  {
    id: 35,
    pictureUrl: "https://picsum.photos/220/145",
    title: "The Science of Happiness",
    authorName: "Dr. Emily Joy",
    summary: "Research-based approaches to achieving lasting happiness and wellbeing.",
  },
  {
    id: 36,
    pictureUrl: "https://picsum.photos/220/145",
    title: "Smart Home Technology Trends",
    authorName: "Tech Analyst John Smart",
    summary: "Latest innovations in home automation and connected living.",
  },
  {
    id: 37,
    pictureUrl: "https://picsum.photos/220/145",
    title: "The Future of Genetic Engineering",
    authorName: "Dr. Helen Gene",
    summary: "Ethical considerations and potential applications of genetic modification.",
  },
  {
    id: 38,
    pictureUrl: "https://picsum.photos/220/145",
    title: "Digital Marketing Evolution",
    authorName: "Marketing Expert Mike Digital",
    summary: "Emerging trends and strategies in online marketing.",
  },
  {
    id: 39,
    pictureUrl: "https://picsum.photos/220/145",
    title: "The Psychology of Decision Making",
    authorName: "Dr. Choice Matter",
    summary: "Understanding how humans make decisions in various contexts.",
  },
  {
    id: 40,
    pictureUrl: "https://picsum.photos/220/145",
    title: "Sustainable Energy Solutions",
    authorName: "Energy Specialist Green Power",
    summary: "Innovative approaches to renewable energy implementation.",
  },
  {
    id: 41,
    pictureUrl: "https://picsum.photos/220/145",
    title: "The Future of Transportation",
    authorName: "Transport Expert Move Fast",
    summary: "Emerging trends in mobility and transportation technology.",
  },
  {
    id: 42,
    pictureUrl: "https://picsum.photos/220/145",
    title: "Artificial Intelligence Ethics",
    authorName: "AI Researcher Think Deep",
    summary: "Ethical considerations in AI development and implementation.",
  },
  {
    id: 43,
    pictureUrl: "https://picsum.photos/220/145",
    title: "The Impact of Social Media",
    authorName: "Social Analyst Connect More",
    summary: "Analyzing the effects of social media on society and behavior.",
  },
  {
    id: 44,
    pictureUrl: "https://picsum.photos/220/145",
    title: "Future of Remote Work",
    authorName: "Work Expert Home Office",
    summary: "Trends and predictions for the future of remote working.",
  },
  {
    id: 45,
    pictureUrl: "https://picsum.photos/220/145",
    title: "Cybersecurity Challenges",
    authorName: "Security Expert Safe Net",
    summary: "Current threats and solutions in digital security.",
  },
];

const mockEditorsPick: IEditorsPickListResponse = {
  featuresEditorPickList: [
    {
      id: 123,
      title: "The Hidden Stories Behind SNU's Architecture",
    },
  ],
  snuSocietyEditorPickList: [
    {
      id: 457,
      title: "Student Clubs Revolutionizing Campus Life",
    },
  ],
  artsAndCultureEditorPickList: [
    {
      id: 892,
      title: "Contemporary Art Exhibition Stuns Visitors",
    },
  ],
  shortArticleEditorPickList: [
    {
      id: 675,
      title: "New Library System Launches Next Month",
    },
  ],
  opinionEditorPickList: [
    {
      id: 234,
      title: "Why We Need More Open Discussions",
    },
  ],
};

const mockMagazine: IMagazineResponse[] = [
  {
    volumeNumber: 70,
    publishDate: "2019-10-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 69,
    publishDate: "2019-09-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 68,
    publishDate: "2019-08-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 67,
    publishDate: "2019-07-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 66,
    publishDate: "2019-06-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 65,
    publishDate: "2019-05-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 64,
    publishDate: "2019-04-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 63,
    publishDate: "2019-03-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 62,
    publishDate: "2019-02-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 61,
    publishDate: "2019-01-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 60,
    publishDate: "2020-12-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 59,
    publishDate: "2020-11-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 58,
    publishDate: "2020-10-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 57,
    publishDate: "2020-09-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 56,
    publishDate: "2020-08-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 55,
    publishDate: "2020-07-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 54,
    publishDate: "2020-06-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 53,
    publishDate: "2020-05-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 52,
    publishDate: "2020-04-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 51,
    publishDate: "2020-03-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 50,
    publishDate: "2020-02-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 49,
    publishDate: "2020-01-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 48,
    publishDate: "2021-12-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 47,
    publishDate: "2021-11-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 46,
    publishDate: "2021-10-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 45,
    publishDate: "2021-09-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 44,
    publishDate: "2021-08-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 43,
    publishDate: "2021-07-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 42,
    publishDate: "2021-06-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 41,
    publishDate: "2021-05-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 40,
    publishDate: "2021-04-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 39,
    publishDate: "2021-03-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 38,
    publishDate: "2021-02-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 37,
    publishDate: "2021-01-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 36,
    publishDate: "2022-12-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 35,
    publishDate: "2022-11-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 34,
    publishDate: "2022-10-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 33,
    publishDate: "2022-09-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 32,
    publishDate: "2022-08-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 31,
    publishDate: "2022-07-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 30,
    publishDate: "2022-06-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 29,
    publishDate: "2022-05-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 28,
    publishDate: "2022-04-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 27,
    publishDate: "2022-03-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 26,
    publishDate: "2022-02-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 25,
    publishDate: "2022-01-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 24,
    publishDate: "2023-12-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 23,
    publishDate: "2023-11-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 22,
    publishDate: "2023-10-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 21,
    publishDate: "2023-09-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 20,
    publishDate: "2023-08-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 19,
    publishDate: "2023-07-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 18,
    publishDate: "2023-06-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 17,
    publishDate: "2023-05-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 16,
    publishDate: "2023-04-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 15,
    publishDate: "2023-03-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 14,
    publishDate: "2023-02-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 13,
    publishDate: "2023-01-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 12,
    publishDate: "2024-12-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 11,
    publishDate: "2024-11-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 10,
    publishDate: "2024-10-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 9,
    publishDate: "2024-09-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 8,
    publishDate: "2024-08-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 7,
    publishDate: "2024-07-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 6,
    publishDate: "2024-06-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 5,
    publishDate: "2024-05-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 4,
    publishDate: "2024-04-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 3,
    publishDate: "2024-03-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 2,
    publishDate: "2024-02-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
  {
    volumeNumber: 1,
    publishDate: "2024-01-15",
    volumeCoverLink: "https://picsum.photos/740/420",
    fileLink: "https://picsum.photos/740/420",
  },
];

const mockPhotoJournal: IPhotoJournalResponse[] = [
  {
    volumeNumber: 1,
    photoLink: "https://picsum.photos/1140/640",
    description: "Lorem ipsum dolor sit amet",
    photographerId: 123,
  },
  {
    volumeNumber: 2,
    photoLink: "https://picsum.photos/1140/640",
    description: "Consectetur adipiscing elit",
    photographerId: 124,
  },
  {
    volumeNumber: 3,
    photoLink: "https://picsum.photos/1140/640",
    description: "Sed do eiusmod tempor incididunt",
    photographerId: 125,
  },
];
