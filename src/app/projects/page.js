import { title } from "process";
import DualContentBlock from "../../components/DualContentBlock";

export default function ProjectsPage() {
  return (
   <main>
     <DualContentBlock
                left={{
                  title: "Dairy Project – Govindapalle",
                  titleColor: "#FFFFFF",
                  titleSize: "text-3xl",
                  bgColor: "#622676",
                  type: "list",
                  content: [
                    [
                      { text: "Location", weight:"bold", color: "#FFFFFF" },
                      { text: ": Govindapalle Village", weight:"normal", color: "#FFFFFF" },
                    ],
                    [
                      { text: "Beneficiaries", weight:"bold", color: "#FFFFFF" },
                      { text: ": 40 women", weight:"normal", color: "#FFFFFF" },
                    ],
                    [
                      { text: "Budget", weight:"bold", color: "#FFFFFF" },
                      { text: ": ₹20 lakhs", weight:"normal", color: "#FFFFFF" },
                    ],
                    [
                      { text: "Duration", weight:"bold", color: "#FFFFFF" },
                      { text: ": 12 months", weight:"normal", color: "#FFFFFF" },
                    ],
                    [
                      { text: "Results", weight:"bold", color: "#FFFFFF" },
                      { text: `: Women gained steady income, improved nutrition for families, 
                        and collective savings groups strengthened financial 
                        independence.`, weight:"normal", color: "#FFFFFF" },
                    ],
                    
                  ],
                }}
    
                right={{
                  title: "Finance Awareness – Sirivella",
                  titleColor: "#000000",
                  titleSize: "text-3xl",
                  bgColor: "#FFCEF8",
                  type: "list",
                  content: [
                    [
                      { text: "Location", weight:"bold", color: "#000000" },
                      { text: ": 8 villages, Sirivella Mandal", weight:"normal", color: "#000000" },
                    ],
                    [
                      { text: "Beneficiaries", weight:"bold", color: "#000000" },
                      { text: ": 700–800 women", weight:"normal", color: "#000000" },
                    ],
                    [
                      { text: "Budget", weight:"bold", color: "#000000" },
                      { text: ": ₹12 lakhs", weight:"normal", color: "#000000" },
                    ],
                    [
                      { text: "Duration", weight:"bold", color: "#000000" },
                      { text: ": 12 months", weight:"normal", color: "#000000" },
                    ],
                    [
                      { text: "Results", weight:"bold", color: "#000000" },
                      { text: `: Women developed financial literacy, reduced debt reliance, 
                        adopted savings habits, and started small investments for 
                        household security.`, weight:"normal", color: "#000000" },
                    ],
                    
                  ],
                }}
            />
    </main>
  );
}
