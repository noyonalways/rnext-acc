# Module 4 - Part 1 Advanced React: Escape Hatches

## React useRef Hook Practices

### 1. Basic Counter with useRef

- Using `useRef` to maintain a mutable value that doesn't trigger re-renders
- Demonstrates how `useRef` persists values between renders
- Shows the difference between state and ref updates

### 2. Cat Friends Image Gallery

- Advanced DOM manipulation using `useRef`
- Managing multiple refs using an object structure
- Smooth scrolling implementation with `scrollIntoView`
- Dynamic image rendering with ref-based navigation

### 3. Forward Ref Implementation

- Demonstrates React 18's simplified ref forwarding
- Parent-to-child ref passing for DOM manipulation
- Focus management between components

### 4. Stopwatch Implementation

Basic Version in

- Using `useRef` for interval management
- Combining `useState` and `useRef` for timer functionality
- Proper cleanup of intervals

Enhanced Version

- Advanced timer features with pause/resume functionality
- State management for complex timing scenarios
- Handling edge cases in timer implementation

## Key Learning Points

1. **useRef Best Practices**

   - Using refs for DOM manipulation
   - Managing mutable values without re-renders
   - Proper cleanup of ref-based side effects

2. **Component Patterns**

   - Organizing multiple refs
   - Combining refs with state management
   - Parent-child component communication using refs

3. **Performance Optimization**

   - When to use refs vs state
   - Efficient DOM updates
   - Proper cleanup to prevent memory leaks

4. **React 18 Features**
   - Simplified ref forwarding
   - Modern patterns for ref management
   - Integration with React's latest features
