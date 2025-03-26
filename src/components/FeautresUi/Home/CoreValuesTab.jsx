import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import customerServiceImg from "../../../assets/images/customer-service.png";
import hardWorkImg from "../../../assets/images/hardwork.png";
import innovationImg from "../../../assets/images/innovation.png";
import integrityImg from "../../../assets/images/integrity.png";
import trustImg from "../../../assets/images/trust.png";

function CoreValuesTab() {
  const coreValues = [
    {
      img: customerServiceImg,
      title: "Customer First, Always",
      description:
        "CUSTOMER CENTRIC-driven company that goes the extra mile to achieve customer satisfaction.",
    },
    {
      img: integrityImg,
      title: "Integrity in Every Action",
      description:
        "We value INTEGRITY as manifested in our honesty and sincerity in every undertaking we create.",
    },
    {
      img: trustImg,
      title: "Built on Trust",
      description:
        "We value TRUST as evidenced in our open communications, confident expectations & receptiveness to one another.",
    },
    {
      img: hardWorkImg,
      title: "The Power of Hard Work",
      description:
        "We value HARDWORK as revealed in our perseverance, sense of urgency and initiative to accomplish our tasks.",
    },
    {
      img: innovationImg,
      title: "Innovation for the Future",
      description:
        "We value INNOVATION as we carry on to raise our standards in our relentless pursuit for better technologies in the years to come.",
    },
  ];

  return (
    <div>
      <div className="core-wrap mt-20 md:mt-8">
        <div>
          <Tabs defaultValue="tab-0" className="inline-block w-full">
            <div className="flex justify-between flex-col-reverse md:flex-row">
              <TabsList className="core-list mt-10 md:mt-0 flex flex-wrap gap-3 md:gap-0 flex-row md:flex-col bg-transparent h-full w-full md:w-2/5 lg:w-1/3">
                {coreValues.map((value, i) => (
                  <TabsTrigger
                    key={i}
                    value={`tab-${i}`}
                    className="core-item uppercase md:w-full text-sm md:text-lg xl:text-xl text-[var(--off-white)] bg-[var(--dark-color)] hover:bg-[var(--primary-color)] md:mb-4 py-3 px-4 md:py-5 md:px-10 text-center "
                  >
                    {value.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              <div className="w-full md:w-3/5 lg:w-3/5">
                {coreValues.map((value, i) => (
                  <TabsContent
                    key={i}
                    value={`tab-${i}`}
                    className="core-content p-2 text-center flex flex-col items-center w-full h-full justify-center"
                  >
                    <div className="core-image flex justify-center mb-10">
                      <img className="icon" src={value.img} alt={value.title} />
                    </div>
                    <p className="text-base lg:text-xl font-medium leading-6 lg:leading-10">
                      {value.description}
                    </p>
                  </TabsContent>
                ))}
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default CoreValuesTab;
