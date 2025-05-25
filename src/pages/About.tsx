import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutPage = () => {
  return (
    <div className="container mx-auto p-4 space-y-6 dark:bg-slate-900">
      <h1 className="text-3xl font-bold mb-6 text-center dark:text-white">About EduBot</h1>

      <Card className="dark:bg-slate-800 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="dark:text-white">Description of the Invention</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="dark:text-gray-300">
            EduBot is a dynamic, real-time information retrieval chatbot
            designed for college websites. It directly scrapes, parses, and
            summarizes relevant information from the official college website
            in response to user queries. This eliminates the need for
            pre-trained models or hard-coded FAQs. The system ensures
            information accuracy by automatically reflecting any updates made
            to the website, providing a consistently up-to-date and reliable
            user experience. It utilizes a database of URLs, semantic search
            on stored URLs, and Large Language Models (LLMs) for
            summarization.
          </p>
        </CardContent>
      </Card>

      <Card className="dark:bg-slate-800 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="dark:text-white">Field of the Invention</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="dark:text-gray-300">
            This invention falls under the domain of Artificial Intelligence,
            Natural Language Processing, Information Retrieval, Web Scraping,
            Chatbot Technology, and potentially Educational Technology.
          </p>
        </CardContent>
      </Card>

      <Card className="dark:bg-slate-800 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="dark:text-white">Main Objective</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="dark:text-gray-300">
            To develop a dynamic, real-time information retrieval chatbot for
            college websites that directly extracts and summarizes information
            from the official website in response to user queries.
          </p>
        </CardContent>
      </Card>

      <Card className="dark:bg-slate-800 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="dark:text-white">Secondary Objectives</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-1 dark:text-gray-300">
            <li>To eliminate the need for pre-trained models or hard-coded FAQs.</li>
            <li>To ensure information accuracy by automatically reflecting website updates.</li>
            <li>To provide a consistently up-to-date and reliable user experience.</li>
            <li>To be universally applicable across diverse college websites.</li>
            <li>To offer a scalable and efficient method for delivering accurate and timely information.</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="dark:bg-slate-800 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="dark:text-white">Background of the Invention</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="dark:text-gray-300">
            Traditional methods for providing information on college websites
            often involve static pages, pre-defined FAQs, or chatbots relying
            on pre-trained data. These methods can become outdated quickly and
            may not always address specific user queries effectively,
            requiring manual updates and potentially missing recent changes
            on the website.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutPage;
