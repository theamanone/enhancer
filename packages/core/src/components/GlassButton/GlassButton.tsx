import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion } from 'framer-motion';

const glassButtonVariants = cva(
  'relative inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none overflow-hidden',
  {
    variants: {
      variant: {
        default: [
          'bg-white/10 backdrop-blur-md',
          'hover:bg-white/20',
          'text-white',
          'shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]',
          'border border-white/20',
        ],
        colored: [
          'bg-gradient-to-r from-purple-500/50 to-pink-500/50 backdrop-blur-md',
          'hover:from-purple-600/50 hover:to-pink-600/50',
          'text-white',
          'shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]',
          'border border-white/20',
        ],
        dark: [
          'bg-black/30 backdrop-blur-md',
          'hover:bg-black/40',
          'text-white',
          'shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]',
          'border border-white/10',
        ],
      },
      size: {
        default: 'h-11 px-6 py-3',
        sm: 'h-9 px-4 py-2',
        lg: 'h-14 px-8 py-4 text-base',
      },
      glow: {
        true: 'animate-glow',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      glow: false,
    },
  }
);

export interface GlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof glassButtonVariants> {
  loading?: boolean;
  ripple?: boolean;
}

export const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, variant, size, glow, loading, ripple = true, children, ...props }, ref) => {
    const [coords, setCoords] = React.useState({ x: 0, y: 0 });
    const [isRippling, setIsRippling] = React.useState(false);

    const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!ripple) return;

      const rect = e.currentTarget.getBoundingClientRect();
      setCoords({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setIsRippling(true);
    };

    React.useEffect(() => {
      if (!isRippling) return;

      const timer = setTimeout(() => setIsRippling(false), 500);
      return () => clearTimeout(timer);
    }, [isRippling]);

    return (
      <motion.button
        ref={ref}
        className={glassButtonVariants({ variant, size, glow, className })}
        onMouseDown={handleMouseDown}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {loading ? (
          <span className="mr-2">
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </span>
        ) : null}
        {children}
        {isRippling && ripple && (
          <span
            className="absolute bg-white/30 animate-ripple rounded-full"
            style={{
              left: coords.x,
              top: coords.y,
              transform: 'translate(-50%, -50%)',
            }}
          />
        )}
      </motion.button>
    );
  }
);

GlassButton.displayName = 'GlassButton';
