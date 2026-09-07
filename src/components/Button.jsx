export default function Button({ children, variant = 'primary', className = '', as: Component = 'button', ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-shell';
  const variants = {
    primary: 'bg-primary text-white hover:bg-primaryHover shadow-soft',
    secondary: 'border border-white/10 bg-transparent text-white hover:border-primary/60 hover:text-primary',
  };

  return (
    <Component className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
}
