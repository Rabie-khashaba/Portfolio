export default function Button({ children, variant = 'primary', className = '', as: Component = 'button', ...props }) {
  const base = 'ui-button inline-flex items-center justify-center gap-2 font-medium';
  const variants = {
    primary: 'ui-button-primary',
    secondary: 'ui-button-secondary',
  };

  return (
    <Component className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
}
