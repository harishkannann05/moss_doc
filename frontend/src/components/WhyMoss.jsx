import { motion } from 'framer-motion';
import { ArrowLeft, Search, Brain } from 'lucide-react';

const WhyMoss = () => {
    return (
        <section className="py-24 bg-white dark:bg-black relative border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white">
                            Why <span className="text-green-600 dark:text-green-500">Moss Chat?</span>
                        </h2>

                        <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400">
                            <p>
                                Most chatbots only answer questions. Moss Chat helps businesses <span className="text-gray-900 dark:text-white font-semibold">understand what customers are asking.</span>
                            </p>

                            <div className="p-6 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl relative overflow-hidden group hover:border-green-500/30 transition-colors">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Brain size={100} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Identify Gaps</h3>
                                <p className="text-sm">Automatically flag questions your documentation doesn't cover so you can improve your knowledge base.</p>
                            </div>

                            <div className="p-6 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl relative overflow-hidden group hover:border-green-500/30 transition-colors">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Search size={100} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Grow Smarter</h3>
                                <p className="text-sm">The more your customers chat, the smarter Moss gets at predicting needs and refining answers.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual - Chat Simulation */}
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl blur opacity-20" />
                        <div className="relative bg-gray-50 dark:bg-[#0F1117] border border-gray-200 dark:border-white/10 rounded-2xl p-6 shadow-2xl">

                            {/* Fake Chat Header */}
                            <div className="flex items-center gap-4 pb-4 border-b border-white/5 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                <div className="ml-auto text-xs text-gray-500">Live Preview</div>
                            </div>

                            {/* Chat Messages */}
                            <div className="space-y-4 font-mono text-sm">

                                {/* User Message */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="flex justify-end"
                                >
                                    <div className="bg-blue-100 dark:bg-blue-600/20 text-blue-900 dark:text-blue-200 px-4 py-2 rounded-2xl rounded-tr-sm border border-blue-200 dark:border-blue-500/20 max-w-[80%]">
                                        How do I reset my API key?
                                    </div>
                                </motion.div>

                                {/* Bot Message */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                    className="flex justify-start"
                                >
                                    <div className="bg-green-100 dark:bg-green-600/10 text-green-900 dark:text-green-200 px-4 py-2 rounded-2xl rounded-tl-sm border border-green-200 dark:border-green-500/20 max-w-[90%]">
                                        <p className="mb-2">You can reset your API key in the dashboard under <strong>Settings &gt; Security</strong>.</p>
                                        <div className="bg-white/50 dark:bg-black/40 p-2 rounded text-xs text-gray-500 dark:text-gray-400 border border-black/5 dark:border-white/5">
                                            Source: docs/security.md (Confidence: 98%)
                                        </div>
                                    </div>
                                </motion.div>

                                {/* User Message 2 */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 1.5 }}
                                    className="flex justify-end"
                                >
                                    <div className="bg-blue-100 dark:bg-blue-600/20 text-blue-900 dark:text-blue-200 px-4 py-2 rounded-2xl rounded-tr-sm border border-blue-200 dark:border-blue-500/20 max-w-[80%]">
                                        Does it support SAML?
                                    </div>
                                </motion.div>

                                {/* Bot Message 2 (Unanswered) */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 2.0 }}
                                    className="flex justify-start"
                                >
                                    <div className="bg-red-100 dark:bg-red-600/10 text-red-900 dark:text-red-200 px-4 py-2 rounded-2xl rounded-tl-sm border border-red-200 dark:border-red-500/20 max-w-[90%]">
                                        I don't have information about SAML in the current documentation.
                                        <div className="mt-2 flex items-center gap-2 text-xs text-red-400">
                                            <ArrowLeft size={12} /> Flagged for admin review
                                        </div>
                                    </div>
                                </motion.div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyMoss;
