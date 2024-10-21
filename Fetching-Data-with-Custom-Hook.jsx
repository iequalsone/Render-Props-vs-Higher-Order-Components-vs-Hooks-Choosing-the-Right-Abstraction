import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          setData(data);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false; // Prevent state updates if the component is unmounted
    };
  }, [url]);

  return { data, loading };
}

function App() {
  const { data, loading } = useFetch('https://api.example.com/data');

  return loading ? <p>Loading...</p> : <div>Data: {JSON.stringify(data)}</div>;
}

export default App;
