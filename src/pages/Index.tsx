import { Bot, Zap, Shield, Users, Globe, Database, Brain, Code, ChevronRight, CheckCircle, ArrowRight, Play, Mail, Phone, MapPin, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import React from "react";
import { ModeToggle } from "@/components/mode-toggle";

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const videoSectionRef = React.useRef<HTMLElement>(null);

  const scrollToVideo = () => {
    videoSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse dark:bg-purple-900 dark:opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse dark:bg-yellow-900 dark:opacity-30"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse dark:bg-pink-900 dark:opacity-30"></div>
      </div>
      
      {/* Header */}
      <header className="container mx-auto px-6 py-4 relative z-10">
        <nav className="flex items-center justify-between backdrop-blur-sm bg-white/10 dark:bg-black/10 rounded-2xl px-6 py-3 border border-white/20 dark:border-gray-700/30 shadow-lg">
          <div className="flex items-center space-x-2 group">
            <Bot className="h-8 w-8 text-indigo-600 dark:text-indigo-400 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent transition-all duration-300 hover:scale-105">
              EduBot
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/about">
              <Button variant="ghost" className="dark:text-gray-300 dark:hover:text-white transition-all duration-300 hover:scale-105 hover:bg-white/20 dark:hover:bg-gray-800/50 backdrop-blur-sm border border-transparent hover:border-white/30">About</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg border-2 border-indigo-300 dark:border-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/50">
                Contact Inventors
              </Button>
            </Link>
            <div className="transform transition-all duration-300 hover:scale-110">
              <ModeToggle />
            </div>
          </div>
          <div className="md:hidden flex items-center space-x-2">
            <div className="transform transition-all duration-300 hover:scale-110">
              <ModeToggle />
            </div>
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(true)} className="dark:text-gray-300 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:rotate-90">
                  <Menu className="h-6 w-6 transition-transform duration-300" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px] sm:w-[300px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-l border-white/20 dark:border-gray-700/30">
                <nav className="flex flex-col space-y-4 mt-8">
                  <SheetClose asChild>
                    <Link to="/about" className="text-lg font-medium hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-all duration-300 hover:translate-x-2 hover:scale-105" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/contact" className="text-lg font-medium hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-all duration-300 hover:translate-x-2 hover:scale-105" onClick={() => setIsMobileMenuOpen(false)}>Contact Inventors</Link>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <Badge className="mb-6 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 dark:bg-indigo-900 dark:text-indigo-300 dark:hover:bg-indigo-800 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-bounce" variant="secondary">
              🚀 Artificial Intelligence Innovation
            </Badge>
          </div>
          <div className="animate-fade-in-up animation-delay-300">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 dark:from-indigo-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent leading-tight hover:scale-105 transition-transform duration-500">
              Dynamic Real-Time Information Retrieval Chatbot
            </h1>
          </div>
          <div className="animate-fade-in-up animation-delay-600">
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-3xl mx-auto">
              Revolutionary AI-powered chatbot that directly scrapes, parses, and summarizes 
              live information from college websites. No pre-trained models, no outdated FAQs - 
              just real-time, accurate answers.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-900">
            <Link to="/about">
              <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white dark:from-indigo-500 dark:to-purple-500 dark:hover:from-indigo-600 dark:hover:to-purple-600 w-full sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-xl transform hover:-translate-y-1">
                Explore Technology
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-900/50 dark:hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm border-2 hover:border-indigo-500" onClick={scrollToVideo}>
              <Play className="mr-2 h-4 w-4 transition-transform duration-300 hover:scale-110" />
              View Demo
            </Button>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-sm"></div>
        </div>
        <div className="absolute bottom-20 right-10 animate-float animation-delay-1000">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-30 blur-sm"></div>
        </div>
        <div className="absolute top-40 right-20 animate-float animation-delay-500">
          <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-25 blur-sm"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20 relative">
        <div className="text-center mb-16">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              EduBot transforms how educational institutions deliver information by providing 
              real-time, dynamic responses that evolve with your website content.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className={`animate-fade-in-up animation-delay-${(index + 1) * 200}`}>
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:rotate-1 bg-white/80 backdrop-blur-sm dark:bg-slate-800/80 dark:border-slate-700 group cursor-pointer relative overflow-hidden">
                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                
                <CardHeader className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 rounded-lg flex items-center justify-center text-white mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-indigo-300 dark:group-hover:border-indigo-600 transition-all duration-300"></div>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Demo Video Section */}
      <section ref={videoSectionRef} className="container mx-auto px-6 py-20 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            See EduBot in Action
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Watch how EduBot dynamically retrieves and summarizes real-time information 
            from college websites to answer user queries instantly.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
          <div className="relative bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-slate-800 dark:to-gray-800 rounded-3xl p-4 sm:p-8 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group">
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video group-hover:shadow-3xl transition-shadow duration-500">
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm"></div>
              
              <video 
                controls
                autoPlay 
                muted 
                loop 
                className="w-full h-full object-cover relative z-10 transition-transform duration-500 group-hover:scale-105" 
                poster="/placeholder.svg" 
              >
                <source src="/videos/edubot-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {[
                { icon: Zap, title: "Real-Time Scraping", desc: "Watch how EduBot extracts live data from college websites", delay: "animation-delay-600" },
                { icon: Brain, title: "AI Summarization", desc: "See intelligent content processing with GEMINI 1.5 FLASH", delay: "animation-delay-800" },
                { icon: Users, title: "User Interaction", desc: "Experience the intuitive chat interface in action", delay: "animation-delay-1000" }
              ].map((item, index) => (
                <div key={index} className={`text-center animate-fade-in-up ${item.delay} group/item`}>
                  <div className="w-12 h-12 bg-white dark:bg-slate-700 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-md transition-all duration-300 group-hover/item:shadow-lg group-hover/item:scale-110 group-hover/item:rotate-6">
                    <item.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400 transition-all duration-300 group-hover/item:scale-110" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300 group-hover/item:text-indigo-600 dark:group-hover/item:text-indigo-400">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300 group-hover/item:text-gray-700 dark:group-hover/item:text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="container mx-auto px-6 py-20 relative">
        <div className="backdrop-blur-sm bg-white/30 dark:bg-slate-800/30 rounded-3xl mx-4 border border-white/20 dark:border-slate-700/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:bg-white/40 dark:hover:bg-slate-800/40">
          <div className="p-8 sm:p-12">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white gradient-text-animated">
                Cutting-Edge Technology Stack
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Built with industry-leading technologies for maximum performance and reliability
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {techStack.map((tech, index) => (
                <div key={index} className={`animate-fade-in-up animation-delay-${(index + 1) * 100} group`}>
                  <div className="flex items-center space-x-4 p-4 bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 border border-white/40 dark:border-slate-600/40 group-hover:border-indigo-300 dark:group-hover:border-indigo-500">
                    <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">{tech.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300 group-hover:text-indigo-500 dark:group-hover:text-indigo-300">{tech.type}</div>
                    </div>
                    <Badge className={`${tech.color} border-0 dark:bg-opacity-70 dark:text-opacity-100 transition-all duration-300 group-hover:scale-105 group-hover:shadow-md`} variant="secondary">
                      Core
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inventors Section */}
      <section className="container mx-auto px-6 py-20 relative">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Meet the Inventors
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Department of Artificial Intelligence Innovation
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              initials: "HP",
              name: "Harsha Vardhanu Parnandi",
              gradient: "from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400",
              delay: "animation-delay-200"
            },
            {
              initials: "KA",
              name: "K. Abhishek",
              gradient: "from-purple-500 to-indigo-500 dark:from-purple-400 dark:to-indigo-400",
              delay: "animation-delay-400"
            },
            {
              initials: "AS",
              name: "A. Saiprashanth",
              gradient: "from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400",
              delay: "animation-delay-600"
            }
          ].map((person, index) => (
            <div key={index} className={`animate-fade-in-up ${person.delay}`}>
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm dark:bg-slate-800/80 dark:border-slate-700 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 group cursor-pointer relative overflow-hidden">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="text-center relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${person.gradient} rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg animate-glow`}>
                    {person.initials}
                  </div>
                  <CardTitle className="text-xl dark:text-white transition-colors duration-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">{person.name}</CardTitle>
                  <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1 transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                    <p className="font-medium">B.Tech, AI & Machine Learning</p>
                    <div className="flex items-center justify-center text-xs space-x-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                      <Mail className="h-3 w-3 transition-transform duration-300 hover:scale-110" />
                      <a href="mailto:harshajustin2@gmail.com" className="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-400">harshajustin2@gmail.com</a>
                    </div>
                    <div className="flex items-center justify-center text-xs space-x-1">
                      <Phone className="h-3 w-3" />
                      <span>+767-1016609</span>
                    </div>
                    <div className="flex items-center justify-center text-xs space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span>Anurag University, Hyderabad</span>
                    </div>
                  </div>
                </CardHeader>
                
                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-indigo-200 dark:group-hover:border-indigo-600 transition-all duration-300"></div>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Advantages Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Why Choose EduBot?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              EduBot revolutionizes information delivery with its dynamic approach, 
              ensuring your users always receive the most current and accurate information.
            </p>
            <div className="space-y-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">{advantage}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-slate-800 dark:to-gray-800 rounded-3xl p-8">
            <div className="bg-white dark:bg-slate-700 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-2 mb-4">
                <Bot className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                <span className="font-medium text-gray-900 dark:text-white">EduBot Live Demo</span>
              </div>
              <div className="space-y-3">
                <div className="bg-gray-100 dark:bg-slate-600 rounded-lg p-3">
                  <span className="text-sm text-gray-600 dark:text-gray-300">User: "What are the admission requirements?"</span>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/50 rounded-lg p-3">
                  <span className="text-sm text-indigo-800 dark:text-indigo-300">EduBot: "Based on the latest information from the admissions page...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Applications & Use Cases
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            EduBot's versatile architecture makes it perfect for various information-intensive environments
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm dark:bg-slate-800/80 dark:border-slate-700">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 rounded-lg flex items-center justify-center text-white mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-white">{app.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  {app.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20 relative">
        <div className="animate-fade-in-up">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] group">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
                <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-pulse animation-delay-500"></div>
                <div className="absolute bottom-20 left-20 w-12 h-12 bg-white rounded-full animate-pulse animation-delay-1000"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full animate-pulse animation-delay-300"></div>
              </div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 transition-all duration-300 group-hover:scale-105">
                Ready to Transform Your Information Delivery?
              </h2>
              <p className="text-xl mb-8 opacity-90 dark:opacity-80 transition-all duration-300 group-hover:opacity-100 max-w-2xl mx-auto">
                Join the revolution in real-time information retrieval with EduBot's innovative technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-indigo-600 hover:bg-gray-100 dark:bg-slate-100 dark:text-indigo-600 dark:hover:bg-slate-200 w-full sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1" onClick={scrollToVideo}>
                  <Play className="mr-2 h-4 w-4 transition-transform duration-300 hover:scale-110" />
                  Request Demo
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Link to="/contact">
                  <Button size="lg" variant="secondary" className="bg-white text-indigo-600 hover:bg-gray-100 dark:bg-slate-100 dark:text-indigo-600 dark:hover:bg-slate-200 w-full sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Inventors
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Glowing Border Effect */}
            <div className="absolute inset-0 rounded-3xl border-2 border-white/20 group-hover:border-white/40 transition-all duration-300"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 text-center text-gray-600 dark:text-gray-400 relative">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center space-x-2 mb-4 group">
            <Bot className="h-6 w-6 text-indigo-600 dark:text-indigo-400 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105">
              EduBot
            </span>
          </div>
          <p className="mb-2 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-indigo-400">Department of Artificial Intelligence</p>
          <p className="text-sm transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-300">© 2024 EduBot Innovation Project. All rights reserved.</p>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-50 animate-pulse"></div>
      </footer>
    </div>
  );
};

export default Index;
