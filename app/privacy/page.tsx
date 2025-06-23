import Image from "next/image"
import Link from "next/link"
import { Github, Twitter, MessageSquare } from "lucide-react"
import { NetworkMesh } from "@/components/network-mesh"
import { GlitchText } from "@/components/glitch-text"
import { Button } from "@/components/ui/button"
import { HoverGlowButton } from "@/components/hover-glow-button"
import { TerminalOutput } from "@/components/terminal-output"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="border-b border-[#ff0066]/20 backdrop-blur-sm bg-black/50 fixed w-full z-50">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/kusama-logo-canary-white.png"
              alt="Kusama"
              width={60}
              height={15}
              className="opacity-50 hover:opacity-100 transition-opacity duration-300"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-mono tracking-wider">
            <Link href="https://docs.polkadot.com/" className="text-white/80 hover:text-[#ff0066] transition-colors">
              DEVELOPMENT DOCS
            </Link>
            <Link href="https://wiki.polkadot.network/kusama/kusama-getting-started/" className="text-white/80 hover:text-[#ff0066] transition-colors">
              KUSAMA GUIDE
            </Link>

            <div className="flex items-center space-x-4 ml-4">
              <Link href="https://x.com/kusamanetwork" className="text-white/70 hover:text-[#ff0066]">
                <Twitter size={18} />
              </Link>
              <Link href="https://forum.polkadot.network/tag/kusama" className="text-white/70 hover:text-[#ff0066]">
                <MessageSquare size={18} />
              </Link>
              <Link href="https://github.com/paritytech/polkadot-sdk" className="text-white/70 hover:text-[#ff0066]">
                <Github size={18} />
              </Link>
            </div>
          </nav>

          <HoverGlowButton href="https://kusama.subsquare.io/referenda/498" className="hidden md:flex">
            THE NEW VISION
          </HoverGlowButton>

          <button className="md:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </header>




      <main className="flex-1 pt-16">

        <section className="py-24 px-4 bg-gradient-to-b from-black to-[#110011]">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-white/70 mb-6 font-mono leading-relaxed">
PRIVACY POLICY
<br>
Last Updated: July 31, 2024
<br>
Introduction<
<br>
This privacy policy (“Privacy Policy”) details how we (as defined below) handle user information that is gathered, submitted, or maintained by us as a result of visits to the Polkadot website available under https://polkadot.com (the “Website”). It also describes our disclosure policies and provides links to our cookie policy. This Privacy Policy applies to any and all services and products available through the Website, including all blockchain-related services, including, but not limited to, the Polkadot Network, the Kusama Network, and the Thousand Validators program (collectively and individually referred to as the "Services"). If you do not agree with the practices described in this Privacy Policy, you should not access the Website or use the Services. We encourage you to review this Privacy Policy periodically, as we reserve the right to update it from time to time (any such updates will be reflected in this Privacy Policy and accessible through the Website). Your access of the Website and use of the Services constitutes consent to the terms and conditions contained in this Privacy Policy.

<h2>Data Controller</h2>
As operator of the Website, the Data Controller is Distractive Inc., a Delaware corporation, with a registered address of 68 Harrison Ave PMB 20921 #605 Boston, MA 02111 (hereinafter referred to as "Controller", "we", or "us").

Data protection is important to us, and we work to ensure that we adhere to the applicable data protection laws and regulations. This includes privacy requirements where applicable to individuals in the European Union and the member states of EFTA under the General Data Protection Regulation (hereinafter "GDPR"), applicable Federal and State Data Privacy Laws in the United States, and/or other applicable laws and regulations.

This Privacy Policy explains in particular how, for which purposes, and to what extent your Personal Data is collected and processed by us through the Website or any type of Service we provide to you (whenever referring to you, the user of the Website and/or Services, in this Privacy Policy, you will be hereinafter referred to as "User" or "you"). This Privacy Policy also describes how your collected Personal Data can be verified, corrected or deleted. Our Services enable the limited collection of certain Personal Data necessary for the establishment and maintenance of the Services provided through the Website.

As outlined in this Privacy Policy, if you engage with the Website in any manner and/or use any of the Services provided (including any and all blockchain-offerings), we may request and collect certain of your Personal Data directly, or may cause third parties (including, but not limited to, Web3 Foundation) to collect such Personal Data, including, but not limited to the following information: name, e-mail address, social media account information and usage data (e.g. tracking pixels from LinkedIn, Twitter, and YouTube), other usage data related to your use of the Website and Services, and any information captured automatically through cookies (see our Cookie Policy here). Complete details on each type of Personal Data collected are provided in the dedicated sections of this Privacy Policy or by specific explanation displayed to you online prior to the data collection.

