import React, { useState, useEffect } from "react";
 function Range() {
  const [value, onChange] = useState(1);

  return (
    <div className="slider-parent">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        list="newlist"
        style={{ width: "100%" }}
        onChange={({ target: { value: radius } }) => {
          onChange(radius);
        }}
      />
      <datalist id="newlist">
        <option key={1} value={"25"} label={"25"} />
        <option key={2} value={"50"} label={"50"} />
        <option key={3} value={"75"} label={"75"} />
      </datalist>
      <div className="buble" style={{ left: `${value}%` }}>
      <h1>gvtug</h1>
        {value}
      </div>
    </div>
  );
}
export default Range