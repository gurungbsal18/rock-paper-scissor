import Counter from "@/components/Counter";
import Footer from "@/components/Footer";
import RockPaperScissor from "@/components/RockPaperScissor";

export default function Home() {
  return (
    <div className="main">
      <div className="grid grid-cols-12 gap-4">
        {/* <div className="col-span-6">
        <Counter />
      </div> */}
        <div className="col-span-12">
          <RockPaperScissor />
        </div>
      </div>
      <Footer />
    </div>
  );
}
