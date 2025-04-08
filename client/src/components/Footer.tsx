export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 no-print">
      <div className="container mx-auto px-4 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Vidhi Panchal. All rights reserved.</p>
      </div>
    </footer>
  );
}
