const initState = false;

const HEADERMENU_TOGGLE = "HEADERMENU_TOGGLE";

function HeaderMenuReducer(state = initState, action) {
  if(state===undefined){
      state = initState;
  }
  if(action.type==HEADERMENU_TOGGLE){
    if(state){
      state = false;
    }else{
      state = true;
    }
  }
  //Animation
  const menuBar = document.getElementsByClassName("menuBar");
  const headerMenuOpen = document.getElementById("headerMenuOpen");
  
  if(state){
    console.log("여기")
  Array.from(menuBar).forEach(bar=>{
      if(!bar.classList.contains("openMenu")){
        bar.classList.add("openMenu");
      }
  })

  if(headerMenuOpen!=null){
      Array.from(headerMenuOpen).forEach(bar=>{
        if(bar.classList.contains("menuOpen")){
          bar.classList.add("menuOpen");
        }
      })
  }

  }else{

    Array.from(menuBar).forEach(bar=>{
      if(bar.classList.contains("openMenu")){
        bar.classList.remove("openMenu");
      }
     })
     if(headerMenuOpen!=null){
      Array.from(headerMenuOpen).forEach(bar=>{
        if(bar.classList.contains("menuOpen")){
          bar.classList.add("menuOpen");
        }
      })
    }
  }
  console.log("상태변함");
  if(state){
    console.log("열림");
  }else{
    console.log("닫힘");
  }
  return state;
}

export default HeaderMenuReducer;

