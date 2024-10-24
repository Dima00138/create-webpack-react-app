declare module "*.svg" {
  import { FunctionComponent } from "react";

  const ReactComponent: FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  export default ReactComponent;
}
