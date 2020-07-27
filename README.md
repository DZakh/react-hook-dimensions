# react-hook-dimensions

Get full control over your dimensions

## Example

```js
const [isVideoSupported, setIsVideoSupported] = useState(true);

const [firstSectionRef, firstSectionDimensions, updateFirstSectionDimensions] = useDimensions({
  dependencies: [],
  defaults: {
    heigth: 300,
  },
});
const [mediaSectionRef, mediaSectionDimensions, updatemediaSectionDimensions] = useDimensions({
  dependencies: [isVideoSupported],
});

useEffect(() => {
  if (isServer) {
    return noop;
  }

  const updateAllDimensions = throttle(() => {
    updateFirstSectionDimensions();
    updatemediaSectionDimensions();
  }, 100);

  window.addEventListener('resize', updateAllDimensions);

  return () => {
    window.removeEventListener('resize', updateAllDimensions);
  };
}, [updateFirstSectionDimensions, updatemediaSectionDimensions]);
```

In progress...
