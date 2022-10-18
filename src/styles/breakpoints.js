const size = {
  xs: '320px',
  sm: '768px',
  md: '1024px',
  lg: '1200px',
  xl: '1440px'
};

const device = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`
};

export default { size, device };
