import React from 'react';
import { motion } from 'framer-motion';
interface AuthLayoutProps {
  children: React.ReactNode;
  type: 'login' | 'register';
}
export const AuthLayout = ({
  children,
  type
}: AuthLayoutProps) => {
  return <div className="min-h-screen w-full bg-accent flex">
      {type === 'login' ? <>
          <motion.div initial={{
        x: -50,
        opacity: 0
      }} animate={{
        x: 0,
        opacity: 1
      }} transition={{
        duration: 0.5
      }} className="w-[40%] p-12 flex flex-col items-center justify-center text-white bg-[#336dce]">
            <h1 className="text-4xl font-bold mb-4">Welcome</h1>
            <p className="text-lg mb-8">Join our community of learners and mentors</p>
            <button onClick={() => window.location.href = '/register'} className="px-8 py-3 rounded-lg bg-transparent border- b2order-white hover:bg-white hover:text-primary transition-all duration-300 font-semibold">
              Register
            </button>
          </motion.div>
          <motion.div initial={{
        x: 50,
        opacity: 0
      }} animate={{
        x: 0,
        opacity: 1
      }} transition={{
        duration: 0.5
      }} className="w-[60%] p-12 bg-[#f0f4f8]">
            {children}
          </motion.div>
        </> : <>
          <motion.div initial={{
        x: -50,
        opacity: 0
      }} animate={{
        x: 0,
        opacity: 1
      }} transition={{
        duration: 0.5
      }} className="w-[60%] p-12 bg-[#e8e8e8]">
            {children}
          </motion.div>
          <motion.div initial={{
        x: 50,
        opacity: 0
      }} animate={{
        x: 0,
        opacity: 1
      }} transition={{
        duration: 0.5
      }} className="w-[40%] p-12 flex flex-col items-center justify-center text-white bg-[#336dce]">
            <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
            <p className="text-lg mb-8">Already have an account? Sign in to continue your journey</p>
            <button onClick={() => window.location.href = '/login'} className="px-8 py-3 rounded-lg bg-transparent border-2 border-white hover:bg-white hover:text-primary transition-all duration-300">
              Login
            </button>
          </motion.div>
        </>}
    </div>;
};