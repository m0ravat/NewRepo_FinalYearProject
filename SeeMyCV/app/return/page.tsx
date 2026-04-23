"use client";

import { Suspense } from "react";
import { Loader2 } from "lucide-react";
import ReturnPageContent from "./content";

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
    </div>
  );
}

export default function ReturnPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ReturnPageContent />
    </Suspense>
  );
}
