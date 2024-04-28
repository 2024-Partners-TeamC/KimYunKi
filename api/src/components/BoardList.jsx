import React, {useEffect, useState} from 'react';
import axios from "axios";

const BoardList = () => {
  const [boardList, setBoardList] = useState([]);
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);

  const getBoardList = async () => {
    const resp = await axios.get('/todos'); // 2) 게시글 목록 데이터에 할당
    setBoardList(resp.data.todos); // 3) boardList 변수에 할당

    const todos = resp.todos;
    console.log(todos);
  }

  const deletePost = async (id) => {
    await axios.delete(`/todos/${id}`);
    const filteredPost = boardList.filter((post) => post.id !== id);
    setBoardList(filteredPost);
  }

  const updatePost = async (id) => {
    const resp = await axios.put(`/api/todos/${id}`);
    const updatePost = boardList.map((post) => post.id === id ? resp.data : post);
    setBoardList(updatePost)
  }

  const creatPost = async (e) => {
    e.preventDefault();

    const formData = new FormData(); // 파일 업로드를 위한 FormData 사용

    formData.append('todoData', title);
    if (file) {
      formData.append('file', file);
    }

    const resp = await axios.post("/todos", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

    setTitle(null);
    setBoardList((prev) => [...prev, resp.data]);
    setFile(null);
  };

  useEffect(() => {
    getBoardList(); // 1) 게시글 목록 조회 함수 호출
  }, []);

  return (
    <div>
    <form onSubmit={creatPost}>
      <input
        type="text"
        placeholder="할 일 제목 입력"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button type="submit">할 일 추가</button>
    </form>
      <ul>
        {boardList.map((board) => (
          // 4) map 함수로 데이터 출력
          <li key={board.id}>
            <input type="checkbox" checked={board.done} onChange={() => updatePost(board.id)} />
            <h2>{board.title}</h2>
            <img src={board.thumbnail} alt="thumbnail" />
            <button onClick={() => deletePost(board.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BoardList;