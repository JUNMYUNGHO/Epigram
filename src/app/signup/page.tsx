// src/app/signup/page.tsx
'use client'

import React, { useState } from 'react';
import './page.css';  // page.css 파일을 임포트

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 간단한 검증 (이메일과 비밀번호가 빈 값이면 에러)
    if (!email || !password || !name) {
      setError('모든 필드를 입력해주세요.');
      return;
    }

    // 실제 회원가입 로직을 처리 (예: 백엔드 API 호출)
    // 예시로 alert 사용
    alert(`회원가입 완료! \n이메일: ${email}, 비밀번호: ${password}, 이름: ${name}`);

    // 회원가입 성공 후 필요한 처리 (예: 로그인 페이지로 이동 등)
  };

  return (
    <div className="signup-container">
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">이름</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름을 입력하세요"
          />
        </div>
        <div>
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일을 입력하세요"
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요"
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default SignUp;
