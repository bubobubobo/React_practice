const mixins = {
  flexbox: (direction = 'row', align = 'center', justify = 'center') => `
    display: flex;
    flex-directon: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `,
};

export default mixins;
