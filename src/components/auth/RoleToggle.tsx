import React from 'react';
import { motion } from 'framer-motion';
interface RoleToggleProps {
  role: 'mentee' | 'mentor';
  setRole: (role: 'mentee' | 'mentor') => void;
}
export const RoleToggle = ({
  role,
  setRole
}: RoleToggleProps) => {
  return <div className="flex gap-4 mb-8 mx-[75px]">
      <button onClick={() => setRole('mentee')} className="mx-0 bg-[#9b0060] font-normal rounded-lg px-[10px]">
        Mentee
      </button>
      <button onClick={() => setRole('mentor')} className="my-[2px] bg-[0] rounded-md text-base bg-[#9b0060] mx-[75px] px-[10px]">
        Mentor
      </button>
    </div>;
};