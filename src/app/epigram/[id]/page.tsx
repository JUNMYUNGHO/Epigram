"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const EpigramDetail = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const epigrams = [
    { id: "1", title: "명언 1", content: "인생은 선택의 연속이다." },
    { id: "2", title: "명언 2", content: "노력 없이 얻는 것은 없다." },
  ];

  const epigram = epigrams.find((e) => e.id === params.id);

  const [comments, setComments] = useState<string[]>([]);
  const [comment, setComment] = useState("");

  if (!epigram) {
    return <div className="text-center text-red-500">존재하지 않는 에피그램입니다.</div>;
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment) return;
    setComments([...comments, comment]);
    setComment("");
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("링크가 복사되었습니다!");
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold">{epigram.title}</h1>
      <p className="mt-3 text-gray-700">{epigram.content}</p>

      {/* 공유 버튼 */}
      <button
        onClick={handleShare}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        공유하기
      </button>

      {/* 댓글 섹션 */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold">댓글</h2>
        <form onSubmit={handleCommentSubmit} className="mt-2 flex gap-2">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border p-2 w-full rounded-md"
            placeholder="댓글을 입력하세요"
          />
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">
            등록
          </button>
        </form>
        <ul className="mt-4 space-y-2">
          {comments.map((c, index) => (
            <li key={index} className="p-2 bg-gray-100 rounded-md">
              {c}
            </li>
          ))}
        </ul>
      </div>

      {/* 돌아가기 버튼 */}
      <button onClick={() => router.push("/")} className="mt-6 px-4 py-2 bg-gray-500 text-white rounded-lg">
        메인으로
      </button>
    </div>
  );
};

export default EpigramDetail;
