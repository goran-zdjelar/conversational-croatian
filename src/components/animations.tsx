import { motion } from "framer-motion";

interface AnimationProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export function Cta({ children, className, delay }: AnimationProps) {
    return (
        <motion.div
            className={className}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{
                delay,
                duration: 0.8,
            }}
        >
            {children}
        </motion.div>
    );
}

export function FadeIn({ children, className, delay }: AnimationProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                delay,
                duration: 1.3,
            }}
        >
            {children}
        </motion.div>
    );
}

export function PhotoShoot({ children, className, delay }: AnimationProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                delay,
                duration: 1.3,
            }}
        >
            {children}
        </motion.div>
    );
}

function Springy({ children, className, delay }: AnimationProps) {
    return (
        <motion.div
            className={className}
            initial={{ scale: 0, opacity: 0, rotate: -30 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{
                delay,
                type: "spring",
                stiffness: 250,
                damping: 20,
            }}
        >
            {children}
        </motion.div>
    );
}

export const Animations = {
    Cta,
    FadeIn,
    Springy,
};
