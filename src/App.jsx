import React from 'react';
import Editor from './components/Editor';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-4">Welcome to CREATO</h1>
      <Editor />
    </div>
  );
}
