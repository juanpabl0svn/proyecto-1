export const hiddeModal = (callback: any) => {
  const modal = document.querySelector("#modal");

  if (!modal) return;


  modal.classList.add("hidde-modal");

  setTimeout(() => {
    callback();
  }, 150);
};

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
      className={`z-50 content-center min-h-dvh fixed w-full bg-[rgba(0,0,0,.6)] ${
        className ?? ""
      }`}
      onClick={() => hiddeModal(onClick)}
    >
      <div
        id="modal"
        className="w-fit mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
