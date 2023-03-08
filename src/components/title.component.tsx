interface TitleProps {
    children: React.ReactNode;
}
export function Title({ children }: TitleProps) {
    return (
        <h1
            className="
            sm:text-[5vw] leading-tight mb-20
            2xl:text-[3.5vw]"
        >
            {children}
        </h1>
    );
}
