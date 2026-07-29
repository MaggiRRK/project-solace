"use client";

import { useEffect, useState } from "react";

export default function useLoading() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => prev + 1);
    }, 1700);

    return () => clearInterval(timer);
  }, []);

  return step;
}