The Website contains links to other third party websites. If you follow a link to any of those third party websites, please note that they may have their own privacy policies and that, in any event, we do not accept any responsibility or liability for their policies (or lack thereof) or their processing of any of your Personal Data, or any other information collected by them.

For questions or requests related to the processing of Personal Data by us (such as request for information, deletion, revocation of consent, or objection to processing of any Personal Data), please send correspondence by mail to the address above or by e-mail at privacy@distractive.xyz

Types of Data Collected

Controller respects the privacy of the User and will not collect and process any Personal Data unless they are:
provided voluntarily by the User;
gathered as a result of specific verifications performed by third parties based on the Personal Data provided by the User;
pixels tracked in connection with social media account use (e.g. LinkedIn, Twitter, and YouTube) for purposes of targeted advertisements; and
automatically collected by cookies (in accordance with the Cookie Policy) or other tracking technologies.

We also collect data through Google Analytics, which may include:

Usage data such as page views, time spent on pages, and navigation paths
Technical data such as browser type, device type, and operating system
Geographic data such as country and city (at an aggregate level)
Interaction data such as clicks, scrolls, and user behavior patterns
Referral source data
For further information on additional data collected through any of our blockchain-offerings, please consult Section XI below.

Mode of Processing

Use of Personal Data. Personal Data transmitted by the User to Controller may be used as follows:
to create a user account;
to respond to your inquiries and your correspondence;
for marketing analysis purposes, in particular to better understand the interests of Users and improve the Website and the Services, and to provide Users with the relevant information and advertisements relating to the Services;
to ensure the Website functions correctly, in particular to ensure that content from the Website is presented in the most effective manner for you and for your computer; and
to maintain and improve the Services offered through the Website.

Please consult Section [6] below to get further information on additional use of your Personal Data collected through the Website and/or Services provided through the Website.

Authority to Process Personal Data

The Controller may process Personal Data of Users if any one or more of the following criteria is satisfied:
Users have given their consent for one or more specific purposes or uses of Personal Data. ***Note***: under some jurisdiction, the applicable law permits the Controller to process Personal Data unless and until the User objects to such processing (an "opt-out"), in which case the Controller is not required to (x) obtain prior consent from the User in order to process Personal Data, or (y) rely on any other of the legal bases for authority set forth in this Section. For clarity, however, this does not apply whenever the processing of Personal Data is subject to GDPR;
provision of Personal Data is necessary for the performance of an agreement with the User and/or for any pre-contractual obligations thereof;
processing of Personal Data is necessary for the establishment, exercise or defense of any legal claim or proceeding;
processing of Personal Data is necessary for compliance with any applicable law or regulation to which the Controller is subject;
Processing of Personal Data is related to a task that is carried out in the public interest or in the exercise of any official authority vested in the Controller;
processing is necessary for the commercially reasonable purposes and interests pursued by the Controller or by a third party.

In any case, if reasonably requested by the User, the Controller will communicate the particular basis under which it has the authority to process Personal Data, as applicable, and in particular whether the provision of Personal Data is a statutory or a contractual requirement, or a requirement necessary to enter into a contract.

Methods of Processing Personal Data, Access to Personal Data, and Disclosure to Third Parties

The processing of Personal Data as contemplated under this Privacy Policy is carried out using computers and/or other commercially reasonable information-technology enabled tools, following organizational procedures and modes strictly related to the purposes indicated.

Access to Personal Data is limited to those employees, independent contractors, agents, advisors, and/or third parties assigned with processing tasks and who need to access such Personal Data in connection with the operation of the Website and Services. These employees, independent contractors, agents, advisors, and/or third parties are subject to confidentiality obligations and must comply with applicable data protection/privacy laws and regulations.

Controller does not knowingly sell, transfer or market your Personal Data to third parties who intend to use such Personal Data for their own purposes. However, we may disclose your Personal Data to third parties as reasonably necessary in connection with the operation of the Website and/or performance of the Services (including, by way of illustrative and non-exhaustive example, for administration, sales, marketing, legal, system administration purposes, or for use by technical service providers, mail carriers, hosting providers, IT companies, communications agencies, auditors, or third parties involved in hosting or organizing events or seminars) and, if necessary, as Data Processors by the Controller. Please see Section 14 of this Privacy Policy for a list of third parties that currently process Personal Data on our behalf in connection with the operation of the Website and/or performance of the Services.

Your Personal Data will not be disclosed by us to third parties for purposes than the ones mentioned in this Privacy Policy.

Place of Processing and Export of Data

The data is processed at the Controller’s operating offices in the Commonwealth of Massachusetts, in the United States, and in any other places where the third parties involved in the processing of Personal Data as contemplated hereunder are located. Depending on the User’s location, transfers of Personal Data may involve transferring the User’s Personal Data to a country other than their own.

