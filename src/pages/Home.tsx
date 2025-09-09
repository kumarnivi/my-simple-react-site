import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardTitle } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to DevPortfolio
          </h1>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Discover amazing developers, explore their projects, and connect with the tech community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about">
              <Button size="lg" variant="secondary">
                Explore Developers
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Platform?</h2>
            <p className="text-muted-foreground">
              A modern platform showcasing the best developers and their projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg mb-2">Quality Projects</CardTitle>
              <p className="text-sm text-muted-foreground">
                Explore high-quality projects built by experienced developers.
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg mb-2">Talented Developers</CardTitle>
              <p className="text-sm text-muted-foreground">
                Connect with skilled developers from various backgrounds.
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg mb-2">Modern Technology</CardTitle>
              <p className="text-sm text-muted-foreground">
                Discover projects built with cutting-edge technologies.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;