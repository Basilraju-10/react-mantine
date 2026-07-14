import { AppShell } from "@mantine/core";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <AppShell
      header={{ height: 80 }}
      navbar={{ width: 260 }}
      padding="lg"
      styles={{
        main: {
          backgroundColor: "#F7F8FA",
        },

        header: {
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #E9ECEF",
        },

        navbar: {
          backgroundColor: "#F7F8FA",
          borderRight: "none",
        },
      }}
    >
      <AppShell.Header>
        <Navbar />
      </AppShell.Header>

     <AppShell.Navbar p="md">
      <Sidebar />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}