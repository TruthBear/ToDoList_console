// 프로그램 시작 버튼
const startBtn = document.getElementById('start-btn');

// 버튼을 누를 시 Todolist 프로그램이 실행된다.
startBtn.addEventListener('click', function(){
  todoList();
})


function todoList() {
  while(true){
    // 명령어 입력을 prompt()함수로 받는다.
    const input = prompt("명령어를 입력해주세요!");
    
    if(input === "추가") {
      console.log("추가하셨습니다.");
    }else if(input === "삭제") {
      console.log("삭제하셨습니다.");
    }else if(input === "조회") {
      console.log("조회하셨습니다.")
    }else if(input === "종료") {
      console.log("종료하셨습니다.");
      break;  
    }

  }
}