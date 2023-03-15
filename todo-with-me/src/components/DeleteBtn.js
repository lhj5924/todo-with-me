import { React } from 'react';
// 휴지통 아이콘 넣기

function DeleteBtn ({todo, onClick}) {

  function handleOnClick() {
      console.log(`DeleteBtn - ${todo.id}`);
      onClick(todo.id);
  }

  return (
      <span>
          <button 
          onClick={handleOnClick}
          >X
          </button>
      </span>
  )
}

export default DeleteBtn;