import React from 'react';
import { PolicyLayout } from '../components/layout/PolicyLayout';

export const PrivacyPolicy = () => {
  const toc = [
    { id: "intro", label: "1. Introduction" },
    { id: "definitions", label: "2. Definitions" },
    { id: "data-collection", label: "3. Personal Data We Collect" },
    { id: "data-usage", label: "4. How We Use Your Personal Data" },
    { id: "safety-features", label: "5. Women-Only Verification and Safety Features" },
    { id: "sharing", label: "6. Sharing and Disclosure" },
    { id: "storage", label: "7. Data Storage and Security" },
    { id: "retention", label: "8. Data Retention" },
    { id: "rights", label: "9. Your Rights" },
    { id: "children", label: "10. Children's Data" },
    { id: "cookies", label: "11. Cookies and Similar Technologies" },
    { id: "third-party", label: "12. Third-Party Links and Services" },
    { id: "marketing", label: "13. Marketing Communications" },
    { id: "breach", label: "14. Personal Data Breach" },
    { id: "changes", label: "15. Changes to This Policy" },
    { id: "contact", label: "16. Grievance Officer and Contact" },
    { id: "law", label: "17. Governing Law" }
  ];

  return (
    <PolicyLayout title="Privacy Policy" lastUpdated="28 September 2026" toc={toc}>
      
      <div className="
        [&_h2]:text-[1.75rem] [&_h2]:font-bold [&_h2]:text-[#1c1c1c] [&_h2]:tracking-tight [&_h2]:mt-14 [&_h2]:mb-6 [&_h2]:pb-4 [&_h2]:border-b [&_h2]:border-gray-100
        [&_h3]:text-[1.35rem] [&_h3]:font-bold [&_h3]:text-[#1c1c1c] [&_h3]:mt-8 [&_h3]:mb-4
        [&_p]:text-gray-600 [&_p]:text-[1.1rem] [&_p]:leading-[1.8] [&_p]:mb-6
        [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_li]:text-gray-600 [&_li]:text-[1.1rem] [&_li]:leading-[1.8] [&_li]:mb-2
        [&_a]:text-[#EF4F5F] [&_a]:underline
      ">

        <h2 id="intro">1. Introduction</h2>
        <p>
          Woosh("WooshRide", "we", "us" or "our") is a women-only ride-hailing platform operated by Cinfytech Private Limited, a private limited company incorporated under the Companies Act, 2013, Woosh connects women passengers ("Riders") with women drivers ("Captains") through our website wooshride.in, our mobile applications and related services (together, the "Platform").
        </p>
        <p>
          We respect your privacy. This Privacy Policy explains what personal data we collect, why we collect it, how we use, share, store and protect it, and the rights you have over it.
        </p>
        <p>This Policy is published in accordance with:</p>
        <ul>
          <li>the Digital Personal Data Protection Act, 2023 ("DPDP Act") and the Digital Personal Data Protection Rules, 2025;</li>
          <li>the Information Technology Act, 2000 and the rules made under it, including the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 and the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, to the extent applicable;</li>
          <li>the Motor Vehicle Aggregator Guidelines issued by the Ministry of Road Transport and Highways, and any applicable State aggregator rules.</li>
        </ul>
        <p>
          By registering on or using the Platform, you confirm that you have read and understood this Policy. Where we rely on your consent, we will ask for it separately through a clear notice, and you may withdraw it at any time as described in Section 9.
        </p>

        <h2 id="definitions">2. Definitions</h2>
        <ul>
          <li><strong>Personal data</strong> means any data about an individual who is identifiable by or in relation to such data, as defined in the DPDP Act.</li>
          <li><strong>Data Principal or you</strong> means the individual to whom the personal data relates, including Riders, Captains, emergency contacts and visitors to the Platform.</li>
          <li><strong>Data Fiduciary</strong> means Cinfytech Private Limited, which determines the purpose and means of processing your personal data.</li>
          <li><strong>Data Processor</strong> means any third party that processes personal data on our behalf, such as cloud hosting, payment, SMS or verification service providers.</li>
          <li><strong>Rider</strong> means a woman who books or takes a ride through the Platform.</li>
          <li><strong>Captain</strong> means a woman driver who is onboarded on the Platform to provide rides.</li>
          <li><strong>Ride</strong> means a trip booked, accepted, in progress, completed or cancelled through the Platform.</li>
        </ul>

        <h2 id="data-collection">3. Personal Data We Collect</h2>
        <p>We collect only the personal data that is necessary to provide a safe, women-only ride service.</p>
        
        <h3>3.1 From Riders</h3>
        <ul>
          <li><strong>Account data:</strong> name, mobile number, email address, profile photograph, gender, date of birth or age confirmation, and preferred language.</li>
          <li><strong>Verification data:</strong> information used to confirm that the account holder is a woman, such as a selfie or live photo check and, where required, a government-issued identity document. We do not ask for your Aadhaar number unless permitted by law; where Aadhaar is used, it is only through offline verification or masked Aadhaar with your consent.</li>
          <li><strong>Emergency contacts:</strong> names and mobile numbers of trusted contacts you choose to add. Please add a person only after informing her or him.</li>
          <li><strong>Ride data:</strong> pickup and drop locations, route, ride date and time, fare, ratings, feedback and cancellation history.</li>
          <li><strong>Payment data:</strong> payment method, UPI ID or transaction reference, and wallet balance. Full card details are handled by our PCI-DSS compliant payment partners and are not stored by us.</li>
        </ul>

        <h3>3.2 From Captains</h3>
        <ul>
          <li><strong>Identity and KYC data:</strong> name, photograph, gender, date of birth, address, government-issued identity proof, and PAN.</li>
          <li><strong>Driving and vehicle data:</strong> driving licence, vehicle registration certificate, insurance, permit, fitness and pollution certificates, and vehicle photographs.</li>
          <li><strong>Background verification data:</strong> police verification certificate and results of background checks carried out by us or our authorised verification partners, as required under applicable aggregator guidelines.</li>
          <li><strong>Financial data:</strong> bank account details, UPI ID and GST details (if applicable) for payouts and tax compliance.</li>
          <li><strong>Training and performance data:</strong> training records, ratings, complaints, trip acceptance and safety incidents.</li>
        </ul>

        <h3>3.3 Collected automatically from all users</h3>
        <ul>
          <li><strong>Location data:</strong> precise GPS location of Riders when the app is open or a ride is booked, and of Captains while they are online or on a ride. You can control location permission in your device settings, but the service cannot work without it.</li>
          <li><strong>Device and usage data:</strong> device model, operating system, app version, IP address, device identifiers, crash logs and how you interact with the Platform.</li>
          <li><strong>Communication data:</strong> in-app chats, masked calls between Riders and Captains, and messages or calls with our support team, which may be recorded for safety, quality and dispute resolution.</li>
          <li><strong>Cookies and similar technologies:</strong> as described in Section 11.</li>
        </ul>

        <h3>3.4 From third parties</h3>
        <p>We may receive data from verification agencies, government databases (such as Vahan and Sarathi) for licence and vehicle checks, payment partners, referral programmes and corporate or institutional partners who book rides on your behalf.</p>

        <h2 id="data-usage">4. How We Use Your Personal Data</h2>
        <p>We process personal data only for the purposes below, on the basis of your consent or a legitimate use permitted under Section 7 of the DPDP Act.</p>
        
        {/* Purpose Table */}
        <div className="overflow-x-auto my-10 rounded-xl border border-gray-100 shadow-sm">
          <table className="min-w-full text-left text-[15px] border-collapse bg-white">
            <thead className="bg-[#FAFAFA]">
              <tr className="border-b border-gray-200">
                <th className="py-4 px-6 font-bold text-[#1c1c1c] w-1/4">Purpose</th>
                <th className="py-4 px-6 font-bold text-[#1c1c1c] w-1/2">Examples</th>
                <th className="py-4 px-6 font-bold text-[#1c1c1c] w-1/4">Basis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6 font-medium text-gray-800">Providing rides</td>
                <td className="py-4 px-6 text-gray-600">Creating your account, matching Riders with nearby Captains, navigation, fare calculation, trip receipts</td>
                <td className="py-4 px-6 text-gray-600">Consent</td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6 font-medium text-gray-800">Women-only verification</td>
                <td className="py-4 px-6 text-gray-600">Confirming that every Rider and Captain is a woman before access is granted</td>
                <td className="py-4 px-6 text-gray-600">Consent</td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6 font-medium text-gray-800">Safety and security</td>
                <td className="py-4 px-6 text-gray-600">Live tracking, SOS, trip sharing, route deviation alerts, investigating incidents, preventing fraud and misuse</td>
                <td className="py-4 px-6 text-gray-600">Consent; legitimate uses, including responding to emergencies and threats to life or safety</td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6 font-medium text-gray-800">Captain onboarding</td>
                <td className="py-4 px-6 text-gray-600">KYC, licence and vehicle checks, police verification, training, payouts</td>
                <td className="py-4 px-6 text-gray-600">Consent; compliance with law</td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6 font-medium text-gray-800">Payments</td>
                <td className="py-4 px-6 text-gray-600">Collecting fares, refunds, Captain payouts, invoicing, tax compliance</td>
                <td className="py-4 px-6 text-gray-600">Consent; compliance with law</td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6 font-medium text-gray-800">Customer support</td>
                <td className="py-4 px-6 text-gray-600">Resolving complaints, lost items, disputes and grievances</td>
                <td className="py-4 px-6 text-gray-600">Consent</td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6 font-medium text-gray-800">Service improvement</td>
                <td className="py-4 px-6 text-gray-600">Analytics, app performance, pricing and demand planning, using aggregated or de-identified data where possible</td>
                <td className="py-4 px-6 text-gray-600">Consent</td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6 font-medium text-gray-800">Communication</td>
                <td className="py-4 px-6 text-gray-600">Ride updates, OTPs, service and policy notices</td>
                <td className="py-4 px-6 text-gray-600">Consent</td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6 font-medium text-gray-800">Marketing</td>
                <td className="py-4 px-6 text-gray-600">Offers, referral rewards and newsletters</td>
                <td className="py-4 px-6 text-gray-600">Separate, optional consent</td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6 font-medium text-gray-800">Legal obligations</td>
                <td className="py-4 px-6 text-gray-600">Responding to lawful requests from courts, police and government authorities; maintaining records required by law</td>
                <td className="py-4 px-6 text-gray-600">Legitimate use; compliance with law</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>We do not sell your personal data. We do not use your personal data for purposes that are not compatible with the ones listed above without informing you and, where needed, seeking fresh consent.</p>

        <h2 id="safety-features">5. Women-Only Verification and Safety Features</h2>
        <p>Woosh Ride exists to give women a safe way to travel. Some of our processing is specific to that purpose.</p>
        <ul>
          <li><strong>Gender verification:</strong> To keep the Platform women-only, we verify the gender of every Rider and Captain at sign-up and may re-verify from time to time or when a concern is reported. Verification data is used only for this purpose and for safety investigations, and is accessible only to authorised personnel.</li>
          <li><strong>Live ride tracking:</strong> Rides are tracked in real time from pickup to drop, and our safety team may monitor rides for route deviations, long unexpected stops or other risk signals.</li>
          <li><strong>SOS button:</strong> When you press SOS, we share your name, live location, ride details and Captain or Rider details with our safety team, your emergency contacts and, where required, the police or the emergency response system (112).</li>
          <li><strong>Trip sharing:</strong> You can share your live ride status with contacts of your choice. They will see your location, the vehicle details and the Captain's first name for that ride only.</li>
          <li><strong>Masked contact details:</strong> Riders and Captains communicate through in-app chat or masked calling, so neither sees the other's real phone number.</li>
          <li><strong>Ride PIN/OTP:</strong> A ride starts only after the Rider shares a one-time PIN with the Captain.</li>
          <li><strong>In-vehicle recording (if enabled):</strong> If audio or video recording is enabled for safety, we will tell you clearly before the ride, store recordings in encrypted form, and access them only when a safety incident or complaint is reported or when required by law.</li>
        </ul>
        <p>If we find that an account is being used by someone who is not a woman, or is being used to harm others, we may suspend it and retain relevant data to investigate and to cooperate with law enforcement.</p>

        <h2 id="sharing">6. Sharing and Disclosure</h2>
        <p>We share personal data only as described below, and only to the extent needed for the stated purpose.</p>
        <ul>
          <li><strong>Between Riders and Captains:</strong> A Rider sees the Captain's first name, photograph, rating, vehicle number and model, and live location. A Captain sees the Rider's first name, pickup and drop points and rating. Phone numbers stay masked.</li>
          <li><strong>Emergency contacts and trip-share recipients:</strong> As described in Section 5, when you use SOS or trip sharing.</li>
          <li><strong>Service providers (Data Processors):</strong> Cloud hosting, maps and navigation, SMS and OTP gateways, payment gateways and banks, KYC and background verification agencies, insurance partners, customer support tools and analytics providers. They act on our instructions under written contracts and must protect your data.</li>
          <li><strong>Law enforcement and government:</strong> Police, courts, the Transport Department and other authorities when required by law, a court order or aggregator licence conditions, or when needed to respond to an emergency or protect someone's safety.</li>
          <li><strong>Corporate partners:</strong> If your employer or institution books rides for you, we share ride details needed for billing and safety with that organisation.</li>
          <li><strong>Business transfers:</strong> In a merger, acquisition, restructuring or sale of assets, personal data may transfer to the successor entity, which will be bound by this Policy or equivalent protections.</li>
        </ul>
        <p>We do not sell or rent personal data, and we do not share it with advertisers for their own marketing.</p>

        <h2 id="storage">7. Data Storage and Security</h2>
        <p>Your personal data is stored on secure servers located in India, in line with the Motor Vehicle Aggregator Guidelines. If any data is processed outside India, it will be only in countries not restricted by the Central Government under the DPDP Act, and with equivalent safeguards.</p>
        <p>We use reasonable security safeguards, including:</p>
        <ul>
          <li>encryption of data in transit (TLS) and at rest;</li>
          <li>role-based access, so staff see only the data their job needs;</li>
          <li>masking of phone numbers and identity documents;</li>
          <li>logging and monitoring of access to personal data;</li>
          <li>regular security reviews and contractual obligations on our Data Processors.</li>
        </ul>
        <p>No system is completely secure. Please keep your password and OTPs confidential and tell us immediately at connect@cinfy.co if you suspect unauthorised use of your account.</p>

        <h2 id="retention">8. Data Retention</h2>
        <p>We keep personal data only as long as needed for the purpose it was collected for, or as required by law.</p>

        {/* Retention Table */}
        <div className="overflow-x-auto my-10 rounded-xl border border-gray-100 shadow-sm">
          <table className="min-w-full text-left text-[15px] border-collapse bg-white">
            <thead className="bg-[#FAFAFA]">
              <tr className="border-b border-gray-200">
                <th className="py-4 px-6 font-bold text-[#1c1c1c] w-1/3">Data</th>
                <th className="py-4 px-6 font-bold text-[#1c1c1c] w-2/3">Typical retention</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6 font-medium text-gray-800">Account and profile data</td>
                <td className="py-4 px-6 text-gray-600">While your account is active; deleted or anonymised after account closure, subject to the rows below</td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6 font-medium text-gray-800">Ride, location and payment records</td>
                <td className="py-4 px-6 text-gray-600">As required under aggregator guidelines, tax and accounting laws (generally up to 8 years for financial records)</td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6 font-medium text-gray-800">Captain KYC and verification records</td>
                <td className="py-4 px-6 text-gray-600">For the period of engagement and thereafter as required by law</td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6 font-medium text-gray-800">Safety incident, SOS and complaint data</td>
                <td className="py-4 px-6 text-gray-600">Until the matter is closed and any legal proceedings or limitation periods end</td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6 font-medium text-gray-800">In-ride recordings (if enabled)</td>
                <td className="py-4 px-6 text-gray-600">[30] days, unless needed for an investigation</td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6 font-medium text-gray-800">Processing logs</td>
                <td className="py-4 px-6 text-gray-600">At least one year, as required under the DPDP Rules</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>If you have not used your account for an extended period, we may notify you and then erase your data, as permitted by the DPDP Rules.</p>

        <h2 id="rights">9. Your Rights</h2>
        <p>As a Data Principal under the DPDP Act, you have the right to:</p>
        <ul>
          <li><strong>Access:</strong> get a summary of the personal data we process about you, the processing activities, and the identities of those we have shared it with.</li>
          <li><strong>Correction and updating:</strong> correct inaccurate or misleading data, complete incomplete data and update your data.</li>
          <li><strong>Erasure:</strong> ask us to delete personal data that is no longer needed, unless we must retain it by law.</li>
          <li><strong>Withdraw consent:</strong> withdraw consent at any time, as easily as you gave it. Withdrawal does not affect processing done before it, and some services (such as booking rides) may no longer be available.</li>
          <li><strong>Grievance redressal:</strong> raise a complaint with our Grievance Officer (Section 16) and receive a response.</li>
          <li><strong>Nominate:</strong> nominate another person to exercise your rights in the event of your death or incapacity.</li>
        </ul>
        <p>To exercise these rights, use the settings in the app or email connect@cinfy.co from your registered email address or mention your registered mobile number. We may verify your identity before acting. We will respond within the time limits set by law, and in any case within 30 days.</p>
        <p>You also have a duty under the DPDP Act to provide accurate information, not to impersonate anyone and not to file false or frivolous complaints.</p>

        <h2 id="children">10. Children's Data</h2>
        <p>The Platform is meant for women aged 18 years and above. We do not knowingly create accounts for, or process the personal data of, anyone under 18. If we learn that an account belongs to a person under 18, we will delete it. Any future service for minors will be offered only with verifiable consent of a parent or lawful guardian, as required by the DPDP Act and Rules.</p>

        <h2 id="cookies">11. Cookies and Similar Technologies</h2>
        <p>Our website uses cookies and similar technologies to keep you signed in, remember your preferences, keep the site secure and understand how it is used. Essential cookies are needed for the site to work. Analytics or marketing cookies are used only with your consent, which you can manage through the cookie banner or your browser settings.</p>

        <h2 id="third-party">12. Third-Party Links and Services</h2>
        <p>The Platform may link to or integrate third-party services such as maps, payment apps or partner websites. Their privacy practices are governed by their own policies, and we encourage you to read them.</p>

        <h2 id="marketing">13. Marketing Communications</h2>
        <p>We send promotional messages only with your consent. You can opt out at any time through the unsubscribe link, the app settings, or by writing to connect@cinfy.co. You will continue to receive essential messages such as OTPs, ride updates and safety alerts.</p>

        <h2 id="breach">14. Personal Data Breach</h2>
        <p>If a personal data breach occurs, we will take immediate steps to contain it, and will inform affected users and the Data Protection Board of India in the manner and within the timelines required under the DPDP Act and Rules, and CERT-In where required under the Information Technology Act, 2000.</p>

        <h2 id="changes">15. Changes to This Policy</h2>
        <p>We may update this Policy to reflect changes in our services or in law. The updated version will be posted on wooshride.in with a revised effective date. For material changes, we will notify you through the app, SMS or email, and seek fresh consent where required.</p>

        <h2 id="contact">16. Grievance Officer and Contact</h2>
        <p>For any question, request or complaint about this Policy or your personal data, please contact:</p>
        <p>
          <strong>Grievance Officer Name:</strong> [Name of Grievance Officer]<br/>
          <strong>Cinfytech Private Limited Address:</strong> [Registered office address]<br/>
          <strong>Email:</strong> connect@cinfy.co
        </p>
        <p>We will acknowledge your complaint within 24 hours and aim to resolve it within 15 days, and in any case within the period required by law. If you are not satisfied with our response, you may file a complaint with the Data Protection Board of India after exhausting our grievance redressal process.</p>

        <h2 id="law">17. Governing Law</h2>
        <p>This Policy is governed by the laws of India. Subject to applicable law, courts at Bhopal, Madhya Pradesh, shall have jurisdiction over any dispute arising from it.</p>

      </div>
    </PolicyLayout>
  );
};
