export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <Header /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
