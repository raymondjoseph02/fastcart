import { SVGProps } from "react";

export const Check = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
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

export const Google = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      fill="#FFC107"
      d="M21 11h-9v3h5c-.742 2.096-2.65 3.4-5 3.4a5.4 5.4 0 0 1 0-10.8c1.377 0 2.629.52 3.582 1.368l2.546-2.546A8.96 8.96 0 0 0 12 3a9 9 0 1 0 9 9z"
    ></path>
    <path
      fill="#FF3D00"
      d="M4 7.825 6.938 10c.795-1.987 2.72-3.39 4.973-3.39 1.368 0 2.612.521 3.56 1.372L18 5.43A8.86 8.86 0 0 0 11.911 3C8.476 3 5.498 4.957 4 7.825"
    ></path>
    <path
      fill="#4CAF50"
      d="M11.986 21A9.04 9.04 0 0 0 18 18.72l-2.776-2.299a5.4 5.4 0 0 1-3.238 1.067c-2.333 0-4.314-1.456-5.06-3.488L4 16.206C5.485 19.049 8.5 21 11.986 21"
    ></path>
    <path
      fill="#1976D2"
      d="M21 11h-9v3h5c-.356.95-1.165 1.403-2 2l3 3c-.197.17 3-2.251 3-6.5z"
    ></path>
  </svg>
);

export const Facebook = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      fill="#1877F2"
      fillRule="evenodd"
      d="M21 12.055C21 7.055 16.97 3 12 3s-9 4.054-9 9.055c0 4.52 3.291 8.266 7.594 8.945v-6.328H8.309v-2.617h2.285V10.06c0-2.27 1.343-3.523 3.4-3.523.984 0 2.014.177 2.014.177v2.228h-1.135c-1.118 0-1.467.698-1.467 1.414v1.699h2.496l-.399 2.617h-2.097V21C17.71 20.32 21 16.575 21 12.055"
      clipRule="evenodd"
    ></path>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="m15.476 14.374.414-2.694h-2.593V9.93c0-.737.362-1.455 1.524-1.455H16V6.182S14.93 6 13.907 6c-2.136 0-3.533 1.29-3.533 3.626v2.054H8v2.694h2.374v6.513a9.5 9.5 0 0 0 1.462.113c.497 0 1.188.075 1.664 0v-6.513z"
      clipRule="evenodd"
    ></path>
  </svg>
);
