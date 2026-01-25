import { ReactElement } from 'react';

export type PropsWithReactElement<P = unknown> = P & {
  children: ReactElement;
};

export type WithNever<T extends Record<string, unknown>, TNeverKeys extends string> = T & {
  [p in TNeverKeys]?: never;
};
