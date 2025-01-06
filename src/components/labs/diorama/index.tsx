import React from "react";
import { hasCredsKeys, KEY_PIN, KEY_EMAIL } from "./util";

type DioramaLabelGenProps = {
  sheetData: any[] | null;
};

const IGNORE_KEYS = [
  "Timestamp",
  "Email Address",
  "Score",
  "PIN",
  "What type of diorama did you make?",
  "Upload a picture of your Diorama",
];

export default function DioramaLabelGen({ sheetData }: DioramaLabelGenProps) {
  const [creds, setCreds] = React.useState<object | null>(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      console.log("poll");
      const creds = sessionStorage.getItem("creds");
      if (creds !== null) {
        setCreds(JSON.parse(creds));
        clearInterval(interval); // Stop polling when creds is found
      }
    }, 1000); // Poll every second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  if (!hasCredsKeys(creds) || sheetData === null) {
    return "Not found";
  } else {
    const data = sheetData.find(
      (val) =>
        val[KEY_EMAIL] === creds![KEY_EMAIL] && val[KEY_PIN] === creds![KEY_PIN]
    );
    if (data) {
      return (
        <ul className="list-none">
          {Object.entries(data)
            .filter(([k, v]) => !IGNORE_KEYS.includes(k) && v)
            .map(([k, v]) => (
              <li key={k} className="mb-3">
                <h1>{k.replace(" (optional)", "").replace("your", "the")}</h1>
                <p>{v as string}</p>
              </li>
            ))}
        </ul>
      );
    } else {
      return <>Not found</>;
    }
  }
}
