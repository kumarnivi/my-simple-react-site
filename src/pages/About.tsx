import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { users } from "@/data/users";

const About = () => {
  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Our Team</h1>
          <p className="text-muted-foreground">
            Meet our developers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <Card key={user.id} className="border border-border">
              <CardHeader className="text-center pb-4">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-3 border-2 border-border"
                />
                <CardTitle className="text-lg">{user.name}</CardTitle>
                <CardDescription>{user.role}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {user.bio}
                </p>
                
                <div className="mb-4">
                  <p className="text-sm font-medium mb-2">Skills:</p>
                  <div className="flex flex-wrap gap-1">
                    {user.skills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {user.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{user.skills.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-1">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                  <Link to={`/user/${user.id}`}>
                    <Button size="sm">
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