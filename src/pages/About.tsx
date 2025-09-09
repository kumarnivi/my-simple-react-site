import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { users } from "@/data/users";

const About = () => {
  return (
    <div className="py-12 bg-gradient-hero min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Meet Our Developers</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know the talented individuals behind amazing projects. Each developer brings 
            unique skills and perspectives to the tech community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {users.map((user) => (
            <Card key={user.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
                  />
                </div>
                <CardTitle className="text-xl">{user.name}</CardTitle>
                <CardDescription className="text-primary font-medium">
                  {user.role}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {user.bio}
                </p>
                
                <div className="mb-4">
                  <p className="text-sm font-medium mb-2">Skills:</p>
                  <div className="flex flex-wrap gap-1">
                    {user.skills.slice(0, 4).map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {user.skills.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{user.skills.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <Button size="sm" variant="ghost" className="p-2">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="p-2">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="p-2">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                  <Link to={`/user/${user.id}`}>
                    <Button size="sm" className="group">
                      View Profile
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;