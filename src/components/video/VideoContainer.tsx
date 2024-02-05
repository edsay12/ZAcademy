import { ReactNode } from "react";

function VideoContainer({ children }: { children: ReactNode }) {
  return (
    <div
      className="grid grid-cols-3 mx-auto gap-20
         "
    >
      {children}
    </div>
  );
}

export default VideoContainer;
