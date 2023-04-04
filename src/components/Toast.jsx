

function toast({ title = "", message = "", type = "", duration = 3000 }) {
    const main = document.getElementById("toast");
    if (main) {
        const autoRemoveId = setTimeout(() => {
            main.removeChild( toast)
        }, duration);
      const toast = document.createElement("div");
      toast.onclick = function (e) {
        if (e.target.closest(".toast__close")){
            main.removeChild(toast)
            clearTimeout(autoRemoveId)
        }
        
      }
      const icons = {
        success:"fa-solid fa-circle-check",
        info:"fa-solid fa-circle-info",
        error:"fa-solid fa-circle-exclamation",
        Wellcome:"fa-brands fa-airbnb"
      }
      const icon = icons[type]

      toast.classList.add("toast" , `toast--${type}`);

      toast.innerHTML = `
        
    <div class="toast__icon">
      <i class="${icon}"></i>
    </div>
    <div class="toast__body">
      <h3 class="toast__title">${title}</h3>
      <p class="toast__msg">${message}</p>
    </div>
    <div class="toast__close">
      <i class="fa-solid fa-xmark"></i>
    </div>
  
        `;
        main.appendChild(toast);
       
    }
  }
  
  export default toast