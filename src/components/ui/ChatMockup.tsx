import { ArrowRight, Check } from 'lucide-react';
import { Typography } from '@vritti/quantum-ui/Typography';
import { AI_CHAT_MESSAGES } from '@/lib/constants/content';

export function ChatMockup() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-xl flex flex-col border border-vritti">
      {/* Chat header */}
      <div className="bg-primary px-6 py-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white text-primary font-semibold flex items-center justify-center shrink-0">V</div>
        <div>
          <Typography variant="h6" className="text-white">Vritti AI</Typography>
          <Typography variant="caption" className="text-white/80">Online</Typography>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-6 flex flex-col gap-4 bg-vritti-light">
        {AI_CHAT_MESSAGES.map((msg, i) => (
          <div
            key={i}
            className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.sender === 'ai' && (
              <div className="w-8 h-8 rounded-full bg-primary text-white text-xs flex items-center justify-center shrink-0">{msg.initials}</div>
            )}
            <div
              className={`max-w-[80%] px-4 pt-3 pb-2 ${
                msg.sender === 'user'
                  ? 'bg-muted rounded-2xl rounded-tr-lg'
                  : 'bg-primary text-white rounded-2xl rounded-tl-lg'
              }`}
            >
              <Typography variant="body2" className={msg.sender === 'ai' ? 'text-white leading-relaxed' : 'leading-relaxed'}>
                {msg.text}
              </Typography>
              <div className="flex items-center gap-1 mt-1">
                {msg.sender === 'ai' && i === AI_CHAT_MESSAGES.length - 1 && (
                  <Check size={12} className="text-white/70" />
                )}
                <Typography
                  variant="caption"
                  className={msg.sender === 'user' ? 'text-vritti-secondary' : 'text-white/70'}
                >
                  {msg.time}
                </Typography>
              </div>
            </div>
            {msg.sender === 'user' && (
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-primary text-xs flex items-center justify-center shrink-0">{msg.initials}</div>
            )}
          </div>
        ))}
      </div>

      {/* Input bar */}
      <div className="border-t border-vritti px-4 py-4">
        <div className="flex items-center gap-2 px-4 h-12 rounded-full bg-vritti-light">
          <Typography variant="body2" className="flex-1 text-vritti-secondary">
            Type a message...
          </Typography>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <ArrowRight size={16} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
