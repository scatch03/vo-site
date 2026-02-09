export function cn(styles, classNames) {
  return classNames
    .split(/\s+/)
    .filter(Boolean)
    .map((name) => styles[name] ?? name)
    .join(' ');
}
