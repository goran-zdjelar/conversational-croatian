import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";
import { NavigationArrowRight } from "./navigation-icons.component";

interface AnimationProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

function DefaultTransition({ children, className, delay }: AnimationProps) {
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

export function FadeInTransition({ children, className, delay }: AnimationProps) {
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

export enum Transition {
    DEFAULT_TRANSITION = "DEFAULT_TRANSITION",
    FADE_IN = "FADE_IN",
}

interface SlideProps {
    children: React.ReactNode;
    className?: string;
    transition?: Transition;
    arrowsDelay?: number;
}

export function Slide({ children, className, transition = Transition.DEFAULT_TRANSITION, arrowsDelay }: SlideProps) {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const transitions = {
        [Transition.DEFAULT_TRANSITION]: DefaultTransition,
        [Transition.FADE_IN]: FadeInTransition,
    };

    const TransitionComponent = transitions[transition];

    return (
        (children && (
            <>
                <TransitionComponent className={className}>{children}</TransitionComponent>
                <div ref={ref}>{isInView && <NavigationArrowRight delay={arrowsDelay} />}</div>
            </>
        )) ||
        null
    );
}

interface SlideShowProps {
    children: React.ReactNode | React.ReactNode[];
}
export function SlideShow({ children }: SlideShowProps) {
    return <div>{children}</div>;
}

SlideShow.Slide = Slide;
