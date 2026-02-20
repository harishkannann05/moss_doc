
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Zap, Globe, Server } from 'lucide-react';
import logo from '../assets/moss.svg';

const Typewriter = ({ text, delay = 0 }) => {
    const chars = text.split("");

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: delay }
        }
    };

    const charVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    return (
        <motion.span variants={container} className="inline">
            {chars.map((char, index) => (
                <motion.span key={index} variants={charVariants}>
                    {char}
                </motion.span>
            ))}
        </motion.span>
    );
};

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center bg-white dark:bg-black overflow-hidden pt-20 transition-colors duration-300">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 right-[-20%] w-[600px] h-[600px] bg-green-500/20 blur-[120px] rounded-full dark:mix-blend-screen mix-blend-multiply opacity-20 dark:opacity-50"
                />
                <motion.div
                    animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full dark:mix-blend-screen mix-blend-multiply opacity-20 dark:opacity-30"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-white/80 to-transparent dark:from-black dark:via-black dark:to-transparent z-10" />
            </div>

            <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8"
                >
                    <motion.div variants={itemVariants} className="mb-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-xs font-semibold tracking-wide">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                            </span>
                            v1.0 Hackathon Build
                        </div>
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-heading font-bold leading-[1.1] tracking-tight text-gray-900 dark:text-white mb-6">
                        <Typewriter text="Build AI Customer Support" delay={0.2} /> <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-600">
                            <Typewriter text="from Your Own Data" delay={1.5} />
                        </span>
                    </motion.h1>

                    <motion.div variants={itemVariants} className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6">
                        Turn PDFs into <span className="text-green-600 dark:text-green-400 font-semibold font-heading">AI Sales Assistants</span>
                    </motion.div>

                    <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
                        Moss Chat empowers your business with intelligent chatbots and Telegram bots trained on your data.
                        Drive sales and support automatically with zero complex setup.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative overflow-hidden px-8 py-4 bg-green-500 hover:bg-green-600 text-white dark:text-black font-bold rounded-lg transition-all flex items-center gap-2 group shadow-lg shadow-green-500/20"
                        >
                            <motion.div
                                className="absolute top-0 left-0 w-full h-full bg-white/20 skew-x-12"
                                initial={{ x: '-100%' }}
                                animate={{ x: '200%' }}
                                transition={{ repeat: Infinity, duration: 2, ease: "linear", repeatDelay: 3 }}
                            />
                            <span className="relative z-10">Start Free</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-bold rounded-lg hover:bg-gray-200 dark:hover:bg-white/10 transition-all flex items-center gap-2"
                        >
                            View Documentation
                        </motion.button>
                    </motion.div>

                    <motion.div variants={itemVariants} className="pt-8 flex items-center gap-8 text-gray-500 dark:text-gray-500 text-sm font-medium">
                        <div className="flex items-center gap-2">
                            <MessageSquare className="w-5 h-5 text-green-500" /> RAG Powered
                        </div>
                        <div className="flex items-center gap-2">
                            <Globe className="w-5 h-5 text-blue-500" /> Multi-Language
                        </div>
                        <div className="flex items-center gap-2">
                            <Zap className="w-5 h-5 text-purple-500" /> Instant Setup
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="text-xs text-green-500/50 mt-4 font-mono">
                        “Built in 30 hours for Hackathon”
                    </motion.div>
                </motion.div>

                {/* Right Content - Visual/Code */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotateY: 30 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                    className="relative lg:h-[600px] w-full flex items-center justify-center perspective-1000"
                >
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-full max-w-lg bg-gray-50 dark:bg-[#0F1117] rounded-xl border border-gray-200 dark:border-white/10 shadow-2xl overflow-hidden group hover:shadow-green-500/20 transition-shadow duration-500"
                    >
                        <div className="flex items-center px-4 py-3 bg-white dark:bg-white/5 border-b border-gray-200 dark:border-white/5">
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <div className="ml-4 text-xs text-gray-400 dark:text-gray-500 font-mono">connect.js</div>
                        </div>

                        <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
                            <div className="text-gray-400">
                                <span className="text-purple-400">const</span> client = <span className="text-purple-400">new</span> <span className="text-yellow-300">MongoClient</span>(url);
                                <br /><br />
                                <span className="text-purple-400">async function</span> <span className="text-blue-400">run</span>() {'{'}
                                <br />
                                &nbsp;&nbsp;<span className="text-purple-400">try</span> {'{'}
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">// Connect the client to the server</span>
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">await</span> client.<span className="text-blue-400">connect</span>();
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">// Establish and verify connection</span>
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">await</span> client.<span className="text-blue-400">db</span>(<span className="text-green-300">"admin"</span>).<span className="text-blue-400">command</span>({'{'} <span className="text-orange-300">ping</span>: 1 {'}'});
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;console.<span className="text-blue-400">log</span>(<span className="text-green-300">"Connected successfully to server"</span>);
                                <br />
                                &nbsp;&nbsp;{'}'} <span className="text-purple-400">finally</span> {'{'}
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">// Ensures that the client will close when you finish/error</span>
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">await</span> client.<span className="text-blue-400">close</span>();
                                <br />
                                &nbsp;&nbsp;{'}'}
                                <br />
                                {'}'}
                                <br />
                                <span className="text-blue-400">run</span>().<span className="text-blue-400">catch</span>(console.<span className="text-red-400">dir</span>);
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating UI Elements */}
                    <motion.div
                        animate={{ y: [0, -25, 0], rotate: [0, 5, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute -top-10 -right-10 bg-white/80 dark:bg-black/80 backdrop-blur border border-green-500/30 p-4 rounded-xl shadow-lg hidden md:block"
                    >
                        <div className="flex items-center gap-3">
                            <div className="bg-green-500/20 p-2 rounded-lg text-green-400">
                                <Server size={20} />
                            </div>
                            <div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">Cluster Status</div>
                                <div className="text-sm font-bold text-gray-900 dark:text-white">Operational</div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
