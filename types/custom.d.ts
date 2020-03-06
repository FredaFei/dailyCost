// https://stackoverflow.com/questions/51100401/typescript-image-import/51163365
import * as React from 'react';

declare module "*.png" {
  const value: any;
  export = value;
}
declare module '*.svg' {
  const content: any;
  export default content;
}

declare global {
  interface StyledProps {
    className?: string
    style?: React.CSSProperties
  }
}


type RequireAtLeastOne<T, Keys extends keyof T = keyof T> =
  Pick<T, Exclude<keyof T, Keys>>
  & {
  [K in Keys]-?: Required<Pick<T, K>>
}[Keys]

type RequireOnlyOne<T, Keys extends keyof T = keyof T> =
  Pick<T, Exclude<keyof T, Keys>>
  & {
  [K in Keys]-?:
  Required<Pick<T, K>>
  & Partial<Record<Exclude<Keys, K>, undefined>>
}[Keys]

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
