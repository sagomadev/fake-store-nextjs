import Image from "next/image";

export default async function Home() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  console.log(data.length);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
