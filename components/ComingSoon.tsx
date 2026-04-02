"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, X } from "lucide-react";

type ToastConfig = {
  title: string;
  body: string;
};

export function useComingSoon() {
  const [toast, setToast] = useState<ToastConfig | null>(null);

  const show = useCallback((config: ToastConfig) => {
    setToast(config);
  }, []);

  const dismiss = useCallback(() => setToast(null), []);

  return { show, dismiss, toast };
}

const DURATION = 5000;

export function ComingSoonToast({
  toast,
  onDismiss,
}: {
  toast: ToastConfig | null;
  onDismiss: () => void;
}) {
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const remainingRef = useRef(DURATION);
  const lastActiveAt = useRef(0);

  // Start / restart the dismiss timer whenever a new toast appears
  useEffect(() => {
    if (!toast) return;
    remainingRef.current = DURATION;
    lastActiveAt.current = Date.now();
    setPaused(false);
    timerRef.current = setTimeout(onDismiss, DURATION);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [toast, onDismiss]);

  const handleMouseEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    // Save how much time is left
    remainingRef.current = Math.max(
      0,
      remainingRef.current - (Date.now() - lastActiveAt.current)
    );
    setPaused(true);
  };

  const handleMouseLeave = () => {
    lastActiveAt.current = Date.now();
    timerRef.current = setTimeout(onDismiss, remainingRef.current);
    setPaused(false);
  };

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          key={toast.title}
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="fixed bottom-6 right-6 z-[300] flex items-start gap-3 rounded-lg border border-white/10 bg-[#111] px-4 py-3.5 shadow-2xl shadow-black/60 max-w-xs w-full cursor-default"
        >
          {/* Icon */}
          <div
            className="mt-0.5 shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "rgba(233,81,68,0.15)" }}
          >
            <Clock className="w-3.5 h-3.5" style={{ color: "#E95144" }} />
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white">{toast.title}</p>
            <p className="text-xs text-white/50 mt-1 leading-relaxed">{toast.body}</p>
          </div>

          {/* Dismiss */}
          <button
            onClick={onDismiss}
            aria-label="Dismiss"
            className="shrink-0 text-white/25 hover:text-white/60 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Countdown bar — CSS animation so animationPlayState works natively */}
          <style>{`
            @keyframes cl-shrink { from { width: 100% } to { width: 0% } }
          `}</style>
          <span
            key={toast.title + "-bar"}
            className="absolute bottom-0 left-0 h-[2px] rounded-b-lg"
            style={{
              backgroundColor: "#E95144",
              opacity: 0.5,
              animation: `cl-shrink ${DURATION}ms linear forwards`,
              animationPlayState: paused ? "paused" : "running",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Pre-built messages ────────────────────────────────────────── */

export const TOASTS = {
  playground: {
    title: "Playground coming soon",
    body: "We\u2019re still building the IDE. It will launch at playground.compactlab.dev \u2014 check back soon.",
  },
  auth: {
    title: "Auth coming soon",
    body: "Sign in and account registration will be available once the platform launches. No account needed during the preview.",
  },
} as const;
