import React, { useState } from "react";

export default function (val) {
  const [input, setInput] = useState(val);
  const change = (e) => {
    setInput(e.target.value);
  };

  const reset = () => setInput("");
  return [input, change, reset];
}
