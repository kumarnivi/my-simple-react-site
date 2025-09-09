import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroImage}
            alt="Modern workspace with code"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Welcome to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              DevPortfolio
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover amazing developers, explore their projects, and connect with talented individuals 
            who are shaping the future of technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about">
              <Button size="lg" className="group">
                Explore Developers
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose DevPortfolio?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A modern platform showcasing the best developers and their innovative projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg bg-card shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-lg mb-6">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Quality Projects</h3>
              <p className="text-muted-foreground">
                Explore high-quality projects built by experienced developers using modern technologies.
              </p>
            </div>

            <div className="text-center p-8 rounded-lg bg-card shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-lg mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Talented Developers</h3>
              <p className="text-muted-foreground">
                Connect with skilled developers from various backgrounds and specializations.
              </p>
            </div>

            <div className="text-center p-8 rounded-lg bg-card shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-lg mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Modern Technology</h3>
              <p className="text-muted-foreground">
                Discover projects built with cutting-edge technologies and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;