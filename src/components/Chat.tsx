// src/components/Chat.tsx
import { Send, X, MessageCircle } from "lucide-react";
import { useState, useRef, useEffect } from "react";

type Message = {
    id: string;
    text: string;
    sender: "user" | "assistant";
    timestamp: Date;
};

export function Chat() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [showStarModal, setShowStarModal] = useState(false);

    // Auto scroll to bottom when new messages arrive
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // Focus input when chat opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        let chatCount = parseInt(localStorage.getItem('chatCount') || '0');
        chatCount++;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: "user",
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue("");
        setIsTyping(true);
        setError(null);

        if (chatCount >= 6) {
            setShowStarModal(true);
            localStorage.setItem('chatCount', chatCount.toString());
            setIsTyping(false);
            return;
        }

        try {
            const history = messages.slice(-10).map(msg => ({
                role: msg.sender === "user" ? "user" as const : "assistant" as const,
                content: msg.text
            }));

            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: userMessage.text,
                    history,
                    chatCount
                }),
            });

            const text = await response.text();
            const data = JSON.parse(text);

            if (data.isLimit) {
                const baitMessage: Message = {
                    id: (Date.now() + 1).toString(),
                    text: data.message,
                    sender: "assistant",
                    timestamp: new Date(),
                };
                setMessages((prev) => [...prev, baitMessage]);
                localStorage.setItem('chatCount', chatCount.toString());
                setIsTyping(false);
                return;
            }

            if (!response.ok) throw new Error(data.error || 'Server error');

            const assistantMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: data.content || data.message,
                sender: "assistant",
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, assistantMessage]);
        } catch (err) {
            console.error('Chat error:', err);
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: "Sorry, try again later.",
                sender: "assistant",
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            localStorage.setItem('chatCount', chatCount.toString());
            setIsTyping(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <>
            {/* Floating Chat Button */}
            <button
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-6 right-6 z-40 group transition-all duration-300 ${isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
                    }`}
            >
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-2xl shadow-blue-500/50 transition-all duration-300 hover:shadow-blue-500/70 hover:scale-110">
                    {/* Pulse rings */}
                    <div className="absolute inset-0 rounded-full bg-blue-400/30 animate-ping"></div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-pulse"></div>

                    {/* Icon */}
                    <MessageCircle className="relative h-7 w-7 text-white transition-transform duration-300 group-hover:scale-110" />

                    {/* Notification badge */}
                    <div className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-red-500 border-2 border-white shadow-lg">
                        <span className="text-xs font-bold text-white">💬</span>
                    </div>
                </div>
            </button>

            {/* Chat Window */}
            <div
                className={`fixed bottom-6 right-6 z-50 flex flex-col transition-all duration-500 ${isOpen
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-0 pointer-events-none"
                    }`}
                style={{
                    width: "400px",
                    maxWidth: "calc(100vw - 48px)",
                    height: "600px",
                    maxHeight: "calc(100vh - 48px)",
                }}
            >
                {/* Chat Container */}
                <div className="flex flex-col h-full rounded-2xl border border-slate-200/80 bg-white/95 backdrop-blur-xl shadow-2xl shadow-slate-900/10 overflow-hidden">
                    {/* Header */}
                    <div className="relative flex items-center justify-between border-b border-slate-200/80 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-4">
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-chatShimmer"></div>

                        <div className="flex items-center gap-3">
                            {/* Avatar */}
                            <div className="relative">
                                <div className="h-10 w-10 rounded-full border-2 border-white/50 bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow-lg">
                                    <span className="text-lg">👨‍💻</span>
                                </div>
                                {/* Online indicator */}
                                <div className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-green-400 border-2 border-white animate-pulse"></div>
                            </div>

                            <div>
                                <h3 className="text-base font-bold text-white">Nazarii</h3>
                                <p className="text-xs text-blue-100">AI-powered answers</p>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="group/close relative flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-110 active:scale-95"
                        >
                            <X className="h-5 w-5 text-white transition-transform duration-300 group-hover/close:rotate-90" />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
                        {/* Welcome Message */}
                        {messages.length === 0 && (
                            <div className="flex flex-col items-center justify-center h-full space-y-4 text-center animate-chatFadeInUp">
                                <div className="relative">
                                    <div className="h-20 w-20 rounded-full bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 flex items-center justify-center">
                                        <span className="text-4xl">👋</span>
                                    </div>
                                    {/* Decorative particles */}
                                    <div className="absolute -top-2 -right-2 h-3 w-3 rounded-full bg-blue-400 animate-bounce"></div>
                                    <div className="absolute -bottom-1 -left-2 h-2 w-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="text-lg font-bold text-slate-900">
                                        Hey! I'm Nazarii
                                        <span className="ml-1 inline-block animate-chatWave">👋</span>
                                    </h4>
                                    <p className="text-sm text-slate-600 max-w-xs">
                                        This is my AI version - ask me anything about my work, projects, or experience!
                                    </p>
                                </div>

                                {/* Quick suggestions */}
                                <div className="flex flex-wrap gap-2 pt-2 justify-center">
                                    <button
                                        onClick={() => setInputValue("What projects have you built?")}
                                        className="group/suggestion rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-medium text-blue-700 transition-all duration-300 hover:border-blue-300 hover:bg-blue-100 hover:scale-105"
                                    >
                                        💼 Your projects
                                    </button>
                                    <button
                                        onClick={() => setInputValue("What's your tech stack?")}
                                        className="group/suggestion rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-medium text-indigo-700 transition-all duration-300 hover:border-indigo-300 hover:bg-indigo-100 hover:scale-105"
                                    >
                                        🚀 Tech stack
                                    </button>
                                    <button
                                        onClick={() => setInputValue("Tell me about your Datalex award")}
                                        className="group/suggestion rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-xs font-medium text-purple-700 transition-all duration-300 hover:border-purple-300 hover:bg-purple-100 hover:scale-105"
                                    >
                                        🏆 Awards
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Error Message */}
                        {error && (
                            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 animate-chatFadeIn">
                                <p className="text-sm text-red-700">⚠️ {error}</p>
                            </div>
                        )}

                        {/* Messages */}
                        {messages.map((message, index) => (
                            <div
                                key={message.id}
                                className={`flex animate-chatSlideIn ${message.sender === "user" ? "justify-end" : "justify-start"
                                    }`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div
                                    className={`group/message max-w-[80%] ${message.sender === "user"
                                        ? "order-2"
                                        : "order-1"
                                        }`}
                                >
                                    <div
                                        className={`relative overflow-hidden rounded-2xl px-4 py-3 shadow-sm transition-all duration-300 ${message.sender === "user"
                                            ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-br-sm"
                                            : "bg-slate-100 text-slate-800 border border-slate-200 rounded-bl-sm"
                                            }`}
                                    >
                                        {/* Shine effect for user messages */}
                                        {message.sender === "user" && (
                                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/message:translate-x-full"></div>
                                        )}

                                        <p className="relative text-sm leading-relaxed break-words whitespace-pre-wrap">
                                            {message.text}
                                        </p>
                                    </div>

                                    <p
                                        className={`mt-1 text-xs text-slate-400 ${message.sender === "user" ? "text-right" : "text-left"
                                            }`}
                                    >
                                        {message.timestamp.toLocaleTimeString([], {
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        })}
                                    </p>
                                </div>
                            </div>
                        ))}

                        {/* Typing Indicator */}
                        {isTyping && (
                            <div className="flex justify-start animate-chatFadeIn">
                                <div className="flex items-center gap-2 rounded-2xl rounded-bl-sm bg-slate-100 border border-slate-200 px-5 py-3 shadow-sm">
                                    <div className="flex gap-1">
                                        <div className="h-2 w-2 rounded-full bg-slate-400 animate-bounce"></div>
                                        <div className="h-2 w-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                                        <div className="h-2 w-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="border-t border-slate-200/80 bg-slate-50/50 px-4 py-4">
                        <div className="flex gap-2">
                            <div className="relative flex-1">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Ask me anything..."
                                    disabled={isTyping}
                                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 shadow-sm transition-all duration-300 focus:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-100 disabled:opacity-50 disabled:cursor-not-allowed"
                                />
                            </div>

                            <button
                                onClick={handleSendMessage}
                                disabled={!inputValue.trim() || isTyping}
                                className="group/send relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                            >
                                {/* Shine effect */}
                                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-500 group-hover/send:translate-x-full"></div>

                                <Send className="relative h-5 w-5 text-white transition-transform duration-300 group-hover/send:translate-x-0.5 group-hover/send:-translate-y-0.5" />
                            </button>
                        </div>

                        {/* Info text */}
                        <p className="mt-2 text-center text-xs text-slate-400">
                            Press Enter to send
                        </p>
                    </div>
                </div>
            </div>

            {showStarModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowStarModal(false)}>
                    <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl border border-slate-200 animate-in zoom-in duration-200" onClick={e => e.stopPropagation()}>
                        <div className="text-center mb-6">
                            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                                <span className="text-3xl">⭐</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Unlock More Chat!</h3>
                            <p className="text-slate-600 mb-6">Star any repo to continue:</p>
                        </div>
                        <a onClick={() => setShowStarModal(false)} href="https://github.com/NazariiKon?tab=repositories" target="_blank" rel="noopener noreferrer"
                            className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 px-6 rounded-xl text-lg text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                            ⭐ Star My Repos
                        </a>
                        <button onClick={() => setShowStarModal(false)}
                            className="mt-4 w-full text-slate-500 hover:text-slate-700 font-medium">
                            Close
                        </button>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes chatSlideIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes chatFadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes chatFadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes chatShimmer {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }

                @keyframes chatWave {
                    0%, 100% {
                        transform: rotate(0deg);
                    }
                    10%, 30% {
                        transform: rotate(14deg);
                    }
                    20% {
                        transform: rotate(-8deg);
                    }
                    40% {
                        transform: rotate(-4deg);
                    }
                    50% {
                        transform: rotate(10deg);
                    }
                }

                .animate-chatSlideIn {
                    animation: chatSlideIn 0.4s ease-out forwards;
                    opacity: 0;
                }

                .animate-chatFadeIn {
                    animation: chatFadeIn 0.4s ease-out;
                }

                .animate-chatFadeInUp {
                    animation: chatFadeInUp 0.6s ease-out;
                }

                .animate-chatShimmer {
                    animation: chatShimmer 3s linear infinite;
                }

                .animate-chatWave {
                    animation: chatWave 2.5s ease-in-out infinite;
                    transform-origin: 70% 70%;
                    display: inline-block;
                }
            `}</style>
        </>
    );
}