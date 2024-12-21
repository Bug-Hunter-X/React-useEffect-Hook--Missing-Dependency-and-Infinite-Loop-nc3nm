```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [count]); // Correctly includes count as a dependency

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
```