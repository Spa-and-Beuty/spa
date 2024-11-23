import Dashboard from "@/components/admin/Dashboard";

import React from "react";

export const metadata = {
  title: "Admin | Spaville",
  description: "Admin Page",
};
export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{ overflow: "hidden" }}>
        <Dashboard>{children}</Dashboard>
      </body>
    </html>
  );
}
