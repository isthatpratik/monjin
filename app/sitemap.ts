import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://monjin.com";

  const routes = [
    "",
    "/pricing",
    "/products/Basics",
    "/products/MonjinSuite",
    "/products/OCOI",
    "/products/PerformanceManagement",
    "/products/Spotlight",
    "/products/YCOI",
    "/candidate",
    "/company/about",
    "/company/careers",
    "/company/culture",
    "/company/team",
    "/contact",
    "/csr",
    "/gdpr",
    "/interviewer",
    "/casestudy/DXCTechnology",
    "/casestudy/EmpowerProfessionals",
    "/casestudy/Persistent",
    "/casestudy/SearsHoldings",
    "/privacy-policy",
    "/support",
    "/terms-of-services",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));
}
