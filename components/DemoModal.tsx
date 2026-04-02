"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

/**
 * To swap in the real video, update DEMO_VIDEO_URL.
 * Supports YouTube embeds (https://www.youtube.com/embed/VIDEO_ID)
 * and direct mp4/webm URLs.
 */
const DEMO_VIDEO_URL = ""; // ← paste video URL here when ready

/**
 * Detects any YouTube URL shape and converts it to the embed format.
 * Handles:
 *   https://www.youtube.com/watch?v=ID
 *   https://youtu.be/ID
 *   https://www.youtube.com/embed/ID  (already correct)
 * Returns null if the URL is not a YouTube URL.
 */
function toYouTubeEmbedUrl(url: string): string | null {
  try {
    const u = new URL(url);
    // youtu.be/ID
    if (u.hostname === "youtu.be") {
      const id = u.pathname.slice(1);
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    // youtube.com/watch?v=ID
    if (u.hostname.includes("youtube.com") && u.pathname === "/watch") {
      const id = u.searchParams.get("v");
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    // already an embed URL
    if (u.hostname.includes("youtube.com") && u.pathname.startsWith("/embed/")) {
      return url;
    }
    return null;
  } catch {
    return null;
  }
}

interface DemoModalProps {
  open: boolean;
  onClose: () => void;
}

export default function DemoModal({ open, onClose }: DemoModalProps) {
  // Close on Escape
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, handleKey]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 pointer-events-none"
          >
            <div
              className="relative w-full max-w-4xl pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Chrome bar */}
              <div className="flex items-center justify-between px-4 py-3 rounded-t-xl border border-b-0 border-white/10 bg-[#0a0a0a]">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-white/10" />
                  <span className="w-3 h-3 rounded-full bg-white/10" />
                  <span className="w-3 h-3 rounded-full bg-white/10" />
                </div>
                <span className="text-xs font-mono text-white/25">Compact Lab — Demo</span>
                <button
                  onClick={onClose}
                  aria-label="Close demo"
                  className="text-white/30 hover:text-white/70 transition-colors p-1 rounded"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Video area */}
              <div className="relative rounded-b-xl overflow-hidden border border-white/10 bg-[#080808]" style={{ aspectRatio: "16/9" }}>
                {DEMO_VIDEO_URL ? (
                  (() => {
                    const embedUrl = toYouTubeEmbedUrl(DEMO_VIDEO_URL);
                    if (embedUrl) {
                      return (
                        <iframe
                          src={`${embedUrl}?autoplay=1&rel=0&modestbranding=1`}
                          title="Compact Lab Demo"
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                          className="absolute inset-0 w-full h-full"
                        />
                      );
                    }
                    return (
                      <video
                        src={DEMO_VIDEO_URL}
                        autoPlay
                        controls
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    );
                  })()
                ) : (
                  /* Placeholder shown until video is available */
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center border border-white/10"
                      style={{ backgroundColor: "rgba(233,81,68,0.1)" }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-7 h-7 translate-x-0.5"
                        style={{ color: "#E95144" }}
                        aria-hidden="true"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium text-white/60 mb-1">Demo video coming soon</p>
                      <p className="text-xs text-white/25 font-mono">DEMO_VIDEO_URL not yet set</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
