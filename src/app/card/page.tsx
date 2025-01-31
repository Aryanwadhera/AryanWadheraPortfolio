import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function CardPage() {
  redirect('/about');
  return null; // This line won't be reached, but satisfies TypeScript
}