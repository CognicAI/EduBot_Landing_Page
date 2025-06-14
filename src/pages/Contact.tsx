import { useState } from "react";
import { Bot, Mail, Phone, MapPin, Send, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { ModeToggle } from "@/components/mode-toggle"; // Import ModeToggle

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "50ece616-6116-4428-bb1d-c6e4f3a96e75");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you soon.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-gray-900">
      {/* Header */}
      <header className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              EduBot
            </span>
          </Link>
          <div className="flex items-center space-x-4"> {/* Added a div to wrap button and toggle */}
            <Link to="/">
              <Button variant="outline" className="hidden md:flex dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <ModeToggle /> {/* Add ModeToggle here */}
          </div>
        </nav>
      </header>

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 dark:from-indigo-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              Contact the Inventors
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Have questions about EduBot or want to collaborate? We'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm dark:bg-slate-800/80 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white flex items-center">
                    <Mail className="mr-3 h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    Get in Touch
                  </CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    Reach out to us for any inquiries about EduBot or collaboration opportunities.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                      <p className="text-gray-600 dark:text-gray-400">edubot@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-400">+767-1016609</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Location</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Anurag University<br />
                        Hyderabad, Telangana
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Lead Inventor */}
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm dark:bg-slate-800/80 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">Lead Inventor</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 rounded-full flex items-center justify-center text-white text-xl font-bold">
                      HP
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Harsha Vardhanu Parnandi</h3>
                      <p className="text-gray-600 dark:text-gray-400">B.Tech, AI & Machine Learning</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 hover:dark:text-indigo-400">harshajustin2@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm dark:bg-slate-800/80 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">Send us a Message</CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="to" value="harshajustin2@gmail.com" />
                  <input type="hidden" name="subject" value="EduBot Inquiry" />
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="dark:text-gray-300">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        className="dark:bg-slate-700 dark:text-white dark:placeholder-gray-400 dark:border-slate-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="dark:text-gray-300">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className="dark:bg-slate-700 dark:text-white dark:placeholder-gray-400 dark:border-slate-600"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="dark:text-gray-300">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      required
                      className="dark:bg-slate-700 dark:text-white dark:placeholder-gray-400 dark:border-slate-600"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="dark:text-gray-300">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your inquiry..."
                      className="min-h-[120px] dark:bg-slate-700 dark:text-white dark:placeholder-gray-400 dark:border-slate-600"
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 dark:from-indigo-500 dark:to-purple-500 dark:hover:from-indigo-600 dark:hover:to-purple-600"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
