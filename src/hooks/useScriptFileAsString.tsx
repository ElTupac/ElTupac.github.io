import { useEffect, useState } from "react";

const useScriptFileAsString = () => {
  const [script, setScript] = useState<string>();

  useEffect(() => {
    const scripts = document.querySelectorAll("head script");
    for (const script of scripts) {
      console.log(import.meta.env.PROD);
      if (
        script
          .getAttribute("src")
          ?.includes(import.meta.env.PROD ? "/assets/index" : "/@vite/client")
      ) {
        const scriptLink = script.getAttribute("src");
        fetch(scriptLink || "/")
          .then((res) => res.text())
          .then((res) => {
            setScript(res.replace(/\r?\n|\r/g, ""));
          });
      }
    }
  }, []);

  return script;
};

export default useScriptFileAsString;
