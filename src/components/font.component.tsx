interface NormalFontProps {
    children: React.ReactNode;
}
export function NormalFont({ children }: NormalFontProps) {
    return <span style={{ fontWeight: "normal" }}>{children}</span>;
}
