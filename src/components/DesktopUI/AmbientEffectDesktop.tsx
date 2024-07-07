"use client";
import { useAppContext } from "@/context";
import { hexToRgb } from "@/lib/utils";
import React, { useEffect, useState } from "react";

const AmbientEffectDesktop = () => {
  const { state } = useAppContext();
  const [colorRGB, setColorRGB] = useState(hexToRgb(state.SelectedGameColor));
  useEffect(() => {
    var EffectEl = document.getElementById("AmbientEffect");
    EffectEl &&
      (EffectEl.style.backgroundImage = ` linear-gradient(
    rgba(${colorRGB?.r}, ${colorRGB?.g}, ${colorRGB?.b}, 1) 0%,
    rgba(${colorRGB?.r}, ${colorRGB?.g}, ${colorRGB?.b}, 0.3) 50%,
    rgba(${colorRGB?.r}, ${colorRGB?.g}, ${colorRGB?.b}, 0.15) 65%,
    rgba(${colorRGB?.r}, ${colorRGB?.g}, ${colorRGB?.b}, 0.075) 75.5%,
    rgba(${colorRGB?.r}, ${colorRGB?.g}, ${colorRGB?.b}, 0.037) 82.85%,
    rgba(${colorRGB?.r}, ${colorRGB?.g}, ${colorRGB?.b}, 0.019) 88%,
    rgba(${colorRGB?.r}, ${colorRGB?.g}, ${colorRGB?.b}, 0) 100%
  )`);
    setColorRGB(hexToRgb(state.SelectedGameColor));
  }, [state.SelectedGameColor]);

  return (
    <div
      id="AmbientEffect"
      className="absolute w-full h-full inset-0 z-[-1] transition-all"
      style={{
        background: ` linear-gradient(
    rgba(${colorRGB?.r}, ${colorRGB?.g}, ${colorRGB?.b}, 1) 0%,
    rgba(${colorRGB?.r}, ${colorRGB?.g}, ${colorRGB?.b}, 0.3) 50%,
    rgba(${colorRGB?.r}, ${colorRGB?.g}, ${colorRGB?.b}, 0.15) 65%,
    rgba(${colorRGB?.r}, ${colorRGB?.g}, ${colorRGB?.b}, 0.075) 75.5%,
    rgba(${colorRGB?.r}, ${colorRGB?.g}, ${colorRGB?.b}, 0.037) 82.85%,
    rgba(${colorRGB?.r}, ${colorRGB?.g}, ${colorRGB?.b}, 0.019) 88%,
    rgba(${colorRGB?.r}, ${colorRGB?.g}, ${colorRGB?.b}, 0) 100%
  )`,
      }}
    />
  );
};

export default AmbientEffectDesktop;
