export default function merge(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
