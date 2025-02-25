export default async function NewsDetailsLayout({ children, modal }) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
