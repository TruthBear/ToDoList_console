// 프로그램 시작 버튼
const startBtn = document.getElementById('start-btn');

// Todo가 들어갈 배열 공간
const todoData = [];

// 버튼을 누를 시 Todolist 프로그램이 실행된다.
startBtn.addEventListener('click', todoList);

function todoList() {
  while(true){
    // 명령어 입력을 prompt()함수로 받는다.
    const command = prompt("명령어를 입력해주세요!");
    
    if(command === "추가") {
      const addTodo = prompt("todo를 입력해주세요!");
      todoData.push(addTodo);
      console.log(`${addTodo}을 추가하셨습니다.`);
    } else if (command === "삭제") {
      if(todoData.length === 0){
        console.log("삭제할 데이터가 없습니다.")
      } else {
        while(true){
          const deleteTodo = prompt("삭제할 todo의 번호를 입력해주세요!");

          if( 0 < deleteTodo && deleteTodo <= todoData.length) {
            console.log(`${todoData[deleteTodo-1]}를 삭제하셨습니다.`);
            todoData.splice(deleteTodo-1, 1);
            break
          } else {
            console.log("번호를 다시 입력해주세요!")
          }
        }
      }
    } else if (command === "조회") {
      console.log("--------------------");
      if(todoData.length === 0 ) {
        console.log("조회할 데이터가 없습니다.");
      } else {
        todoData.forEach(function(todo, index){
          console.log(`${index +1}. ${todo}`);
        });
      }
      console.log("--------------------");
    } else if (command === "종료") {
      console.log("종료하셨습니다.");
      break;  
    } else {
      console.log("명령어를 다시 입력해주세요.");
    };

  };
};