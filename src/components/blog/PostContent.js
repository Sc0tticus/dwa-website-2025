export default function PostContent({ content }) {
  return (
    <>
      {content.split("\n\n").map((para, index) => (
        <p key={index} className="mb-6 text-gray-700 leading-relaxed">
          {para}
        </p>
      ))}
    </>
  );
}
