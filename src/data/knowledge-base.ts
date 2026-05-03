/**
 * VoteWise Knowledge Base
 * Pre-computed, expert-quality answers for common election education questions.
 * 
 * This serves as an intelligent fallback when the Gemini API is unavailable,
 * ensuring the AI Assistant always delivers value to users.
 * 
 * Google Services: Acts as a graceful fallback for Gemini AI
 * @module data/knowledge-base
 */

export interface KnowledgeEntry {
  /** Keywords that trigger this answer (fuzzy matched) */
  keywords: string[];
  /** The pre-written expert answer */
  answer: string;
}

/**
 * Comprehensive election education knowledge base.
 * Each entry contains keyword triggers and a detailed, non-partisan answer.
 */
export const KNOWLEDGE_BASE: KnowledgeEntry[] = [
  {
    keywords: ["register", "voter", "registration", "enroll", "form 6", "nvsp", "epic", "voter id", "voter card"],
    answer: `🗳️ **How to Register as a Voter in India**

Here's your step-by-step guide to voter registration:

**Online Registration (Recommended):**
1. Visit the **National Voter Service Portal (NVSP)** at voters.eci.gov.in
2. Click on "New Voter Registration" (Form 6)
3. Fill in your personal details — name, age, address, and constituency
4. Upload a passport-size photo and age proof document
5. Submit the form and note your reference number
6. Track your application status online

**Offline Registration:**
1. Visit your nearest **Electoral Registration Office (ERO)**
2. Collect **Form 6** from the office
3. Fill it in and attach required documents
4. Submit it to the ERO

**Eligibility:**
- Must be an **Indian citizen**
- Must be **18 years or older** on the qualifying date (January 1st of the year)
- Must be a resident of the constituency

**Required Documents:**
- Age proof (Birth certificate, Class 10 marksheet, passport)
- Address proof (Aadhaar card, utility bill, bank passbook)
- Passport-size photograph

📱 You can also use the **Voter Helpline App** (available on Android & iOS) for easy registration!

*Every vote counts — register today and make your voice heard!* 🇮🇳`
  },
  {
    keywords: ["evm", "electronic voting machine", "voting machine", "how does evm work", "button"],
    answer: `🖥️ **Electronic Voting Machines (EVMs) — How They Work**

EVMs have been used in Indian elections since **1999** and are manufactured by **Bharat Electronics Limited (BEL)** and **Electronics Corporation of India Limited (ECIL)**.

**Components of an EVM:**
1. **Control Unit (CU)** — Operated by the presiding officer. Controls the ballot process.
2. **Ballot Unit (BU)** — Where voters press the button next to their chosen candidate.
3. **VVPAT (Voter Verifiable Paper Audit Trail)** — Prints a slip showing the candidate name and symbol for 7 seconds, allowing voters to verify their vote.

**How Voting Works:**
1. Your identity is verified at the polling station
2. Your finger is marked with **indelible ink** on the left index finger
3. The presiding officer enables the EVM for one vote
4. You enter the voting compartment (private)
5. You press the **blue button** next to your preferred candidate on the Ballot Unit
6. A **beep sound** confirms your vote is recorded
7. The VVPAT shows a printed slip for 7 seconds — verify your vote!

**Security Features:**
- EVMs are **standalone units** — they cannot be connected to the internet or any network
- Each EVM can record a maximum of **2,000 votes**
- The software is **one-time programmable** — it cannot be altered after manufacturing
- EVMs are **sealed** and stored securely before and after elections
- Candidates can challenge results by requesting a **VVPAT paper trail count**

*EVMs have made Indian elections faster, more accurate, and more transparent!* ✅`
  },
  {
    keywords: ["documents", "polling day", "id", "identity", "what to bring", "carry", "voter slip"],
    answer: `📋 **Documents You Need on Polling Day**

To vote on election day, you must carry a **valid photo identity document**. Here are the **12 documents accepted** by the Election Commission of India:

1. 🪪 **Voter ID Card (EPIC)** — The primary document
2. 🪪 **Aadhaar Card**
3. 📘 **Passport**
4. 🚗 **Driving License**
5. 📱 **PAN Card**
6. 🏛️ **Government-issued Photo ID**
7. 🏫 **Student ID (issued by recognized institution)**
8. 💼 **Employment ID (government or PSU)**
9. 🏦 **Bank or Post Office passbook with photograph**
10. 🧓 **Senior Citizen Card** (issued by the state government)
11. 🏥 **Health Insurance Card** (issued by the government)
12. 📄 **MNREGA Job Card**

**Important Tips:**
- Even without an EPIC card, you can vote with **any of the above 11 alternatives**
- Carry your **Voter Information Slip** (distributed before elections) for faster processing
- Know your **polling booth number and location** in advance
- Check the **Voter Helpline App** for your booth details

**What you DON'T need:**
- You do NOT need to carry multiple documents — just **one** valid photo ID
- You do NOT need your voter slip — it's optional but speeds things up

*Be prepared, vote with confidence!* 🗳️`
  },
  {
    keywords: ["model code of conduct", "mcc", "code of conduct", "campaign rules", "election rules"],
    answer: `⚖️ **Model Code of Conduct (MCC)**

The Model Code of Conduct is a set of guidelines issued by the **Election Commission of India (ECI)** that comes into force the moment elections are **announced** and remains until the **results are declared**.

**Key Provisions:**

**1. For Political Parties & Candidates:**
- No appeals to caste or communal feelings for votes
- No use of places of worship for election propaganda
- No bribery, intimidation, or impersonation
- All election meetings must have prior permission from local police
- Campaign must stop **48 hours before polling** (silence period)

**2. For the Ruling Party (Government):**
- Cannot announce new government projects or schemes
- Cannot use government machinery for campaign work
- Ministers cannot combine official visits with election work
- No advertisements at government expense
- No new appointments or transfers to gain political advantage

**3. For Voters:**
- Do not accept money or gifts from candidates
- Report any violations using the **cVIGIL app**
- Maintain peace and order at polling stations

**Enforcement:**
- The ECI has the power to **postpone or cancel** elections in a constituency for MCC violations
- Violations can lead to **FIRs**, deregistration, or criminal prosecution
- Citizens can report violations via the **cVIGIL app** — snap a photo/video and submit

*The MCC ensures a level playing field for all participants in the democratic process.* 🇮🇳`
  },
  {
    keywords: ["nota", "none of the above", "reject", "right to reject"],
    answer: `🚫 **NOTA — None of the Above**

NOTA (None of the Above) is an option available on EVMs that allows voters to **officially reject all candidates** without revealing their identity.

**Key Facts:**
- Introduced by the **Supreme Court of India** in September 2013
- Available in all **Lok Sabha and State Assembly elections**
- NOTA is the **last button** on the Ballot Unit of the EVM
- Its election symbol is a **ballot paper with a cross mark (✗)**

**How to Use NOTA:**
1. Enter the voting compartment
2. On the Ballot Unit, scroll to the **last option** — it says "NOTA"
3. Press the **blue button** next to it
4. Your vote is recorded as "None of the Above"

**Impact of NOTA:**
- NOTA votes are **counted and reported** in the results
- However, even if NOTA gets the **highest votes**, the candidate with the most votes among actual candidates **still wins**
- NOTA serves as a **protest vote** — it sends a strong signal about voter dissatisfaction
- In 2014 Lok Sabha elections, NOTA received over **60 lakh (6 million) votes** nationwide

**Why NOTA Matters:**
- Protects voter secrecy (you don't have to vote for someone you don't support)
- Prevents booth capturing (genuine "no preference" is recorded)
- Encourages political parties to field better candidates
- Exercises democratic right without abstaining

*NOTA is your democratic right to say "not good enough" — use it wisely!* ✊`
  },
  {
    keywords: ["count", "counting", "how votes counted", "result", "tallying", "results declared"],
    answer: `🔢 **How Votes Are Counted in India**

Vote counting is a meticulous, multi-layered process overseen by the **Election Commission of India (ECI)**.

**Timeline:**
- Counting usually begins **3 days after the last phase of polling**
- Starts at **8:00 AM** on counting day
- Results for most constituencies are declared by **evening**

**Step-by-Step Process:**

**1. Pre-Counting (Day Before):**
- EVMs are transported from secure **strongrooms** to counting centers
- Candidates/agents can verify the **seal integrity** of EVMs
- Counting hall is set up with tables for each assembly segment

**2. Postal Ballot Counting (First):**
- Postal ballots (from military, government officials, etc.) are counted **first**
- These are physically opened and counted manually

**3. EVM Counting (Round by Round):**
- EVMs are opened in **rounds** — each round covers 14 EVMs
- The presiding officer presses the **"Result" button** on the Control Unit
- The display shows votes received by **each candidate**
- Results are recorded on a **result sheet (Form 20)**
- Counting agents of all candidates can observe and verify

**4. VVPAT Verification:**
- **5 randomly selected polling stations** per constituency undergo VVPAT paper slip matching
- The VVPAT slips are counted manually and matched with EVM results

**5. Result Declaration:**
- After all rounds, the **Returning Officer** adds up all results
- The candidate with the **highest total votes wins**
- The winner receives a **Certificate of Election**
- Results are uploaded to the **ECI website in real-time**

*The counting process ensures complete transparency and accuracy!* 📊`
  },
  {
    keywords: ["first time", "new voter", "young voter", "18", "tips", "first vote"],
    answer: `🌟 **First-Time Voter Guide — Everything You Need to Know!**

Congratulations on participating in the world's largest democracy! Here's your complete guide:

**Before Election Day:**
1. ✅ **Register** — Apply for Voter ID via NVSP portal (voters.eci.gov.in)
2. 📍 **Find your booth** — Use the Voter Helpline App to locate your polling station
3. 📋 **Get your Voter Slip** — Booth Level Officers distribute these before elections
4. 📰 **Research candidates** — Check the affidavits filed by candidates (on ECI website)

**On Election Day:**
1. 🕐 Reach your polling station (polling hours: usually 7 AM to 6 PM)
2. 🪪 Carry a **valid photo ID** (EPIC card, Aadhaar, Passport, etc.)
3. 🧑‍💼 Get in line — separate queues for men and women
4. ✋ Your **left index finger** will be inked
5. 🗳️ Enter the booth, press the button for your candidate
6. ✅ **Verify** your vote on the VVPAT slip
7. 🚶 Exit quietly

**Your Rights as a Voter:**
- **Secrecy** — No one can ask you who you voted for
- **Accessibility** — Ramps, braille, wheelchairs provided for PwD voters
- **Queue priority** — Senior citizens (65+), pregnant women, and PwD voters get priority
- **Paid leave** — Employers must give you paid time off to vote

*Your first vote is a milestone — cherish it and make an informed choice!* 🎉`
  },
  {
    keywords: ["election commission", "eci", "role", "powers", "what does election commission do"],
    answer: `🏛️ **Election Commission of India (ECI)**

The ECI is an **autonomous constitutional authority** responsible for administering elections in India.

**Constitutional Basis:**
- Established under **Article 324** of the Indian Constitution
- Came into being on **25th January 1950** (one day before Republic Day)

**Composition:**
- **Chief Election Commissioner (CEC)** — Head of the ECI
- **Two Election Commissioners** — Equal decision-making power
- All appointed by the **President of India**
- Enjoy same security of tenure as a Supreme Court Judge

**Key Powers & Functions:**
1. 📅 **Announce and schedule** all elections (Lok Sabha, Rajya Sabha, State Assemblies, President, Vice President)
2. ✅ **Register and monitor** political parties
3. ⚖️ **Enforce the Model Code of Conduct**
4. 🗳️ **Manage EVMs and VVPAT machines**
5. 📋 **Prepare and maintain voter rolls**
6. 🚫 **Disqualify candidates** for electoral malpractice
7. 📊 **Supervise the counting** process
8. 🛑 **Postpone or cancel** elections if necessary

**Landmark Initiatives:**
- EPIC (Voter ID Cards) — Introduced in 1993
- EVMs — Nationwide use since 2004
- VVPAT — Mandatory in all elections since 2019
- cVIGIL App — Citizen vigilance tool
- NOTA — Implemented after Supreme Court directive

*The ECI is the guardian of Indian democracy — ensuring free, fair, and transparent elections!* 🇮🇳`
  },
  {
    keywords: ["nri", "overseas", "abroad", "foreign", "non-resident", "nri voting"],
    answer: `🌍 **NRI Voting in India**

Non-Resident Indians (NRIs) have the **right to vote** in Indian elections! Here's how:

**Eligibility:**
- Must be an **Indian citizen** (not OCI or PIO card holder)
- Must hold a **valid Indian passport**
- Must have resided in India and been registered in a constituency
- Absence from India should be due to **employment, education, or other reasons**

**Registration Process:**
1. Fill **Form 6A** on the NVSP portal (voters.eci.gov.in)
2. Upload your **Indian passport** as ID proof
3. Your name will be added to the electoral roll of your **original constituency**

**How NRIs Vote:**
- Currently, NRIs must **physically travel** to their constituency to vote
- They must show their **original Indian passport** at the polling station
- **Proxy voting** has been proposed (Representation of the People Amendment Bill) but is not yet implemented

**Recent Developments:**
- The ECI has been exploring **e-postal ballot** options for NRI voters
- Several petitions are before the Supreme Court for **remote voting** facilities
- The government has expressed willingness to enable **technology-based** NRI voting

*Your democratic right doesn't stop at borders — stay connected to Indian democracy!* ✈️🗳️`
  },
  {
    keywords: ["disability", "pwd", "disabled", "wheelchair", "braille", "accessible", "special needs"],
    answer: `♿ **Voting Accessibility for Persons with Disabilities (PwD)**

The Election Commission of India ensures that **every citizen can exercise their right to vote**, regardless of physical or cognitive ability.

**Accessible Facilities at Polling Stations:**
- 🦽 **Wheelchair ramps** at all polling stations
- 🔤 **Braille-enabled EVMs** — ballot units have braille labels for visually impaired voters
- 🧑‍🦯 **Companion assistance** — PwD voters can bring a companion inside the voting booth
- 🚶 **Priority queue** — PwD voters don't need to wait in the regular queue
- 🚗 **Free transport** — Many state election commissions arrange free transport to polling stations
- 📋 **Ground floor booths** — Booths are set up on the ground floor when possible

**Postal Ballot Option:**
- Voters with **40% or more disability** (certified) can apply for a **postal ballot**
- Apply through the Returning Officer of your constituency

**Special Initiatives:**
- **Saksham App** — ECI's accessibility app for PwD voters
- **Sign language interpreters** at select stations
- **Accessible voter awareness** materials in simple language and pictorial formats
- **PwD-friendly voter ID** registration process

*Democracy is incomplete without inclusion — your vote, your right!* 🇮🇳`
  },
  {
    keywords: ["party", "political party", "register party", "national party", "state party", "party registration"],
    answer: `🏛️ **Political Parties in India**

India has a vibrant **multi-party system** with thousands of registered political parties.

**Types of Parties:**
1. **National Parties (Currently 6):** Must have representation in 4+ states and meet vote share criteria
2. **State Parties:** Recognized in specific states based on election performance
3. **Registered Unrecognized Parties:** Registered with ECI but haven't won recognition status

**How Parties Are Registered:**
1. Apply to the **Election Commission of India** under Section 29A of the RP Act, 1951
2. Submit the party **constitution and rules**
3. Provide a list of **100+ members** from each state
4. Pay a **₹10,000 application fee**
5. The party name and symbol must not resemble existing parties

**Benefits of Recognition:**
- **Reserved election symbol** — guaranteed exclusive use
- **Free airtime** on Doordarshan and All India Radio
- **Subsidized land** for party offices
- Access to **electoral rolls** at lower cost

**Election Symbols:**
- National and State parties get **reserved symbols**
- Unrecognized parties get symbols from a **free symbols list**
- Independents also choose from the free list

*Political parties are the backbone of representative democracy!* 🗳️`
  },
  {
    keywords: ["booth", "polling station", "where to vote", "station", "find booth", "polling location"],
    answer: `📍 **Finding Your Polling Station**

Here's how to find your exact polling station:

**Online Methods:**
1. 🌐 **NVSP Portal** — Visit voters.eci.gov.in → "Know Your Polling Booth"
2. 📱 **Voter Helpline App** — Download from Google Play / App Store → Search by EPIC number
3. 📞 **Helpline 1950** — Call the national voter helpline
4. 💬 **SMS Service** — Send "EPIC \<your EPIC number\>" to 1950

**What You'll Find:**
- Polling station **name and address**
- **Booth number** assigned to you
- **Part number and serial number** in the electoral roll
- **Constituency** (Parliamentary and Assembly)

**On Polling Day:**
- Polling hours are typically **7:00 AM to 6:00 PM** (may vary by state)
- Stations are usually set up in **schools, community halls, or government buildings**
- Look for the **ECI flag** and direction signs
- Separate entry for **men and women** in most stations

**Tips:**
- Check your booth **a few days before** the election
- Note down your **serial number** from the voter list for faster processing
- Arrive early to avoid long queues (mornings are usually less crowded)

*Know your booth, plan your visit, and make your vote count!* 🗳️`
  }
];

/**
 * Searches the knowledge base for a relevant answer using fuzzy keyword matching.
 * Uses a scoring system to find the best match.
 * 
 * @param query - The user's question
 * @returns The best matching answer, or null if no good match is found
 */
export function searchKnowledgeBase(query: string): string | null {
  const normalizedQuery = query.toLowerCase().trim();
  
  let bestMatch: KnowledgeEntry | null = null;
  let bestScore = 0;

  for (const entry of KNOWLEDGE_BASE) {
    let score = 0;
    for (const keyword of entry.keywords) {
      if (normalizedQuery.includes(keyword.toLowerCase())) {
        // Longer keyword matches are weighted higher
        score += keyword.length;
      }
    }
    
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }
  
  // Require a minimum match quality (at least one meaningful keyword)
  if (bestScore >= 3 && bestMatch) {
    return bestMatch.answer;
  }
  
  return null;
}
