import {HReact} from '../react/main.interface';
import {FiberRoot} from '../react-reconciler/ReactInternalTypes';                                      

export type RootType = {
    render(children: HReact.ReactNodeArray): void,
    unmount(): void,
    _internalRoot: FiberRoot,
  };

export type Container =
  | (Element & {_reactRootContainer?: RootType})
  | (Document & {_reactRootContainer?: RootType});

export interface Render {
    (
        element: HReact.SFCElement<any> | Array<HReact.SFCElement<any>>,
        container: Container,
        callback?: () => void
    ): void;
}