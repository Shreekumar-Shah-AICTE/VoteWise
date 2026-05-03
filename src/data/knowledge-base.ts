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
 * Conversational response patterns for meta-questions, greetings, etc.
 * These handle "Who are you?", "Hello", "Thanks" and similar non-election queries.
 */
export interface ConversationalPattern {
  /** Patterns that trigger this response (checked via includes or regex) */
  triggers: string[];
  /** The response to give */
  response: string;
}

export const CONVERSATIONAL_PATTERNS: ConversationalPattern[] = [
  {
    triggers: ["who are you", "what are you", "your name", "tell me about yourself", "introduce yourself"],
    response: `🤖 **I'm VoteWise AI — your election education assistant!**

I was built to help Indian citizens understand the democratic election process — from voter registration to vote counting.

Here's what I can help you with:
- 🗳️ **Voter registration** and eligibility
- 🖥️ **How EVMs and VVPAT work**
- 📋 **Polling day procedures** and documents
- ⚖️ **Election rules** and the Model Code of Conduct
- 🏛️ **Election Commission** powers and functions
- 🌍 **NRI voting** rights
- ♿ **Accessibility** for voters with disabilities
- 🔢 **Vote counting** process
- And much more!

I'm powered by a comprehensive election knowledge base, designed to be **non-partisan, factual, and accessible**. Ask me anything about Indian elections! 🇮🇳`
  },
  {
    triggers: ["hello", "hi ", "hey", "good morning", "good afternoon", "good evening", "namaste", "namaskar"],
    response: `🙏 **Namaste! Welcome to VoteWise!**

I'm your AI election education assistant. I'm here to help you understand India's democratic election process.

You can ask me questions like:
- "How do I register as a voter?"
- "What is an EVM and how does it work?"
- "What documents do I need on polling day?"
- "Tips for first-time voters"

Or explore any topic about Indian elections — I'm here to help! 🗳️`
  },
  {
    triggers: ["thank", "thanks", "dhanyavaad", "shukriya", "appreciated"],
    response: `🙏 **You're welcome!** Happy to help you learn about India's election process.

Remember — an informed voter is an empowered voter! If you have more questions, don't hesitate to ask.

*Every vote counts. Every voter matters.* 🇮🇳🗳️`
  },
  {
    triggers: ["help", "what can you do", "what do you do", "how to use", "guide me"],
    response: `📚 **Here's everything I can help you with:**

**🗳️ Voting Basics:**
- How to register as a voter
- Required documents for polling day
- Tips for first-time voters

**🖥️ Technology:**
- How EVMs (Electronic Voting Machines) work
- VVPAT verification process

**⚖️ Rules & Process:**
- Model Code of Conduct
- The 7-step election process
- Vote counting procedures
- NOTA (None of the Above)

**🏛️ Institutions:**
- Election Commission of India — powers and role
- Political party registration

**🌍 Special Voters:**
- NRI voting rights
- Accessibility for persons with disabilities

**📍 Find Your Booth:**
- How to locate your polling station

Just type your question naturally — I'll find the best answer for you! 🎯`
  },
  {
    triggers: ["bye", "goodbye", "see you", "exit", "quit"],
    response: `👋 **Goodbye! Thanks for using VoteWise!**

Remember to:
✅ Register to vote if you haven't already
✅ Check your polling booth before election day
✅ Carry a valid photo ID on polling day

*Democracy works best when every citizen participates. See you at the polls!* 🇮🇳🗳️`
  },
  {
    triggers: ["votewise", "this app", "this platform", "this website", "who built", "who made", "who created"],
    response: `🏆 **About VoteWise**

VoteWise is an **AI-powered election education platform** built to make India's democratic process accessible to every citizen.

**Key Features:**
🤖 **AI Election Assistant** — Ask any question about elections (that's me!)
📋 **Election Timeline** — Interactive 7-step process guide
🧠 **Election Quiz** — Test your knowledge across 5 categories
🗳️ **Mock EVM Simulator** — Practice voting before your first real vote
📍 **Polling Station Finder** — Locate your nearest booth via Google Maps
✅ **Voter Readiness Check** — Personalized assessment

**Built with:**
Google Gemini AI · Google Maps · Google Cloud Translation · Google Analytics · Google Cloud Run

VoteWise was created by **Shreekumar Shah** for the PromptWars Virtual Challenge (Google for Developers × Hack2Skill). 🇮🇳`
  },
];

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
  },
  {
    keywords: ["lok sabha", "rajya sabha", "parliament", "lower house", "upper house", "mp", "member of parliament"],
    answer: `🏛️ **Lok Sabha vs Rajya Sabha — India's Two Houses of Parliament**

India's Parliament consists of **two houses**:

**Lok Sabha (House of the People):**
- **545 members** (543 elected + 2 nominated Anglo-Indians)
- Members elected by **direct vote** of citizens
- Term: **5 years** (unless dissolved earlier)
- Presided over by the **Speaker**
- Has greater power over **money bills**
- The party/coalition with majority forms the **government**

**Rajya Sabha (Council of States):**
- **245 members** (233 elected + 12 nominated by President)
- Members elected by **state legislators** (MLAs), not directly by citizens
- **Permanent body** — never fully dissolved
- One-third members retire every **2 years**
- Each member serves a **6-year term**
- Presided over by the **Vice President of India**

**Key Differences:**
| Feature | Lok Sabha | Rajya Sabha |
|---------|-----------|-------------|
| Election | Direct by citizens | By state MLAs |
| Term | 5 years | 6 years |
| Money Bills | Can introduce | Can only suggest |
| No-Confidence Motion | Yes | No |

*Both houses work together to make laws for the nation!* 🇮🇳`
  },
  {
    keywords: ["ink", "indelible ink", "finger", "mark", "finger ink", "voting ink"],
    answer: `✋ **Indelible Ink — The Mark of Democracy**

The purple/black ink applied to voters' fingers is one of the most iconic symbols of Indian elections!

**Key Facts:**
- Made by **Mysore Paints and Varnish Limited (MPVL)** — the sole authorized manufacturer
- Contains **silver nitrate** which bonds with skin cells
- Applied to the **left index finger** (nail bed and cuticle)
- Stays visible for **2-4 weeks**

**Why It's Used:**
- **Prevents repeat voting** — no one can vote twice
- Acts as a **visual deterrent** against fraud
- Easy to verify at polling stations

**Fun Facts:**
- India uses about **26 lakh (2.6 million) vials** of ink per general election
- MPVL has been supplying ink since **1962**
- The ink is exported to **25+ countries** for their elections
- Even in the 2024 Lok Sabha elections, this simple technology remains irreplaceable

*That ink mark on your finger? Wear it with pride — it's proof you participated in the world's largest democracy!* 🗳️✋`
  },
  {
    keywords: ["phase", "phases", "multiple phases", "why phases", "schedule", "election dates", "staggered"],
    answer: `📅 **Why Are Indian Elections Held in Multiple Phases?**

Unlike most countries, India conducts elections in **multiple phases** spread over several weeks.

**Reasons for Phased Voting:**

1. **Security forces deployment** — India has 1 million+ polling stations. Central Armed Police Forces (CAPF) need to be redeployed between phases
2. **Free and fair elections** — Security presence ensures no booth capturing or violence
3. **Logistics** — Moving EVMs, VVPAT machines, and officials across a vast country takes time
4. **Geography** — From Himalayan villages to remote islands, reaching every voter needs planning
5. **Weather** — Avoiding extreme heat, monsoon, or snow in different regions

**Scale of Indian Elections (2024):**
- **7 phases** over 44 days
- **969 million** eligible voters
- **1.05 million** polling stations
- **5.5 million** EVMs deployed
- **15 million** election officials

**How Phases Work:**
- Each constituency votes on **one specific date**
- Results for ALL constituencies are announced on the **same day**
- This prevents early results from influencing later voters

*Indian elections are the world's largest logistical operation — bigger than most military deployments!* 🇮🇳`
  },
  {
    keywords: ["cvigil", "complaint", "report", "violation", "malpractice", "corrupt"],
    answer: `📱 **cVIGIL — Report Election Violations**

cVIGIL (Citizen Vigilance) is a **mobile app by the Election Commission of India** that lets citizens report election violations in real-time.

**What You Can Report:**
- 💰 **Cash distribution** or voter bribery
- 🍺 **Liquor distribution** during dry days
- 📢 **Loudspeaker misuse** during silence period
- 🚫 **Defacement** of public property with campaign materials
- ⚠️ **Intimidation** or threats to voters
- 🚗 **Misuse** of government vehicles for campaigns

**How It Works:**
1. 📥 Download **cVIGIL** from Play Store / App Store
2. 📸 Capture a **photo or video** of the violation
3. 📍 The app automatically tags your **GPS location**
4. 📤 Submit — your report reaches the **Flying Squad** within minutes
5. 📋 Track the status with your **unique complaint ID**

**Key Features:**
- 🔒 **Anonymous reporting** — your identity is protected
- ⏱️ **100-minute resolution** target for field units
- 📊 Live dashboard for election officers
- Works **only during election period** in your constituency

*Be a vigilant citizen — if you see something wrong, report it!* 🛡️`
  },
  {
    keywords: ["government formation", "who becomes pm", "prime minister", "coalition", "majority", "form government", "swearing in"],
    answer: `🏛️ **Government Formation After Elections**

After election results are declared, here's how the government is formed:

**Step-by-Step Process:**

**1. Results Declaration:**
- The Election Commission declares results constituency by constituency
- A party/coalition needs **272+ seats** (simple majority out of 543) to form the government

**2. Single Party Majority:**
- If one party wins 272+ seats, its leader is invited by the **President** to form the government
- The leader becomes the **Prime Minister**

**3. Coalition Government:**
- If no single party gets 272+, the **largest party/pre-election coalition** gets first chance
- They must prove majority on the **floor of the House** (trust vote)
- Coalition partners sign a **Common Minimum Programme**

**4. Swearing-In Ceremony:**
- The PM and Council of Ministers take oath at **Rashtrapati Bhavan**
- Administered by the **President of India**
- The PM then allocates **ministerial portfolios**

**5. Floor Test:**
- The new government must prove majority in Lok Sabha
- Done through a **trust vote** — all MPs vote for or against
- If the government fails, the opposition may get a chance

**Key Roles:**
- **President** — Invites the leader to form government
- **Prime Minister** — Head of government, chairs the Cabinet
- **Speaker** — Elected to preside over Lok Sabha proceedings

*The transfer of power in India is always peaceful and constitutional!* 🇮🇳`
  },
  {
    keywords: ["vvpat", "paper trail", "paper slip", "verify vote", "verification"],
    answer: `📄 **VVPAT — Voter Verifiable Paper Audit Trail**

VVPAT is a **transparency device** attached to EVMs that lets voters verify their vote was recorded correctly.

**How VVPAT Works:**
1. You press the **blue button** for your chosen candidate on the EVM
2. The VVPAT machine prints a **paper slip** showing:
   - Candidate's **name**
   - Party **symbol**
   - Serial number
3. The slip is displayed behind a **transparent window** for **7 seconds**
4. You verify your vote was recorded correctly
5. The slip automatically drops into a **sealed box**

**Key Facts:**
- Made **mandatory in all elections** by the Supreme Court in 2019
- Manufactured by **BEL and ECIL** (same as EVMs)
- Each VVPAT machine costs approximately **₹17,000**
- **5 VVPAT machines per constituency** are randomly selected for paper trail verification during counting

**Why VVPAT Matters:**
- Provides a **physical paper backup** of electronic votes
- Allows **independent verification** that EVMs are working correctly
- Builds **public trust** in the electronic voting system
- Any mismatch between EVM count and VVPAT count triggers investigation

*VVPAT ensures your vote goes exactly where you intended — transparency guaranteed!* ✅`
  }
];

