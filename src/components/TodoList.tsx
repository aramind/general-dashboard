"use client";
import React, { useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Card } from "./ui/card";
import { Label } from "recharts";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "./ui/button";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

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
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1 className="text-lg font-medium mb-6">Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
            className="rounded-lg border"
          />
        </PopoverContent>
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
