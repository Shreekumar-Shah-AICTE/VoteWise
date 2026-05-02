/**
 * Mock candidate data for the EVM Voting Simulator
 * Uses fictional names and parties to maintain non-partisan stance
 */

import type { MockCandidate } from "@/types";

/** Fictional candidates for the mock voting simulator */
export const mockCandidates: MockCandidate[] = [
  {
    id: 1,
    name: "Rajesh Kumar Sharma",
    party: "National Development Front",
    symbol: "🌾",
    serialNumber: 1,
  },
  {
    id: 2,
    name: "Priya Suresh Nair",
    party: "Progressive People's Alliance",
    symbol: "🌳",
    serialNumber: 2,
  },
  {
    id: 3,
    name: "Amit Singh Rathore",
    party: "United Citizens Party",
    symbol: "🔔",
    serialNumber: 3,
  },
  {
    id: 4,
    name: "Lakshmi Devi Patel",
    party: "Bharatiya Samaj Dal",
    symbol: "📖",
    serialNumber: 4,
  },
  {
    id: 5,
    name: "Mohammed Irfan Khan",
    party: "Independent",
    symbol: "⭐",
    serialNumber: 5,
  },
  {
    id: 6,
    name: "NOTA",
    party: "None of the Above",
    symbol: "✖️",
    serialNumber: 6,
  },
];

/** Sample polling stations across India for the map feature */
export const samplePollingStations = [
  {
    id: "PS001",
    name: "Government Primary School, Sector 14",
    address: "Sector 14, Gandhinagar, Gujarat 382016",
    lat: 23.2156,
    lng: 72.6369,
    constituency: "Gandhinagar",
  },
  {
    id: "PS002",
    name: "Municipal Community Hall, Maninagar",
    address: "Maninagar, Ahmedabad, Gujarat 380008",
    lat: 23.0028,
    lng: 72.6139,
    constituency: "Ahmedabad East",
  },
  {
    id: "PS003",
    name: "Government Higher Secondary School",
    address: "Connaught Place, New Delhi, Delhi 110001",
    lat: 28.6315,
    lng: 77.2167,
    constituency: "New Delhi",
  },
  {
    id: "PS004",
    name: "Zilla Parishad School, Andheri",
    address: "Andheri East, Mumbai, Maharashtra 400069",
    lat: 19.1197,
    lng: 72.8464,
    constituency: "Mumbai North West",
  },
  {
    id: "PS005",
    name: "Corporation School, T. Nagar",
    address: "T. Nagar, Chennai, Tamil Nadu 600017",
    lat: 13.0418,
    lng: 80.2341,
    constituency: "Chennai South",
  },
  {
    id: "PS006",
    name: "Government School, Salt Lake",
    address: "Salt Lake City, Kolkata, West Bengal 700091",
    lat: 22.5803,
    lng: 88.4168,
    constituency: "Kolkata North",
  },
  {
    id: "PS007",
    name: "Community Centre, Koramangala",
    address: "Koramangala, Bengaluru, Karnataka 560034",
    lat: 12.9352,
    lng: 77.6245,
    constituency: "Bengaluru South",
  },
  {
    id: "PS008",
    name: "Panchayat Bhavan, Varanasi",
    address: "Dashashwamedh, Varanasi, Uttar Pradesh 221001",
    lat: 25.3109,
    lng: 83.0107,
    constituency: "Varanasi",
  },
];
