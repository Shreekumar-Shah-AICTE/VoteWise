/**
 * Election process data for VoteWise
 * Comprehensive data about India's 7-step democratic election process
 * Source: Election Commission of India (ECI) - eci.gov.in
 */

import type { ElectionStep } from "@/types";

/** The complete 7-step election process in India */
export const electionSteps: ElectionStep[] = [
  {
    id: 1,
    title: "Voter Registration",
    shortDescription:
      "Register yourself as an eligible voter and get your Voter ID card (EPIC).",
    detailedDescription:
      "The first step in participating in India's democracy is voter registration. Every Indian citizen who is 18 years or older on the qualifying date is eligible to register as a voter. You can register online through the National Voters' Service Portal (NVSP) or offline by submitting Form 6 at your local Electoral Registration Office. Once verified, you receive your Electoral Photo Identity Card (EPIC), commonly known as the Voter ID card. You can also check your name in the electoral roll through the 'Voter Helpline' app or the CEO website of your state.",
    icon: "📋",
    keyFacts: [
      "Minimum age: 18 years on the qualifying date (January 1 of the year)",
      "Register online via NVSP (nvsp.in) or offline using Form 6",
      "Documents needed: Age proof, address proof, and a passport-size photo",
      "You receive an EPIC (Electoral Photo Identity Card) upon approval",
      "You can check your registration status using the Voter Helpline app",
      "NRI citizens can also register as overseas electors using Form 6A",
    ],
    timeline:
      "Registration is open year-round; updates happen before elections",
  },
  {
    id: 2,
    title: "Election Announcement",
    shortDescription:
      "The Election Commission announces the election schedule and activates the Model Code of Conduct.",
    detailedDescription:
      "The Election Commission of India (ECI) announces the election schedule through an official press conference. This announcement includes the dates for nominations, scrutiny, withdrawal, polling, and counting. The moment the schedule is announced, the Model Code of Conduct (MCC) comes into force. The MCC is a set of guidelines that governs the behavior of political parties, candidates, and the ruling government to ensure free and fair elections. Under MCC, the government cannot announce new schemes, make transfers of officials, or use public resources for campaign purposes.",
    icon: "📢",
    keyFacts: [
      "ECI announces dates for all election phases in a press conference",
      "Model Code of Conduct (MCC) activates immediately upon announcement",
      "MCC restricts government from announcing new policies or schemes",
      "General elections can be held in multiple phases across different states",
      "The 2024 Lok Sabha election was conducted in 7 phases",
      "ECI ensures a minimum 21-day gap between announcement and polling",
    ],
    timeline: "Announced 3-8 weeks before the first polling date",
  },
  {
    id: 3,
    title: "Nomination of Candidates",
    shortDescription:
      "Candidates file their nomination papers, which undergo scrutiny before the final list is prepared.",
    detailedDescription:
      "After the election is announced, aspiring candidates must file their nomination papers with the Returning Officer (RO) of their constituency within the specified deadline. The nomination includes personal details, party affiliation (if any), and a security deposit. After filing, all nominations undergo scrutiny by the RO to verify eligibility — candidates must be Indian citizens, meet minimum age requirements (25 for Lok Sabha, 30 for Rajya Sabha), and must not be disqualified under any law. After scrutiny, candidates have a window to withdraw their nominations. The final list of contesting candidates is then published.",
    icon: "📝",
    keyFacts: [
      "Candidates file nominations with the Returning Officer (RO)",
      "Security deposit: ₹25,000 for general candidates, ₹12,500 for SC/ST",
      "Minimum age: 25 years for Lok Sabha, 30 years for Rajya Sabha",
      "Nominations undergo scrutiny to verify eligibility",
      "Candidates can withdraw nominations before the deadline",
      "Final list of contesting candidates is published after withdrawals",
    ],
    timeline: "Nomination period lasts about 1-2 weeks after announcement",
  },
  {
    id: 4,
    title: "Election Campaigning",
    shortDescription:
      "Parties and candidates campaign to win voter support through rallies, advertisements, and outreach.",
    detailedDescription:
      "The campaigning period is when political parties and candidates reach out to voters to present their vision, agenda, and promises. Campaigns include public rallies, door-to-door canvassing, TV and newspaper advertisements, social media outreach, and public debates. All campaigning must follow the Model Code of Conduct — parties cannot use hate speech, appeal to caste or religious sentiments, or bribe voters. There are strict spending limits for each candidate (₹95 lakh for Lok Sabha in most states). Campaigning must stop 48 hours before polling day to allow voters a 'silence period' to make their decision.",
    icon: "📣",
    keyFacts: [
      "Campaigns include rallies, ads, social media, and door-to-door outreach",
      "Spending limit: ₹95 lakh per Lok Sabha candidate (varies by state)",
      "Hate speech, bribery, and communal appeals are strictly prohibited",
      "Campaigning must stop 48 hours before polling ('silence period')",
      "ECI monitors spending through expenditure observers",
      "Paid news and surrogate advertising are banned",
    ],
    timeline: "Typically 2-3 weeks; ends 48 hours before polling day",
  },
  {
    id: 5,
    title: "Polling Day",
    shortDescription:
      "Voters cast their votes using Electronic Voting Machines (EVMs) at designated polling stations.",
    detailedDescription:
      "On polling day, registered voters visit their assigned polling station to cast their vote. India uses Electronic Voting Machines (EVMs) — standalone, battery-operated devices that record votes electronically. Each EVM has a ballot unit displaying candidate names and party symbols. After the voter presses a button next to their chosen candidate, a Voter Verified Paper Audit Trail (VVPAT) machine displays a printed slip for 7 seconds, allowing the voter to verify their choice. Voters must carry a valid photo ID (EPIC, Aadhaar, passport, etc.). After voting, indelible ink is applied to the voter's left index finger to prevent duplicate voting. The entire process is conducted in secrecy, and no one — including election officials — can see whom you voted for.",
    icon: "🗳️",
    keyFacts: [
      "Voting is done using Electronic Voting Machines (EVMs)",
      "VVPAT displays a printed slip for 7 seconds for voter verification",
      "Valid photo ID is mandatory (EPIC, Aadhaar, Passport, etc.)",
      "Indelible ink is applied to prevent duplicate voting",
      "Polling hours are typically 7:00 AM to 6:00 PM",
      "NOTA (None of the Above) is available as an option on the EVM",
      "Booth Level Officers (BLOs) assist voters at polling stations",
    ],
    timeline: "One day per phase; multi-phase elections span several weeks",
  },
  {
    id: 6,
    title: "Vote Counting",
    shortDescription:
      "Votes are counted under strict supervision, and results are declared constituency by constituency.",
    detailedDescription:
      "After all phases of polling are complete, the counting of votes takes place on a designated counting day. The EVMs are stored in secure strong rooms under 24/7 surveillance with CCTV cameras and armed guards between polling and counting days. On counting day, the EVMs are opened in the presence of the Returning Officer, candidates or their counting agents, and ECI-appointed observers. The counting process follows a strict protocol: VVPAT slips from randomly selected 5 polling stations per constituency are matched with EVM results for verification. The candidate who receives the highest number of votes in a constituency is declared the winner (First-Past-The-Post system).",
    icon: "🔢",
    keyFacts: [
      "EVMs stored in secure strong rooms with 24/7 CCTV surveillance",
      "Counting done in presence of candidates, agents, and observers",
      "VVPAT verification: 5 random polling stations per constituency",
      "India uses First-Past-The-Post (FPTP) system",
      "Postal ballots (for service voters) are counted first",
      "Results are updated in real-time on the ECI Results portal",
      "Counting typically starts at 8:00 AM on counting day",
    ],
    timeline: "Usually completed in one day; results declared same day",
  },
  {
    id: 7,
    title: "Result Declaration & Government Formation",
    shortDescription:
      "Winners are officially declared, and the process of government formation begins.",
    detailedDescription:
      "After counting, the Returning Officer officially declares the winning candidate for each constituency. The Election Commission of India then formally publishes the complete results. For general elections, the party or coalition that wins a majority of seats (272+ out of 543 in Lok Sabha) is invited by the President to form the government. The leader of the majority party/coalition is appointed as the Prime Minister, who then selects the Council of Ministers. A swearing-in ceremony is held at Rashtrapati Bhavan. For state elections, the Governor invites the majority party leader to form the state government as Chief Minister. The entire process — from announcement to government formation — embodies the world's largest democratic exercise.",
    icon: "🏛️",
    keyFacts: [
      "272+ seats needed for majority in Lok Sabha (out of 543)",
      "President invites the majority party/coalition to form government",
      "PM is appointed and selects the Council of Ministers",
      "Swearing-in ceremony held at Rashtrapati Bhavan",
      "New government must win a vote of confidence in Lok Sabha",
      "For states, Governor invites majority leader as Chief Minister",
      "India's election process is the largest democratic exercise in the world",
    ],
    timeline: "Government formation typically within 2-3 weeks of results",
  },
];
