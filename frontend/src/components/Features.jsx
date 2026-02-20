import { motion } from 'framer-motion';
import { FileText, CheckCircle, MessageCircle, Globe, Search, Code, Send, TrendingUp } from 'lucide-react';

const features = [
    {
        icon: FileText,
        title: "Document-Based AI",
        description: "Train your chatbot using PDFs and FAQs. No manual training required.",
        color: "text-green-500",
        gradient: "from-green-500/20 to-transparent"
    },
    {
        icon: CheckCircle,
        title: "Accurate Answers (RAG)",
        description: "Responses are grounded in your data, reducing hallucinations.",
        color: "text-blue-500",
        gradient: "from-blue-500/20 to-transparent"
    },
    {
        icon: MessageCircle,
        title: "Real-Time Chat",
        description: "Streaming responses with fast, natural conversation experience.",
        color: "text-purple-500",
        gradient: "from-purple-500/20 to-transparent"
    },
    {
        icon: Globe,
        title: "Multi-Language Support",
        description: "Automatically detects and responds in the user's language.",
        color: "text-orange-500",
        gradient: "from-orange-500/20 to-transparent"
    },
    {
        icon: Send,
        title: "Telegram Bot",
        description: "Seamlessly integrate Moss Chat into Telegram with full RAG capability.",
        color: "text-sky-500",
        gradient: "from-sky-500/20 to-transparent"
    },
    {
        icon: TrendingUp,
        title: "AI Sales Assistant",
        description: "Proactively guide users through the sales funnel with personalized advice.",
        color: "text-emerald-500",
        gradient: "from-emerald-500/20 to-transparent"
    }
];

const Features = () => {
    return (
        <section className="py-24 bg-white dark:bg-black relative transition-colors duration-300">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900/5 via-white to-white dark:from-green-900/10 dark:via-black dark:to-black opacity-40 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-500 mb-4">
                        Why Developers Choose Moss
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                        Turn your documentation into an automated support agent in minutes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -8, scale: 1.02 }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-white border border-gray-200 dark:bg-white/5 dark:border-white/10 backdrop-blur-sm hover:border-green-500/50 dark:hover:border-green-500/30 dark:hover:bg-white/10 transition-all duration-300 group relative overflow-hidden shadow-lg dark:shadow-none hover:shadow-2xl hover:shadow-green-500/10"
                        >
                            <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${feature.gradient} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <motion.div
                                whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                                className="inline-block"
                            >
                                <feature.icon className={`w-12 h-12 ${feature.color} mb-6 relative z-10`} />
                            </motion.div>

                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 relative z-10 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                                {feature.title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed relative z-10">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
