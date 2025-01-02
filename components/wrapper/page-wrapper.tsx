export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <Header /> */}
      <main className="md:mt-[2rem] lg:mt-[3rem] xl:mt-[4rem] 2xl:mt-[5rem]">
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
}
