import { http, HttpResponse } from "msw";
import topArticle from "./dummy/topArticle.json";
import { IEditorsPickListResponse } from "@/api/model/editorsPick";
import { IMagazineResponse } from "@/api/model/magazine";
import { IPhotoJournalResponse } from "@/api/model/photoJournal";
import { IArticleResponse } from "@/api/model/article";

export const handlers = [
  http.get("/api/topArticle", () => {
    return HttpResponse.json(topArticle);
  }),
  http.get("/api/article/recent", ({ request }) => {
    const url = new URL(request.url);
    const count = Number(url.searchParams.get("count"));
    return HttpResponse.json(
      mockArticles.slice(0, count).map(article => ({
        id: article.id,
        title: article.title,
        summary: article.content.slice(0, 100).replace(/<[^>]*>/g, ""),
      })),
    );
  }),
  http.get("/api/article/mostRead", ({ request }) => {
    const url = new URL(request.url);
    const count = Number(url.searchParams.get("count"));
    return HttpResponse.json(
      mockArticles
        .toReversed()
        .slice(0, count)
        .map(article => ({
          id: article.id,
          title: article.title,
          summary: article.content.slice(0, 100).replace(/<[^>]*>/g, ""),
        })),
    );
  }),
  http.get("/api/articles/:category/:page", ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.pathname.split("/")[4]);
    return HttpResponse.json({
      totalPages: Math.ceil(mockArticles.length / 10),
      content: mockArticles.slice((page - 1) * 10, page * 10).map(article => ({
        id: article.id,
        pictureUrl: article.pictureUrl,
        title: article.title,
        authorName: article.authorName,
        summary: article.content.slice(0, 300).replace(/<[^>]*>/g, ""),
      })),
    });
  }),
  http.get("/api/article/search/:page", ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.pathname.split("/")[4]);
    const searchText = url.searchParams.get("searchText")!;
    const pageSize = Number(url.searchParams.get("pageSize"));

    const filteredArticles = mockArticles
      .filter(
        article => article.title.includes(searchText) || article.category.includes(searchText),
      )
      .map(article => ({
        id: article.id,
        pictureUrl: article.pictureUrl,
        title: article.title,
        authorName: article.authorName,
        summary: article.content.slice(0, 300).replace(/<[^>]*>/g, ""),
      }));
    return HttpResponse.json({
      totalPages: Math.ceil(filteredArticles.length / pageSize),
      content: filteredArticles.slice((page - 1) * pageSize, page * pageSize),
    });
  }),
  http.get("/api/article/:id", ({ request }) => {
    const url = new URL(request.url);
    const id = Number(url.pathname.split("/")[3]);
    return HttpResponse.json(mockArticles.find(article => article.id === id));
  }),

  http.get("/api/editorPick", () => {
    return HttpResponse.json(mockEditorsPick);
  }),
  http.get("/api/photoJournal/recent", () => {
    return HttpResponse.json(mockPhotoJournal);
  }),
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

