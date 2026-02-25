"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-white">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
                <h1 className="text-[120px] font-thin tracking-tighter text-zinc-200 leading-none mb-4">
                    404
                </h1>
                <div className="space-y-2 mb-12">
                    <h2 className="text-2xl font-light text-zinc-900">
                        Page not found
                    </h2>
                    <p className="text-zinc-400 font-light max-w-sm mx-auto">
                        The resource you are looking for might have been removed
                        or is temporarily unavailable.
                    </p>
                </div>

                <Link
                    href="/"
                    className="btn-primary flex items-center justify-center group px-8"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>
            </motion.div>
        </div>
    );
}
