export const billingTypes = ["monthly", "annually"];

export const plans = [
  {
    name: "Basic Plan",
    monthlyPrice: 12,
    annualPrice: 10,
    features: [
      { label: "Free Domain", included: true },
      { label: "Google Ads Credit", included: true },
      { label: "Up to 5 Users", included: true },
      { label: "Free SSL Security", included: true },
      { label: "Up to 100 Products", included: true },
      { label: "Chat Inbox", included: false },
      { label: "Unlimited Storage", included: false },
      { label: "No Transaction Fee", included: false },
    ],
  },
  {
    name: "Professional",
    monthlyPrice: 20,
    annualPrice: 18,
    recommended: true,
    features: [
      { label: "Free Domain", included: true },
      { label: "Google Ads Credit", included: true },
      { label: "Up to 5 Users", included: true },
      { label: "Free SSL Security", included: true },
      { label: "Up to 100 Products", included: true },
      { label: "Chat Inbox", included: true },
      { label: "Unlimited Storage", included: false },
      { label: "No Transaction Fee", included: false },
    ],
  },
  {
    name: "Business",
    monthlyPrice: 45,
    annualPrice: 40,
    features: [
      { label: "Free Domain", included: true },
      { label: "Google Ads Credit", included: true },
      { label: "Up to 5 Users", included: true },
      { label: "Free SSL Security", included: true },
      { label: "Up to 100 Products", included: true },
      { label: "Chat Inbox", included: true },
      { label: "Unlimited Storage", included: true },
      { label: "No Transaction Fee", included: true },
    ],
  },
];

export const faqs = [
  {
    question: "Is there any discount for yearly subscription?",
    answer:
      "Yes! We offer a 20% discount when you choose annual billing. You'll see the discounted price when you switch to 'Bill Annually'.",
  },
  {
    question: "Can I change my current plan?",
    answer:
      "Absolutely. You can upgrade or downgrade your plan anytime from your account's billing settings without any extra fees.",
  },
  {
    question: "How do I cancel a subscription?",
    answer:
      "You can cancel or change your subscription at any time without any additional charges. Go to your profile page and click on billing information, then hit 'Cancel Subscription'.",
  },
  {
    question: "How to purchase a domain?",
    answer:
      "Navigate to Domains in your dashboard, search for your desired domain, and follow the prompts to complete checkout. It’s that simple!",
  },
];
