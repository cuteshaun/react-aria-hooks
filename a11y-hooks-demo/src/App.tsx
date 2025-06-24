import { useAnnouncer } from "./hooks/useAnnouncer"


export function App() {
  const announce = useAnnouncer();

  const handleClick = () => {
    announce("Button clicked");
  };

  return (
    <div>
      <h2>Announcer Demo</h2>
      <button type="button" onClick={handleClick}>Click</button>
    </div>
  );
}
