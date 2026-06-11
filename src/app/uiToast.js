// Küçük ortak toast — Sprint 8 (kopyalama vb. geri bildirimler için)
let toastEl = null;
let toastTimer = 0;

export function showToast(text) {
  if (!toastEl) {
    const style = document.createElement("style");
    style.textContent = `
#alge-toast{position:fixed;z-index:120;left:50%;bottom:calc(120px + env(safe-area-inset-bottom));
  transform:translateX(-50%) translateY(8px);background:rgba(19,41,61,.94);color:#fff;
  padding:9px 16px;border-radius:999px;font:700 12px system-ui,sans-serif;
  box-shadow:0 6px 20px rgba(10,25,40,.3);opacity:0;pointer-events:none;
  transition:opacity .2s ease, transform .2s ease;white-space:nowrap;}
#alge-toast.on{opacity:1;transform:translateX(-50%) translateY(0);}`;
    document.head.appendChild(style);
    toastEl = document.createElement("div");
    toastEl.id = "alge-toast";
    document.body.appendChild(toastEl);
  }
  toastEl.textContent = text;
  toastEl.classList.add("on");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toastEl.classList.remove("on"), 1800);
}
