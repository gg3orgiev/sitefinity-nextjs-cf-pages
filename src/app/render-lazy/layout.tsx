'use client';
export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export default function Layout({
    children
}: {
    children: React.ReactNode
}) {

    return (
      <div>{children}</div>
    );
}
