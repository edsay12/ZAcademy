import { ReactNode } from "react";

function CommentsContainer({ children }: { children: ReactNode }) {
  return (
    <section className="bg-white antialiased">
        
      {children}
      
    </section>
  );
}

export default CommentsContainer;
