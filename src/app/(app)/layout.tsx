import SideBar from '@/components/templates/sideBar'

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="grid grid-cols-6 py-4 px-4">
      <SideBar />
      {children}
    </div>
  )
}
