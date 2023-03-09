import { useInView } from "framer-motion";
import { useRef } from "react";
import { Animations } from "./animations";
import { NavigationArrowRight } from "./navigation-icons.component";

export enum Transition {
    DEFAULT_TRANSITION = "SPRINGY",
    FADE_IN = "FADE_IN",
}

interface SlideProps {
    children: React.ReactNode;
    className?: string;
    transition?: Transition;
    hideArrows?: boolean;
    arrowsDelay?: number;
}

export function Slide({ children, className, transition = Transition.DEFAULT_TRANSITION, hideArrows, arrowsDelay }: SlideProps) {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const transitions = {
        [Transition.DEFAULT_TRANSITION]: Animations.Springy,
        [Transition.FADE_IN]: Animations.FadeIn,
    };

    const TransitionComponent = transitions[transition];

    return (
        (children && (
            <>
                <TransitionComponent className={className}>{children}</TransitionComponent>
                <div ref={ref}>{isInView && !hideArrows && <NavigationArrowRight delay={arrowsDelay} />}</div>
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
