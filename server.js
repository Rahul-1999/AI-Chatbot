const express = require("express");
const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
const MODEL_NAME = "gemini-1.5-flash";
const API_KEY = process.env.API_KEY;

async function runChat(userInput) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    // ... other safety settings
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: "user",
        parts: [
          {
            text: "A modern platform for cloud native transformation at enterprise scale\nVisualization of Data and Cloud Computing\nOverview\nKey benefits\nPartner with us\nContact us\nMulti-cloud management across the entire cloud lifecycle\nCognizant® Skygrade™ simplifies modernization, migration, and management of your cloud platforms and applications. Our platform accelerates time to value, improves cloud efficiency, and reduces complexity across multi-cloud and edge estates. \n\nSeamlessly deliver business value across cloud estates\nEnterprises have undergone often disjointed modernization and cloud adoption efforts, leading to fragmented IT infrastructure and application ecosystems. Having a unified view across cloud estates fused with AIOps is key to ensuring your business is poised for the future to gain a competitive edge.\n\nMigration Acceleration\nAccelerated solutions for cloud-native modernization de-risk the transition and enable solutions that are more fully featured and strategic.\n\nnull\nAccess to cloud features\nBenefit from cloud provider investments in new services and features by building applications in a cloud-native way that interoperates effectively with the cloud ecosystem.\n\nnull\nReduced Risk\nMitigate risk through advanced automation and Cognizant's AIOps. Take advantage of the scaling, resilience and observability features of containerized applications.\n\nnull\nHolistic cloud management\nContinuous multi-cloud management and governance assures security, performance, resilience and cost optimization from the start.\n\nnull\nPartner with us\nProven expertise\nA curated library of solution accelerators, tools and expertise to quickly and efficiently deliver business value while driving simplification and sustainability.\n\nMan giving a presentation, looking at graph\nOpen and interoperable\nModular design that can connect to all major applications, infrastructure and tooling environments ensuring maximized value for your investments.\n\nnull\nContinuously evolving\nOur services include engineering to progressively automate based on operational data feedback.\n\nnull\nBe cloud-native today\nIf your organization is new to the cloud, or done some form of migration, our experts can work with you to ensure your cloud experience is optimized and ready for the future.\n\nSee the platform in action\nReady to get hands-on with the Cognizant Skygrade platform? Inquire below for more information.\n\n\n",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "## Cognizant® Skygrade™: A Modern Platform for Cloud-Native Transformation at Enterprise Scale\n\nThis text describes Cognizant Skygrade, a platform designed to help enterprises embrace cloud-native transformation at scale. Here's a breakdown:\n\n**Overview:**\n\n* Cognizant Skygrade simplifies the modernization, migration, and management of cloud platforms and applications.\n* It aims to accelerate time to value, improve cloud efficiency, and reduce complexity across multi-cloud and edge estates.\n\n**Key Benefits:**\n\n* **Multi-cloud Management:** Provides a unified view and management across all cloud environments, including multi-cloud and edge.\n* **Seamless Value Delivery:** Delivers business value across cloud estates by integrating AI-powered operations (AIOps) for a holistic approach.\n* **Migration Acceleration:** Offers accelerated solutions for cloud-native modernization, de-risking the transition and enabling more strategic solutions.\n* **Access to Cloud Features:** Allows for effective integration with the cloud ecosystem by building cloud-native applications that leverage new cloud services and features.\n* **Reduced Risk:** Mitigates risk through advanced automation and Cognizant's AIOps, leveraging the benefits of containerized applications like scaling, resilience, and observability.\n* **Holistic Cloud Management:** Ensures continuous multi-cloud management and governance, guaranteeing security, performance, resilience, and cost optimization from the beginning.\n\n**Partner with us:**\n\n* **Proven Expertise:** Offers a curated library of solution accelerators, tools, and expertise for efficient and valuable implementations.\n* **Open and Interoperable:** Features a modular design that integrates with major applications, infrastructure, and tooling environments, maximizing investment value.\n* **Continuously Evolving:**  Provides engineering services for progressive automation based on operational data feedback.\n\n**Call to Action:**\n\n* **Be cloud-native today:**  Encourages organizations to embrace cloud-native principles, whether starting their cloud journey or optimizing existing infrastructure.\n* **See the platform in action:**  Offers a call to inquire for more information and a hands-on experience with the Cognizant Skygrade platform.\n\n**Visualization:**\n\n* The image of a man giving a presentation and looking at a graph reinforces the platform's focus on data visualization and analytics within cloud computing.\n\n**Overall:**\n\nCognizant Skygrade positions itself as a powerful solution for organizations seeking to embrace the full potential of cloud-native transformation, offering a comprehensive and future-proof platform for managing their cloud landscape. \n",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "what is skygrade" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Cognizant® Skygrade™ is a **cloud-native transformation platform** developed by Cognizant, a global technology solutions and consulting company. It's designed to help businesses of all sizes modernize, migrate, and manage their cloud environments efficiently and effectively.\n\nHere's a breakdown of what Skygrade offers:\n\n**Key Features:**\n\n* **Multi-cloud Management:**  Skygrade provides a unified view and management interface across all your cloud environments, including public, private, and hybrid clouds. This enables you to control your entire cloud ecosystem from a single platform.\n* **Cloud-native Modernization:** Skygrade helps you accelerate the transition to cloud-native applications and architectures. It offers tools, accelerators, and expertise for modernizing existing applications and building new ones with cloud-native principles.\n* **Migration Acceleration:** Skygrade provides a streamlined approach to cloud migration, minimizing risks and accelerating the process. It leverages automation and AI-powered tools to make migration smoother and faster.\n* **AIOps Integration:** Skygrade integrates AI-powered operations (AIOps) to provide real-time insights and automation for improved performance, security, and cost optimization across your cloud environment.\n* **Holistic Cloud Governance:**  Skygrade ensures security, performance, resilience, and cost optimization through a comprehensive governance framework. It helps you establish best practices and maintain control over your cloud resources.\n* **Open and Interoperable:** Skygrade is designed to integrate with various existing technologies and tools, maximizing the value of your investments. \n* **Continuously Evolving:** Skygrade is constantly evolving with new features and capabilities to adapt to the rapidly changing cloud landscape.\n\n**Benefits:**\n\n* **Faster Time to Value:** Skygrade accelerates the process of cloud adoption and modernization, enabling businesses to realize the benefits of the cloud faster.\n* **Improved Cloud Efficiency:** By optimizing resource allocation, reducing complexity, and automating tasks, Skygrade helps organizations use their cloud resources more efficiently.\n* **Reduced Costs:** Skygrade helps organizations control costs by optimizing cloud resource utilization and automating tasks.\n* **Increased Security and Resilience:** Skygrade provides comprehensive governance and security features to protect your cloud environment and ensure data integrity.\n\n**Target Audience:**\n\nSkygrade is designed for businesses of all sizes that are looking to:\n\n* Modernize their IT infrastructure\n* Migrate applications to the cloud\n* Manage their cloud environment more effectively\n* Reduce costs and improve efficiency\n* Enhance security and resilience \n\n**In essence, Skygrade aims to be a comprehensive platform that empowers businesses to embrace the transformative power of cloud computing by simplifying the process of adoption, modernization, and management.** \n",
          },
        ],
      },
    ],
  });

  const result = await chat.sendMessage(userInput);
  const response = result.response;
  return response.text();
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/loader.gif", (req, res) => {
  res.sendFile(__dirname + "/loader.gif");
});
app.post("/chat", async (req, res) => {
  try {
    const userInput = req.body?.userInput;
    console.log("incoming /chat req", userInput);
    if (!userInput) {
      return res.status(400).json({ error: "Invalid request body" });
    }

    const response = await runChat(userInput);
    res.json({ response });
  } catch (error) {
    console.error("Error in chat endpoint:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