/**
 * Checks if the query matches a conversational pattern (greetings, identity, etc.)
 *
 * @param query - The user's message
 * @returns A conversational response, or null if no pattern matches
 */
export function matchConversationalPattern(query: string): string | null {
  const normalizedQuery = query.toLowerCase().trim();

  for (const pattern of CONVERSATIONAL_PATTERNS) {
    for (const trigger of pattern.triggers) {
      if (normalizedQuery.includes(trigger.toLowerCase())) {
        return pattern.response;
      }
    }
  }

  return null;
}

/**
 * Searches the knowledge base for a relevant answer using fuzzy keyword matching.
 * Uses a scoring system to find the best match.
 * 
 * @param query - The user's question
 * @returns The best matching answer, or null if no good match is found
 */
export function searchKnowledgeBase(query: string): string | null {
  const normalizedQuery = query.toLowerCase().trim();
  
  // Step 1: Check conversational patterns first
  const conversationalMatch = matchConversationalPattern(normalizedQuery);
  if (conversationalMatch) {
    return conversationalMatch;
  }

  // Step 2: Search the election knowledge base
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

/**
 * Gets a smart contextual fallback response based on the user's query.
 * Instead of showing the same generic message, it analyzes the query and suggests
 * the most relevant topics.
 *
 * @param query - The user's question
 * @returns A helpful, context-aware fallback response
 */
export function getSmartFallback(query: string): string {
  const normalizedQuery = query.toLowerCase();

  // Detect broad topic categories and suggest relevant questions
  if (normalizedQuery.includes("vote") || normalizedQuery.includes("ballot") || normalizedQuery.includes("election")) {
    return `Great question about elections! While I don't have an exact answer for that, here are some related topics I can help with:

🗳️ **"How do I register as a voter?"** — Complete registration guide
🖥️ **"What is an EVM?"** — How voting machines work
📄 **"What is VVPAT?"** — Paper trail verification
🚫 **"What is NOTA?"** — Your right to reject all candidates
📅 **"Why are elections held in phases?"** — India's unique multi-phase system
🏛️ **"How is the government formed?"** — Post-election process

Try one of these, or rephrase your question and I'll do my best! 🇮🇳`;
  }

  if (normalizedQuery.includes("law") || normalizedQuery.includes("rule") || normalizedQuery.includes("legal") || normalizedQuery.includes("constitution") || normalizedQuery.includes("right")) {
    return `That sounds like a question about election laws and rights! Here are some topics I can help with:

⚖️ **"Explain the Model Code of Conduct"** — Rules for parties and candidates
🏛️ **"What does the Election Commission do?"** — Constitutional powers
🏛️ **"Lok Sabha vs Rajya Sabha"** — How Parliament works
📱 **"How to report election violations?"** — Using the cVIGIL app
♿ **"Voting rights for persons with disabilities"** — Accessibility provisions

Try asking one of these! 🇮🇳`;
  }

  if (normalizedQuery.includes("how") || normalizedQuery.includes("what") || normalizedQuery.includes("why") || normalizedQuery.includes("where") || normalizedQuery.includes("when")) {
    return `I'd love to help! I specialize in **Indian election education**. Here are the topics I know best:

**Getting Started:**
🗳️ "How do I register as a voter?"
🌟 "Tips for first-time voters"
📋 "What documents do I need on polling day?"

**Understanding the Process:**
🖥️ "How does an EVM work?"
🔢 "How are votes counted?"
📅 "Why are elections in phases?"
🏛️ "How is the government formed?"

**Your Rights:**
🚫 "What is NOTA?"
🌍 "How can NRIs vote?"
♿ "Accessible voting for PwD"
📱 "How to report violations (cVIGIL)?"

Pick any topic above, or ask me something related to Indian elections! 🎯`;
  }

  // Default fallback — still helpful but shorter than before
  return `I'm VoteWise AI — I specialize in **Indian election education**! 🗳️

I can answer questions about voter registration, EVMs, polling day procedures, NOTA, election counting, the Election Commission, NRI voting, and much more.

**Try asking:**
• "How do I register as a voter?"
• "What is an EVM and how does it work?"
• "Tips for first-time voters"
• "How is the government formed after elections?"

Ask me anything about Indian elections! 🇮🇳`;
}
