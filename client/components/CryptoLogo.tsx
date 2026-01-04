import { useIsSafari } from "@/hooks/use-safari";

interface CryptoLogoProps {
  name: string;
  pngUrl: string;
  svgUrl: string;
  alt: string;
  className?: string;
}

const animationMap: Record<string, string> = {
  ethereum: "animate-float-eth",
  bitcoin: "animate-float-btc",
  solana: "animate-float-sol",
  avalanche: "animate-float-avax",
};

export function CryptoLogo({ name, pngUrl, svgUrl, alt, className = "" }: CryptoLogoProps) {
  const isSafari = useIsSafari();
  const imageUrl = isSafari ? pngUrl : svgUrl;
  const animationClass = animationMap[name.toLowerCase()] || "";

  return (
    <img
      src={imageUrl}
      alt={alt}
      className={`w-8 h-8 transition-transform duration-300 hover:scale-125 ${animationClass} ${className}`}
      loading="lazy"
    />
  );
}

