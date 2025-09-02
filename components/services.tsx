"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "የፍቅር ሳውና (Infrared)",
    desc: "በታችኛው ሙቀት ለሰውነት አጠቃቀም የሚረዳ ፍራፍሬ የሳውና ዓይነት",
    price: "60 ETB/የ1 ሰዓት",
  },
  {
    title: "የእሳት ሳውና (Traditional)",
    desc: "የባህላዊ ሳውና ልምድ በሙቀት እና ቋሚ ውስብስብ ውቅር",
    price: "80 ETB/የ1 ሰዓት",
  },
  {
    title: "Private Steam Room",
    desc: "ለብቸኛ ጉብኝት የተሰራ ፕራይቬት ጭነት፣ ለሚፈልጉ የግል ልምድ",
    price: "120 ETB/የ1 ሰዓት",
  },
];

export function Services() {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">አገልግሎቶቻችን</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s) => (
          <Card key={s.title} className="p-4">
            <CardHeader>
              <CardTitle className="text-lg">{s.title}</CardTitle>
              <CardDescription>{s.desc}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-muted-foreground">እሺ ዋጋ</div>
                <div className="font-semibold">{s.price}</div>
              </div>

              <div className="mt-4">
                <Button asChild>
                  <a href="#booking">ቦታ ይያዙ</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
