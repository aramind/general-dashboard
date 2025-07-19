import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Card } from "./ui/card";
import { Label } from "recharts";
import { Checkbox } from "./ui/checkbox";

const ListItem = ({ index }: { index: number }) => {
  return (
    <Card className="p-4">
      <div className="flex items-center gap-3">
        <Checkbox id={`terms${index}`} />
        <label
          htmlFor={`terms${index}`}
          className="text-sm text-muted-foreground"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Necessitatibus, repudiandae!
        </label>
      </div>
    </Card>
  );
};

export default function TodoList() {
  return (
    <div>
      Calendar
      {/* LIST */}
      <ScrollArea className="max-h-[400px] mt-4  overflow-y-auto">
        {/* LIST ITEM */}
        {Array(10)
          .fill("")
          .map((item, index) => (
            <ListItem key={index} index={index} />
          ))}
      </ScrollArea>
    </div>
  );
}
