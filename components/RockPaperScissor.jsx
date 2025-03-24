import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  FaRegHandRock,
  FaRegHandPaper,
  FaRegHandScissors,
  FaSmileWink,
  FaRegHandshake,
} from "react-icons/fa";
import { RiResetLeftLine } from "react-icons/ri";
import { FaFaceSadTear } from "react-icons/fa6";
import Image from "next/image";

function RockPaperScissor() {
  const [userChoice, setUserChoice] = useState("None");
  const [computerChoice, setComputerChoice] = useState("None");
  const [result, setResult] = useState(
    <>
      <Image
        src="/gif/are-you-ready.gif"
        alt="are you ready"
        height={150}
        width={150}
      />
    </>
  );

  const handleClick = (userSelection) => {
    setUserChoice(userSelection);

    const computerSelection = Math.floor(Math.random() * 3) + 1;
    const choicesMap = { 1: "Rock", 2: "Paper", 3: "Scissor" };
    const computerPick = choicesMap[computerSelection];

    setComputerChoice(computerPick);

    if (userSelection === computerPick) {
      setResult(
        <div className="flex flex-col justify-center items-center gap-3">
          <Image src="/gif/draw.gif" alt="draw" height={150} width={150} />
          <div className="flex text-4xl font-bold gap-3 items-center">
            <FaRegHandshake />
            Draw
          </div>
        </div>
      );
    } else if (
      (userSelection === "Rock" && computerPick === "Scissor") ||
      (userSelection === "Paper" && computerPick === "Rock") ||
      (userSelection === "Scissor" && computerPick === "Paper")
    ) {
      setResult(
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex text-4xl font-bold gap-3">
            You Win <FaSmileWink className="text-yellow-600" />
          </div>
          <Image src="/gif/KO.gif" alt="KO" height={150} width={150} />
          <div>
            {userSelection} Beats {computerPick}
          </div>
        </div>
      );
    } else {
      setResult(
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex text-4xl font-bold gap-3">
            You Loose <FaFaceSadTear className="text-yellow-600" />
          </div>
          <Image src="/gif/loose.gif" alt="loose" height={150} width={150} />
          <div>
            {computerPick} Beats {userSelection}
          </div>
        </div>
      );
    }
  };

  const resetHandle = () => {
    setUserChoice("");
    setComputerChoice("");
    setResult(
      <>
        <Image
          src="/gif/are-you-ready.gif"
          alt="are you ready"
          height={150}
          width={150}
        />
      </>
    );
  };

  return (
    <div className="main-container w-full h-lvh flex flex-col justify-center items-center">
      <h1 className="text-2xl md:text-3xl text-white font-bold flex gap-2 items-center">
        <FaRegHandRock className="text-white" />
        Rock <FaRegHandPaper className="text-white" />
        Paper <FaRegHandScissors className="text-white" />
        Scissor
      </h1>
      <div className="flex gap-2 my-5">
        <Button
          onClick={() => handleClick("Rock")}
          className="bg-blue-600 hover:bg-blue-700"
        >
          <FaRegHandRock />
          Rock
        </Button>
        <Button
          onClick={() => handleClick("Paper")}
          className="bg-blue-600 hover:bg-blue-700"
        >
          <FaRegHandPaper />
          Paper
        </Button>
        <Button
          onClick={() => handleClick("Scissor")}
          className="bg-blue-600 hover:bg-blue-700"
        >
          <FaRegHandScissors />
          Scissor
        </Button>
        <Button
          onClick={resetHandle}
          variant="destructive"
          className="hover:bg-red-700"
        >
          <RiResetLeftLine />
          Reset
        </Button>
      </div>
      <div className="flex gap-5 text-white">
        <p>
          You choose: <span className="font-bold">{userChoice}</span>
        </p>
        <p>
          Computer choose: <span className="font-bold">{computerChoice}</span>
        </p>
      </div>
      <p className="py-5 px-16 mt-2 bg-gray-200 rounded-md shadow-2xl">
        {result}
      </p>
    </div>
  );
}

export default RockPaperScissor;
