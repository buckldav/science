import { useEnvelope, EnvelopeProvider, colorKeys } from "./context";
import Puzzle1 from "./puzzle1";

function EnvelopeLabContent() {
  const { lockColor, setLockColor } = useEnvelope();

  return (
    <div>
      <p>Current Lock Color: {lockColor}</p>
      <button onClick={() => setLockColor("red")}>Set Lock Color to Red</button>
      {lockColor !== null && <Puzzle1 />}
    </div>
  );
}

export default function EnvelopeLab() {
  return (
    <EnvelopeProvider>
      <EnvelopeLabContent />
    </EnvelopeProvider>
  );
}
