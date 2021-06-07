import {HReact} from '../react/main.interface';
import {Render, Container} from './main.interface';
import {FiberRoot} from '../react-reconciler/ReactInternalTypes';  
// import {updateContainer, getPublicRootInstance} from '../react-reconciler/ReactFiberReconciler';

function legacyRenderSubtreeIntoContainer(
  parentComponent: any,
  children: any,
  container: Container,
  forceHydrate: boolean,
  callback?: Function,
) {
  console.log('legacyRenderSubtreeIntoContainer', container)
  let root = container._reactRootContainer;
  let fiberRoot: FiberRoot;
  if(!root){
    console.log('no root')
  } else {
    fiberRoot = root._internalRoot;
    console.log('fiberRoot', fiberRoot)
    // updateContainer(children, fiberRoot, parentComponent, callback);
  }
  // return getPublicRootInstance(fiberRoot);
}

export const render: Render = (element, container, callback) => {
  console.log('render by huameow');
  return legacyRenderSubtreeIntoContainer(
    null,
    element,
    container,
    false,
    callback,
  );
}