/**
 * Round 1 results — the single source of truth for the /results page.
 *
 * Team names are reproduced exactly as submitted (including casing and
 * spelling) so the published list matches what the teams registered with.
 * Player emails are included where the organizers supplied them.
 */

export type PlayerRole = 'Leader' | 'Member'

export type TeamPlayer = {
  name: string
  email?: string
  role: PlayerRole
}

export type ResultEntry = {
  rank: number
  team: string
  players: TeamPlayer[]
}

export const roundOneResults: ResultEntry[] = [
  { rank: 1, team: 'Avengers', players: [] },
  {
    rank: 2,
    team: 'RedTrace',
    players: [
      { name: 'Jethin Kosaraju', email: 'jethinkosaraju10@gmail.com', role: 'Leader' },
      { name: 'Odugu Vaishvi', email: 'vaishviodugu@gmail.com', role: 'Member' },
    ],
  },
  {
    rank: 3,
    team: 'THE SSS',
    players: [
      { name: 'Sahil Garg', email: 'dgarg8719@gmail.com', role: 'Leader' },
      { name: 'Shaurya Bhardwaj', email: 'shauryabhardwaj058@gmail.com', role: 'Member' },
      { name: 'Shaurya Pratap Singh', email: 'ranashaurya888@gmail.com', role: 'Member' },
    ],
  },
  { rank: 4, team: 'GhOsT_03', players: [] },
  {
    rank: 5,
    team: 'Zion',
    players: [
      { name: 'Lekshman Sujesh R', email: 'lexcyclops@gmail.com', role: 'Leader' },
      { name: 'Sreedev S K', email: 'sreedevsk75@gmail.com', role: 'Member' },
      { name: 'Nandhu Krishnan S', email: 'nandhukrishnanoo6@gmail.com', role: 'Member' },
    ],
  },
  {
    rank: 6,
    team: 'VoidSec',
    players: [
      { name: 'Tarkeshwar Gupta', email: '0241cys110@niet.co.in', role: 'Leader' },
      { name: 'Priyanshu Kumar Singh', email: '0241cys082@niet.co.in', role: 'Member' },
      { name: 'Achal Lal', email: '0241cys106@niet.co.in', role: 'Member' },
    ],
  },
  {
    rank: 7,
    team: 'Task3 Q1',
    players: [
      { name: 'Ayush Kumar Jha', email: 'sanataniayushjha07@gmail.com', role: 'Leader' },
      { name: 'Harman Singh', email: 'harmanxverma@gmail.com', role: 'Member' },
    ],
  },
  {
    rank: 8,
    team: 'D3f4lt',
    players: [
      { name: 'Jai Saxena', email: 'hellojaisaxena@gmail.com', role: 'Leader' },
      { name: 'Deepak Kumar', email: '0241cys087@niet.co.in', role: 'Member' },
    ],
  },
  {
    rank: 9,
    team: 'MS CYBER SHIELD',
    players: [
      { name: 'Mrigendra Singh Chauhan', email: 'mrigendrakrstar011@gmail.com', role: 'Leader' },
    ],
  },
  {
    rank: 10,
    team: 'IN-OxO',
    players: [
      { name: 'Madhuresh Kumar Jha', email: 'madhuresh453@gmail.com', role: 'Leader' },
      { name: 'Tanishpreet Singh', email: 'showmy.etv@gmail.com', role: 'Member' },
    ],
  },
  {
    rank: 11,
    team: 'AbhiH',
    players: [
      { name: 'Ritabrata Ghosh', email: 'ritabrata9541@gmail.com', role: 'Leader' },
      { name: 'Madhav Patidar', email: 'madhavpatidar494@gmail.com', role: 'Member' },
    ],
  },
  { rank: 12, team: 'CipherStorm', players: [] },
  { rank: 13, team: 'Power Ranger', players: [] },
  {
    rank: 14,
    team: 'CrimsonLions',
    players: [
      { name: 'Shreyansh Kumar Jain', email: 'kumarjainshreyansh2@gmail.com', role: 'Leader' },
      { name: 'Abhishek Kumar', email: 'abhisingh270911@gmail.com', role: 'Member' },
      { name: 'Arka Biswas', email: 'arkabiswas774@gmail.com', role: 'Member' },
    ],
  },
  {
    rank: 15,
    team: 'kiCrypto',
    players: [
      { name: 'A Ridhusree', email: 'ridhusreeva@gmail.com', role: 'Leader' },
      { name: 'Niranjana Girish', email: 'niranjanaa910@gmail.com', role: 'Member' },
      { name: 'Vishal Kumar S', email: 'vishalks2006@gmail.com', role: 'Member' },
    ],
  },
  {
    rank: 16,
    team: 'HackerX',
    players: [
      { name: 'NetRunner (username)', email: 'ts7529614@gmail.com', role: 'Leader' },
      { name: 'Aaditya Rajbhar', email: '0251ite112@niet.co.in', role: 'Member' },
    ],
  },
  {
    rank: 17,
    team: 'Sh4d0w_BrOK3rs',
    players: [
      { name: 'Kshitij Gupta', email: 'guptakshitij4723@gmail.com', role: 'Leader' },
      { name: 'Noor Hassan', email: 'noor.hass349@gmail.com', role: 'Member' },
    ],
  },
  {
    rank: 18,
    team: 'Probe it',
    players: [{ name: 'Yash Gadia', email: 'yash113gadia@gmail.com', role: 'Leader' }],
  },
  {
    rank: 19,
    team: 'Utopia',
    players: [
      { name: 'Praveen Kumar Gupta', email: 'praveenkumargupta640@gmail.com', role: 'Leader' },
      { name: 'Prince Kumar', email: '0251csml307@niet.co.in', role: 'Member' },
    ],
  },
  {
    rank: 20,
    team: 'Delulu',
    players: [
      { name: 'Ekta Gupta', email: '0251cse353@niet.co.in', role: 'Leader' },
      { name: 'Kavya Sinha', email: '0251cys118@niet.co.in', role: 'Member' },
    ],
  },
  {
    rank: 21,
    team: 'Team X',
    players: [
      { name: 'Rahul Chaurasiya', email: 'rahulchaurasiya2026cys@sece.ac.in', role: 'Leader' },
      { name: 'Nakshatra Sharma', email: 'sharmanakshatra18@gmail.com', role: 'Leader' },
      { name: 'Yashwanth Kumar', email: 'yashwanth9999s@gmail.com', role: 'Member' },
    ],
  },
  { rank: 22, team: 'Xosisss H4ck', players: [] },
  {
    rank: 23,
    team: 'Zero Day',
    players: [
      { name: 'Yasaswi Reddy Kota', email: 'yasaswireddykota@gmail.com', role: 'Leader' },
      { name: 'Syam Saran Reddy', email: '24100030031.uset@ltsu.ac.in', role: 'Member' },
      { name: 'B. Aditya', email: 'adilucky247@gmail.com', role: 'Member' },
    ],
  },
  {
    rank: 24,
    team: 'The One',
    players: [
      { name: 'Akash Mohan', email: 'akkuzzcyber@gmail.com', role: 'Leader' },
      { name: 'Jishnu', email: 'jishnujishnus025@gmail.com', role: 'Member' },
    ],
  },
  { rank: 25, team: 'NullX', players: [] },
  {
    rank: 26,
    team: 'NetSafe',
    players: [{ name: 'Rajasi', email: 'rajasithakur05@gmail.com', role: 'Leader' }],
  },
  {
    rank: 27,
    team: 'Vision Vangaurds',
    players: [
      { name: 'Nikhil Yadav', email: 'nikhilyadav071407@gmail.com', role: 'Leader' },
      { name: 'Niharika Sharma', email: 'runjhun2467@gmail.com', role: 'Member' },
      { name: 'Nupur Joshi', email: 'nupurjoshi016@gmail.com', role: 'Member' },
    ],
  },
  {
    rank: 28,
    team: 'MAVRICK',
    players: [
      { name: 'Nikhil Patel', email: 'nikhilpatel14077@gmail.com', role: 'Leader' },
      { name: 'Manish Yadav', email: 'manishcyber18@gmail.com', role: 'Member' },
    ],
  },
  { rank: 29, team: 'Weirdos', players: [] },
  {
    rank: 30,
    team: 'Hunters',
    players: [
      { name: 'Nitin Singh Raghuwanshi', email: 'raghuwanshi74891@gmail.com', role: 'Leader' },
      { name: 'Jatin Karma', email: 'jatinkarmaa@gmail.com', role: 'Member' },
      { name: 'Jatin Pal', email: 'jatinpal142000@gmail.com', role: 'Member' },
    ],
  },
]

/** Ranks that receive the winner treatment on the results page. */
export const winnerCount = 3

/** Total teams that cleared Round 1 and advance to Round 2. */
export const qualifiedCount = roundOneResults.length

export type WinnerAccent = {
  accent: string
  label: string
}

export const winnerAccents: Record<number, WinnerAccent> = {
  1: { accent: '#fbbf24', label: 'Gold' },
  2: { accent: '#c0c7d1', label: 'Silver' },
  3: { accent: '#cd7f32', label: 'Bronze' },
}

export function isWinner(rank: number) {
  return rank <= winnerCount
}
