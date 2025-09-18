export default function PostHeader({ title, date }) {
  return (
    <>
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-gray-500 mb-6">{date}</p>
    </>
  );
}
