import { AppShell } from "@mantine/core";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <AppShell
      header={{ height: 80 }}
      padding="lg"
      styles={{
        main: {
          backgroundColor: "#F7F8FA",
        },

        header: {
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #E9ECEF",
        },
      }}
    >
      <AppShell.Header>
        <Navbar />
      </AppShell.Header>

      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}