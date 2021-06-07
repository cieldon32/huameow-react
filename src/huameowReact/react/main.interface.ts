// import * as PropTypes from 'prop-types';

export namespace HReact {
  type Key = string | number;

  type ReactText = string | number;

  type ReactChild = ReactElement | ReactText;

  type ReactFragment = {} | ReactNodeArray;

  export interface ReactNodeArray extends Array<ReactNode> {};

  interface ReactPortal extends ReactElement {
    key: Key | null;
    children: ReactNode;
  };

  export type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;

  type JSXElementConstructor<P> =
        | ((props: P) => ReactElement<any, any> | null);

  interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> {
    type: T;
    props: P;
    key: Key | null;
  };


  type PropsWithChildren<P> = P & { children?: ReactNode };

  interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
    defaultProps?: Partial<P>;
    displayName?: string;
  };

  export type SFCElement<P> = FunctionComponentElement<P>;

  interface FunctionComponentElement<P> extends ReactElement<P, FunctionComponent<P>> {
      ref?: 'ref' extends keyof P ? P extends { ref?: infer R } ? R : never : never;
  };

}