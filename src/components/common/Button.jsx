import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const variantClasses = {
  primary:
    'bg-regulus-accent text-regulus-accent-btn-text hover:bg-regulus-accent-hover border border-transparent shadow-sm',
  secondary:
    'bg-regulus-elevated text-regulus-text border border-regulus-border-strong/45 hover:border-regulus-border-strong hover:bg-regulus-card',
  ghost:
    'bg-transparent text-regulus-muted hover:text-regulus-text hover:bg-regulus-card border border-transparent',
};

const sizeClasses = {
  sm: 'h-9 px-4 text-sm rounded-lg',
  md: 'h-11 px-5 text-sm rounded-lg',
  lg: 'h-12 px-6 text-[15px] rounded-lg',
};

export function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  onClick,
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-medium tracking-[-0.01em] theme-transition focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none select-none';
  const classes = `${base} ${variantClasses[variant] || variantClasses.primary} ${
    sizeClasses[size] || sizeClasses.md
  } ${className}`;

  if (to) {
    return (
      <motion.div
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.99 }}
        transition={{ duration: 0.15 }}
        className="inline-flex"
      >
        <Link to={to} className={classes} {...rest}>
          {children}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.99 }}
        transition={{ duration: 0.15 }}
        className={classes}
        {...rest}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={disabled ? undefined : { y: -1 }}
      whileTap={disabled ? undefined : { scale: 0.99 }}
      transition={{ duration: 0.15 }}
      className={classes}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
