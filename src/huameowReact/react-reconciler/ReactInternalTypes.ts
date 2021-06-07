import type {RootTag} from './ReactRootTags';
import type {WorkTag} from './ReactWorkTags';
import type {TypeOfMode} from './ReactTypeOfMode';
import type {Flags} from './ReactFiberFlags';


export type Fiber = {
  tag: WorkTag;
  key: null | string;
  elementType: any;
  type: any;
  stateNode: any;
  return: Fiber | null;
  child: Fiber | null;
  sibling: Fiber | null;
  index: number;
  pendingProps: any;
  memoizedProps: any,
  updateQueue: any;
  memoizedState: any;
  mode: TypeOfMode;
  flags: Flags;
  subtreeFlags: Flags;
  deletions: Array<Fiber> | null;
  nextEffect: Fiber | null;
  firstEffect: Fiber | null;
  lastEffect: Fiber | null;
  alternate: Fiber | null;
  actualDuration?: number;
  actualStartTime?: number;
  selfBaseDuration?: number;
  treeBaseDuration?: number;
};

interface BaseFiberRootProperties {
  tag: RootTag;
  containerInfo: any;
  pendingChildren: any;
  current: Fiber;
  finishedWork: Fiber | null;
  context: Object | null;
  pendingContext: Object | null;
  pooledCache: Cache | null;
};

// interface SuspenseHydrationCallbacks {
//   onHydrated?: (suspenseInstance: SuspenseInstance) => void,
//   onDeleted?: (suspenseInstance: SuspenseInstance) => void,
// };

// interface SuspenseCallbackOnlyFiberRootProperties = {
//   hydrationCallbacks: null | SuspenseHydrationCallbacks,
// };

export interface FiberRoot extends BaseFiberRootProperties {
  
};