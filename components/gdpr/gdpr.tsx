import Link from "next/link";
import React from "react";

const GDPR = () => {
  return (
    <main className="mx-auto w-full lg:max-w-7xl grid space-y-6 lg:my-6">
      <div className="text-center flex flex-col text-white space-y-4 lg:my-12 my-4">
        <h1 className="font-onest font-semibold text-3xl lg:text-[78px] leading-tight tracking-tighter ">
          Monjin&apos;s commitment to GDPR Compliance
        </h1>
      </div>
      <div className="grid items-center bg-white rounded-2xl lg:rounded-[32px] p-8 lg:p-16 space-y-4">
        <div className="font-figtree text-sm lg:text-lg font-normal lg:font-light">
          <p>
            We&apos;re committed to helping monjin&apos;s customers and users
            understand, and where applicable, comply with the General Data
            Protection Regulation (GDPR). The GDPR is the most comprehensive EU
            data privacy law in decades and went into effect on May 25,
            2018.Besides strengthening and standardising user data privacy
            across the EU nations, it introduces new or additionalobligations on
            all organisations that handle EU citizens&apos; personal data, regardless
            of where the organisations are located.Monjin, as a Data Processor,
            collects and stores a relevant of Personal Data for the purposes of
            delivering the monjin services.
          </p>
        </div>

        <div className="font-figtree text-sm lg:text-lg font-normal lg:font-light">
          <h2 className="fonr-onest font-semibold text-2xl mb-4">
            The data we collect and store on behalf of our customers
          </h2>
          <p>
            <ul className="list-disc ml-4">
              <li>
                Name, phone number, demographics, gender and email, location;
              </li>
              <li>
              Depending on client configuration – skills, employment history 
              </li>
              <li>
              Video
            profile and video interview, which may include your bodily image and
            voice,as well as your surroundings
              </li>
              <li>
              Internet Protocol (IP) address,
              cookies, location, browser type, access time, error log
              </li>
            </ul>
          </p>
        </div>

        <div className="font-figtree text-sm lg:text-lg font-normal lg:font-light mb-4">
          <h2 className="fonr-onest font-semibold text-2xl mb-4">
          How we comply with GDPR
          </h2>
          <p>
          The GDPR&apos;s updated requirements are significant and our global team has adapted monjin&apos;s product offerings, operations and contractual commitments to help customerscomply with the regulation. Measures we have implemented include:The GDPR&apos;s updated requirements are significant and our global team has adapted monjin&apos;s product offerings, operations and contractual commitments to help customers comply with the regulation. Measures we have implemented include: <br /><br />
          <ul className="list-disc ml-4">
              <li>
              Notice – We display adequate notices to users while accessing Monjin website and platform making them aware of what data is captured and where it is processed, how it is processed and what are the user&apos;s rights
              </li>
              <li>
              Choice and consent – Monjin obtains explicit consent of users before capturing and processing their personal information. User always has a choice to out out of Monjin services.
              </li>
              <li>
              Collection, use, retention and disposal – Monjin has adequate processes to ensure we only collect information relevant to our and our client&apos;s business and use it only for that purpose. We have appropriate data retention and disposal program in place.
              </li>
              <li>
              Access – The access to the user&apos;s personal information is restricted by role based access control on need to know basis. User has a portal access to modify,confirm and delete his profile information.
              </li>
              <li>
              Disclosure to third parties – User&apos;s personal information is disclosed only to those third parties that we use for processing of personal information and user is made aware of these third parties during the notice display.
              </li>
              <li>
              Security for privacy – Monjin is ISO27001 certified organisation and has adequatemeasures to prevent or detect data breach or misuse.
              </li>
              <li>
              Quality – Monjin always maintains current and accurate information of the usersand every single user has an ability to access and modify his data as per his need.
              </li>
              <li>
              Monitoring and enforcement – Monjin data privacy officer continuously assessesthe program effectiveness and on a periodic basis uses professional servicesorganisations to assess compliance levels and takes corrective actions.
              </li>
            </ul>
          </p>
        </div>

        <div className="font-figtree text-sm lg:text-lg font-normal lg:font-light">
          <h2 className="fonr-onest font-semibold text-2xl mb-4">
          How we protect your personal information?
          </h2>
          <p>
          <ul className="list-disc ml-4">
              <li>
              Monjin uses secure cloud infrastructure platform of Microsoft Azure. Monjin itself is a ISO 27001: 2013 – information security certified company and we only use security certified companies to support in delivering services to our clients. Few specific controls that we have implemented to protect your Personal Information are:
              </li>
              <li>
              Encryption for data at rest and during transit
              </li>
              <li>
              Masking of Personal Information at rest and during transit
              </li>
              <li>
              Access to videos and documents using shared access signature
              </li>
              <li>
              Row level security within the database
              </li>
              <li>
              Role based access control
              </li>
              <li>
              Continuous control monitoring (vulnerability assessment and penetration testing at each stage of SDLC)
              </li>
              <li>
              Monitoring and enforcement – Monjin data privacy officer continuously assessesthe program effectiveness and on a periodic basis uses professional servicesorganisations to assess compliance levels and takes corrective actions.
              </li>
            </ul>
          </p>
        </div>

        <div className="font-figtree lg:font-light lg:text-lg text-sm">
          <p className="text-center">
          Should you have any questions, please reach out to our CISO at privacy@monjin.com.

          Looking for more information? Here are some reference <Link href={'/terms-of-services'} className="hover:underline font-medium">Terms of Service</Link>  and <Link href={'/privacy-policy'} className="hover:underline font-medium">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default GDPR;
