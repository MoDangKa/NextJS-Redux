import React from "react";

export default function Html() {
  return (
    <div className="html">
      <details style={{ marginBottom: 30 }}>
        <summary>Spoiler</summary>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </details>

      <div style={{ display: "grid", marginBottom: 30 }}>
        <input type="color" />
        <input type="range" value="2" min="0" max="10" />
        <input type="date" />
        <input type="datetime-local" />
        <input type="time" />
        <input type="week" />
      </div>

      <div style={{ display: "grid", marginBottom: 30 }}>
        <meter max="100" min="0" value="50" />
        <progress style={{ width: 200, height: 50 }} />
        <progress value="5" max="50" />
      </div>

      <div style={{ display: "grid", marginBottom: 30 }}>
        <input
          type="text"
          list="suggestion"
          size="50px"
          placeholder="Search car..."
          style={{
            margin: "0 30px",
            padding: 10,
            borderRadius: 10,
            outline: "none !important",
            borderWidth: 1,
            boxShadow: "0 0 10px gray",
          }}
        />
        <datalist id="suggestion">
          <option value="Mercedes">DETAIL: A nice car</option>
          <option value="Volkswagen">Volkswagen</option>
          <option value="BMW">BMW</option>
          <option value="Tesla">Tesla</option>
          <option value="Lamborghini">Lamborghini</option>
          <option value="Blah blah blad">Blah blah blad</option>
        </datalist>
      </div>

      <div style={{ display: "grid", marginBottom: 30 }}>
        <select>
          <optgroup label="Important">
            <option value="1">Detail-important 1</option>
            <option value="2">Detail-important 2</option>
          </optgroup>
          <optgroup label="Other">
            <option value="3">Detail-important 3</option>
            <option value="4">Detail-important 4</option>
          </optgroup>
        </select>
      </div>
    </div>
  );
}
