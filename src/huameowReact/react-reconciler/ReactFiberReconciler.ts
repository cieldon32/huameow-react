import {HReact} from '../react/main.interface';

// export function updateContainer(
//     element: HReact.ReactNodeArray,
//     container: OpaqueRoot,
//     parentComponent: ?React$Component<any, any>,
//     callback: ?Function,
// ): Lane {
//     if (__DEV__) {
//         onScheduleRoot(container, element);
//     }
//     const current = container.current;
//     const eventTime = requestEventTime();
//     if (__DEV__) {
//         // $FlowExpectedError - jest isn't a global, and isn't recognized outside of tests
//         if ('undefined' !== typeof jest) {
//             warnIfUnmockedScheduler(current);
//             warnIfNotScopedWithMatchingAct(current);
//         }
//     }
//     const lane = requestUpdateLane(current);

//     if (enableSchedulingProfiler) {
//         markRenderScheduled(lane);
//     }

//     const context = getContextForSubtree(parentComponent);
//     if (container.context === null) {
//         container.context = context;
//     } else {
//         container.pendingContext = context;
//     }

//     if (__DEV__) {
//         if (
//             ReactCurrentFiberIsRendering &&
//             ReactCurrentFiberCurrent !== null &&
//             !didWarnAboutNestedUpdates
//         ) {
//             didWarnAboutNestedUpdates = true;
//             console.error(
//                 'Render methods should be a pure function of props and state; ' +
//                 'triggering nested component updates from render is not allowed. ' +
//                 'If necessary, trigger nested updates in componentDidUpdate.\n\n' +
//                 'Check the render method of %s.',
//                 getComponentNameFromFiber(ReactCurrentFiberCurrent) || 'Unknown',
//             );
//         }
//     }

//     const update = createUpdate(eventTime, lane);
//     // Caution: React DevTools currently depends on this property
//     // being called "element".
//     update.payload = { element };

//     callback = callback === undefined ? null : callback;
//     if (callback !== null) {
//         if (__DEV__) {
//             if (typeof callback !== 'function') {
//                 console.error(
//                     'render(...): Expected the last optional `callback` argument to be a ' +
//                     'function. Instead received: %s.',
//                     callback,
//                 );
//             }
//         }
//         update.callback = callback;
//     }

//     enqueueUpdate(current, update, lane);
//     const root = scheduleUpdateOnFiber(current, lane, eventTime);
//     if (root !== null) {
//         entangleTransitions(root, current, lane);
//     }

//     return lane;
// }