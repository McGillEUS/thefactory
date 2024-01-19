interface HyperLinkProps {
    title: string;
    hyperlinkUrl: string;
  }
  
export function HyperLinker({ title, hyperlinkUrl }: HyperLinkProps) {
    return (
      
        <a href={hyperlinkUrl} target="_blank" rel="noopener noreferrer">
           {title}
        </a>
      
    );
  }