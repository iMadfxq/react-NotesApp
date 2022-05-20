export const closeModal = (modalWrapper) => {
  modalWrapper.style.opacity = "0";
  setTimeout(() => {
    //to make the transition smoother
    modalWrapper.style.zIndex = "1";
  }, 400);
  if (modalWrapper === document.querySelector('.wrapper')){
    modalWrapper.children[0][1].blur()
  }
};

export const openModal = (modalWrapper) => {
  modalWrapper.style.zIndex = '3'
  modalWrapper.style.opacity = "1";
  if (modalWrapper === document.querySelector('.wrapper')){
    modalWrapper.children[0][1].focus()
  }
}