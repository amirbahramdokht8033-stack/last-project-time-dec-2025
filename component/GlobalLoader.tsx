"use client";

import { useTransition, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function GlobalLoader() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isPending, startTransition] = useTransition();

  // Wrap router.push / replace to detect navigation
  const push = (url: string) => {
    setIsLoading(true);
    startTransition(() => {
      router.push(url);
    });
  };

  // when transition ends, stop loader
  useEffect(() => {
    if (!isPending) {
      setIsLoading(false);
    }
  }, [isPending]);

  // expose globally using window
  useEffect(() => {
    // make custom navigation globally
    (window as any).appNavigate = push;
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
