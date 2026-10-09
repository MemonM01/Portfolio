// Reveal component
// used to have a fade in + slide up animation when u scroll to it
// i took the animaton out cuz i didnt like it, now it just shows stuff normaly
// children = whatever is put inside <Reveal> ... </Reveal>
// className = extra tailwind classes u can pass in from outside
export default function Reveal({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}
