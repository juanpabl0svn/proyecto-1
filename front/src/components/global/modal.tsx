export default function Modal({
  children,
  className,
  onClick,
}: {
  children: any;

  className?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}) {
  return (
    <div
      className={`content-center min-h-dvh fixed w-full bg-[rgba(0,0,0,.6)] ${className ?? ''}`}
      onClick={onClick}
    >
      <div className="w-fit mx-auto" onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
}