We reserve the right to transfer, store, use and process your Personal Data, and any other personal information as contemplated in this Privacy Policy, to/by recipients in countries outside of the United States, including those within the European Economic Area ("EEA"), as well as other countries throughout the world. You should note that data privacy, data protection, and data disclosure laws vary from jurisdiction to jurisdiction throughout the world and, therefore, laws and regulations applicable to the places where your information is transferred to or stored, used or processed in, may not provide you with the same level of protection as the laws or regulations specific to the jurisdiction of your place of residency. We endeavor to put in place the legally required safeguards and contractual measures to ensure that recipients of your Personal Data in other jurisdictions undertake to comply with the level of data protection and security prescribed by your applicable local data protection laws and regulations.

Retention of Personal Data

The Controller will retain Personal Data for as long as necessary to deliver the Services described in this Privacy Policy; provided, however, that, upon termination, as long as required by applicable law or regulations (by way of illustrative example, some jurisdictions may have mandatory data retention periods), whichever is longer. Therefore,
Personal Data collected for purposes related to the performance of a contract between the Controller and the User shall be retained until such contract has been fully performed; and
Personal Data collected for the purposes of the Controller’s legitimate interests (including the commercially reasonable operation of the Website and performance of the Services) shall be retained as long as needed to fulfill such purposes.

Please note that we may be permitted to retain your Personal Data for a longer period of time than set forth immediately above if you have given consent to the processing of Personal Data, provided that you have not expressly withdrawn your consent.

Once any such retention period expires, Personal Data will be deleted. Therefore, the right to access, the right to erasure, the right to rectification and the right to data portability cannot be enforced after expiration of the retention period.

Security measures

We take commercially reasonable technical, backup and organizational precautions and security measures to prevent accidental or intentional manipulation, unauthorized access, disclosure, unauthorized destruction, partial or complete loss, misuse or alteration of your Personal Data. Accordingly, we store all Personal Data you provide on secure (password and firewall protected) servers. However, no method of processing, transmission or electronic storage of Personal Data is 100% secure or guaranteed. Therefore, while we strive to protect your information, we cannot guarantee its absolute security.

We strongly encourage you to retain copies of all uploaded information (including your Personal Data) on your own systems.

Yours Rights as a User

