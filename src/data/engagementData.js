import {
  CalendarCheck,
  MessagesSquare,
  ClipboardCheck,
} from "lucide-react";

export const processSteps = [
  {
    id: "step-1",
    number: "01",
    title: "Book a consultation",
    description:
      "Get in touch to discuss your business, " +
      "your financial records, and the support " +
      "you need.",
    icon: CalendarCheck,
  },
  {
    id: "step-2",
    number: "02",
    title: "We review your books",
    description:
      "We look at where your records stand, " +
      "review your deadlines, and identify " +
      "what needs attention.",
    icon: MessagesSquare,
  },
  {
    id: "step-3",
    number: "03",
    title: "You get a clear plan",
    description:
      "Receive a straightforward plan for " +
      "your bookkeeping, tax reporting, " +
      "and advisory needs.",
    icon: ClipboardCheck,
  },
];
