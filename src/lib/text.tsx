import React from "react";

type TextAlign = "left" | "center" | "right" | "justify";
type TextDecoration = "underline" | "line-through" | "none";

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  fz?: number | string; // font-size (px if number)
  fw?: number | string; // font-weight
  ff?: string; // font-family
  lh?: number | string; // line-height
  ta?: TextAlign; // text-align
  c?: string; // color
  h?: number | string;
  w?: number | string;
  p?: number | string; // padding

  pt?: number | string;
  pr?: number | string;
  pb?: number | string;
  pl?: number | string;

  m?: number | string; // margin

  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;

  opacity?: number;
  ls?: number;
  td?: TextDecoration; // text-decoration
  truncate?: boolean; // single-line ellipsis
  lineClamp?: number; // multi-line clamp
}

export const Text = ({
  fz = 14,
  fw = 400,
  ff = "inherit",
  lh = "normal",
  ta = "left",
  c = "var(--text_color)",
  td = "none",
  p = "0px",
  w,
  h,
  pt,
  pr,
  pb,
  pl,
  opacity,
  m = "0px",
  mt,
  mr,
  mb,
  ml,
  truncate = false,
  lineClamp,
  style,
  ls,
  children,
  ...props
}: TextProps) => {
  return (
    <p
      style={{
        fontSize: typeof fz === "number" ? `${fz}px` : fz,
        fontWeight: fw,
        fontFamily: ff,
        lineHeight: lh,
        textAlign: ta,
        color: c,
        padding: p,
        paddingTop: pt,
        paddingRight: pr,
        paddingBottom: pb,
        paddingLeft: pl,
        height: h,
        width: w,
        margin: m,
        marginTop: mt,
        marginRight: mr,
        marginBottom: mb,
        marginLeft: ml,
        textDecoration: td,
        letterSpacing: ls,
        opacity,

        ...(truncate && {
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }),

        ...(lineClamp && {
          display: "-webkit-box",
          WebkitLineClamp: lineClamp,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }),

        ...style,
      }}
      {...props}
    >
      {children}
    </p>
  );
};
