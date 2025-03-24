import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Counter() {
  const initNum = 4;
  const [isCounter, setIsCounter] = useState(initNum);

  const increaseBtn = () => {
    setIsCounter(isCounter + 1);
  };

  const decreaseBtn = () => {
    setIsCounter(isCounter - 1);
  };

  const resetBtn = () => {
    setIsCounter(0);
  };

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center h-lvh bg-gray-300">
        {/* <h1 className="text-primary text-5xl">Counter</h1> */}
        <p>Number: {isCounter}</p>
        <div className="flex gap-2 my-5">
          <Button onClick={increaseBtn}>Increase</Button>
          <Button variant="secondary" onClick={decreaseBtn}>
            Decrease
          </Button>
          <Button variant="destructive" onClick={resetBtn}>
            Reset
          </Button>
        </div>
      </div>
    </>
  );
}
