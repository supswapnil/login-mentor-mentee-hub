import { useState } from 'react';
import { AuthLayout } from '../components/auth/AuthLayout';
import { RoleToggle } from '../components/auth/RoleToggle';
import { motion } from 'framer-motion';
const Register = () => {
  const [role, setRole] = useState<'mentee' | 'mentor'>('mentee');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
  };
  return <AuthLayout type="register">
      <div className="max-w-md mx-auto">
        <img alt="Logo" src="/lovable-uploads/00a7219e-8940-401d-b222-da4486dabb11.png" className="h-15 mb-8" />
        <RoleToggle role={role} setRole={setRole} />
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div initial={{
          y: 20,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          duration: 0.5
        }}>
            <input type="text" placeholder="Full Name" value={fullName} onChange={e => setFullName(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition-all duration-300" />
          </motion.div>
          
          <motion.div initial={{
          y: 20,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }}>
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition-all duration-300" />
          </motion.div>
          
          <motion.div initial={{
          y: 20,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition-all duration-300" />
          </motion.div>
          
          <motion.button initial={{
          y: 20,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }} type="submit" className="w-full py-3 rounded-lg text-white font-semibold transition-all duration-300 bg-[#9b0060]">
            Register
          </motion.button>
        </form>

        <motion.div initial={{
        y: 20,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1
      }} transition={{
        duration: 0.5,
        delay: 0.4
      }} className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center px-4 py-2 border border-gray-600 rounded-lg hover:bg-white/5 transition-all duration-300">
              <img alt="Google" src="/lovable-uploads/872a98da-4737-4f94-9072-d729a69d1627.png" className="w- h-5 mr-2" />
              Google
            </button>
            <button className="flex items-center justify-center px-4 py-2 border border-gray-600 rounded-lg hover:bg-white/5 transition-all duration-300">
              <img alt="Facebook" className="w-5 h-5 mr-2" src="/lovable-uploads/8b029286-25da-447b-8b5d-1050ccb83ccf.png" />
              Facebook
            </button>
          </div>
        </motion.div>
      </div>
    </AuthLayout>;
};
export default Register;