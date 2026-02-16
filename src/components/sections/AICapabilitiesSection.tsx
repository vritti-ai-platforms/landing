'use client';

import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { Typography } from '@vritti/quantum-ui/Typography';
import { ChatMockup } from '@/components/ui/ChatMockup';
import {
  AI_ACCORDION_ITEMS,
  AI_LEARNING_CARD,
} from '@/lib/constants/content';

export function AICapabilitiesSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="ai-capabilities"
      className="w-full py-20 bg-vritti-light"
    >
      <div className="mx-auto max-w-[1280px] px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <Typography variant="h2" align="center" className="border-0 pb-0 text-3xl sm:text-4xl">
            AI That Understands Context
          </Typography>
          <Typography variant="body1" align="center" className="mt-4 text-xl text-vritti-secondary">
            More than a chatbot—an intelligent agent that knows your business
          </Typography>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 animate-on-scroll">
          {/* Left: Chat mockup */}
          <ChatMockup />

          {/* Right: Accordion + Learning card */}
          <div className="flex flex-col gap-8">
            {/* Accordion */}
            <div className="flex flex-col gap-4">
              {AI_ACCORDION_ITEMS.map((item, i) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-background overflow-hidden border border-vritti"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                  >
                    <Typography variant="h6" className="text-lg">
                      {item.title}
                    </Typography>
                    {openIndex === i ? (
                      <ChevronUp size={16} className="text-muted-foreground shrink-0" />
                    ) : (
                      <ChevronDown size={16} className="text-muted-foreground shrink-0" />
                    )}
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight: openIndex === i ? '200px' : '0px',
                      opacity: openIndex === i ? 1 : 0,
                    }}
                  >
                    <Typography variant="body2" className="px-6 pb-4 leading-relaxed text-vritti-secondary">
                      {item.content}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>

            {/* Learning card */}
            <div
              className="rounded-2xl p-6 bg-primary/10"
              style={{
                borderColor: 'rgba(28, 119, 227, 0.2)',
                borderWidth: '1px',
              }}
            >
              <Typography variant="h6" className="mb-2">
                {AI_LEARNING_CARD.title}
              </Typography>
              <Typography variant="body2" className="leading-relaxed text-vritti-secondary">
                {AI_LEARNING_CARD.description}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
