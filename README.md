# React useEffect Hook: Missing Dependency and Infinite Loop

This repository demonstrates a common error in React's `useEffect` hook: missing dependencies and resulting infinite loop.  The example shows how forgetting to include `count` in the dependency array leads to unexpected behavior. The solution illustrates the correct way to manage the dependency array for this specific scenario.

## Bug

The `bug.js` file contains a component that uses `useEffect` to update a counter every second.  However, the dependency array is empty (`[]`), meaning the effect runs only once after the initial render. While this seems correct, the `setInterval` keeps updating the `count`, causing the component to re-render continuously (infinite loop). 

## Solution

The `bugSolution.js` file presents the corrected code. By including `count` in the dependency array, the effect now runs only when the value of `count` changes.  This avoids the infinite loop.
