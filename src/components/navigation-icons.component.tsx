import { motion } from "framer-motion";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

import ArrowRight from "../assets/keyboard-right.png";

interface ArrowProps {
    delay?: number;
}

export function NavigationArrowLeft({ delay }: ArrowProps) {
    return (
        <motion.div
            className="fixed right-10 bottom-10 text-6xl"
            initial={{ x: 0, rotate: -25, opacity: 0 }}
            animate={{
                rotate: 0,
                x: [0, 50, 0],
                opacity: 1,
            }}
            transition={{
                delay,
                x: {
                    repeat: 2,
                    duration: 0.4,
                },
            }}
        >
            <FiChevronsLeft />
        </motion.div>
    );
}

export function NavigationArrowRight({ delay }: ArrowProps) {
    return (
        <motion.div
            className="fixed right-10 bottom-10 text-6xl"
            initial={{ x: 0, bottom: -100, rotate: -95, opacity: 0 }}
            animate={{
                rotate: 0,
                x: [0, 50, 0],
                opacity: 0.8,
                bottom: 50,
            }}
            transition={{
                delay,
                x: {
                    repeat: 2,
                    duration: 0.4,
                },
                rotate: {
                    duration: 0.5,
                },
            }}
        >
            <img src={ArrowRight} style={{ width: "80px" }} />
        </motion.div>
    );
}
