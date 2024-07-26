"use client";
import { useAppContext } from "@/context";
import { hexToRgb } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
const AmbientEffectDesktop = () => {
  const { theme, setTheme } = useTheme();
  const { SelectedGameColor } = useAppContext();
  const [selectedGameColor, setSelectedGameColor] = SelectedGameColor;
  const [backgroundcolor, setBackgroundcolor] = useState(18);

  useEffect(() => {
    setBackgroundcolor(theme == "dark" ? 18 : 225);
    document.body.style.background = selectedGameColor;
  }, [SelectedGameColor, theme]);

  return (
    <div
      id="AmbientEffect"
      className="absolute rotate-180 w-full h-full inset-0 z-[-1] fade-in-0"
      style={{
        background: ` linear-gradient(
    rgba(${backgroundcolor},${backgroundcolor},${backgroundcolor}, 1) 0%,
    rgba(${backgroundcolor},${backgroundcolor},${backgroundcolor}, 0.3) 50%,
    rgba(${backgroundcolor},${backgroundcolor},${backgroundcolor}, 0.15) 65%,
    rgba(${backgroundcolor},${backgroundcolor},${backgroundcolor}, 0.075) 75.5%,
    rgba(${backgroundcolor},${backgroundcolor},${backgroundcolor}, 0.037) 82.85%,
    rgba(${backgroundcolor},${backgroundcolor},${backgroundcolor}, 0.019) 88%,
    rgba(${backgroundcolor},${backgroundcolor},${backgroundcolor}, 0) 100%
  )`,
      }}
    />
  );
};

export default AmbientEffectDesktop;
