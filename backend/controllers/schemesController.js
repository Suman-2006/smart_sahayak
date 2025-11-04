import axios from "axios";

export const getSchemesList = async (req, res) => {
  try {
    // Fetch live schemes data from official MyScheme API
    const response = await axios.get("https://www.myscheme.gov.in/api/v1/schemes?limit=20");

    if (!response.data) {
      return res.status(404).json({ success: false, message: "No schemes found" });
    }

    // Format the data for your frontend
    const schemes = response.data.data.map((item) => ({
      id: item._id,
      name: item.title,
      description: item.shortDesc,
      category: item.schemeCategory?.join(", ") || "General",
      ministry: item.ministry || "N/A",
      eligibility: item.eligibility || "Refer scheme details",
      url: `https://www.myscheme.gov.in/schemes/${item.slug}`,
    }));

    res.status(200).json({
      success: true,
      total: schemes.length,
      schemes,
    });
  } catch (error) {
    console.error("Error fetching schemes:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch schemes from MyScheme API",
    });
  }
};
