import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { users } from "@/data/users";
import NotFound from "./NotFound";

const UserDetail = () => {
  const { id } = useParams<{ id: string }>();
  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return <NotFound />;
  }

  return (
    <div className="py-12 bg-gradient-hero min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link to="/about" className="inline-flex items-center mb-8 text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Developers
        </Link>

        {/* User Profile */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-primary/20"
              />
              <div className="flex-1">
                <CardTitle className="text-3xl mb-2">{user.name}</CardTitle>
                <CardDescription className="text-xl text-primary font-medium mb-4">
                  {user.role}
                </CardDescription>
                <p className="text-muted-foreground mb-4">{user.bio}</p>
                
                <div className="flex items-center gap-4">
                  <Button size="sm" variant="outline" className="gap-2">
                    <Github className="h-4 w-4" />
                    GitHub
                  </Button>
                  <Button size="sm" variant="outline" className="gap-2">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </Button>
                  <Button size="sm" variant="outline" className="gap-2">
                    <Mail className="h-4 w-4" />
                    Email
                  </Button>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Skills */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Technical Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {user.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Projects */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {user.projects.map((project) => (
              <Card key={project.id} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </div>
                    {project.link && (
                      <Button size="sm" variant="ghost" className="p-2">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium mb-2">Technologies:</p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {project.link && (
                      <Button size="sm" className="w-full group">
                        View on GitHub
                        <ExternalLink className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;