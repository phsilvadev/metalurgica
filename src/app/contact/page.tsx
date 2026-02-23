// src/app/link/page.tsx
import fs from "fs";
import path from "path";

const LinkPage = async () => {
  const filePath = path.join(process.cwd(), "files", "index.html");
  const htmlContent = fs.readFileSync(filePath, "utf8");

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default LinkPage;
