import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SectorCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
  documents: string[];
}

export function SectorCard({
  icon: Icon,
  name,
  description,
  documents,
}: SectorCardProps) {
  return (
    <Card className="h-full hover:shadow-lg hover:border-primary/20 transition-all duration-300">
      <CardHeader>
        <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="h-7 w-7 text-primary" />
        </div>
        <CardTitle className="text-xl">{name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{description}</p>
        <div>
          <p className="text-sm font-medium mb-2">Tipos de documentos:</p>
          <div className="flex flex-wrap gap-2">
            {documents.map((doc, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {doc}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
