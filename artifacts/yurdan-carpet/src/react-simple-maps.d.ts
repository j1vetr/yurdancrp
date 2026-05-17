declare module "react-simple-maps" {
  import { ReactNode, SVGProps, CSSProperties } from "react";

  export interface ProjectionConfig {
    scale?: number;
    center?: [number, number];
    rotate?: [number, number, number];
  }

  export interface ComposableMapProps {
    projection?: string;
    projectionConfig?: ProjectionConfig;
    width?: number;
    height?: number;
    style?: CSSProperties;
    className?: string;
    children?: ReactNode;
  }

  export interface GeographiesProps {
    geography: string | object;
    children: (args: { geographies: any[] }) => ReactNode;
  }

  export interface GeographyProps extends SVGProps<SVGPathElement> {
    geography: any;
  }

  export interface MarkerProps {
    coordinates: [number, number];
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
  }

  export interface LineProps extends SVGProps<SVGPathElement> {
    from: [number, number];
    to: [number, number];
    coordinates?: [number, number][];
    className?: string;
  }

  export interface SphereProps extends SVGProps<SVGPathElement> {}
  export interface GraticuleProps extends SVGProps<SVGPathElement> {}

  export const ComposableMap: React.FC<ComposableMapProps>;
  export const Geographies: React.FC<GeographiesProps>;
  export const Geography: React.FC<GeographyProps>;
  export const Marker: React.FC<MarkerProps>;
  export const Line: React.FC<LineProps>;
  export const Sphere: React.FC<SphereProps>;
  export const Graticule: React.FC<GraticuleProps>;
  export const ZoomableGroup: React.FC<any>;
  export const Annotation: React.FC<any>;
  export function useMapContext(): any;
}
