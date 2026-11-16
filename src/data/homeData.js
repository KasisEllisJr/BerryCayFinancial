
import {
  Wallet,
  ChartNoAxesCombined,
  ShieldCheck,
  Landmark,
} from "lucide-react";

export const statistics = [
  {
    id: "stat-1",
    value: "25+ years",
    label: "in financial services",
  },
  {
    id: "stat-2",
    value: "Nassau",
    label: "The Bahamas",
  },
  {
    id: "stat-3",
    value: "Small-business focus",
    label: "businesses & individuals",
  },
  {
    id: "stat-4",
    value: "Led by Samantha",
    label: "Managing Director",
  },
];

export const services = [
  {
    id: "service-1",
    title: "Accounting",
    description:
      "Financial statements and reporting prepared " +
      "to the standard lenders, auditors and " +
      "partners expect to see.",
    icon: Wallet,
    link: "#contact",
  },
  {
    id: "service-2",
    title: "Bookkeeping",
    description:
      "Day-to-day records kept current and " +
      "reconciled, so your books are never " +
      "a year-end scramble.",
    icon: ChartNoAxesCombined,
    link: "#contact",
  },
  {
    id: "service-3",
    title: "Tax Reporting",
    description:
      "Filings prepared accurately and submitted " +
      "on time — VAT, business licence and " +
      "payroll obligations covered.",
    icon: ShieldCheck,
    link: "#contact",
  },
  {
    id: "service-4",
    title: "Advisory",
    description:
      "Plain-language guidance on what your " +
      "numbers are saying, so decisions " +
      "are grounded — not guessed.",
    icon: Landmark,
    link: "#contact",
  },
];
