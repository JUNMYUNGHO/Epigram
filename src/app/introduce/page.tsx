// src/app/introduce/page.tsx

import React from 'react';

const IntroducePage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* 제목 */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Epigram 소개</h1>
        <p className="mt-2 text-lg text-gray-600">에피그램은 매일 새로운 영감을 주는 짧은 문구를 제공합니다.</p>
      </header>

      {/* 주요 기능 */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">주요 기능</h2>
        <ul className="space-y-4">
          <li className="flex items-center space-x-3">
            <span className="text-blue-500">✔️</span>
            <span>에피그램 추가하기</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-blue-500">✔️</span>
            <span>사용자가 추가한 에피그램 검색하기</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-blue-500">✔️</span>
            <span>사용자 맞춤형 추천 기능</span>
          </li>
        </ul>
      </section>

      {/* 기술 스택 */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">사용 기술 스택</h2>
        <div className="flex space-x-6">
          <div className="flex items-center space-x-2">
            <img src="/icons/nextjs.svg" alt="Next.js" className="h-8" />
            <span className="text-lg text-gray-800">Next.js</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src="/icons/react.svg" alt="React" className="h-8" />
            <span className="text-lg text-gray-800">React</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src="/icons/tailwindcss.svg" alt="TailwindCSS" className="h-8" />
            <span className="text-lg text-gray-800">TailwindCSS</span>
          </div>
        </div>
      </section>

      {/* 개발 목표 */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">개발 목표</h2>
        <p className="text-lg text-gray-600">프론트엔드 개발 역량을 향상하고, 프로젝트 관리 능력을 키우는 것이 목표입니다.</p>
      </section>
    </div>
  );
};

export default IntroducePage;
