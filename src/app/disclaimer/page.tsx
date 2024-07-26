import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Disclaimer = () => {
  return (
    <article className="container max-w-[500px] mt-8 flex flex-col">
      <h1 className="text-2xl font-semibold ">Disclaimer</h1>
      <Accordion type="multiple">
        <AccordionItem value={"General"}>
          <AccordionTrigger>General informaiton</AccordionTrigger>
          <AccordionContent>
            The information provided by us on our web application, a gacha
            simulator for gacha games , is for general informational purposes
            only. All information on the Service is provided in good faith;
            however, we make no representation or warranty of any kind, express
            or implied, regarding the accuracy, adequacy, validity, reliability,
            availability, or completeness of any information on the Service.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="Useage">
          <AccordionTrigger>Use at Your Own Risk</AccordionTrigger>
          <AccordionContent>
            Your use of the Service is at your sole risk. The Service is
            provided on an "AS IS" and "AS AVAILABLE" basis. We disclaim all
            liability for any loss or damage of any kind incurred as a result of
            the use of the Service or reliance on any information provided on
            the Service.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="Third-Party">
          <AccordionTrigger>Third-Party Links and Assets</AccordionTrigger>
          <AccordionContent>
            The Service may contain links to third-party websites or services
            that are not owned or controlled by us. We have no control over, and
            assume no responsibility for, the content, privacy policies, or
            practices of any third-party websites or services. We strongly
            advise you to read the terms and conditions and privacy policies of
            any third-party websites or services that you visit. the Service.
            {`\n`} We are a third-party website and use assets available online.
            We do not claim ownership of any third-party assets used in our
            Service. All trademarks, service marks, and logos are the property
            of their respective owners. Any use of such marks is solely for
            identification purposes and does not imply endorsement or
            affiliation.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </article>
  );
};

export default Disclaimer;
