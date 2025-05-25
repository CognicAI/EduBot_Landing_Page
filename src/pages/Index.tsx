import { Bot, Zap, Shield, Users, Globe, Database, Brain, Code, ChevronRight, CheckCircle, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Real-Time Information",
      description: "Directly scrapes and parses live data from college websites, ensuring information is always current and accurate."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "No Pre-trained Models",
      description: "Eliminates dependency on static FAQs or outdated pre-trained data that requires manual maintenance."
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI-Powered Summarization",
      description: "Uses advanced LLMs like GEMINI 1.5 FLASH for intelligent content summarization and response generation."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Universal Compatibility",
      description: "Adapts to diverse college website structures, making it scalable across different educational institutions."
    }
  ];

  const techStack = [
    { name: "PostgreSQL", type: "Database", color: "bg-blue-100 text-blue-800" },
    { name: "Flask", type: "Backend", color: "bg-green-100 text-green-800" },
    { name: "BeautifulSoup", type: "Web Scraping", color: "bg-orange-100 text-orange-800" },
    { name: "BERT", type: "Semantic Search", color: "bg-purple-100 text-purple-800" },
    { name: "GEMINI 1.5", type: "LLM", color: "bg-pink-100 text-pink-800" },
    { name: "REST API", type: "Communication", color: "bg-indigo-100 text-indigo-800" }
  ];

  const advantages = [
    "Provides consistently up-to-date and accurate information",
    "Reduces manual effort required to maintain information resources",
    "Offers scalable and efficient solution for information delivery",
    "Handles wide range of user queries by accessing live website content",
    "Improves user experience with timely and relevant answers"
  ];

  const applications = [
    {
      title: "Educational Institutions",
      description: "College and university websites for students, faculty, and staff queries"
    },
    {
      title: "Information Portals",
      description: "Organizations requiring real-time information retrieval systems"
    },
    {
      title: "Customer Support",
      description: "Support systems for organizations with frequently updated online information"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              EduBot
            </span>
          </div>
          <Button variant="outline" className="hidden md:flex">
            Contact Inventors
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-indigo-100 text-indigo-800 hover:bg-indigo-200" variant="secondary">
            🚀 Artificial Intelligence Innovation
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">
            Dynamic Real-Time Information Retrieval Chatbot
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Revolutionary AI-powered chatbot that directly scrapes, parses, and summarizes 
            live information from college websites. No pre-trained models, no outdated FAQs - 
            just real-time, accurate answers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
              Explore Technology
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Revolutionary Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            EduBot transforms how educational institutions deliver information by providing 
            real-time, dynamic responses that evolve with your website content.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            See EduBot in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how EduBot dynamically retrieves and summarizes real-time information 
            from college websites to answer user queries instantly.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl p-8">
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
              {/* Video placeholder with play button */}
              <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center relative group cursor-pointer">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center mb-4 group-hover:bg-white transition-colors duration-300 group-hover:scale-110 transform">
                    <Play className="h-8 w-8 text-indigo-600 ml-1" />
                  </div>
                  <span className="text-white text-lg font-semibold">Play Demo Video</span>
                  <span className="text-white/80 text-sm mt-1">Duration: 2:30</span>
                </div>
                
                {/* Demo preview content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <Bot className="h-4 w-4 text-white" />
                      <span className="text-white text-sm font-medium">EduBot Demo</span>
                    </div>
                    <div className="text-white/90 text-sm">
                      "What are the admission requirements for Computer Science?"
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Video description */}
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-3 shadow-md">
                  <Zap className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Real-Time Scraping</h3>
                <p className="text-sm text-gray-600">Watch how EduBot extracts live data from college websites</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-3 shadow-md">
                  <Brain className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">AI Summarization</h3>
                <p className="text-sm text-gray-600">See intelligent content processing with GEMINI 1.5 FLASH</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-3 shadow-md">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">User Interaction</h3>
                <p className="text-sm text-gray-600">Experience the intuitive chat interface in action</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="container mx-auto px-6 py-20 bg-white/50 backdrop-blur-sm rounded-3xl mx-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Cutting-Edge Technology Stack
          </h2>
          <p className="text-xl text-gray-600">
            Built with industry-leading technologies for maximum performance and reliability
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {techStack.map((tech, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Code className="h-6 w-6 text-gray-400" />
              <div className="flex-1">
                <div className="font-semibold text-gray-900">{tech.name}</div>
                <div className="text-sm text-gray-500">{tech.type}</div>
              </div>
              <Badge className={`${tech.color} border-0`} variant="secondary">
                Core
              </Badge>
            </div>
          ))}
        </div>
      </section>

      {/* Inventors Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Meet the Inventors
          </h2>
          <p className="text-xl text-gray-600">
            Department of Artificial Intelligence Innovation
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                PH
              </div>
              <CardTitle className="text-xl">P. Harsha Vardhan</CardTitle>
              <CardDescription>Roll No: 22EG107A47</CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                KA
              </div>
              <CardTitle className="text-xl">K. Abhishek</CardTitle>
              <CardDescription>Roll No: 22EG107A30</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Why Choose EduBot?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              EduBot revolutionizes information delivery with its dynamic approach, 
              ensuring your users always receive the most current and accurate information.
            </p>
            <div className="space-y-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{advantage}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl p-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-2 mb-4">
                <Bot className="h-5 w-5 text-indigo-600" />
                <span className="font-medium text-gray-900">EduBot Live Demo</span>
              </div>
              <div className="space-y-3">
                <div className="bg-gray-100 rounded-lg p-3">
                  <span className="text-sm text-gray-600">User: "What are the admission requirements?"</span>
                </div>
                <div className="bg-indigo-50 rounded-lg p-3">
                  <span className="text-sm text-indigo-800">EduBot: "Based on the latest information from the admissions page...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Applications & Use Cases
          </h2>
          <p className="text-xl text-gray-600">
            EduBot's versatile architecture makes it perfect for various information-intensive environments
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl text-gray-900">{app.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {app.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Information Delivery?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the revolution in real-time information retrieval with EduBot's innovative technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-indigo-600 hover:bg-gray-100">
              Request Demo
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600">
              Contact Inventors
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 text-center text-gray-600">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Bot className="h-6 w-6 text-indigo-600" />
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            EduBot
          </span>
        </div>
        <p className="mb-2">Department of Artificial Intelligence</p>
        <p className="text-sm">© 2024 EduBot Innovation Project. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
