import { type CSSProperties, type HTMLAttributes, type ReactNode } from "react";

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  h?: number | string;
  w?: number | string;
  mih?: number | string;
  miw?: number | string;
  direction?: CSSProperties["flexDirection"];
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  gap?: number | string;

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

  bdrs?: number | string; // border-radius
  bg?: string; // background-color
  bd?: string; // border
  flex?: number | string;
  wrap?: CSSProperties["flexWrap"];
  pos?: CSSProperties["position"];
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;
  style?: CSSProperties;
  className?: string;
  overflow?: CSSProperties["overflow"];
  tr?: {
    x?: string | number;
    y?: string | number;
  };
}

export const Flex = (props: FlexProps) => {
  const {
    children,
    h,
    w,
    mih = "auto",
    miw = "auto",
    direction,
    align,
    justify,
    gap,
    p = "0px",

    pt,
    pr,
    pb,
    pl,

    m = "0px",
    mt,
    mr,
    mb,
    ml,

    bdrs,
    bg,
    bd,
    style,
    className,
    flex,
    wrap,
    pos = "static",
    top,
    bottom,
    left,
    right,
    overflow,
    tr = { x: "0px", y: "0px" },
    ...rest
  } = props;

  const computedStyle: CSSProperties = {
    display: "flex",
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
    gap,
    height: h,
    width: w,
    minWidth: miw,
    minHeight: mih,

    padding: p + "px",
    paddingTop: pt + "px",
    paddingRight: pr + "px",
    paddingBottom: pb + "px",
    paddingLeft: pl + "px",

    margin: m + "px",
    marginTop: mt + "px",
    marginRight: mr + "px",
    marginBottom: mb + "px",
    marginLeft: ml + "px",

    borderRadius: bdrs,
    backgroundColor: bg,
    border: bd,
    flex,
    flexWrap: wrap,
    position: pos,
    top,
    bottom,
    left,
    right,
    overflow,
    transform: `translate(${tr.x}, ${tr.y})`,
    ...style,
  };

  return (
    <div style={computedStyle} className={className} {...rest}>
      {children}
    </div>
  );
};
