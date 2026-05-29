export default function ThemedLogo({ variant = "dark", className = "h-12 w-12" }) {
  // We use advanced CSS isolation and blend modes to perfectly colorize the black/white logo 
  // into the theme's Saffron gradient, while making the background perfectly transparent.
  // We also added rounded-full, aspect-square, and overflow-hidden to perfectly crop out the square corners!
  
  if (variant === "dark") {
    // For Dark Backgrounds
    return (
      <div className={`relative inline-block mix-blend-screen isolation-auto aspect-square rounded-full overflow-hidden ${className}`}>
        <img src="/logo.png" alt="BS Caters Logo" className="w-full h-full object-cover scale-[1.02]" />
        <div className="absolute inset-0 bg-saffron-gradient mix-blend-multiply pointer-events-none"></div>
      </div>
    );
  }

  // For Light Backgrounds
  return (
    <div className={`relative inline-block mix-blend-multiply isolation-auto aspect-square rounded-full overflow-hidden ${className}`}>
      <img src="/logo.png" alt="BS Caters Logo" className="w-full h-full object-cover invert scale-[1.02]" />
      <div className="absolute inset-0 bg-saffron-gradient mix-blend-screen pointer-events-none opacity-90"></div>
    </div>
  );
}
