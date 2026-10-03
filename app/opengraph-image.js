import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Careform studio — thoughtful digital for better healthcare";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        position: "relative",
        width: "100%",
        height: "100%",
        alignItems: "center",
        overflow: "hidden",
        padding: "72px",
        background: "#fbf8f0",
        color: "#123b39",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: "-85px",
          top: "-155px",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background: "#e1efe2",
          border: "1px solid #c5dfca",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: "78px",
          top: "105px",
          width: "325px",
          height: "325px",
          borderRadius: "50%",
          border: "1px solid #a9cdb0",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          zIndex: 1,
          maxWidth: "730px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "13px",
            color: "#4f7965",
            fontSize: "21px",
            fontWeight: 700,
            letterSpacing: "5px",
          }}
        >
          <span style={{ color: "#087f73", fontSize: "34px" }}>✳</span>
          DIGITAL HEALTH, MADE HUMAN
        </div>
        <div
          style={{
            marginTop: "35px",
            fontSize: "76px",
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: "-4px",
          }}
        >
          Thoughtful digital
          <br />
          <span
            style={{
              color: "#087f73",
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            for better healthcare.
          </span>
        </div>
        <div
          style={{
            marginTop: "28px",
            color: "#63796c",
            fontSize: "25px",
            lineHeight: 1.45,
          }}
        >
          Websites · Patient experiences · Healthcare software
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          right: "127px",
          bottom: "119px",
          display: "flex",
          width: "100px",
          height: "100px",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          background: "#d8f36a",
          color: "#087f73",
          fontSize: "55px",
        }}
      >
        +
      </div>
      <div
        style={{
          position: "absolute",
          left: "72px",
          bottom: "35px",
          color: "#829486",
          fontSize: "16px",
          letterSpacing: "3px",
        }}
      >
        CAREFORM.studio
      </div>
    </div>,
    { ...size },
  );
}
