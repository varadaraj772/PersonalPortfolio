
function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-6 flex flex-col md:flex-row items-center justify-center text-sm">
      <div className="mb-4 md:mb-0 text-center md:text-left">
        <p className="text-gray-300">
          Copyright © {new Date().getFullYear()} Varadaraj Acharya
        </p>
      </div>
    </footer>
  );
}

export default Footer;
