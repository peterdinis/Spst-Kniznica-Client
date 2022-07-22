import { ResizableBox as ReactResizableBox } from "react-resizable";
import {ReactNode} from "react";

interface IResizeable {
  children: ReactNode;
  witdth: number;
  height: number;
  resizable: boolean;
  style: {},
  className: string;
}

function ResizableBox(props: IResizeable) {
  return (
    <div style={{ marginLeft: 20 }}>
    {props.resizable ? (
      <ReactResizableBox width={props.witdth} height={props.height}>
        <div
          style={{
            boxShadow: "0 20px 40px rgba(0,0,0,.1)",
            ...props.style,
            width: "100%",
            height: "100%",
          }}
          className={props.className}
        >
          {props.children}
        </div>
      </ReactResizableBox>
    ) : (
      <div
        style={{
          width: `${props.witdth}px`,
          height: `${props.height}px`,
          boxShadow: "0 20px 40px rgba(0,0,0,.1)",
          ...props.style,
        }}
        className={props.className}
      >
        {props.children}
      </div>
    )}
  </div>
  )
}

export default ResizableBox