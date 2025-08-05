import { RouterProvider } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { router } from './router/router';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1 className="text-center text-3xl p-4 top-0">Rick & Morty Characters</h1>
      </div>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
