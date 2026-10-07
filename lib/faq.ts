/**
 * FAQ entries as plain strings.
 *
 * Kept separate from the accordion component so the same text can be emitted as
 * FAQPage structured data and inside llms.txt — schema that disagrees with what
 * the page actually says is worse than no schema at all.
 */
export type FaqEntry = {
  q: string
  a: string
}

export const faqs: FaqEntry[] = [
  {
    q: 'Who can participate in Ghost Protocol CTF 2.0?',
    a: 'Open for all branches and all years. Any student currently enrolled in an undergraduate or postgraduate program — CSE, IT, ECE, ME, CE, MBA, BBA or any other stream — is eligible to participate. Teams can have up to 3 members. All members must be students at the time of the event.',
  },
  {
    q: 'Is there a registration fee?',
    a: 'The registration fee is Free — it was ₹149 — per team (not per member), covering the online qualification round. Teams selected for the offline grand finale pay no additional participation fee.',
  },
  {
    q: 'What is the team size limit?',
    a: 'Teams can have a minimum of 1 and a maximum of 3 members. Solo participants are welcome. All members must be registered individually under the same team.',
  },
  {
    q: 'What format does the CTF follow?',
    a: 'Both rounds are Jeopardy-style CTFs with challenges across Web Exploitation, Cryptography, Forensics, OSINT, Reverse Engineering, Pwn, Steganography, Cloud Security, AI/LLM Security and Miscellaneous categories. The online qualifier and the on-ground grand finale are each 12 hours long.',
  },
  {
    q: 'What are the event dates?',
    a: 'The online qualification round is on 17 October 2026 (remote, from anywhere in India) and the offline grand finale is on 24 October 2026 at the NIET Greater Noida campus. Exact timings and the full schedule are shared in the announcement channel.',
  },
  {
    q: 'How many teams get selected for the grand finale?',
    a: 'The top 35 to 50 teams from the online qualification will be invited to the offline grand finale at NIET Greater Noida. The final shortlist and finale briefing are shared in the announcement channel.',
  },
  {
    q: 'Will accommodation be provided for outstation teams?',
    a: 'No. Travel and accommodation are not provided — outstation teams qualifying for the finale must arrange their own stay in Greater Noida. The finale venue is NIET Greater Noida; the Contact section carries the campus map.',
  },
  {
    q: 'What is the prize pool?',
    a: 'The total prize pool is up to ₹51,000, covering cash prizes, trophies, certificates and goodies. The exact split between placement prizes and on-ground rewards is announced after registrations close.',
  },
  {
    q: 'How do I stay updated about announcements?',
    a: 'Join the official WhatsApp announcement channel — all updates, rule changes, deadlines and schedule changes are communicated there. You can also follow the Cyber Invaders social handles for news.',
  },
  {
    q: 'Can I participate if I have never done a CTF before?',
    a: 'Absolutely. Ghost Protocol CTF is designed to be accessible to beginners while still challenging for experienced players. We recommend exploring beginner CTF platforms like PicoCTF and CTFtime to get familiar with the format.',
  },
  {
    q: 'How do I contact the organizing team?',
    a: 'Reach us at cyberinvaders@niet.co.in or through our social media channels. For urgent event-related queries, the WhatsApp channel is the fastest way to get a response.',
  },
]