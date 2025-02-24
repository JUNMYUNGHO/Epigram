"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const NewEpigram = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) {
      alert("제목과 내용을 입력하세요.");
      return;
    }

    // TODO: 백엔드 API 연동하여 저장 기능 추가
    alert("에피그램이 추가되었습니다!");
    router.push("/");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold">새 에피그램 추가</h1>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div>
          <label className="block text-gray-700">제목</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 w-full rounded-md"
            placeholder="에피그램 제목 입력"
          />
        </div>
        <div>
          <label className="block text-gray-700">내용</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border p-2 w-full h-32 rounded-md"
            placeholder="에피그램 내용을 입력하세요"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          추가하기
        </button>
      </form>
    </div>
  );
};

export default NewEpigram;
