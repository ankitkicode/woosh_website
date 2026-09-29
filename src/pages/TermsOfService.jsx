import React from 'react';
import { PolicyLayout } from '../components/layout/PolicyLayout';

export const TermsOfService = () => {
  const toc = [
    { id: "intro", label: "1. Introduction and Acceptance" },
    { id: "eligibility", label: "2. Eligibility and Accounts" },
    { id: "services", label: "3. Our Services and Role" },
    { id: "riders", label: "4. Terms for Riders" },
    { id: "captains", label: "5. Terms for Captains" },
    { id: "safety", label: "6. Women-Only Policy, Safety and Code of Conduct" },
    { id: "ip", label: "7. Intellectual Property" },
    { id: "third-party", label: "8. Third-Party Services" },
    { id: "disclaimers", label: "9. Disclaimers" },
    { id: "liability", label: "10. Limitation of Liability" },
    { id: "indemnity", label: "11. Indemnity" },
    { id: "termination", label: "12. Termination" },
    { id: "force-majeure", label: "13. Force Majeure" },
    { id: "law", label: "14. Governing Law and Dispute Resolution" },
    { id: "grievance", label: "15. Grievance Officer and Contact" },
    { id: "changes", label: "16. Changes to These Terms" },
    { id: "general", label: "17. General" }
  ];

  return (
    <PolicyLayout title="Terms of Service" lastUpdated="28 September 2026" toc={toc}>
      
      <div className="
        [&_h2]:text-[1.75rem] [&_h2]:font-bold [&_h2]:text-[#1c1c1c] [&_h2]:tracking-tight [&_h2]:mt-14 [&_h2]:mb-6 [&_h2]:pb-4 [&_h2]:border-b [&_h2]:border-gray-100
        [&_h3]:text-[1.25rem] [&_h3]:font-bold [&_h3]:text-[#1c1c1c] [&_h3]:mt-8 [&_h3]:mb-4
        [&_p]:text-gray-600 [&_p]:text-[15px] [&_p]:leading-[1.8] [&_p]:mb-6
        [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_li]:text-gray-600 [&_li]:text-[15px] [&_li]:leading-[1.8] [&_li]:mb-2
        [&_a]:text-[#EF4F5F] [&_a]:underline
      ">

        <h2 id="intro">1. Introduction and Acceptance</h2>
        <p>
          These Terms of Service ("Terms") govern your use of Woosh, a women-only ride-hailing platform operated by Cinfytech Private Limited, a private limited company incorporated under the Companies Act, 2013, ("Woosh", "we", "us" or "our"). The platform includes the website wooshride.in, our mobile applications and related services (together, the "Platform").
        </p>
        <p>
          By creating an account, accessing or using the Platform, you agree to these Terms and to our Privacy Policy, which forms part of these Terms. If you do not agree, please do not use the Platform. These Terms are an electronic record under the Information Technology Act, 2000 and do not require a physical or digital signature.
        </p>

        <h2 id="eligibility">2. Eligibility and Accounts</h2>
        <ul>
          <li><strong>Women only:</strong> The Platform is available only to women. Both passengers ("Riders") and drivers ("Captains") must be women. We verify gender at sign-up and may re-verify at any time.</li>
          <li><strong>Age:</strong> You must be at least 18 years old and competent to contract under the Indian Contract Act, 1872.</li>
          <li><strong>One account per person:</strong> Your account is personal. You must not share it, transfer it, or let anyone else use it, including to book rides for a man or to drive on your behalf.</li>
          <li><strong>Accurate information:</strong> You must provide true, current and complete information, and keep it updated. Impersonation or false information may lead to immediate suspension and legal action.</li>
          <li><strong>Account security:</strong> You are responsible for all activity under your account. Keep your password and OTPs confidential and inform us immediately at connect@cinfy.co of any unauthorised use.</li>
        </ul>

        <h2 id="services">3. Our Services and Role</h2>
        <ul>
          <li>WooshRide provides a technology platform that connects Riders with Captains for transportation. We operate as an aggregator under the Motor Vehicle Aggregator Guidelines and applicable State rules, and hold the licences required in the States where we operate.</li>
          <li>Captains are independent service providers and not employees or agents of WooshRide, unless expressly agreed in writing. The transportation service is provided by the Captain to the Rider.</li>
          <li>We verify Captains and their vehicles as required by law and take reasonable steps to keep the Platform safe, but we do not guarantee the conduct of any user.</li>
          <li>Availability of rides depends on the number of Captains online, your location, traffic, weather and other factors. We do not guarantee that a ride will always be available.</li>
          <li>We may add, change or discontinue any feature of the Platform, with notice where reasonably possible.</li>
        </ul>

        <h2 id="riders">4. Terms for Riders</h2>
        
        <h3>4.1 Bookings</h3>
        <ul>
          <li>A booking is confirmed when a Captain accepts it on the Platform. The ride starts only after you share your ride PIN/OTP with the Captain.</li>
          <li>Please check the Captain's name, photograph and vehicle number before getting in. Do not board if they do not match, and report it in the app.</li>
          <li>You may carry luggage that fits safely in the vehicle. Children travelling with you are your responsibility. [Male children up to the age of [__] years may travel only when accompanied by a woman Rider.]</li>
        </ul>

        <h3>4.2 Fares and Payments</h3>
        <ul>
          <li>An estimated fare is shown before you book. The final fare may change because of route changes, waiting time, tolls, parking fees, extra stops or other charges shown in the app.</li>
          <li>Fares may vary with demand, within limits set by applicable aggregator guidelines and State fare rules.</li>
          <li>Fares include applicable taxes unless stated otherwise. You can pay by cash, UPI, cards, wallets or other methods shown in the app.</li>
          <li>Online payments are processed by third-party payment partners, and their terms also apply.</li>
        </ul>

        <h3>4.3 Cancellations and Refunds</h3>
        <ul>
          <li>You may cancel a booking at any time. A cancellation fee may apply if you cancel after [] minutes of the Captain accepting, or if you do not arrive at the pickup point within [] minutes of the Captain's arrival.</li>
          <li>If a Captain cancels, or does not arrive, you will not be charged a cancellation fee.</li>
          <li>Refunds for wrong charges will be processed to the original payment method within [7–10] working days after we confirm the claim. Report fare disputes within [7] days of the ride.</li>
        </ul>

        <h3>4.4 Damage and Lost Items</h3>
        <ul>
          <li>You are liable for any damage you cause to the vehicle beyond normal wear, including soiling, and we may charge a reasonable cleaning or repair fee after review.</li>
          <li>We will try to help you recover items left in a vehicle, but we are not responsible for lost items.</li>
        </ul>

        <h2 id="captains">5. Terms for Captains</h2>
        <p>Captains also sign a separate Captain Agreement. If it conflicts with these Terms, the Captain Agreement prevails for matters it covers.</p>
        <ul>
          <li><strong>Onboarding:</strong> You must hold a valid driving licence for the vehicle class, and the vehicle must have a valid registration, insurance, permit, fitness and pollution certificates. You must complete KYC, police verification, a medical check (if required) and WooshRide's induction training.</li>
          <li><strong>Ongoing compliance:</strong> Keep all documents valid and upload renewals before expiry. You must not drive under the influence of alcohol or drugs, while unwell, or beyond permitted driving hours.</li>
          <li><strong>Service standards:</strong> Follow the route shown in the app unless the Rider requests otherwise, follow traffic laws, keep the vehicle clean and safe, and treat Riders with respect.</li>
          <li><strong>No off-app rides:</strong> Do not accept payments or bookings outside the Platform from Riders you meet through it, or ask Riders for their personal contact details.</li>
          <li><strong>Fees and payouts:</strong> WooshRide charges a platform fee or commission as set out in the Captain Agreement. Payouts are made to your registered bank account on the schedule shown in the app, after deducting applicable fees, taxes (including TDS/TCS) and any amounts you owe.</li>
          <li><strong>Insurance:</strong> You must maintain valid vehicle insurance, including third-party cover. WooshRide may also arrange ride-time insurance for Riders and Captains as required by law.</li>
        </ul>

        <h2 id="safety">6. Women-Only Policy, Safety and Code of Conduct</h2>
        
        <h3>6.1 Women-only policy</h3>
        <p>WooshRide is designed as a safe space for women. Any attempt to use the Platform by or for a person who is not eligible, including creating an account with false identity details or letting someone else drive or ride in your place, is a serious breach and will lead to permanent removal and, where appropriate, a report to the police.</p>
        
        <h3>6.2 Safety features</h3>
        <p>Use the SOS button, trip sharing and in-app support in an emergency. In a life-threatening situation, call 112 first. Misuse of SOS or false safety reports may lead to suspension.</p>
        
        <h3>6.3 Prohibited conduct</h3>
        <p>All users must not:</p>
        <ul>
          <li>harass, threaten, abuse, stalk or discriminate against anyone, or behave in a sexually inappropriate manner;</li>
          <li>carry weapons, illegal substances, hazardous goods, or consume alcohol, tobacco or drugs in the vehicle;</li>
          <li>damage the vehicle or Platform, or tamper with GPS, fares or the app;</li>
          <li>create fake bookings, misuse promotions or referral codes, or commit any fraud;</li>
          <li>record, photograph or share images of other users without their consent, except where needed to report a safety incident;</li>
          <li>use the Platform for any unlawful purpose.</li>
        </ul>
        
        <h3>6.4 Ratings, reports and suspension</h3>
        <p>Riders and Captains can rate each other after each ride. We may review low ratings, complaints and safety reports, and may warn, temporarily suspend or permanently deactivate an account, with or without notice, where we reasonably believe these Terms or the law have been breached. Where possible, we will tell you the reason and give you a chance to respond.</p>

        <h2 id="ip">7. Intellectual Property</h2>
        <p>The WooshRide name, logo, app, website, content, software and design belong to Cinfytech Private Limited or its licensors. We grant you a limited, personal, non-exclusive, non-transferable and revocable licence to use the Platform for its intended purpose. You must not copy, modify, reverse-engineer, scrape or commercially exploit any part of it.</p>

        <h2 id="third-party">8. Third-Party Services</h2>
        <p>The Platform uses third-party services such as maps, payment gateways and SMS providers. Their use is subject to their own terms, and we are not responsible for their availability or errors.</p>

        <h2 id="disclaimers">9. Disclaimers</h2>
        <p>The Platform is provided on an "as is" and "as available" basis. To the extent permitted by law, we do not warrant that the Platform will be uninterrupted or error-free, or that estimated times and fares will always be accurate.</p>

        <h2 id="liability">10. Limitation of Liability</h2>
        <p>To the extent permitted by law:</p>
        <ul>
          <li>WooshRide is not liable for indirect, incidental, special or consequential losses, including missed flights, trains, appointments or loss of business;</li>
          <li>WooshRide's total liability for any claim relating to a ride is limited to the fare paid for that ride or ₹[__], whichever is higher;</li>
          <li>nothing in these Terms limits liability that cannot be limited under Indian law, including liability for death or personal injury caused by our negligence, fraud, or rights you have under the Consumer Protection Act, 2019.</li>
        </ul>

        <h2 id="indemnity">11. Indemnity</h2>
        <p>You agree to indemnify and hold harmless Cinfytech Private Limited, its directors, employees and partners against claims, losses and costs arising from your breach of these Terms, your violation of any law or the rights of others, or your misuse of the Platform.</p>

        <h2 id="termination">12. Termination</h2>
        <p>You may close your account at any time from the app or by writing to connect@cinfy.co, after paying any amounts due. We may suspend or terminate your access as described in Section 6.4. Clauses that by their nature should survive termination, including payment obligations, limitation of liability, indemnity and dispute resolution, will continue to apply.</p>

        <h2 id="force-majeure">13. Force Majeure</h2>
        <p>We are not liable for any delay or failure caused by events beyond our reasonable control, including natural disasters, pandemics, strikes, riots, government orders, network failures or bandhs.</p>

        <h2 id="law">14. Governing Law and Dispute Resolution</h2>
        <p>These Terms are governed by the laws of India. You agree to first try to resolve any dispute through our grievance process in Section 15. If it is not resolved within 30 days, it shall be referred to arbitration by a sole arbitrator appointed by mutual agreement of the parties, under the Arbitration and Conciliation Act, 1996. The seat and venue of arbitration shall be [City], and the proceedings shall be in English. Subject to this, courts at [City] shall have exclusive jurisdiction. This does not affect your right to approach a Consumer Commission under the Consumer Protection Act, 2019.</p>

        <h2 id="grievance">15. Grievance Officer and Contact</h2>
        <p>For any complaint, question or feedback about the Platform or these Terms, please contact:</p>
        <p>
          <strong>Grievance Officer Name:</strong> [Name of Grievance Officer]<br/>
          <strong>Cinfytech Private Limited Address:</strong> [Registered office address]<br/>
          <strong>Email:</strong> connect@cinfy.co
        </p>
        <p>We will acknowledge complaints within 24 hours and aim to resolve them within 15 days, in line with the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 and the Consumer Protection (E-Commerce) Rules, 2020.</p>

        <h2 id="changes">16. Changes to These Terms</h2>
        <p>We may update these Terms from time to time. The updated version will be posted on wooshride.in with a revised effective date, and we will notify you of material changes through the app, SMS or email. Continuing to use the Platform after changes take effect means you accept them.</p>

        <h2 id="general">17. General</h2>
        <ul>
          <li><strong>Entire agreement:</strong> These Terms, the Privacy Policy and (for Captains) the Captain Agreement form the entire agreement between you and WooshRide about the Platform.</li>
          <li><strong>Severability:</strong> If any clause is found invalid, the rest remain in force.</li>
          <li><strong>No waiver:</strong> Our failure to enforce any right is not a waiver of it.</li>
          <li><strong>Assignment:</strong> You may not transfer your rights under these Terms. We may assign them to an affiliate or successor.</li>
          <li><strong>Language:</strong> If these Terms are translated, the English version prevails.</li>
        </ul>

      </div>
    </PolicyLayout>
  );
};
