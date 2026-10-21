/**
 * Round 1 results — the single source of truth for the /results page.
 *
 * Team names are reproduced exactly as submitted (including casing and
 * spelling) so the published list matches what the teams registered with.
 * Members without a registered name are listed by email only.
 */

export type TeamPlayer = {
  name?: string
  email: string
}

export type ResultEntry = {
  rank: number
  team: string
  points: number
  players: TeamPlayer[]
}

export const roundOneResults: ResultEntry[] = [
  {
    rank: 1,
    team: 'Avengers',
    points: 2655,
    players: [
      { email: 'bajajansh68@gmail.com' },
      { email: 'deepanshi654321@gmail.com' },
      { email: 'sahildhillon609@gmail.com' },
    ],
  },
  {
    rank: 2,
    team: 'RedTrace',
    points: 2745,
    players: [
      { name: 'Jethin Kosaraju', email: 'jethinkosaraju10@gmail.com' },
      { name: 'Varun Kumar', email: '0251cse027@niet.co.in' },
      { name: 'Odugu Vaishvi', email: 'vaishviodugu@gmail.com' },
    ],
  },
  {
    rank: 3,
    team: 'THE SSS',
    points: 2825,
    players: [
      { name: 'Sahil Garg', email: 'dgarg8719@gmail.com' },
      { name: 'Shaurya Pratap Singh', email: 'ranashaurya888@gmail.com' },
      { name: 'Shaurya Bhardwaj', email: 'shauryabhardwaj058@gmail.com' },
    ],
  },
  {
    rank: 4,
    team: 'GhOsT_03',
    points: 2575,
    players: [
      { name: 'Gunasagar Behera', email: 'gunasagar883@gmail.com' },
      { name: 'Anshuman Panda', email: 'pandaanshuman374@gmail.com' },
    ],
  },
  {
    rank: 5,
    team: 'Zion',
    points: 2625,
    players: [
      { name: 'Lekshman Sujesh R', email: 'lexcyclops@gmail.com' },
      { name: 'Nandhu Krishnan S', email: 'nandhukrishnanoo6@gmail.com' },
      { name: 'Sreedev S K', email: 'sreedevsk75@gmail.com' },
    ],
  },
  {
    rank: 6,
    team: 'VoidSec',
    points: 2825,
    players: [
      { name: 'Achal Lal', email: '0241cys106@niet.co.in' },
      { name: 'Priyanshu Kumar Singh', email: '0241cys082@niet.co.in' },
      { name: 'Tarkeshwar Gupta', email: '0241cys110@niet.co.in' },
    ],
  },
  {
    rank: 7,
    team: 'Task3 Q1',
    points: 2655,
    players: [
      { name: 'Ayush Kumar Jha', email: 'sanataniayushjha07@gmail.com' },
      { name: 'Harman Singh', email: 'harmanxverma@gmail.com' },
    ],
  },
  {
    rank: 8,
    team: 'D3f4lt',
    points: 2545,
    players: [
      { name: 'Jai Saxena', email: 'hellojaisaxena@gmail.com' },
      { name: 'Deepak Kumar', email: '0241cys087@niet.co.in' },
      { name: 'Anshuman Upadhyay', email: '0241cys168@niet.co.in' },
    ],
  },
  {
    rank: 9,
    team: 'MS CYBER SHIELD',
    points: 2465,
    players: [
      { name: 'Mrigendra Singh Chauhan', email: 'mrigendrakrstar011@gmail.com' },
      { email: 'raverma1804@gmail.com' },
    ],
  },
  {
    rank: 10,
    team: 'IN-OxO',
    points: 2575,
    players: [
      { name: 'Madhuresh Kumar Jha', email: 'madhuresh453@gmail.com' },
      { name: 'Tanishpreet Singh', email: 'showmy.etv@gmail.com' },
    ],
  },
  {
    rank: 11,
    team: 'AbhiH',
    points: 2405,
    players: [
      { name: 'Ritabrata Ghosh', email: 'ritabrata9541@gmail.com' },
      { name: 'Madhav Patidar', email: 'madhavpatidar494@gmail.com' },
    ],
  },
  {
    rank: 12,
    team: 'CipherStorm',
    points: 2575,
    players: [
      { email: '0251cys038@niet.co.in' },
      { email: '0251cys004@niet.co.in' },
      { email: '0251cys008@niet.co.in' },
    ],
  },
  {
    rank: 13,
    team: 'Power Ranger',
    points: 2465,
    players: [
      { name: 'Rahul Chaurasiya', email: 'rahulchaurasiya2026cys@sece.ac.in' },
    ],
  },
  {
    rank: 14,
    team: 'CrimsonLions',
    points: 2435,
    players: [
      { name: 'Shreyansh Kumar Jain', email: 'kumarjainshreyansh2@gmail.com' },
      { name: 'Abhishek Kumar', email: 'abhisingh270911@gmail.com' },
      { name: 'Arka Biswas', email: 'arkabiswas774@gmail.com' },
    ],
  },
  {
    rank: 15,
    team: 'kiCrypto',
    points: 2515,
    players: [
      { name: 'A Ridhusree', email: 'ridhusreeva@gmail.com' },
      { name: 'Niranjana Girish', email: 'niranjanaa910@gmail.com' },
      { name: 'Vishal Kumar S', email: 'vishalks2006@gmail.com' },
    ],
  },
  {
    rank: 16,
    team: 'HackerX',
    points: 2575,
    players: [
      { name: 'NetRunner', email: 'ts7529614@gmail.com' },
      { email: '0251cse085@niet.co.in' },
      { name: 'Aaditya Rajbhar', email: '0251ite112@niet.co.in' },
    ],
  },
  {
    rank: 17,
    team: 'Sh4d0w_BrOK3rs',
    points: 2575,
    players: [
      { name: 'Kshitij Gupta', email: 'guptakshitij4723@gmail.com' },
      { name: 'Noor Hassan', email: 'noor.hass349@gmail.com' },
    ],
  },
  {
    rank: 18,
    team: 'Probe it',
    points: 2825,
    players: [{ name: 'Yash Gadia', email: 'yash113gadia@gmail.com' }],
  },
  {
    rank: 19,
    team: 'Utopia',
    points: 2625,
    players: [
      { name: 'Praveen Kumar Gupta', email: 'praveenkumargupta640@gmail.com' },
      { name: 'Prince Kumar', email: '0251csml307@niet.co.in' },
      { email: 'singhrudra830013@gmail.com' },
    ],
  },
  {
    rank: 20,
    team: 'Delulu',
    points: 2795,
    players: [
      { name: 'Ekta Gupta', email: '0251cse353@niet.co.in' },
      { name: 'Kavya Sinha', email: '0251cys118@niet.co.in' },
    ],
  },
  {
    rank: 21,
    team: 'Team X',
    points: 2465,
    players: [
      { name: 'Nakshatra Sharma', email: 'sharmanakshatra18@gmail.com' },
      { name: 'Yashwanth Kumar', email: 'yashwanth9999s@gmail.com' },
    ],
  },
  {
    rank: 22,
    team: 'Xosisss H4ck',
    points: 2465,
    players: [{ name: 'Kartikey Gupta', email: 'kartikgupta.official01@gmail.com' }],
  },
  {
    rank: 23,
    team: 'Zero Day',
    points: 2465,
    players: [
      { name: 'Yasaswi Reddy Kota', email: 'yasaswireddykota@gmail.com' },
      { name: 'Syam Saran Reddy', email: '24100030031.uset@ltsu.ac.in' },
      { name: 'B. Aditya', email: 'adilucky247@gmail.com' },
    ],
  },
  {
    rank: 24,
    team: 'The One',
    points: 2295,
    players: [
      { name: 'Akash Mohan', email: 'akkuzzcyber@gmail.com' },
      { name: 'Jishnu', email: 'jishnujishnus025@gmail.com' },
      { name: 'Manu', email: 'official404user@gmail.com' },
    ],
  },
  {
    rank: 25,
    team: 'NullX',
    points: 1960,
    players: [{ email: 'jayantpatil745@gmail.com' }],
  },
  {
    rank: 26,
    team: 'NetSafe',
    points: 2825,
    players: [
      { name: 'Rajasi', email: 'rajasithakur05@gmail.com' },
      { email: '0241cys024@niet.co.in' },
      { name: 'Prateek Gupta', email: '0241cys045@niet.co.in' },
    ],
  },
  {
    rank: 27,
    team: 'Vision Vangaurds',
    points: 2545,
    players: [
      { name: 'Nikhil Yadav', email: 'nikhilyadav071407@gmail.com' },
      { name: 'Niharika Sharma', email: 'runjhun2467@gmail.com' },
      { name: 'Nupur Joshi', email: 'nupurjoshi016@gmail.com' },
    ],
  },
  {
    rank: 28,
    team: 'MAVRICK',
    points: 2595,
    players: [
      { name: 'Nikhil Patel', email: 'nikhilpatel14077@gmail.com' },
      { name: 'Manish Yadav', email: 'manishcyber18@gmail.com' },
    ],
  },
  {
    rank: 29,
    team: 'Weirdos',
    points: 2825,
    players: [
      { email: 'adivalke@gmail.com' },
      { email: 'nikhilkatigar76@gmail.com' },
    ],
  },
  {
    rank: 30,
    team: 'Hunters',
    points: 2575,
    players: [
      { name: 'Nitin Singh Raghuwanshi', email: 'raghuwanshi74891@gmail.com' },
      { name: 'Jatin Karma', email: 'jatinkarmaa@gmail.com' },
      { name: 'Jatin Pal', email: 'jatinpal142000@gmail.com' },
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
