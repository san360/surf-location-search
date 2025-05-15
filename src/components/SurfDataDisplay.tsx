import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// ...existing code...

return (
  <div>
    <h2 className="text-2xl font-bold mb-4">Surf Data for {cityName}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Object.entries(data).map(([key, value]) => (
        <Card key={key} className="shadow-md">
          <CardHeader>
            <CardTitle>{key.replace(/([A-Z])/g, ' $1').trim()}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">{value ?? "N/A"}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);