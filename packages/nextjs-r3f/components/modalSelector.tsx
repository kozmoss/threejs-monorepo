// components/ModelSelector.jsx
"use client";
import { Model } from "@/data/availableModels";
import React from "react";

export function ModelSelector({ availableModels, selectedModelPath }: {availableModels: Model[], selectedModelPath: string}) {
  return (
    <form method="GET">
      <select
        name="model"
        defaultValue={selectedModelPath}
        onChange={(e) => e.currentTarget.form?.submit()}
        className="w-full border rounded p-2"
      >
        {availableModels.map((model) => (
          <option key={model.path} value={model.path}>
            {model.name}
          </option>
        ))}
      </select>
    </form>
  );
}
