import { useEffect, useState } from "react";
import { getHealth } from "../services/healthService";

/**
 * Hook to fetch and expose the backend health status.
 */
export function useHealth() {
  const [health, setHealth] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    getHealth()
      .then((data) => {
        if (active) setHealth(data);
      })
      .catch(() => {
        if (active) setError("Unable to reach backend");
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return { health, error, loading };
}

export default useHealth;
