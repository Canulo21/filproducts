import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { faqs, popUpfaqs } from "../../Json/HomeJson/FaqList";

function FaqAccordion() {
  return (
    <div className="wrap">
      <div className="text-center">
        <h3 className="text-center ornament-top bgR">
          Frequently Asked Questions
        </h3>
      </div>
      <div className="faq-accordion-holder mt-12">
        <Accordion type="single" collapsible className="lg:w-3/4 m-auto">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="faq-item px-5 py-2 lg:py-4 rounded-lg mb-5 bg-[var(--off-white)] shadow-lg"
            >
              <AccordionTrigger className="text-base lg:text-xl hover:no-underline tracking-wide faq-question font-poppins">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm lg:text-lg tracking-wide">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="pop-up text-center">
          <Popover>
            <PopoverTrigger className=" inline-block text-white uppercase font-semibold bg-[var(--primary-color)] py-4 px-8 rounded-md mt-6 text-md tracking-wider transition-colors ease-in-out duration-300 hover:bg-[var(--secondary-color)] hover:text-[var(--dark-color)] shadow-lg ">
              Show all FAQ
            </PopoverTrigger>
            <PopoverContent className="pop-content  w-full xl:w-[1200px] bg-[var(--dark-color)] shadow-lg rounded-lg p-4 xl:p-10">
              <Accordion type="single" collapsible>
                {popUpfaqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="faq-item px-5 py-2 rounded-lg mb-5 bg-[var(--off-white)] shadow-lg w-full"
                  >
                    <AccordionTrigger className="text-base hover:no-underline tracking-wide faq-question py-2 font-poppins">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm tracking-wide">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}

export default FaqAccordion;