You may exercise certain rights regarding your Personal Data processed by the Controller. Your rights depend on the applicable law and regulations of the particular jurisdiction within which you are a resident. In particular, if you are a resident of countries within the EEA or Switzerland, you have the right to do the following (note that residents of countries that are not within the EEA or Switzerland may not be entitled to some or all of the following rights):
Withdraw your consent to the processing of your Personal Data at any time. For clarity, users have the right to withdraw consent where they have previously given their consent to the processing of their Personal Data. ***Note*** - even after you have chosen to withdraw your consent, we may be permitted to continue to process your Personal Data to the extent required or permitted by applicable law, and if we are in fact so permitted, we reserve the right to do so.
Object to our processing of your Personal Data. Users have the right to object to the processing of their Personal Data if the processing is carried out on a legal basis other than consent (e.g. for a public interest, in the exercise of an official authority vested in the Controller or for the purpose of commercially reasonable and legitimate interests pursued by the Controller). Users may object to such processing of their Personal Data by sending a written notice to Controller (to the address or email address listed in this Privacy Policy), including details regarding the particular circumstances causing their objection to our use of their Personal Data, and rationale related thereto. Please note, however, should your Personal Data be processed for direct marketing purposes, you can object in writing to our processing of your Personal Data for those particular purposes at any time without providing any rationale or further detail.
Access your Personal Data. Users have the right to know if the Controller is processing their Personal Data, obtain disclosure regarding certain aspects of any such processing of their Personal Data, and obtain a copy of any such Personal Data undergoing processing by us.
Verify and seek rectification. Users have the right to verify the accuracy of their Personal Data used by us as contemplated hereunder, and ask for it to be updated or corrected. Please note that you must advise us of any changes to your Personal Data so that we can ensure that your Personal Data is accurate and up to date.
Restrict the processing of their Personal Data. Users have the right, under certain circumstances, to restrict the processing of their Personal Data if the accuracy of such Personal Data is disputed. In this case, the Controller will not process the user’s Personal Data for any purpose other than storing it.
Restrict the use of Personal Data during the period of time within which any pending/ongoing dispute and/or complaint is being resolved.
Have their Personal Data deleted or otherwise removed.
Users have the right, under certain circumstances, to cause the Controller to remove their Personal Data from Controller’s possession; provided, however, the Controller will not be required to remove any such Personal Data if the processing of that Personal Data is justified by our commercially reasonable and legitimate interests, necessary to fulfill a legal obligation, for reasons of public interest, or to assert, exercise or defend any legal claim. In any event, we will take reasonable steps to inform other controllers that are processing your Personal Data that you have requested the removal of any links to, copies or replication of any such Personal Data.
Receive their Personal Data and have it transferred to another controller. Users have the right to receive their Personal Data in a structured, commonly used and machine readable format from the Controller and, if technically feasible and reasonably practicable, to have it transmitted to another controller. This provision is applicable provided that the Personal Data is processed by automated means and that the processing is based on the User’s consent, on a contract to which the User is a party, or on pre-contractual obligations thereof.
Lodge a complaint. Users have the right to bring a claim before any applicable data protection authority as permitted under applicable law or regulation (the particular authority will depend on your country, state, and/or city (as applicable) of residence and the applicable data protection laws therein.

***NOTE***: Any requests to exercise User rights can be directed to the Controller through the Controller’s contact details provided in this Privacy Policy. Note that Controller is permitted to forward any such request to a third party (including, but not limited to, Web3 Foundation), in the event such third party manages any such Personal Data (as contemplated in this Privacy Policy).

Controller will use reasonable best efforts to fulfill any such request by User to exercise the rights sets forth above within the timeframe required by applicable law (if applicable), unless a delay or a retention of the relevant Personal Data is permitted by applicable law, is required for another valid purpose, or is covered by a valid limitation or exemption under applicable privacy or data protection law or regulation.

Any such request by a User will be free of charge, provided that we do not incur unreasonable or unexpected costs for providing you with details of your Personal Data.

Cookies

When the User visits the Website, information can be automatically stored on the User's computer or other device. This is done in the form of so-called "cookies" or a similar file, which help Controller in various ways, for example, to get to know the preferences of visitors and Users of the Website and to improve the Website and Services. Both permanent cookies and functional, temporary session cookies may be used: permanent cookies remain on your computer after you close your session and until you delete them, while session cookies expire when you close your browser. For further detail on the use of “cookies” in connection with your use of the Website and/or Services, please review our Cookie Policy in its entirety here. And for more information about “cookies” generally, please visit: https://allaboutcookies.org/.

Children’s Privacy

We do not knowingly collect any Personal Data from children under thirteen (13) years of age without parental consent. If we learn that a child under the age of thirteen (13) has provided us with Personal Data, or that such Personal Data has otherwise been inadvertently collected, we will delete it in accordance with applicable law.

Changes to This Privacy Policy

As previously noted in this Privacy Policy, we reserve the right to make changes to this Privacy Policy at any time by updating this page. If and to the extent commercially reasonable, technically practicable, and required by applicable law, we will endeavor to provide notice of any such updates to this Privacy Policy to Users via any contact information provided by the User to Controller. In any event, we strongly encourage you to review the Website and this Privacy Policy periodically for updates.

Note that, should any such changes by the Controller to this Privacy Policy materially impact the processing of Personal Data undertaken on the basis of a User’s consent, Controller will obtain consent from such User if required by applicable law.

Access to the Privacy Policy
The User can access, download, save or print this Privacy Policy in its current/updated version at any time under the following address polkadot.com/privacy

Current Third Party Processors
The following third party processors are currently assigned with processing activities on our behalf:
Plausible - An open source web analytics company. Plausible’s privacy policy can be found here.
Hubspot - Contact relationship management (CRM), marketing, sales, and customer service software. HubSpot is currently managed and controlled by the Web3 Foundation. HubSpot’s privacy policy can be found here.
Hotjar - A digital experience insights platform that provides visual behaviour insights, in-the-moment feedback, and 1:1 interviews, all in one place. Hotjar’s privacy policy can be found here.
Google Analytics - A web analytics service provided by Google LLC ("Google") that tracks and reports website traffic. Google's privacy policy can be found at https://policies.google.com/privacy. Google Analytics uses cookies and similar technologies to collect and analyze information about the use of our website. This information is used to evaluate visitors' use of the website and to compile statistical reports on website activity.

***NOTE*** - the updated list of these parties may be requested from the Controller at any time.
		</p>
                <div className="flex space-x-4">
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#ff0066]/20 py-8 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image
                src="/images/kusama-logo-canary-white.png"
                alt="Kusama"
                width={100}
                height={25}
                className="opacity-70"
              />
            </div>
            <div className="flex space-x-8 text-xs font-mono text-white/50">
              <Link href="/terms" className="hover:text-[#ff0066]">
                LEGAL DISCLOSURES
              </Link>
              <Link href="/privacy" className="hover:text-[#ff0066]">
                PRIVACY POLICY
              </Link>
              <Link href="/contact" className="hover:text-[#ff0066]">
                DISCLAIMER
              </Link>
              <span>© {new Date().getFullYear()} KUSAMA</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
