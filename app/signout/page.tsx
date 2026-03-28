"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";


export default function SignOutPage() {
    const router = useRouter();
    const [message, setMessage] = useState("Securely closing your session...");

    useEffect(() => {
        const performSignOut = async () => {
            const token = localStorage.getItem("accessToken");

            if (token) {
                try {
                    await fetch("/api/auth/signout", {
                        method: "POST",
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                } catch (err) {
                    console.error("Error signing out from server");
                }
            }

            // Clear local storage
            localStorage.removeItem("accessToken");
            localStorage.removeItem("user");

            setMessage("You have been signed out.");

            // Delay for a beautiful animated exit to login page
            setTimeout(() => {
                router.push("/");
            }, 1500);
        };

        performSignOut();
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-white">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center justify-center text-center space-y-8"
            >
                <div className="relative flex items-center justify-center w-8 h-8">
                    <motion.div
                        className="absolute inset-0 border-[1.5px] border-zinc-100 rounded-full"
                    />
                    <motion.div
                        className="absolute inset-0 border-[1.5px] border-zinc-400 rounded-full"
                        style={{
                            borderTopColor: "transparent",
                            borderRightColor: "transparent",
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                </div>

                <div className="space-y-2">
                    <motion.h1 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="text-xl font-light tracking-tight text-zinc-900 uppercase"
                    >
                        Signing out
                    </motion.h1>
                    <div className="h-4 flex items-center justify-center">
                        <motion.p 
                            key={message}
                            initial={{ opacity: 0, filter: "blur(4px)" }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
                            transition={{ duration: 0.4 }}
                            className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-medium"
                        >
                            {message}
                        </motion.p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
