// src/App.jsx
import { ThemeProvider } from "./context/ThemeProvider";
import AppLayout from "./layouts/AppLayout";

export default function App() {
  return (
    <ThemeProvider>
      <AppLayout />
    </ThemeProvider>
  );
}
