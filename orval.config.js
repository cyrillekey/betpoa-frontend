module.exports = {
    betpoa: {
      output: {
        mode: 'tags-split',
        target: 'hooks/generated/index.ts',        
        client: 'react-query',
        mock: true,
      },
      input: {
        target: './spec.json',
      },
    },
  };