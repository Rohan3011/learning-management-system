import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { counterState, squaredState } from "@/atoms/example";
import { Button } from "@/components/ui/button";
import { listCourses } from "@/api/course.service";

const HomePage: React.FC = () => {
  const [counter, setCounter] = useRecoilState(counterState);
  const squared = useRecoilValue(squaredState);

  useEffect(() => {
    listCourses().then(console.log);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <h1 className="font-bold text-4xl">Home Page</h1>
      <Button onClick={() => setCounter((prev) => prev + 1)}>+</Button>
      <span>Count : {counter}</span>
      <span> Squared : {squared}</span>
      <Button onClick={() => setCounter((prev) => prev - 1)}>-</Button>
    </div>
  );
};

export default HomePage;
