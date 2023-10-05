import Image from "next/image";

export default async function Home() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  console.log(data);
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h2>Products List</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
          </li>
        ))}
      </ul>
    </main>
  );
}
