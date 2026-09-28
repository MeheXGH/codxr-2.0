export default function Container({ children, className = "" }) {
  return (
    <div className={`container-codxr ${className}`}>
      {children}
    </div>
  );
}
