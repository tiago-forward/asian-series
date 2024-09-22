// import { redirect } from "next/navigation";

// import {} from '@/auth/auth'

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
//   if (!isAuthenticated()) {
//     redirect('/auth/sign-in')
//   }

  return (
    <div>
      {children}
    </div>
  );
}
