
import React from 'react';
import { motion } from 'framer-motion';

interface RoleToggleProps {
  role: 'mentee' | 'mentor';
  setRole: (role: 'mentee' | 'mentor') => void;
}

export const RoleToggle = ({ role, setRole }: RoleToggleProps) => {
  return (
    <div className="flex gap-4 mb-8">
      <button
        onClick={() => setRole('mentee')}
        className={`px-6 py-2 rounded-lg transition-all duration-300 ${
          role === 'mentee'
            ? 'bg-secondary text-white'
            : 'bg-transparent text-gray-400 hover:text-white'
        }`}
      >
        Mentee
      </button>
      <button
        onClick={() => setRole('mentor')}
        className={`px-6 py-2 rounded-lg transition-all duration-300 ${
          role === 'mentor'
            ? 'bg-secondary text-white'
            : 'bg-transparent text-gray-400 hover:text-white'
        }`}
      >
        Mentor
      </button>
    </div>
  );
};
