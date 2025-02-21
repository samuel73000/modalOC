import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      "react-is": require.resolve("react-is")
    }
  }
});
