import { useEffect, useState } from "react";

const TopLoader = ({ loading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;

    if (loading) {
      setProgress(0);
      interval = setInterval(() => {
        setProgress((prev) => (prev < 90 ? prev + Math.random() * 10 : prev));
      }, 200);
    } else {
      setProgress(100);
      const timeout = setTimeout(() => setProgress(0), 300);
      return () => clearTimeout(timeout);
    }

    return () => clearInterval(interval);
  }, [loading]);

  return (
    <div
      style={{
        position: "relative",
        top: 0,
        left: 0,
        height: "3px",
        width: `${progress}%`,
        backgroundColor: "#3b82f6", // Tailwind blue-500
        transition: "width 0.3s ease",
        zIndex: 9999,
      }}
    />
  );
};

export default TopLoader;
