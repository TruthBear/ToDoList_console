// 프로그램 시작 버튼
const startBtn = document.getElementById('start-btn');

// Todo가 들어갈 배열 공간
const todoData = [];

// 버튼을 누를 시 Todolist 프로그램이 실행된다.
startBtn.addEventListener('click', function(){
  todoList();
});

function todoList() {
  while(true){
    // 명령어 입력을 prompt()함수로 받는다.
    const input = prompt("명령어를 입력해주세요!");
    
    if(input === "추가") {
      const input2 = prompt("todo를 입력해주세요!");
      todoData.push(input2);
      console.log(`${input2}을 추가하셨습니다.`);
    } else if (input === "삭제") {
      const input3 = prompt("삭제할 todo의 번호를 입력해주세요!");
      console.log(`${todoData[input3-1]}를 삭제하셨습니다.`);
      todoData.splice(input3-1, 1);
    } else if (input === "조회") {
      console.log("--------------------");
      for(let i=0; i<todoData.length; i++) {
        console.log(`${i+1}.${todoData[i]}`);
      }
      console.log("--------------------");
    } else if (input === "종료") {
      console.log("종료하셨습니다.");
      break;  
    }

  };
};