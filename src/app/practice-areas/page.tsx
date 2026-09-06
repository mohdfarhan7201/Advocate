import { Metadata } from "next";
import PracticeAreas from "@/components/PracticeAreas";

export const metadata: Metadata = {
  title: "Practice Areas - Vanguard Law",
};

export default function PracticeAreasPage() {
  return (
    <main className="min-h-screen pt-20 bg-void">
      {/* Re-use the existing PracticeAreas component which works well here */}
      <PracticeAreas />
    </main>
  );
}
