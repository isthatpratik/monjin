import Image from "next/image";
import React from "react";

const CSR = () => {
  return (
    <main className="mx-auto w-full lg:max-w-7xl grid space-y-6 lg:my-6">
      <div className="text-center flex flex-col text-white space-y-4 lg:my-12 my-4">
        <h1 className="font-onest font-semibold text-3xl lg:text-[78px] leading-tight tracking-tighter ">
          Corporate Social Responsibility
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
            all organisations that handle EU citizens&apos; personal data,
            regardless of where the organisations are located.Monjin, as a Data
            Processor, collects and stores a relevant of Personal Data for the
            purposes of delivering the monjin services.
          </p>
        </div>
        <div className="font-figtree text-sm lg:text-lg font-normal lg:font-light">
          <p>
            Last year, Monjin planted rice and fruit saplings in the fertile
            soil of Phansad in Maharashtra. Adding to the farm&apos;s burgeoning
            fauna, this was our first step in building a greener India. However,
            we did not stop there. Monjin donated 85 smart stoves to the
            villagers of Kharkhardi, also in Maharashtra. These smart-stoves not
            only saved the Kharkhardi’s women from inhaling harmful smoke
            arising from burning wood, but also brought down the quantity of
            wood used to cook each time.
          </p>
        </div>
        <div className="font-figtree text-sm lg:text-lg font-normal lg:font-light">
          <p>
            Our future efforts in Corporate Social Responsibility will take
            various forms and shapes, from enabling the lesser privileged
            communities to live a better life to constantly improving our
            footprint on the planet.
          </p>
        </div>

        <div className="font-figtree text-sm lg:text-lg font-normal lg:font-light grid lg:grid-cols-2 items-start justify-start mx-auto md:py-12 space-y-10 lg:space-y-0">
          <div className="flex flex-col items-center justify-start gap-6">
            <Image
              src={"/assets/csr/community.png"}
              alt="commmunity-icon"
              width={100}
              height={100}
              className="object-contain w-16 h-16 lg:w-24 lg:h-24"
            />
            <div className="grid space-y-4">
              <h3 className="font-onest font-semibold text-xl lg:text-2xl text-center">
                Community Development
              </h3>
              <p className="font-figtree font-light text-sm lg:text-lg text-center max-w-lg text-balance">
                At Monjin, we are passionate about giving back to the community
                that has helped build us. We are committed to empower those that
                don&apos;t have the necessary resources to follow their career
                path.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-6">
            <Image
              src={"/assets/csr/sustainability.png"}
              alt="commmunity-icon"
              width={100}
              height={100}
              className="object-contain w-16 h-16 lg:w-24 lg:h-24"
            />
            <div className="grid space-y-4">
              <h3 className="font-onest font-semibold text-xl lg:text-2xl text-center">
                Environmental Sustainability
              </h3>
              <p className="font-figtree font-light text-sm lg:text-lg text-center max-w-lg text-balance">
                As is becoming quickly apparent worldwide, the environment is
                under serious threat of becoming an endangered resource itself.
                Here at Monjin, we&apos;re helping fix that through not only
                individual actions but also sustained collective efforts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CSR;
