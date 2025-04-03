import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Function to merge and conditionally apply class names
export function cn(...inputs: ClassValue[]) {
  // First, apply clsx for conditional classes, then merge with twMerge for Tailwind CSS class optimization
  return twMerge(clsx(inputs));
}
