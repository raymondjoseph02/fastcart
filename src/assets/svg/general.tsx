import { SVGProps } from "react";

export const Check = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={4}
    className="lucide lucide-check-icon lucide-check"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M20 6 9 17l-5-5"></path>
  </svg>
);
