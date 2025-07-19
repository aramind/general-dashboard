import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Card } from "./ui/card";
import { Label } from "recharts";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

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
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
      {/* LIST */}
      <ScrollArea className="max-h-[600px] mt-4  overflow-y-auto">
        {/* LIST ITEM */}
        <div className="flex flex-col gap-2 pr-2">
          {Array(10)
            .fill("")
            .map((item, index) => (
              <ListItem key={index} index={index} />
            ))}
        </div>
      </ScrollArea>
    </div>
  );
}
