export default async function NewsItemPage({ params }) {
  const { id } = await params;

  return (
    <section>
      <h1>News Item {id}</h1>
      <p>News item content</p>
    </section>
  );
}
