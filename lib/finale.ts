/**
 * On-ground finale schedule and rules for 24 October 2026.
 *
 * Kept separate from the qualifying-round copy so the finale details can be
 * published on the results page without touching the main event timeline.
 * The 2026 edition has concluded — this is kept as a record of how the finale
 * floor ran.
 */

export type TimelineTone = 'default' | 'start' | 'break' | 'end'

export type FinaleTimelineItem = {
  time: string
  activity: string
  note?: string
  tone?: TimelineTone
}

export const finaleTimeline: FinaleTimelineItem[] = [
  { time: '7:30 – 9:00 AM', activity: 'Registration Starts', tone: 'start' },
  {
    time: '8:30 – 9:30 AM',
    activity: 'Freshening Up and Breakfast at the Mess',
    note: 'Last entry – 9:15 AM',
    tone: 'break',
  },
  { time: '9:30 AM', activity: 'CTF Competition Starts', tone: 'start' },
  { time: '1:30 – 2:30 PM', activity: 'Lunch at the Mess', tone: 'break' },
  { time: '2:30 PM', activity: 'CTF Competition Continues' },
  { time: '4:30 – 5:00 PM', activity: 'Evening Snacks', tone: 'break' },
  { time: '6:00 PM', activity: 'CTF Competition Ends', tone: 'end' },
  { time: '6:30 PM', activity: 'Prize Distribution Ceremony Starts', tone: 'end' },
  { time: '7:30 PM', activity: 'Event Ends', tone: 'end' },
]

export type FinaleGuideline = {
  title: string
  detail: string
}

export const finaleGuidelines: FinaleGuideline[] = [
  {
    title: 'No plugins or extensions',
    detail: 'The use of browser plugins or extensions is strictly prohibited.',
  },
  {
    title: 'AI tool usage',
    detail:
      'Participants may use AI tools such as ChatGPT or Gemini in a separate browser tab or window, subject to the organizer’s rules.',
  },
  {
    title: 'No flag sharing',
    detail:
      'Sharing flags, solutions, hints, or challenge files with other teams is strictly prohibited.',
  },
  {
    title: 'No unauthorized attacks',
    detail:
      'Attacking the CTF platform, server infrastructure, or other participants’ systems is not allowed.',
  },
  {
    title: 'Platform security',
    detail:
      'Teams must not exploit platform vulnerabilities, interfere with other teams, or attempt unauthorized access.',
  },
  {
    title: 'No automated tools',
    detail:
      'The use of automated tools, scripts, or bots to solve challenges or submit flags is strictly prohibited.',
  },
  {
    title: 'Follow instructions',
    detail:
      'Participants must follow instructions from the organizers and technical team.',
  },
  {
    title: 'Fair play',
    detail:
      'Any suspicious activity, unfair practice, or rule violation may result in a warning, score deduction, or disqualification.',
  },
  {
    title: 'Final decision',
    detail:
      'The organizers’ decisions regarding scoring, disputes, and disqualification will be final.',
  },
  {
    title: 'Flag submission',
    detail:
      'All flags must be submitted through the official CTF platform before the competition ends.',
  },
]
