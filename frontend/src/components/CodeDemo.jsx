import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

const tabs = ['Install', 'Initialize', 'Run', 'Embed'];

const codeSnippets = {
    Install: `$ npm install @sha27/mosschat`,
    Initialize: `$ npx @sha27/mosschat init
> Detecting project type...
> Configuring AI model...
> Setup complete!`,
    Run: `$ npm run dev
> Moss Chat server running at http://localhost:3000
> Board available at /admin`,
    Embed: `<script src="https://cdn.moss.chat/widget.js" 
  data-tenant="YOUR_TENANT_ID"
  data-theme="dark">
</script>`
};

const CodeDemo = () => {
    const [activeTab, setActiveTab] = useState('Install');
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(codeSnippets[activeTab]);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="py-24 bg-gray-50 dark:bg-[#0a0a0a] border-t border-gray-200 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-900/10 blur-[130px] rounded-full" />

            <div className="max-w-7xl mx-auto px-4 lg:flex gap-16 items-center">
                <div className="lg:w-1/2 space-y-8">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white leading-tight">
                        Setup in <br />
                        <span className="text-green-600 dark:text-green-500">Minutes, Not Days</span>.
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                        Install, configure, and launch your AI chatbot with a single CLI command. No complex infrastructure required.
                    </p>

                    <div className="space-y-4">
                        {['CLI-based setup (plug & play)', 'Works with PostgreSQL or MongoDB', 'Secure API key handling'].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                <div className="bg-green-500/20 p-1 rounded-full text-green-400">
                                    <Check size={16} />
                                </div>
                                {item}
                            </div>
                        ))}
                    </div>

                    <button className="text-green-600 dark:text-green-400 font-semibold hover:text-green-700 dark:hover:text-green-300 transition-colors flex items-center gap-2 group">
                        Explore the API Reference <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </div>

                <div className="lg:w-1/2 mt-12 lg:mt-0">
                    <div className="bg-[#111] rounded-2xl border border-white/10 shadow-2xl overflow-hidden relative group">
                        <div className="flex justify-between items-center px-6 py-4 bg-white/5 border-b border-white/5">
                            <div className="flex gap-2">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`relative px-3 py-1 rounded-md text-sm font-medium transition-colors ${activeTab === tab
                                            ? 'text-green-600 dark:text-green-400'
                                            : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                                            }`}
                                    >
                                        {activeTab === tab && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute inset-0 bg-green-500/10 rounded-md"
                                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                            />
                                        )}
                                        <span className="relative z-10">{tab}</span>
                                    </button>
                                ))}
                            </div>
                            <button onClick={copyToClipboard} className="text-gray-500 hover:text-white transition-colors">
                                {copied ? <Check size={18} /> : <Copy size={18} />}
                            </button>
                        </div>

                        <div className="p-6 overflow-x-auto bg-[#0a0a0a] min-h-[300px]">
                            <AnimatePresence mode="wait">
                                <motion.pre
                                    key={activeTab}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.2 }}
                                    className="font-mono text-sm text-gray-300 leading-normal"
                                >
                                    <code>{codeSnippets[activeTab]}</code>
                                </motion.pre>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CodeDemo;
