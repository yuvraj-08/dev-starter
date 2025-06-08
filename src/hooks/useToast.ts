// lib/use-toast.ts
"use client";

import { toast } from "sonner";

export const useToast = () => {
  return {
    success: (msg: string) => toast.success(msg),
    error: (msg: string) => toast.error(msg),
    info: (msg: string) => toast(msg),
  };
};
