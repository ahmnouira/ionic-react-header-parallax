export type UseIonHeaderParallaxInput = {
  image: string;
  expandedColor?: string;
  titleColor?: string;
  maximumHeight?: number;
  defaultImage?: string;
  showBarButtons?: boolean;
  wait?: number;
  buttonsToShow?: "start" | "end";
  titleStyle?: Partial<CSSStyleDeclaration>;
  endButtonStyle?: Partial<CSSStyleDeclaration>;
  startButtonStyle?: Partial<CSSStyleDeclaration>;
};

export type UseIonHeaderParallaxResult = {
  ref: React.RefObject<any>;
  loading: boolean;
};
