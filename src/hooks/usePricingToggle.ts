"use client";

import { useState } from "react";

export const usePricingToggle = () => {
  const [isYearly, setIsYearly] = useState(false);

  const togglePricing = () => {
    setIsYearly(!isYearly);
  };

  return {
    isYearly,
    togglePricing,
  };
};
