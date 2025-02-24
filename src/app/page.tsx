'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Comment {
  id: number;
  text: string;
  author: string;
}

interface Epigram {
  id: number;
  content: string;
  author: string;
  comments: Comment[];
  likes: number;
}

export default function Home() {
  const [epigrams, setEpigrams] = useState<Epigram[]>([
    {
      id: 1,
      content: '삶이 있는 한 희망은 있다.',
      author: '키케로',
      comments: [{ id: 1, text: '좋은 글이네요!', author: 'user1' }],
      likes: 5,
    },
    {
      id: 2,
      content: '행복은 습관이다. 그것을 몸에 지니라.',
      author: '허버드',
      comments: [{ id: 2, text: '습관의 중요성에 공감합니다.', author: 'user2' }],
      likes: 3,
    },
  ]);

  const addComment = (epigramId: number, commentText: string) => {
    if (!commentText.trim()) return;

    setEpigrams((prevEpigrams) =>
      prevEpigrams.map((epigram) =>
        epigram.id === epigramId
          ? { ...epigram, comments: [...epigram.comments, { id: Date.now(), text: commentText, author: 'guest' }] }
          : epigram
      )
    );
  };

  const likeEpigram = (epigramId: number) => {
    setEpigrams((prevEpigrams) =>
      prevEpigrams.map((epigram) => (epigram.id === epigramId ? { ...epigram, likes: epigram.likes + 1 } : epigram))
    );
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Epigram!</h1>
      <p className="text-gray-600 mb-4">This is the main page.</p>

      {/* 회원가입 버튼 */}
      <Link href="/signup">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">회원가입</button>
      </Link>

      {/* 검색 버튼 */}
      <Link href="/search">
        <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">🔍 검색</button>
      </Link>

      {/* 새 에피그램 추가 버튼 */}
      <Link href="/epigram/new">
        <button className="mt-4 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">
          ➕ 새 에피그램 추가
        </button>
      </Link>

      {/* 에피그램 리스트 */}
      <div className="w-full max-w-xl mt-8">
        <h2 className="text-2xl font-bold mb-4">📜 오늘의 에피그램</h2>

        {epigrams.map((epigram) => (
          <div key={epigram.id} className="border rounded-lg p-4 mb-6 shadow-lg">
            <p className="text-lg font-semibold">"{epigram.content}"</p>
            <p className="text-sm text-gray-500 mt-1">- {epigram.author}</p>

            {/* 상세 페이지 이동 버튼 */}
            <Link href={`/epigram/${epigram.id}`}>
              <button className="mt-2 px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500">
                상세 보기 🔎
              </button>
            </Link>

            {/* 좋아요 버튼 */}
            <div className="mt-3 flex items-center space-x-2">
              <button onClick={() => likeEpigram(epigram.id)} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                ❤️ {epigram.likes}
              </button>
            </div>

            {/* 댓글 리스트 */}
            <div className="mt-4">
              <h3 className="text-md font-bold mb-2">💬 댓글</h3>
              {epigram.comments.length > 0 ? (
                <ul className="space-y-2">
                  {epigram.comments.map((comment) => (
                    <li key={comment.id} className="border-l-4 border-blue-500 pl-2 text-sm">
                      <span className="font-semibold">{comment.author}:</span> {comment.text}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400 text-sm">댓글이 없습니다.</p>
              )}
            </div>

            {/* 댓글 입력 폼 */}
            <div className="mt-4">
              <input
                type="text"
                placeholder="댓글을 입력하세요..."
                className="w-full border p-2 rounded text-sm"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    addComment(epigram.id, e.currentTarget.value);
                    e.currentTarget.value = '';
                  }
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}





