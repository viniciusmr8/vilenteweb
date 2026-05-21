import { useEffect } from 'react';

export const useAntiCopy = () => {
  useEffect(() => {
    const blockContext = (e: MouseEvent) => e.preventDefault();
    const blockSelect = (e: Event) => e.preventDefault();
    const blockCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      alert("Cópia desativada neste site.");
    };
    const blockKeys = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      const ctrl = e.ctrlKey || e.metaKey;
      if (
        key === "printscreen" ||
        key === "f12" ||
        (ctrl && ["c", "x", "s", "u", "p", "i", "j"].includes(key))
      ) {
        e.preventDefault();
        e.stopPropagation();
        alert("Ação bloqueada para proteger o conteúdo.");
      }
    };

    const handleVisibility = () => {
      // Quando janela perde foco (ex.: iniciando captura), reforça watermark
      const body = document.body;
      body.classList.add("watermark"); // mantemos watermark sempre ativa
    };

    // Event listeners
    document.addEventListener("contextmenu", blockContext);
    document.addEventListener("selectstart", blockSelect);
    document.addEventListener("dragstart", blockSelect);
    document.addEventListener("copy", blockCopy);
    document.addEventListener("cut", blockCopy);
    window.addEventListener("keydown", blockKeys, true);
    document.addEventListener("visibilitychange", handleVisibility);

    // Print dialog
    const beforePrint = () => {
      const body = document.body as HTMLElement;
      body.style.display = "none";
    };
    const afterPrint = () => {
      const body = document.body as HTMLElement;
      body.style.display = "";
    };
    window.addEventListener("beforeprint", beforePrint);
    window.addEventListener("afterprint", afterPrint);

    // Inicializa watermark
    document.body.classList.add("watermark");

    return () => {
      document.removeEventListener("contextmenu", blockContext);
      document.removeEventListener("selectstart", blockSelect);
      document.removeEventListener("dragstart", blockSelect);
      document.removeEventListener("copy", blockCopy);
      document.removeEventListener("cut", blockCopy);
      window.removeEventListener("keydown", blockKeys, true);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("beforeprint", beforePrint);
      window.removeEventListener("afterprint", afterPrint);
      document.body.classList.remove("watermark");
    };
  }, []);
};