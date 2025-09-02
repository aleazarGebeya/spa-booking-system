"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const packages = [
  { name: "Basic", features: ["Infrared Sauna 1hr", "Towel"], price: "60 ETB" },
  { name: "Standard", features: ["Traditional Sauna 1hr", "Drink"], price: "120 ETB" },
  { name: "VIP", features: ["Private Steam Room 1.5hr", "Snack", "Drink"], price: "220 ETB" },
];

export function Pricing() {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">የመጫወቻ ፓኬጆች</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {packages.map((p) => (
          <Card key={p.name} className="p-4">
            <CardHeader>
              <CardTitle>{p.name}</CardTitle>
              <CardDescription className="text-sm">{p.features.join(" • ")}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mt-4 font-bold text-lg">{p.price}</div>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <a href="#booking">ይያዙ</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
