import Aside from "./_components/Aside/Aside";

export default function RootLayoutAdmin({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-[#F5F9FC] w-screen h-screen flex">
      <Aside />
      {children}
    </section>
  );
}
