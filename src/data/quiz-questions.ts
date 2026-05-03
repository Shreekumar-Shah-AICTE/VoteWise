/**
 * Quiz questions for VoteWise Election Quiz Engine
 * 25 questions covering all aspects of India's election process
 * Categories: Registration, Process, Rights, History, Constitution
 */

import type { QuizQuestion } from "@/types";

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the minimum age to register as a voter in India?",
    options: ["16 years", "18 years", "21 years", "25 years"],
    correctAnswer: 1,
    explanation:
      "As per Article 326 of the Indian Constitution, every citizen of India who is not less than 18 years of age is eligible to be registered as a voter.",
    difficulty: "easy",
    category: "Registration",
  },
  {
    id: 2,
    question: "What does EPIC stand for in the context of Indian elections?",
    options: [
      "Election Process Identity Certificate",
      "Electoral Photo Identity Card",
      "Electronic Polling Identity Card",
      "Election Participation ID Card",
    ],
    correctAnswer: 1,
    explanation:
      "EPIC stands for Electoral Photo Identity Card, commonly known as the Voter ID card. It is issued by the Election Commission of India to all eligible voters.",
    difficulty: "easy",
    category: "Registration",
  },
  {
    id: 3,
    question: "Which form is used to register as a new voter in India?",
    options: ["Form 1", "Form 6", "Form 8", "Form 10"],
    correctAnswer: 1,
    explanation:
      "Form 6 is used for new voter registration. Form 8 is for corrections, Form 6A is for NRI registration, and Form 7 is for objection to inclusion of a name.",
    difficulty: "medium",
    category: "Registration",
  },
  {
    id: 4,
    question: "What is the Model Code of Conduct (MCC)?",
    options: [
      "A law passed by Parliament for elections",
      "Guidelines for voter behavior on polling day",
      "A set of rules governing parties and candidates during elections",
      "The Constitution's election provisions",
    ],
    correctAnswer: 2,
    explanation:
      "The MCC is a set of guidelines issued by the ECI that governs the behavior of political parties, candidates, and the ruling government from the announcement of elections until results are declared.",
    difficulty: "medium",
    category: "Process",
  },
  {
    id: 5,
    question: "When does the Model Code of Conduct come into effect?",
    options: [
      "On polling day",
      "When nominations begin",
      "Immediately when the election schedule is announced",
      "48 hours before polling",
    ],
    correctAnswer: 2,
    explanation:
      "The MCC comes into force immediately upon the announcement of the election schedule by the Election Commission, and remains in effect until the results are declared.",
    difficulty: "medium",
    category: "Process",
  },
  {
    id: 6,
    question:
      "What is the security deposit required to file a nomination for Lok Sabha elections (general category)?",
    options: ["₹10,000", "₹25,000", "₹50,000", "₹1,00,000"],
    correctAnswer: 1,
    explanation:
      "A candidate must deposit ₹25,000 to contest Lok Sabha elections (₹12,500 for SC/ST candidates). The deposit is forfeited if the candidate fails to get more than 1/6th of valid votes.",
    difficulty: "hard",
    category: "Process",
  },
  {
    id: 7,
    question: "What does EVM stand for?",
    options: [
      "Election Verification Machine",
      "Electronic Vote Manager",
      "Electronic Voting Machine",
      "Election Validation Module",
    ],
    correctAnswer: 2,
    explanation:
      "EVM stands for Electronic Voting Machine. India has been using EVMs since 1982 (first used in a by-election in Kerala) and nationwide since 2004.",
    difficulty: "easy",
    category: "Process",
  },
  {
    id: 8,
    question: "What is the purpose of VVPAT in Indian elections?",
    options: [
      "To count votes automatically",
      "To allow voters to verify their vote was recorded correctly",
      "To transmit results electronically",
      "To register voter identity",
    ],
    correctAnswer: 1,
    explanation:
      "VVPAT (Voter Verified Paper Audit Trail) is a machine attached to the EVM that prints a paper slip showing the candidate's name and symbol. The slip is displayed for 7 seconds, allowing the voter to verify their choice.",
    difficulty: "medium",
    category: "Process",
  },
  {
    id: 9,
    question: "What is NOTA in Indian elections?",
    options: [
      "A type of ballot paper",
      "A political party",
      "None of the Above — an option to reject all candidates",
      "A type of voter ID",
    ],
    correctAnswer: 2,
    explanation:
      "NOTA (None of the Above) was introduced in 2013 following a Supreme Court directive. It allows voters to reject all candidates. However, even if NOTA gets the most votes, the candidate with the next highest votes wins.",
    difficulty: "easy",
    category: "Rights",
  },
  {
    id: 10,
    question:
      "How many seats are there in the Lok Sabha (House of the People)?",
    options: ["500", "543", "552", "600"],
    correctAnswer: 1,
    explanation:
      "The Lok Sabha has a maximum strength of 552 members, but currently has 543 elected members (530 from states, 13 from Union Territories). The President can also nominate 2 Anglo-Indian members.",
    difficulty: "easy",
    category: "Constitution",
  },
  {
    id: 11,
    question: "How many seats are needed for a majority in the Lok Sabha?",
    options: ["250", "272", "300", "280"],
    correctAnswer: 1,
    explanation:
      "A party or coalition needs at least 272 seats (a simple majority of 543) to form the government at the center.",
    difficulty: "easy",
    category: "Constitution",
  },
  {
    id: 12,
    question: "Which voting system does India use for general elections?",
    options: [
      "Proportional Representation",
      "Single Transferable Vote",
      "First-Past-The-Post (FPTP)",
      "Mixed Member Proportional",
    ],
    correctAnswer: 2,
    explanation:
      "India uses the First-Past-The-Post (FPTP) system for Lok Sabha and State Assembly elections. The candidate who receives the most votes in a constituency wins, regardless of whether they have an absolute majority.",
    difficulty: "medium",
    category: "Constitution",
  },
  {
    id: 13,
    question: "When must election campaigning stop before polling day?",
    options: [
      "24 hours before",
      "48 hours before",
      "72 hours before",
      "On the morning of polling day",
    ],
    correctAnswer: 1,
    explanation:
      "All election campaigning must cease 48 hours before the polling date. This 'silence period' gives voters time to make an informed decision without last-minute influence.",
    difficulty: "medium",
    category: "Process",
  },
  {
    id: 14,
    question: "Why is indelible ink applied to a voter's finger after voting?",
    options: [
      "As a celebration mark",
      "For identification purposes only",
      "To prevent the same person from voting again",
      "To count the total number of voters",
    ],
    correctAnswer: 2,
    explanation:
      "Indelible ink is applied to the voter's left index finger to prevent bogus or duplicate voting. The ink contains silver nitrate and cannot be easily washed off for several days.",
    difficulty: "easy",
    category: "Process",
  },
  {
    id: 15,
    question: "Which article of the Indian Constitution deals with elections?",
    options: ["Article 324", "Article 370", "Article 21", "Article 14"],
    correctAnswer: 0,
    explanation:
      "Article 324 vests the power of superintendence, direction, and control of elections in the Election Commission of India. It covers elections to Parliament, State Legislatures, and the offices of President and Vice-President.",
    difficulty: "hard",
    category: "Constitution",
  },
  {
    id: 16,
    question: "What is the minimum age to contest elections for the Lok Sabha?",
    options: ["18 years", "21 years", "25 years", "30 years"],
    correctAnswer: 2,
    explanation:
      "The minimum age to contest Lok Sabha elections is 25 years. For Rajya Sabha, the minimum age is 30 years.",
    difficulty: "medium",
    category: "Constitution",
  },
  {
    id: 17,
    question: "Which app can be used to report election violations in India?",
    options: ["Voter Helpline", "cVIGIL", "DigiLocker", "UMANG"],
    correctAnswer: 1,
    explanation:
      "cVIGIL (Citizens' Vigil) is the ECI's mobile app that allows citizens to report Model Code of Conduct violations, including distribution of money, liquor, freebies, or intimidation. Complaints can be filed with photo/video evidence.",
    difficulty: "hard",
    category: "Rights",
  },
  {
    id: 18,
    question:
      "In how many phases was the 2024 Indian General Election (Lok Sabha) conducted?",
    options: ["5 phases", "6 phases", "7 phases", "8 phases"],
    correctAnswer: 2,
    explanation:
      "The 2024 Lok Sabha election was conducted in 7 phases from April 19 to June 1, 2024. Multi-phase elections allow the ECI to deploy security forces across the country efficiently.",
    difficulty: "medium",
    category: "History",
  },
  {
    id: 19,
    question: "Where are the EVMs stored between polling day and counting day?",
    options: [
      "At the polling station",
      "At the party headquarters",
      "In secure strong rooms with 24/7 CCTV surveillance",
      "At the district collector's office",
    ],
    correctAnswer: 2,
    explanation:
      "After polling, EVMs are sealed and transported to designated strong rooms under armed escort. These rooms are secured with multiple locks, 24/7 CCTV surveillance, and round-the-clock armed guards. Candidates can appoint their own representatives to observe the strong rooms.",
    difficulty: "medium",
    category: "Process",
  },
  {
    id: 20,
    question:
      "What is the spending limit per candidate for Lok Sabha elections?",
    options: ["₹50 lakh", "₹70 lakh", "₹95 lakh", "₹1 crore"],
    correctAnswer: 2,
    explanation:
      "The spending limit for Lok Sabha candidates is ₹95 lakh in most states (₹75 lakh in smaller states like Goa, Sikkim). Candidates must maintain daily accounts of expenditure, monitored by ECI expenditure observers.",
    difficulty: "hard",
    category: "Process",
  },
  {
    id: 21,
    question:
      "Can NRI (Non-Resident Indian) citizens vote in Indian elections?",
    options: [
      "No, NRIs cannot vote",
      "Yes, but only by postal ballot",
      "Yes, they must be present in person at their constituency",
      "Yes, they can vote online",
    ],
    correctAnswer: 2,
    explanation:
      "NRIs can register as overseas electors using Form 6A and must be present in person at their assigned polling station in India on polling day to cast their vote. There is no provision for overseas postal ballots or online voting for NRIs yet.",
    difficulty: "hard",
    category: "Rights",
  },
  {
    id: 22,
    question: "Who appoints the Chief Election Commissioner (CEC) of India?",
    options: [
      "The Prime Minister",
      "The Supreme Court",
      "The President of India",
      "The Parliament",
    ],
    correctAnswer: 2,
    explanation:
      "The Chief Election Commissioner and other Election Commissioners are appointed by the President of India. Recent reforms require the appointment to be made on the recommendation of a committee comprising the PM, the Leader of Opposition in Lok Sabha, and the Chief Justice of India.",
    difficulty: "hard",
    category: "Constitution",
  },
  {
    id: 23,
    question: "What happens if NOTA receives the highest number of votes?",
    options: [
      "A re-election is conducted",
      "The runner-up candidate wins",
      "The candidate with the next highest votes wins",
      "The seat remains vacant",
    ],
    correctAnswer: 2,
    explanation:
      "Even if NOTA gets the highest number of votes, the candidate with the most votes among the contesting candidates wins the seat. NOTA serves as a way for voters to express dissatisfaction but does not change the election outcome.",
    difficulty: "hard",
    category: "Rights",
  },
  {
    id: 24,
    question: "Which was the first state/territory to use EVMs in India?",
    options: ["Delhi", "Kerala", "Tamil Nadu", "Goa"],
    correctAnswer: 1,
    explanation:
      "EVMs were first used in India in 1982 during a by-election in the Parur constituency of Kerala. They were then gradually introduced across the country and used nationwide from the 2004 general elections.",
    difficulty: "hard",
    category: "History",
  },
  {
    id: 25,
    question: "What is the role of the Returning Officer (RO)?",
    options: [
      "To campaign for candidates",
      "To manage polling in a constituency and declare results",
      "To count money spent by parties",
      "To transport EVMs to Delhi",
    ],
    correctAnswer: 1,
    explanation:
      "The Returning Officer is responsible for conducting the election in a constituency. They oversee nominations, polling, counting, and officially declare the result for their constituency. They are typically senior government officials appointed by the ECI.",
    difficulty: "medium",
    category: "Process",
  },
];
