export const donationDetails = {
  mpesa: {
    title: "M-Pesa",
    paybill: "542542",
    accountNumber: "32419",
    instructions: [
      "Go to M-Pesa on your phone",
      "Select Lipa na M-Pesa -> Pay Bill",
      "Enter Paybill Number: 542542",
      "Enter Account: 32419",
      "Enter Amount and confirm",
    ],
  },
  bank: {
    title: "Bank Transfer",
    bankName: "Equity Bank",
    accountName: "Liberty of Hope",
    accountNumber: "01234567890",
  },
} as const;

export const donationFaqs = [
  {
    q: "How is my donation used?",
    a: "100% of your donation goes directly to elder care programs including healthcare, nutrition, hygiene, and community support.",
  },
  {
    q: "Can I donate from outside Kenya?",
    a: "Yes! You can make an international bank transfer to our Equity Bank account. Contact us for SWIFT/BIC details.",
  },
  {
    q: "Is my donation tax-deductible?",
    a: "Liberty of Hope is a registered community-based organization. We can provide donation receipts for your records.",
  },
  {
    q: "Can I donate items instead of money?",
    a: "Absolutely! We accept food, clothing, bedding, hygiene products, and medical supplies. Contact us to arrange drop-off.",
  },
] as const;
