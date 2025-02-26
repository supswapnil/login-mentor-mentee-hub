import { useState } from 'react';
import { AuthLayout } from '../components/auth/AuthLayout';
import { RoleToggle } from '../components/auth/RoleToggle';
import { motion } from 'framer-motion';
const Login = () => {
  const [role, setRole] = useState<'mentee' | 'mentor'>('mentee');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };
  return <AuthLayout type="login">
      <div className="max-w-md mx-auto">
        <img alt="Logo" src="/lovable-uploads/ee9fcbfa-fb60-40c3-95e8-5d7f5385ab4a.png" className="h-8 mb-8 object-scale-down" />
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
          delay: 0.1
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
          delay: 0.2
        }} type="submit" className="w-full py-3 rounded-lg text-white font-semibold transition-all duration-300 bg-[#9b0060]">
            Login
          </motion.button>
        </form>

        <motion.p initial={{
        y: 20,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1
      }} transition={{
        duration: 0.5,
        delay: 0.3
      }} className="text-sm text-gray-400 mt-4 text-center">
          <a href="/forgot-password" className="hover:text-white transition-colors duration-300">
            Forgot Password?
          </a>
        </motion.p>

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
            <div className="relative flex justify-center text-sm my-0 mx-0 py-px">
              <span className=".">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center px-4 py-2 border border-gray-600 rounded-lg hover:bg-white/5 transition-all duration-300">
              <img alt="Google" src="/lovable-uploads/f8cbf95b-cd3a-4210-b028-2979ed5e72a6.png" className="w-6 h-6 mr-3" />
              Google
            </button>
            <button className="flex items-center justify-center px-4 py-2 border border-gray-600 rounded-lg hover:bg-white/5 transition-all duration-300">
              <img alt="Facebook" src="/lovable-uploads/ef5e551e-7721-4b82-bbc0-b696bc69dbe3.png" className="w-6 h-6 mr-2" />
              Facebook
            </button>
          </div>
        </motion.div>
      </div>
    </AuthLayout>;
};
export default Login;