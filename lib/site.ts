// Central config. Update SITE_URL to your final Vercel/custom domain after first deploy.
export const site = {
  name: "Nakasendo Indoors",
  shortName: "Nakasendo · Indoors",
  url: "https://nakasendo-indoors.vercel.app",
  description:
    "The Nakasendo's seasons, captured in a sweet. An indoor nerikiri workshop in the Kiso Valley: shape seasonal Japanese sweets by an irori hearth in an old kura storehouse, then eat them with matcha. Run out of Kashiwaya, Nagiso.",
  locality: "Nagiso",
  region: "Nagano",
  country: "JP",
  operator: "From Scratch LLC",
  // Contacts (shared across the Kashiwaya / Beyond Nakasendo projects)
  phone: "+819038392354",
  phoneDisplay: "090-3839-2354",
  // Booking: guests message us first on WhatsApp or LINE (same flow as the e-bikes).
  whatsapp:
    "https://wa.me/819038392354?text=Hi%21%20We%27d%20like%20to%20book%20the%20Nerikiri%20Challenge%20%28wagashi%20workshop%29.%0ADate%3A%0ANumber%20of%20people%3A%0AWhere%20we%27re%20staying%3A",
  whatsappJa:
    "https://wa.me/819038392354?text=%E3%81%AD%E3%82%8A%E3%81%8D%E3%82%8A%E3%83%81%E3%83%A3%E3%83%AC%E3%83%B3%E3%82%B8%EF%BC%88%E7%B7%B4%E3%82%8A%E5%88%87%E3%82%8A%E4%BD%93%E9%A8%93%EF%BC%89%E3%82%92%E4%BA%88%E7%B4%84%E3%81%97%E3%81%9F%E3%81%84%E3%81%A7%E3%81%99%E3%80%82%0A%E5%B8%8C%E6%9C%9B%E6%97%A5%EF%BC%9A%0A%E4%BA%BA%E6%95%B0%EF%BC%9A%0A%E5%AE%BF%E6%B3%8A%E5%85%88%EF%BC%9A",
  line: "https://line.me/R/ti/p/@847fhmne",
  // Minimum notice for a booking, in days.
  leadDays: 2,
  email: "ravnicaguild@gmail.com",
  instagram: "https://www.instagram.com/maki.maki0727",
} as const;