const mockArticles: IArticleResponse[] = Array.from({ length: 45 }, (_, i) => ({
  id: i + 1,
  pictureUrl: `https://picsum.photos/800/400?random=${i}`,
  title:
    [
      "The Comprehensive Guide to Modern Software Architecture and Design Patterns",
      "Understanding the Impact of Artificial Intelligence on Society and Technology",
      "Exploring the Intersection of Quantum Computing and Cybersecurity Solutions",
      "The Evolution of Cloud Computing: From Infrastructure to Serverless Architecture",
      "Blockchain Technology and Its Revolutionary Impact on Digital Transformation",
      "Machine Learning Algorithms: A Deep Dive into Neural Networks and Deep Learning",
      "The Future of Internet of Things (IoT) in Smart Cities Development",
      "Cybersecurity Best Practices in the Age of Advanced Persistent Threats",
      "Digital Innovation and the Transformation of Traditional Business Models",
      "The Rise of Edge Computing in Modern Distributed Systems Architecture",
    ][i % 10] + ` - Part ${Math.floor(i / 10) + 1}`,
  content: `
    <article>
      <h1>The Evolution of Modern Technology</h1>
      <h2>1. Text Formatting Showcase</h2>
      <p>In this section, we'll explore various text formatting options. Here's <strong>bold text</strong> for emphasis, <em>italicized text</em> for subtle emphasis, and <u>underlined text</u> for highlighting. We can also show <s>strikethrough text</s> for outdated information.</p>

      <h2>2. Complex Lists and Indentation</h2>
      <ol>
        <li>First Level Item
          <ul>
            <li>Nested unordered item</li>
            <li>Another nested item
              <ol>
                <li>Deep nested ordered item</li>
                <li>Another deep nested item</li>
              </ol>
            </li>
          </ul>
        </li>
        <li>Second Level Item
          <ul>
            <li>Sub-point A</li>
            <li>Sub-point B</li>
          </ul>
        </li>
      </ol>

      <h2>3. Image Integration</h2>
      <img src="https://picsum.photos/800/400" alt="Random Technology Image" />
      <p>Above is a representative image showcasing modern technology.</p>

      <h2>4. Heading Hierarchy</h2>
      <h3>4.1 Third Level Heading</h3>
      <p>This demonstrates heading hierarchy.</p>
      <h4>4.1.1 Fourth Level Heading</h4>
      <p>Even deeper heading level.</p>

      <h2>5. Mixed Formatting</h2>
      <p>We can combine formats like <strong><em>bold and italic</em></strong> or <u><strong>underlined and bold</strong></u>.</p>

      <h2>6. Comprehensive Lists</h2>
      <h3>Unordered List Example:</h3>
      <ul>
        <li><strong>Major Technologies:</strong>
          <ul>
            <li><em>Artificial Intelligence</em>
              <ul>
                <li>Machine Learning</li>
                <li>Neural Networks</li>
                <li>Deep Learning</li>
              </ul>
            </li>
            <li><em>Blockchain</em>
              <ul>
                <li>Cryptocurrencies</li>
                <li>Smart Contracts</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <h3>Ordered List Example:</h3>
      <ol>
        <li>Development Phases
          <ol type="a">
            <li>Planning
              <ol type="i">
                <li>Requirements Analysis</li>
                <li>System Design</li>
              </ol>
            </li>
            <li>Implementation
              <ol type="i">
                <li>Coding</li>
                <li>Testing</li>
              </ol>
            </li>
          </ol>
        </li>
      </ol>

      <h2>7. Extended Content Section</h2>
      <p>This section contains a mix of all elements:</p>
      <ul>
        <li><strong>Bold Point</strong>: Important information here</li>
        <li><em>Italic Point</em>: Emphasized information here</li>
        <li><u>Underlined Point</u>: Highlighted information here</li>
        <li><s>Strikethrough Point</s>: Deprecated information here</li>
      </ul>

      <img src="https://picsum.photos/800/600" alt="Another Technology Image" />
      <p>A second image to demonstrate multiple image handling.</p>

      <h2>8. Conclusion</h2>
      <p>This comprehensive example demonstrates various HTML formatting capabilities including:</p>
      <ul>
        <li>Multiple heading levels (h1-h4)</li>
        <li>Text formatting (bold, italic, underline, strikethrough)</li>
        <li>Complex nested lists (ordered and unordered)</li>
        <li>Image integration</li>
        <li>Mixed formatting combinations</li>
      </ul>
    </article>`.repeat(3),
  category: ["features", "snu_society", "arts_culture", "opinion", "short_articles"][
    Math.floor(Math.random() * 5)
  ],
  authorName: ["Emma Thompson", "James Wilson", "Sarah Parker", "Michael Chen", "Rachel Kim"][
    Math.floor(Math.random() * 5)
  ],
  authorRole: [
    "Senior Editor",
    "Staff Writer",
    "Contributing Editor",
    "Technology Correspondent",
    "Science Reporter",
  ][Math.floor(Math.random() * 5)],
  authorEmail: [
    "editor@news.com",
    "writer@news.com",
    "contributor@news.com",
    "tech@news.com",
    "science@news.com",
  ][Math.floor(Math.random() * 5)],
  authorPictureUrl: `https://i.pravatar.cc/100?img=${Math.floor(Math.random() * 70)}`,
}));

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
